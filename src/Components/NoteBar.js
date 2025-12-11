// src/components/NoteBar.js
import React from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function NoteBar({
  filter,
  onFilterChange,
  search,
  onSearchChange,
  onNewNote,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
        border: "1px solid rgba(30,64,175,0.7)",
        boxShadow: "0 22px 60px rgba(15,23,42,0.9)",
        background: "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.96))",
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 2.5 },
        mb: { xs: 3, md: 4 },
        // ensure children don't overflow due to padding
        boxSizing: "border-box",
      }}
    >
      <Grid
        container
        alignItems="center"
        spacing={{ xs: 1.5, md: 2 }}
        // allow wrapping for narrow screens
        sx={{ flexWrap: "wrap" }}
      >
        {/* SEARCH: takes remaining space, but can shrink on very small screens */}
        <Grid item xs={12} md={6} sx={{ minWidth: 0 }}>
          <TextField
            fullWidth
            placeholder="Search notes..."
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "rgba(148,163,184,0.9)" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              // ensure the input can shrink inside the grid cell
              minWidth: 0,
              "& .MuiOutlinedInput-root": {
                borderRadius: 999,
                bgcolor: "#020617",
                color: "#e5e7eb",
                "& fieldset": { borderColor: "rgba(30,64,175,0.7)" },
                "&:hover fieldset": { borderColor: "rgba(129,140,248,0.9)" },
                "&.Mui-focused fieldset": { borderColor: "#a855f7" },
              },
            }}
          />
        </Grid>

        {/* FILTER + NEW BUTTON: wrapable group */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            minWidth: 0,
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 1.25 },
              alignItems: "center",
              flexWrap: "wrap",
              // ensure group doesn't force a min width
              minWidth: 0,
            }}
          >
            {/* Toggle group: allow it to shrink and wrap */}
            <Box sx={{ minWidth: 0 }}>
              <ToggleButtonGroup
                value={filter}
                exclusive
                onChange={(_, value) => value && onFilterChange(value)}
                sx={{
                  borderRadius: 999,
                  overflow: "hidden",
                  // NOTE: keep the visual look, but don't put gradient in `bgcolor` key
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(31,41,55,0.9)",
                  "& .MuiToggleButton-root": {
                    border: "none",
                    px: 2,
                    py: 0.6,
                    fontSize: ".78rem",
                    textTransform: "none",
                    color: "rgba(209,213,219,0.9)",
                    "&.Mui-selected": {
                      color: "#6d51bdff",
                      background:
                        "linear-gradient(135deg,#c4b5fd,#a78bfa)",
                      boxShadow: "0 10px 26px rgba(167,139,250,0.85)",
                    },
                    "&:not(.Mui-selected):hover": {
                      background: "rgba(31,41,55,0.9)",
                    },
                  },
                }}
              >
                <ToggleButton value="active">Active</ToggleButton>
                <ToggleButton value="archived">Archived</ToggleButton>
                <ToggleButton value="deleted">Deleted</ToggleButton>
                <ToggleButton value="all">All</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {/* New Note button: becomes fullWidth on xs when wrapped */}
            <Box sx={{ minWidth: 0, width: { xs: "100%", md: "auto" } }}>
              <Button
                fullWidth={false}
                variant="contained"
                onClick={() => {
                  console.log("[NoteBar] + New Note clicked");
                  if (typeof onNewNote === "function") onNewNote();
                }}
                sx={{
                  borderRadius: 999,
                  px: { xs: 2, md: 3 },
                  py: 0.9,
                  fontSize: ".8rem",
                  textTransform: "none",
                  fontWeight: 600,
                  background: "linear-gradient(135deg,#c4b5fd,#a78bfa)",
                  color: "#020617",
                  boxShadow: "0 12px 32px rgba(167,139,250,0.9)",
                  "&:hover": {
                    background: "linear-gradient(135deg,#b39bff,#8b5cf6)",
                    boxShadow: "0 16px 40px rgba(167,139,250,1)",
                  },
                }}
              >
                + New Note
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
