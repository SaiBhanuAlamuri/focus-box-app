import React from "react";
import {
  Box,
  Typography,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import { items } from "../CardConfig/Cardconfig";
import AppCard from "../components/cards";

export default function FullScreen() {
  const navigate = useNavigate();
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const resolveLink = (item) => {
    if (item?.link) return item.link;
    const slug = item?.title
      ? "/" +
        item.title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
      : "/";
    return slug;
  };

  const handleOpen = (link) => {
    if (!link) return;
    navigate(link);
  };

  const firstLink = items?.[0] ? resolveLink(items[0]) : "/notes";
  const secondLink = items?.[1] ? resolveLink(items[1]) : "/tasks";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          width: "100%",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, md: 8 },
          flex: 1,
        }}
      >
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              pl: { xs: 0, sm: 2, md: 5 },
              pr: { xs: 0, md: 4 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.1,
                fontSize: { xs: "2.2rem", sm: "2.6rem", md: "3.2rem" },
                mb: 2,
                maxWidth: { xs: "100%", sm: "80%", md: "460px" },
                color: "text.primary",
              }}
            >
              Focus Panel
              <Box component="span" display="block">
                Track Things
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.85,
                maxWidth: { xs: "100%", sm: "560px" },
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.6,
                mb: 3,
                color: "text.secondary",
              }}
            >
              FocusPanel helps teams organize tasks, track progress, and
              collaborate seamlessly. Stay focused with a clean, intuitive
              workflow dashboard. Boost productivity and complete projects on
              time — every time.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                mt: 1,
                flexWrap: "wrap",
                ml: { xs: 0, sm: 0, md: 4 },
              }}
            >
              <Button
                variant="contained"
                size={isSm ? "medium" : "large"}
                onClick={() => handleOpen(firstLink)}
                sx={{
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  background: "linear-gradient(135deg,#c4b5fd,#a78bfa)",
                  color: theme.palette.primary.contrastText,
                  border: "none",
                  cursor: "pointer",
                  textTransform: "none",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 20px rgba(167,139,250,0.24)",
                  },
                }}
              >
                Get Started
              </Button>

              <Button
                variant="outlined"
                size={isSm ? "medium" : "large"}
                onClick={() => handleOpen(secondLink)}
                sx={{
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "text.primary",
                  cursor: "pointer",
                  backdropFilter: "blur(6px)",
                  textTransform: "none",
                  "&:hover": {
                    background: "rgba(255,255,255,0.04)",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              pt: { xs: 2, md: 0 },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                What We Offer
              </Typography>

              <Typography
                variant="body2"
                sx={{ opacity: 0.8, mt: 1, color: "text.secondary" }}
              >
                FocusPanel brings productivity tools together in one clean
                dashboard. Select an application below and start organizing your
                workflow with ease.
              </Typography>
            </Box>

            <Grid container spacing={3} sx={{ mt: 1 }}>
              {items.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    px: { xs: 0.5, sm: 1, md: 4 },
                  }}
                >
                  <AppCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    onOpen={() => handleOpen(resolveLink(item))}
                    sx={{
                      bgcolor: "background.paper",
                      color: "text.primary",
                      borderRadius: 2,
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "420px",
                        lg: "440px",
                      },
                      height: {
                        xs: "auto",
                        sm: "auto",
                        md: "500px",
                        lg: "420px",
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
