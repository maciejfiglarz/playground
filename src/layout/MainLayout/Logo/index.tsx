import { Link } from "react-router-dom";

// project imports
import { mainPath } from "config/theme";
import Logo from "ui-component/Logo";

// material-ui
import { ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const theme = useTheme();
  return (
    <ButtonBase disableRipple component={Link} to={mainPath}>
      <Logo  />
    </ButtonBase>
  );
};

export default LogoSection;
