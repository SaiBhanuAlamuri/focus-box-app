import "./App.css";

import { Button, Stack, Grid, Typography } from "@mui/material";

import AppCard from "./components/cards";
import { items } from "./CardConfig/Cardconfig";

function App() {
  return (
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
  );
}

export default App;
