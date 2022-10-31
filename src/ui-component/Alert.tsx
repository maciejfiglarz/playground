// material-ui
import { useTheme } from "@mui/material/styles";
import { ButtonBase, useMediaQuery } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

// ==============================|| ALERT ||============================== //

type AlertProps = {
  type: "error" | "warning" | "info" | "success";
  message: string;
  variant?: "filled" | "outlined" | "standard";
  sx?: {};
};

const Alert = ({ type, message, variant = "filled", sx }: AlertProps) => {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack sx={{ width: "100%", marginBottom: 2, ...sx }} spacing={2}>
      <MuiAlert variant={variant} severity={type}>
        {message}
      </MuiAlert>
    </Stack>
  );
};

export default Alert;
