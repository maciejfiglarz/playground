// material-ui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// project imports
import LogoSection from "../Logo";

//assets

const Header = () => {
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: 228,
            display: "flex",
            [theme.breakpoints.down("md")]: {
              width: "auto",
              flexDirection: "row-reverse",
            },
          }}
        >
          <Box
            component="span"
            sx={{
              display: { xs: "block", md: "block" },
              flexGrow: 1,
              [theme.breakpoints.down("md")]: {
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%);",
              },
            }}
          >
            <LogoSection />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
