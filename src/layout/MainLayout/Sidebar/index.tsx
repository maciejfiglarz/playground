import { useContext } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import { leftSidebarWidth } from 'config/theme';
import AppContext from 'contexts/AppContext';
import MenuList from './MenuList';
import LogoSection from '../LogoSection';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// ==============================|| MAIN SIDEBAR||============================== //

const Sidebar = () => {
    const { isOpenNavigation, setIsOpenNavigation } = useContext(AppContext);
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const renderDrawer = (
        <>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                    <LogoSection />
                </Box>
            </Box>

            <BrowserView>
                <PerfectScrollbar
                    component="div"
                    style={{
                        // height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        paddingLeft: '16px',
                        paddingRight: '16px'
                    }}
                >
                    <MenuList />
                </PerfectScrollbar>
            </BrowserView>
            <MobileView>
                <Box sx={{ px: 2 }}>
                    {/* <MenuList />
                    <MenuCard /> */}
                    mob
                </Box>
            </MobileView>
        </>
    );

    const container =
        window !== undefined ? () => window.document.body : undefined;

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { md: 0 },
                width: matchUpMd ? leftSidebarWidth : 'auto'
            }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={isOpenNavigation}
                onClose={() => setIsOpenNavigation(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: leftSidebarWidth,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {renderDrawer}
            </Drawer>
        </Box>
    );
};

export default Sidebar;
