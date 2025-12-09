import { Box, Grid, Stack } from "@mui/material";

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

        <Box sx={{ width: "100%", height: "50%" }}>
          <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh" }}
          >
            <Grid container spacing={3}>
              {items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <AppCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    onOpen={() => console.log(`Opening → ${item.title}`)}
                  />
                </Grid>
              ))}
            </Grid>

            {/* </Stack> */}
          </Stack>
        </Box>
      </Box>
    </>
  );
}
