import { useContext } from "react";
import { Outlet } from "react-router-dom";

// material-ui
import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { styled, Theme } from "@mui/material/styles";

// project imports
import Header from "./Header";
import AppContext from "contexts/AppContext";
import getTheme from "theme";
// import { leftSidebarWidth } from 'config/theme';
import Login from "ui-component/auth/Login";
import Register from "ui-component/auth/Register";

interface MainStyleProps {
  theme: Theme;
  isOpen: boolean;
}

// styles
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "isOpen" })(
  ({ theme, isOpen }: MainStyleProps) => ({
    ...theme.typography.mainContent,
  })
);

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const { mode, isOpenNavigation } = useContext(AppContext);
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        {/* header */}
        <AppBar
          enableColorOnDark
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            bgcolor: theme.palette.background.default,
            transition: isOpenNavigation
              ? theme.transitions.create("width")
              : "none",
          }}
        >
          <Toolbar>
            <Header />
          </Toolbar>
        </AppBar>
        <Main theme={theme} isOpen={isOpenNavigation}>
          <Outlet />
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
