import {
  Box,
  Button,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Filters() {
  const [active, setActive] = useState("in-progress");
  const [search, setSearch] = useState("");

  const filters = [
    { key: "in-progress", label: "In Progress" },
    { key: "all", label: "All" },
    { key: "completed", label: "Completed" },
    { key: "deleted", label: "Deleted" },
  ];

  return (
   <Box

   spacing={2}
  sx={{
    width: "61%",
    minHeight: "100px",
    display: "flex",                
    justifyContent: "center",        
    alignItems: "center",            
    px: { xs: 2, sm: 4, md: 10, lg: 15 },
     flexDirection: "column",
     gap: 2,
    mt: 3,
    mx: "auto",
    

    background: "rgba(255,255,255,0.06)",
    borderRadius: "16px",
    border: "1.5px solid rgba(150, 130, 209, 0.67)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    backdropFilter: "blur(12px)",
  }}
>

  <Box sx={{ width: "100%", maxWidth: "1400px" }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mb: 3,
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          
          mt: 2,
        }}
      >
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "rgba(233, 233, 233, 1)" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            order: { xs: 1, sm: 1, md: 1, lg: 1 },
            width: {
              xs: "90%",
              sm: "70%",
              md: "50%",
              lg: "33%",
            },

            input: {
              color: "white",
              background: "rgba(255,255,255,0.05)",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            },

            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",

              "& fieldset": {
                borderColor: "#a78bfa",
                borderWidth: "2px",
                borderStyle: "solid",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255,255,255,0.3)",
                borderWidth: "2px",
                borderStyle: "solid",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#a78bfa",
                borderWidth: "2px",
                borderStyle: "solid",
              },
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",

            width: { xs: "100%", sm: "100%", md: "auto" },
            justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            mt: { xs: 2, sm: 3, md: 0 },

            order: { xs: 2, sm: 2, md: 1 },
            // backgroundColor:"red"
          }}
        >
          
          <IconButton
            sx={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              "&:hover": { background: "rgba(255,255,255,0.15)" },
            }}
          >
            <FilterList />
          </IconButton>
          {filters.map((item) => (
            <Button
              key={item.key}
              onClick={() => setActive(item.key)}
              sx={{
                padding: "8px 20px",
                borderRadius: "12px",
                whiteSpace: "nowrap",
                background:
                  active === item.key
                    ? "linear-gradient(135deg, #c4b5fd, #a78bfa)"
                    : "rgba(255,255,255,0.05)",
                color: active === item.key ? "#1a2332" : "white",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Stack>

      </Box>
    </Box>
  );
}
