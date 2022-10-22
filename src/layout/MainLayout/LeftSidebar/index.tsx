import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { BrowserView, MobileView } from "react-device-detect";

// project imports
import { leftSidebarWidth } from "config/theme";
import MenuList from "./MenuList";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  useMediaQuery,
  Avatar,
  ButtonBase,
  IconButton,
} from "@mui/material";
import {} from "@mui/material";

//assets
import { IconMenu2 } from "@tabler/icons";
import CloseIcon from "@mui/icons-material/Close";

// ==============================|| MAIN SIDEBAR||============================== //

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const renderDrawer = (
    <>
      <Box sx={{ display: { xs: "block", md: "none", minHeight: 40 } }}>
        <Box sx={{ display: "flex", p: 2, mx: "auto" }}>
          {/* <LogoSection /> */}
        </Box>
      </Box>

      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            // height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <MenuList />
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          {/* <MenuList />
                    <MenuCard /> */}
        </Box>
      </MobileView>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            transition: "all .2s ease-in-out",
            background:
              theme.palette.mode === "dark"
                ? theme.palette.dark.main
                : theme.palette.secondary.light,
            color:
              theme.palette.mode === "dark"
                ? theme.palette.secondary.main
                : theme.palette.secondary.dark,
            "&:hover": {
              background:
                theme.palette.mode === "dark"
                  ? theme.palette.secondary.main
                  : theme.palette.secondary.dark,
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.secondary.light
                  : theme.palette.secondary.light,
            },
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
          }}
          onClick={() => setIsOpen(!isOpen)}
          color="inherit"
        >
          <IconMenu2 stroke={1.5} size="1.3rem" />
        </Avatar>
      </ButtonBase>

      <Box
        component="nav"
        sx={{
          flexShrink: { md: 0 },
          // width: matchUpMd ? leftSidebarWidth : "auto",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          //   variant={matchUpMd ? "persistent" : "temporary"}
          anchor="left"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: leftSidebarWidth,
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              borderRight: "none",
              [theme.breakpoints.up("md")]: {
                // top: "88px",
                display: "none",
              },
            },
          }}
          ModalProps={{ keepMounted: true }}
          color="inherit"
        >
          <IconButton
            style={{ position: "absolute", right: 15, top: 15 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <CloseIcon />
          </IconButton>
          {renderDrawer}
        </Drawer>
      </Box>
    </>
  );
};

export default LeftSidebar;
