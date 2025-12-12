
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";


export default function TaskBar({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);




  const addTaskHandler = () => {
     if (!title.trim() || !description.trim()) {
    setErrorOpen(true);  
    return;
  }

    onAddTask(title, description);

    setTitle("");
    setDescription("");
  };
  return (
    <Grid container direction={"row"} sx={{ width: "100%", height: "auto" }}>
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          minHeight: "250px",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Stack spacing={0.5} textAlign="center">
          <Typography
            fontSize={45}
            sx={{
              background: "linear-gradient(135deg, #c4b5fd, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            Task Manager
          </Typography>

          <Typography sx={{ opacity: 0.7, fontSize: "18px", color: "#d2d2d2" }}>
            Organize your work and boost your productivity
          </Typography>
        </Stack>

        <Grid
          container
          flexDirection={"column"}
          spacing={2}
          sx={{
            width: "60%",
            p: 3,
            mt: 1,
            background: "rgba(0,0,0,0.08)",
            border: "2px solid #a78bfa",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{
                 "& .MuiOutlinedInput-root": {
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "10px",
                  color: "white",
                  backdropFilter: "blur(6px)",
                },
                "& .MuiInputLabel-root": {
                  color: "#d2d2d2",
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                },

                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#a78bfa",
                  },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Task Description"
              multiline
              minRows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "10px",
                  color: "white",
                  backdropFilter: "blur(6px)",
                },
                "& .MuiInputLabel-root": {
                  color: "#d2d2d2",
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                },

                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#a78bfa",
                  },
              }}
            />
          </Grid>

          <Grid item sx={{ width: { xs: "100%", sm: "40%", md: "20%" } }}>
            <Button
              fullWidth
              onClick={addTaskHandler}
              variant="contained"
              sx={{
                height: "45px",
                background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)",
                color: "black",
                borderRadius: "10px",
                whiteSpace: "nowrap",
                fontWeight: "600",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(189, 173, 238, 0.94)",
                  background:
                    "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)",
                },
              }}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
      </Grid>



       <Snackbar
  open={errorOpen}
  autoHideDuration={3000}
  onClose={() => setErrorOpen(false)}
  anchorOrigin={{ vertical: "top", horizontal: "right" }}
  sx={{
    mt: 6,
    mr: 2,
  }}
>
  <Alert
    onClose={() => setErrorOpen(false)}
    severity="error"
    variant="filled"
    sx={{
      width: "100%",
      background: "rgba(255, 77, 77, 0.25)", 
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 99, 99, 0.4)",
      color: "white",
      fontWeight: 600,
      boxShadow: "0 8px 20px rgba(255, 0, 0, 0.25)",
      borderRadius: "12px",
      textTransform: "none",
    }}
  >
    ❗ Please enter both Title and Description!
  </Alert>
</Snackbar>

    </Grid>
  );
}
