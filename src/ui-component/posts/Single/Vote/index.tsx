import React from "react";

//material ui
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";

//assets
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Vote = () => {
  const theme = useTheme();
  return (
    <Box>
      <IconButton
        size="small"
        sx={{ "&:hover": { color: theme.palette.success.dark } }}
        aria-label="vote-down"
        color="default"
      >
        <KeyboardArrowUpIcon />
      </IconButton>
      <IconButton
        size="small"
        sx={{ "&:hover": { color: theme.palette.error.dark } }}
        aria-label="vote-up"
        color="default"
      >
        <KeyboardArrowDownIcon />
      </IconButton>
    </Box>
  );
};

export default Vote;
