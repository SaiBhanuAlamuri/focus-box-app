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
import { useTheme } from "@mui/material/styles";

export default function NoteBar({
  filter,
  onFilterChange,
  search,
  onSearchChange,
  onNewNote,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",

        
        backgroundColor: theme.palette.background.paper,

        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`,

        boxShadow:
          theme.palette.mode === "dark"
            ? "0 10px 30px rgba(2,6,23,0.45)"
            : "0 4px 18px rgba(0,0,0,0.08)",

        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 2.5 },
        mb: { xs: 3, md: 4 },
        transition: "all 0.25s ease",
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
                 
                  <SearchIcon sx={{ color: theme.palette.text.secondary }} />
                </InputAdornment>
              ),
            }}
            sx={{
              minWidth: 0,
              "& .MuiOutlinedInput-root": {
                borderRadius: 999,

           
                bgcolor:
                  theme.palette.mode === "dark"
                    ? theme.palette.background.default
                    : theme.palette.background.paper,

                color: theme.palette.text.primary,
                "& fieldset": { borderColor: theme.palette.divider },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.main,
                },
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

              background:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(0,0,0,0.04)",

              border: `1px solid ${theme.palette.divider}`,
              "& .MuiToggleButton-root": {
                border: "none",
                px: 1.6,
                py: 0.55,
                fontSize: ".78rem",
                textTransform: "none",
                color: theme.palette.text.secondary,

                "&.Mui-selected": {
                 
                  color: theme.palette.primary.contrastText,
                  background: theme.palette.primary.main,
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

         
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,

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
