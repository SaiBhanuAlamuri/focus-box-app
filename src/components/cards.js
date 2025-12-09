import React from "react";

import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

function AppCard({ title, description, image, onOpen }) {
  return (
    <Card
      sx={{
        width: "360px",
        height: "420px",
        padding: "30px 25px",
        borderRadius: "20px",
        textAlign: "center",
        border: "1px solid rgba(148,163,184,0.25)",
        background: "#111827",
        boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
        transition: "0.25s",
        position: "relative",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 8px 20px rgba(167,139,250,0.4)",
          borderColor: "var(--primary-color, #a78bfa)",
        },
      }}
    >
      {image && (
        <CardMedia
          component="img"
          sx={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            alignSelf: "center",
            borderRadius: "16px",
            margin: "0 auto 14px auto",
          }}
          image={image}
          alt={title}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: 600,
            mb: "6px",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#9CA3AF",
            opacity: 0.9,
            fontSize: ".9rem",
            mb: "20px",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            background: "linear-gradient(135deg,#c4b5fd,#a78bfa)",
            color: "#000",
            padding: "10px 24px",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "0.9rem",
            textTransform: "none",
            boxShadow: "0 10px 25px rgba(167,139,250,0.5)",
            transition: "0.25s",
            width: "fit-content",
            margin: "0 auto",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 14px 32px rgba(167,139,250,0.8)",
              background: "linear-gradient(135deg,#bfa9fc,#9676f8)",
            },
          }}
        >
          Details
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={onOpen}
          sx={{
            background: "linear-gradient(135deg,#c4b5fd,#a78bfa)",
            color: "#000",
            padding: "10px 24px",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "0.9rem",
            textTransform: "none",
            boxShadow: "0 10px 25px rgba(167,139,250,0.5)",
            transition: "0.25s",
            width: "fit-content",
            margin: "0 auto",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 14px 32px rgba(167,139,250,0.8)",
              background: "linear-gradient(135deg,#bfa9fc,#9676f8)",
            },
          }}
        >
          Open
        </Button>
      </CardActions>
    </Card>
  );
}
export default AppCard;
