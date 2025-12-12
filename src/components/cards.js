
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Box,
  CardActionArea,
  useTheme,
} from "@mui/material";

function AppCard({ title, description, image, onOpen, onDetails, sx = {} }) {
  const theme = useTheme();
  const primaryGradient = `linear-gradient(135deg, ${theme.palette.primary.light || "#c4b5fd"}, ${theme.palette.primary.main})`;
  const cardBg = theme.palette.background.paper;
  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 360,
        minWidth: 200,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: { xs: 2.5, sm: 3 },
        borderRadius: 2.5,
        textAlign: "center",
        border: `1px solid ${theme.palette.mode === "light" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.04)"}`,
        bgcolor: cardBg,
        boxShadow: theme.shadows[2],
        transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
        position: "relative",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: theme.shadows[6],
          borderColor: theme.palette.primary.main,
        },
        ...sx,
      }}
      elevation={0}
    >
      <CardActionArea
        onClick={onOpen}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          py: 1,
          px: 0,
        }}
        aria-label={`Open ${title}`}
      >
        {image && (
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              width: "100%",
              height: { xs: 140, sm: 160, md: 240 },
              objectFit: "cover",
              borderRadius: 2,
              mb: 1.5,
            }}
          />
        )}

        <CardContent sx={{ flexGrow: 1, px: 0, py: 0 }}>
          <Typography
            sx={{
              color: textPrimary,
              fontSize: { xs: "1.05rem", sm: "1.15rem" },
              fontWeight: 700,
              mb: 0.5,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={title}
            noWrap
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: textSecondary,
              fontSize: { xs: "0.85rem", sm: "0.95rem" },
              mt: 0.5,
            }}
            variant="body2"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          px: 0,
          pb: 1,
          pt: 2,
        }}
      >
        <Button
          size="small"
          onClick={onDetails}
          sx={{
            background: "transparent",
            color: textPrimary,
            padding: "8px 18px",
            borderRadius: 999,
            fontWeight: 600,
            textTransform: "none",
            border: `1px solid ${theme.palette.mode === "light" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.04)"}`,
            "&:hover": {
              background: theme.palette.action.hover,
            },
          }}
        >
          Details
        </Button>

        <Button
          size="small"
          onClick={onOpen}
          sx={{
            background: primaryGradient,
            color: theme.palette.getContrastText(theme.palette.primary.main),
            padding: "8px 18px",
            borderRadius: 999,
            fontWeight: 700,
            textTransform: "none",
            boxShadow: `0 10px 25px ${theme.palette.mode === "light" ? "rgba(109,40,217,0.12)" : "rgba(139,92,246,0.18)"}`,
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: theme.shadows[8],
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
