import { Box } from "@mui/material";

import Header from "../Components/Header";

export default function FullScreen() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Header />
        


        
      </Box>
    </>
  );
}
