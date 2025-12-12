import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const ThemeContext = createContext({ mode: "dark", toggleMode: () => {} });

export function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem("app_theme_mode") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("app_theme_mode", mode);
    } catch {}
  }, [mode]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  const theme = useMemo(() => {
    const palette =
      mode === "dark"
        ? {
            mode: "dark",
            primary: { main: "#a78bfa" },
            secondary: { main: "#06b6d4" },

            background: {
              default: "#0b0f14",
              paper: "#10141a",
            },

            text: {
              primary: "#e6eef8",
              secondary: "rgba(226,232,240,0.7)",
            },

            divider: "rgba(255,255,255,0.08)",
          }
        : {
            mode: "light",
            primary: { main: "#8b5cf6" },
            secondary: { main: "#06b6d4" },

            background: {
              default: "#f6f8fb",
              paper: "#ffffff",
            },

            text: {
              primary: "#0f1724",
              secondary: "rgba(17,24,39,0.6)",
            },

            divider: "rgba(0,0,0,0.12)",
          };

    return createTheme({
      palette,

      typography: {
        fontFamily: "Roboto, sans-serif",
        h1: { color: palette.text.primary },
        h2: { color: palette.text.primary },
        h3: { color: palette.text.primary },
        h4: { color: palette.text.primary },
        body1: { color: palette.text.primary },
        body2: { color: palette.text.secondary },
      },

      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundColor: palette.background.paper,
              color: palette.text.primary,
              transition: "all 0.3s ease",
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              backgroundColor: palette.background.paper,
              color: palette.text.primary,
              transition: "all 0.25s ease",
              border: `1px solid ${palette.divider}`,
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              transition: "all 0.25s ease",
            },
          },
        },
      },

      custom: {
        gradients: {
          dark: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
          light: "linear-gradient(135deg, #e2e5f0 0%, #f8f9fb 100%)",
        },
      },
    });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useCustomTheme() {
  return useContext(ThemeContext);
}