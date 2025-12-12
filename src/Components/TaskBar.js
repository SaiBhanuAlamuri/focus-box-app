import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useTheme as useMUITheme } from "@mui/material/styles";

export default function TaskBar({ onAddTask }) {
  const theme = useMUITheme();
  const isDark = theme.palette.mode === "dark";

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
    <Grid container direction="row" sx={{ width: "100%", height: "auto" }}>
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

          <Typography
            sx={{
              opacity: 0.8,
              fontSize: "18px",
              color: isDark ? "#d2d2d2" : theme.palette.text.secondary,
            }}
          >
            Organize your work and boost your productivity
          </Typography>
        </Stack>

        <Grid
          container
          flexDirection="column"
          spacing={2}
          sx={{
            width: { xs: "90%", sm: "70%", md: "60%" },
            p: 3,
            mt: 1,
            background: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)",
            border: `2px solid ${
              isDark ? "#a78bfa" : "rgba(100, 62, 199, 0.35)"
            }`,
            borderRadius: "20px",
            boxShadow: isDark
              ? "0 8px 32px rgba(0,0,0,0.25)"
              : "0 6px 20px rgba(0,0,0,0.12)",
            backdropFilter: "blur(6px)",
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
                  background: isDark
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(0,0,0,0.04)",
                  borderRadius: "10px",
                  color: theme.palette.text.primary,
                  backdropFilter: "blur(6px)",
                },
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.secondary,
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: theme.palette.primary.main,
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: theme.palette.primary.main,
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
                  background: isDark
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(0,0,0,0.04)",
                  borderRadius: "10px",
                  color: theme.palette.text.primary,
                },
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.secondary,
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: theme.palette.primary.main,
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: theme.palette.primary.main,
                  },
              }}
            />
          </Grid>

          <Grid item sx={{ width: { xs: "100%", sm: "40%", md: "25%" } }}>
            <Button
              fullWidth
              onClick={addTaskHandler}
              variant="contained"
              sx={{
                height: "45px",
                background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                color: theme.palette.getContrastText(
                  theme.palette.primary.main
                ),
                borderRadius: "10px",
                whiteSpace: "nowrap",
                fontWeight: 600,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(167,139,250,0.45)",
                },
                transition: "all 0.25s ease",
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
        sx={{ mt: 6, mr: 2 }}
      >
        <Alert
          onClose={() => setErrorOpen(false)}
          severity="error"
          variant="filled"
          sx={{
            background: isDark
              ? "rgba(255, 77, 77, 0.25)"
              : "rgba(255, 77, 77, 0.9)",
            backdropFilter: "blur(10px)",
            border: isDark
              ? "1px solid rgba(255, 99, 99, 0.4)"
              : "1px solid rgba(255, 50, 50, 0.6)",
            color: "white",
            fontWeight: 600,
            borderRadius: "12px",
          }}
        >
          ❗ Please enter both Title and Description!
        </Alert>
      </Snackbar>
    </Grid>
  );
}
