import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { styled, Theme } from '@mui/material/styles';

// project imports
import Header from './Header';
import AppContext from 'contexts/AppContext';
import getTheme from 'theme';
// import { leftSidebarWidth } from 'config/theme';
import Login from 'ui-component/auth/Login';
import Register from 'ui-component/auth/Register';

interface MainStyleProps {
    theme: Theme;
    isOpen: boolean;
}

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'isOpen' })(
    ({ theme, isOpen }: MainStyleProps) => ({
        ...theme.typography.mainContent
        // ...(isOpen && {
        //     borderBottomLeftRadius: 0,
        //     borderBottomRightRadius: 0,
        //     transition: theme.transitions.create('margin', {
        //         easing: theme.transitions.easing.sharp,
        //         duration: theme.transitions.duration.leavingScreen
        //     }),
        //     [theme.breakpoints.up('md')]: {
        //         marginLeft: leftSidebarWidth + 10,
        //         width: `calc(100% - ${leftSidebarWidth + 20}px)`
        //     },
        //     [theme.breakpoints.down('md')]: {
        //         marginLeft: '20px',
        //         width: `calc(100% - ${leftSidebarWidth}px)`,
        //         padding: '16px'
        //     },
        //     [theme.breakpoints.down('sm')]: {
        //         marginLeft: '10px',
        //         width: `calc(100% - ${leftSidebarWidth}px)`,
        //         padding: '16px',
        //         marginRight: '10px'
        //     }
        // }),
        // ...(!isOpen && {
        //     transition: theme.transitions.create('margin', {
        //         easing: theme.transitions.easing.easeOut,
        //         duration: theme.transitions.duration.enteringScreen
        //     }),
        //     marginLeft: 0,
        //     borderBottomLeftRadius: 0,
        //     borderBottomRightRadius: 0,
        //     // width: `calc(100% - ${leftSidebarWidth}px)`,
        //     width: `calc(100% - ${20}px)`,
        //     [theme.breakpoints.down('md')]: {
        //         marginLeft: '20px'
        //     },
        //     [theme.breakpoints.down('sm')]: {
        //         marginLeft: '10px'
        //     }
        // })
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
                            ? theme.transitions.create('width')
                            : 'none'
                    }}
                >
                    <Toolbar>
                        <Header />
                    </Toolbar>
                </AppBar>
                {/* <Sidebar /> */}
                <Main theme={theme} isOpen={isOpenNavigation}>
                    <Outlet />
                </Main>
            </Box>
            {/* <Login />
            <Register /> */}
        </ThemeProvider>
    );
};

export default MainLayout;
