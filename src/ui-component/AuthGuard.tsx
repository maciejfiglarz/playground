import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

//project imports
import Modal from "./Modal";

//material ui
import { Typography, Box } from "@mui/material";
import { Button } from "@mui/material";
import AppContext from "contexts/AppContext";

const ModalGuard = () => {
  const { setIsGuardModal, isGuardModal } = useContext(AppContext);

  const handleOnClick = () => {
    setIsGuardModal(false);
  };

  return (
    <Modal
      size="xs"
      isOpen={isGuardModal}
      handleClose={() => setIsGuardModal(false)}
    >
      <Box sx={{ p: 1 }}>
        <Typography
          sx={{ fontSize: 19, textAlign: "center", fontWeight: 500 }}
          variant="h2"
        >
          Dołącz do nas
        </Typography>
        <Typography sx={{ mt: 4, fontSize: 14 }} component="p">
          Aby skorzystać z wszystkich funkcji musisz posiadać konto w naszym
          serwisie.
        </Typography>

        <Button
          component={Link}
          to="/login"
          sx={{ mt: 5, mb: 2 }}
          variant="contained"
          fullWidth
          onClick={handleOnClick}
        >
          Zaloguj się
        </Button>
        <Button
          component={Link}
          to="/register"
          variant="outlined"
          fullWidth
          onClick={handleOnClick}
        >
          Załóż konto
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalGuard;
