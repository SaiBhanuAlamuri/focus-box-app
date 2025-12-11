import { Box, Grid, Stack, Typography } from "@mui/material";

import Header from "../components/Header";
import { items } from "../CardConfig/Cardconfig";
import AppCard from "../components/cards";

export default function FullScreen() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "40px",
              color: "white",
            }}
          >
            {/* Title */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.1,
                fontSize: { xs: "2.8rem", md: "4rem" }, 
                mb: 2,
              }}
            >
              Focus Panel <br /> Track Things
            </Typography>

            
            <Typography
              variant="body1"
              sx={{
                opacity: 0.8,
                maxWidth: "450px",
                fontSize: "1.05rem",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              FocusPanel helps teams organize tasks, track progress, and
              collaborate seamlessly. Stay focused with a clean, intuitive
              workflow dashboard. Boost productivity and complete projects on
              time — every time.
            </Typography>

            
            <Box sx={{ display: "flex", gap: 2,marginLeft:"100px" }}>
              <Box
                component="button"
                sx={{
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  background: "linear-gradient(135deg,#c4b5fd,#a78bfa)",
                  color: "#1a2332",
                  border: "none",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 20px rgba(167,139,250,0.4)",
                  },
                }}
              >
                Get Started
              </Box>

              <Box
                component="button"
                sx={{
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "white",
                  cursor: "pointer",
                  backdropFilter: "blur(6px)",
                  "&:hover": {
                    background: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                Learn More
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              overflow: "visible",
            }}
          >
            <Box sx={{ color: "white", mb: 2 }}>
              <Typography variant="h4" fontWeight={600}>
                What We Offer
              </Typography>

              <Typography variant="body1" sx={{ opacity: 0.7, mt: 1 }}>
                FocusPanel brings productivity tools together in one clean
                dashboard. Select an application below and start organizing your
                workflow with ease.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                overflowX: "auto",
                overflowY: "hidden",
                paddingY: 1,
                alignItems: "center",
              }}
            >
              {items.map((item, index) => (
                <AppCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  sx={{ width: 200 }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
