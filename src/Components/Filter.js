
import React from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme as useMUITheme } from "@mui/material/styles";

export default function Filters({
  activeFilter = "in-progress",
  onFilterChange = () => {},
  searchValue = "",
  onSearchChange = () => {},
}) {
  const theme = useMUITheme();
  const isDark = theme.palette.mode === "dark";
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const filters = [
    { key: "in-progress", label: "In Progress" },
    { key: "all", label: "All" },
    { key: "completed", label: "Completed" },
    { key: "deleted", label: "Deleted" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 6, lg: 8},
        mt: 3,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "85%", lg: "70%" },
          background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
          borderRadius: 2,
          border: `1.5px solid ${
            isDark ? "rgba(150,130,209,0.25)" : "rgba(150,130,209,0.18)"
          }`,
          boxShadow: isDark ? "0 8px 25px rgba(0,0,0,0.6)" : "0 6px 18px rgba(0,0,0,0.06)",
          backdropFilter: "blur(8px)",
          px: { xs: 2, sm: 3 },
          py: { xs: 2.5, sm: 3 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Search */}
          <Box sx={{ width: { xs: "100%", md: "55%", lg: "45%" } }}>
            <TextField
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search tasks..."
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: theme.palette.text.secondary }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                },
                "& .MuiInputBase-input": {
                  color: theme.palette.text.primary,
                },
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.secondary,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDark ? "rgba(167,139,250,0.12)" : "rgba(167,139,250,0.18)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main,
                },
              }}
            />
          </Box>

       
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: { xs: "100%", md: "auto" },
              justifyContent: { xs: "center", md: "flex-end" },
              mt: { xs: 1.5, md: 0 },
              flexWrap: "wrap",
            }}
          >
            <IconButton
              aria-label="filters"
              sx={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06)"}`,
                color: theme.palette.text.primary,
                "&:hover": {
                  background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                },
              }}
            >
              <FilterList />
            </IconButton>

            {filters.map((item) => {
              const active = activeFilter === item.key;
              return (
                <Button
                  key={item.key}
                  onClick={() => onFilterChange(item.key)}
                  sx={{
                    padding: "8px 16px",
                    borderRadius: 2,
                    whiteSpace: "nowrap",
                    minWidth: 92,
                    color: active ? theme.palette.getContrastText(theme.palette.primary.main) : theme.palette.text.primary,
                    background: active
                      ? `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`
                      : isDark
                      ? "rgba(255,255,255,0.02)"
                      : "rgba(0,0,0,0.02)",
                    border: active ? "none" : `1px solid ${isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06)"}`,
                    boxShadow: active ? (isDark ? "0 8px 20px rgba(167,139,250,0.12)" : "0 6px 16px rgba(167,139,250,0.08)") : "none",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: active ? theme.shadows[6] : theme.shadows[1],
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
