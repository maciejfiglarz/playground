//project imports
import Loader from "./loaders/Content";

//material ui
import Dialog, { DialogProps } from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Props = {
  isOpen: boolean;
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode | React.ReactNode[];
  size?: DialogProps["maxWidth"];
  title?: string;
};

const Modal = ({
  isOpen,
  handleClose,
  isLoading,
  setIsLoading,
  children,
  size,
  title,
}: Props) => {
  const theme = useTheme();
  return (
    <Dialog
      PaperProps={{
        style: {
          border: "1px solid",
          borderColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : theme.palette.primary[200] + 75,
        },
      }}
      fullWidth
      onClose={handleClose}
      open={isOpen}
      maxWidth={size}
    >
      <>
        <IconButton
          onClick={handleClose}
          style={{ position: "absolute", top: 15, right: 15 }}
        >
          <CloseIcon />
        </IconButton>

        {isLoading && <Loader />}

        {title && (
          <DialogTitle
            sx={{
              textAlign: "center",
              fontSize: 25,
              fontWeight: 600,
              mb: 1,
            }}
          >
            {title}
          </DialogTitle>
        )}
        {/* <Divider /> */}
        <DialogContent>{children}</DialogContent>
      </>
    </Dialog>
  );
};

export default Modal;
