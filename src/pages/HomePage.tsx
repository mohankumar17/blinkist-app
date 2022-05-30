import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <Stack spacing={2} direction="column" width="400px">
      <Typography variant="h6">Hi, Welcome to Bliklist.</Typography>

      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{
          backgroundColor: "#2CE080",
          color: "#03314B",
          textTransform: "none",
        }}
      >
        <Typography variant="subtitle2">Go to My Library</Typography>
      </Button>
    </Stack>
  );
}

export default HomePage;
