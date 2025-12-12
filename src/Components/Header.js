
import React from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavActions from "./NavRight";
import ThemeToggle from "./ThemeToggle";
import { items } from "../Utlis/HeaderData";

export default function Header() {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [open, setOpen] = React.useState(false);

  const handleNav = (label) => {
    
    console.log("navigate to:", label);
    setOpen(false);
  };

  const toggleDrawer = (next = null) => (ev) => {
    if (ev && ev.type === "keydown" && (ev.key === "Tab" || ev.key === "Shift")) return;
    setOpen(next ?? !open);
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          width: "100%",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1, sm: 1.25 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "transparent",
        }}
      >
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, minWidth: 0 }}>
         
          {!mdUp && (
            <IconButton
              edge="start"
              onClick={toggleDrawer(true)}
              aria-label="open menu"
              size="small"
              sx={{ mr: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          )}

        
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              px: 1.25,
              py: 0.5,
              borderRadius: 2,
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(109,40,217,0.06)"
                  : "rgba(139,92,246,0.06)",
              border: "1px solid",
              borderColor:
                theme.palette.mode === "light"
                  ? "rgba(109,40,217,0.08)"
                  : "rgba(255,255,255,0.04)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                display: "grid",
                placeItems: "center",
                borderRadius: 1,
                background: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
                color: "#fff",
                fontSize: 18,
                lineHeight: 1,
              }}
              aria-hidden
            >
              ⚡
            </Box>

            <Typography
              noWrap
              sx={{
                fontWeight: 700,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                color: "text.primary",
              }}
            >
              FocusPanel
            </Typography>
          </Box>

     
          {mdUp && (
            <Stack direction="row" spacing={2} sx={{ ml: 2 }}>
              {items.map((label, i) => (
                <Typography
                  key={i}
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    color: "text.secondary",
                    transition: "color 0.15s ease",
                    "&:hover": { color: "text.primary" },
                    fontSize: "0.95rem",
                  }}
                  role="link"
                  tabIndex={0}
                  onClick={() => handleNav(label)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleNav(label);
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Stack>
          )}
        </Box>

        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      
          {smUp ? (
            <>
              <NavActions />
              <ThemeToggle />
            </>
          ) : (
            
            <ThemeToggle />
          )}
        </Box>
      </Box>

     
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: { xs: 260, sm: 320 },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.default",
            px: 2,
            pt: 2,
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 1,
                  background: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
                  color: "#fff",
                }}
                aria-hidden
              >
                ⚡
              </Box>
              <Typography sx={{ fontWeight: 700 }}>FocusPanel</Typography>
            </Box>

            <IconButton onClick={toggleDrawer(false)} aria-label="close drawer" size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 1 }} />

          <List sx={{ flex: 1 }}>
            {items.map((label, i) => (
              <ListItemButton key={i} onClick={() => handleNav(label)}>
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </List>

          <Divider sx={{ mt: 1, mb: 1 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            <NavActions />
            <ThemeToggle />
          </Box>

          <Box sx={{ height: 24 }} />
        </Box>
      </Drawer>
    </>
  );
}
