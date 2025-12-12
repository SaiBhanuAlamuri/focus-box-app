import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useCustomTheme } from "../Theme/themeConfig";

export default function NavActions() {
  const theme = useTheme();
  const { mode, toggleMode } = useCustomTheme();

  const isDark = mode === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1, sm: 1.5 },
      }}
    >
 

     
      <Button
        variant="text"
        sx={(t) => ({
          fontWeight: 500,
          fontSize: ".92rem",
          px: "1.4rem",
          py: ".55rem",
          borderRadius: "8px",
          color: t.palette.text.primary,
          border: `1px solid ${t.palette.primary.main}40`,
          textTransform: "none",
          transition: "0.25s ease",

          "&:hover": {
            transform: "translateY(-2px)",
            background: t.palette.action.hover,
            boxShadow: t.shadows[3],
          },
        })}
      >
        Log in
      </Button>

    
      <Button
        sx={(t) => ({
          fontWeight: 600,
          fontSize: ".92rem",
          px: "1.4rem",
          py: ".55rem",
          borderRadius: "8px",
          textTransform: "none",
          color: t.palette.getContrastText(t.palette.primary.main),
          background: `linear-gradient(135deg, ${t.palette.primary.main}, ${t.palette.primary.light})`,
          transition: "0.25s ease",

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: t.shadows[6],
            background: `linear-gradient(135deg, ${t.palette.primary.light}, ${t.palette.primary.main})`,
          },
        })}
      >
        Contact us
      </Button>
    </Box>
  );
}
