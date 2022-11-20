import React from "react";

//import projets
import { gridSpacing } from "config/theme";

// material-ui
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type MainTitleProps = {
  sx?: {};
  text: string;
};

const MainTitle = ({ text, sx }: MainTitleProps) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        mb: 4,
        ...sx,
        position: "relative",
        textAlign:"center",
        "&::before": {
          position: "absolute",
          bottom: -10,
          left: "50%",
          transform:"translateX(-50%)",
          content: '""',
          display: "block",
          height: 2,
          width: 30,
          backgroundColor :  theme.palette.mode === "dark"
          ? theme.palette.primary.light
          : theme.palette.primary.dark,
        },
      }}
      variant="h2"
    >
      {text}
    </Typography>
  );
};

export default MainTitle;
