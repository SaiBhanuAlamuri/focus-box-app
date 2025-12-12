import { createTheme } from "@mui/material/styles";
export  const darktheme = createTheme({


     palette: {
    mode: "dark",
    background: {
      default: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
      paper: "#1e2735",
    },
    text: {
      primary: "#ffffff",
    },
  },


});




export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
});