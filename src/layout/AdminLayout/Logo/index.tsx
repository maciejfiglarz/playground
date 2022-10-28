import { Link, useNavigate } from "react-router-dom";

// project imports
import Logo from "ui-component/Logo";

// material-ui
import { ButtonBase } from "@mui/material";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {

  return (
    <ButtonBase disableRipple component={Link} to={"/"}>
      <Logo  />
    </ButtonBase>
  );
};

export default LogoSection;
