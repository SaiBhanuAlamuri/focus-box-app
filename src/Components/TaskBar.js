import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Grid,
} from "@mui/material";

export default function TaskBar() {
  return (
    <Grid container direction={"row"} sx={{ width: "100%", height: "auto" }} >
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          minHeight: "250px",
          height: "auto",
          // backgroundColor: "blue",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          display: "flex",
        }}
      >
        <Stack spacing={0.5} textAlign="center">
          <Typography
            variant="h3"
            fontSize={45}
            sx={{
              background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 700,
            }}
          >
            Task Manager
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.7,
              fontSize: "18px",
              // lineHeight: 1.4,
              color: "#d2d2d2",
              fontWeight: "500",
            }}
          >
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
            backdropFilter: "blur(10px)",

            border: "2px solid #a78bfa",
            borderRadius: "20px",

            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",

            transition: "transform 0.9s ease, box-shadow 0.9s ease",

            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 12px 40px rgba(167, 139, 250, 0.3)",
            },
          }}
        >
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Task Title"
              inputProps={{ maxLength: 100 }}
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

          {/* Buttons */}

          <Grid
            item
            sx={{
              width: {
                xs: "100%",
                sm: "40%",
                md: "20%",
                lg: "12%",
              },
            }}
          >
            <Button
              fullWidth
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
    </Grid>



  );
}
