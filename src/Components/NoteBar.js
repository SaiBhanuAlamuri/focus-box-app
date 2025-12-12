
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
        border: "1px solid rgba(30,64,175,0.08)",
        boxShadow: "0 10px 30px rgba(2,6,23,0.45)",
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.96))",
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 2.5 },
        mb: { xs: 3, md: 4 },
      }}
    >
      <Grid container alignItems="center" justifyContent="center" spacing={10}>
       
        <Grid item xs={12} md={8} lg={9} sx={{ minWidth: 0 }}>
          
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
              minWidth: 0,
              "& .MuiOutlinedInput-root": {
                borderRadius: 999,
                bgcolor: "#020617",
                color: "#e5e7eb",
                "& fieldset": { borderColor: "rgba(30,64,175,0.12)" },
                "&:hover fieldset": { borderColor: "rgba(129,140,248,0.25)" },
                "&.Mui-focused fieldset": { borderColor: "#a855f7" },
              },
            }}
          />
        </Grid>

       
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{
            minWidth: 0,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(_, v) => v && onFilterChange(v)}
            sx={{
              borderRadius: 999,
              overflow: "hidden",
              background: "rgba(255,255,255,0.01)",
              border: "1px solid rgba(31,41,55,0.06)",
              "& .MuiToggleButton-root": {
                border: "none",
                px: 1.6,
                py: 0.55,
                fontSize: ".78rem",
                textTransform: "none",
                color: "rgba(209,213,219,0.95)",
                "&.Mui-selected": {
                  color: "#3b0cae",
                  background: "linear-gradient(135deg,#c4b5fd,#a78bfa)",
                },
              },
            }}
          >
            <ToggleButton value="active">Active</ToggleButton>
            <ToggleButton value="archived">Archived</ToggleButton>
            <ToggleButton value="deleted">Deleted</ToggleButton>
            <ToggleButton value="all">All</ToggleButton>
          </ToggleButtonGroup>

          <Button
            onClick={() => typeof onNewNote === "function" && onNewNote()}
            variant="contained"
            sx={{
              borderRadius: 999,
              px: { xs: 2.2, md: 3 },
              py: 0.75,
              fontSize: ".85rem",
              textTransform: "none",
              fontWeight: 600,
              background: "linear-gradient(135deg,#c4b5fd,#a78bfa)",
              color: "#020617",
              whiteSpace: "nowrap",
              minWidth: 0,
            }}
          >
            + New Note
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
