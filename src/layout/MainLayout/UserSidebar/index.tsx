import { useState, useRef, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

//project imports
import { borderRadius } from 'config/theme';
import AppContext from 'contexts/AppContext';
import Logo from 'ui-component/Logo';
import { useAppSelector } from 'store';
import { logout } from 'store/acccoutSlice';
import { useAppDispatch } from 'store';
import Navigation from './MenuList';

//material ui
import Drawer from '@mui/material/Drawer';
import {
    IconButton,
    Theme,
    Chip,
    Avatar,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Button,
    Box
    // ButtonBase
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

//assets
import { IconLogout} from '@tabler/icons';
import UserImage from 'assets/images/users/user-round.svg';
import SettingsIcon from '@mui/icons-material/Settings';

// styles
const Header = styled('div')(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

const UserSidebar = () => {
    // const navigate = useNavigate();=
    const { mode, setMode, setAuthModal } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const anchorRef = useRef(null);
    const accountState = useAppSelector((state) => state.account);
    const dispatch = useAppDispatch();

    const handleMode = (
        event: React.MouseEvent<HTMLElement>,
        newMode: 'light' | 'dark'
    ) => {
        if (newMode !== null) {
            setMode(newMode);
            //   setLocalStorage("mode", newMode);
        }
    };

    const handleSetAuthModal = (type: 'login' | 'register') => {
        setAuthModal(type);
    };

    console.log('accountState', accountState);

    return (
        <>
            <Chip
                sx={{
                    height: '48px',
                    alignItems: 'center',
                    borderRadius: '27px',
                    transition: 'all .2s ease-in-out',
                    borderColor:
                        theme.palette.mode === 'dark'
                            ? theme.palette.dark.main
                            : theme.palette.primary.light,
                    backgroundColor:
                        theme.palette.mode === 'dark'
                            ? theme.palette.dark.main
                            : theme.palette.primary.light,
                    '&[aria-controls="menu-list-grow"], &:hover': {
                        borderColor: theme.palette.primary.main,
                        background: `${theme.palette.primary.main}!important`,
                        color: theme.palette.primary.light,
                        '& svg': {
                            stroke: theme.palette.primary.light
                        }
                    },
                    '& .MuiChip-label': {
                        lineHeight: 0,
                        paddingRight: 0
                    }
                }}
                icon={
                    <>
                        <Avatar
                            src={UserImage}
                            sx={{
                                ...theme.typography.mediumAvatar,
                                margin: '8px 0 8px 8px !important',
                                cursor: 'pointer'
                            }}
                            ref={anchorRef}
                            aria-haspopup="true"
                            color="inherit"
                        />
                        <SettingsIcon
                            style={{ marginLeft: 10, fontSize: 20 }}
                        />
                    </>
                }
                onClick={() => setIsOpen(true)}
            />

            <Drawer
                anchor={'right'}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                PaperProps={{ style: { padding: 15 } }}
            >
                <IconButton
                    style={{ position: 'absolute', left: 15, right: 0 }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <CloseIcon />
                </IconButton>
                <Header>
                    <Box sx={{ margin: '25px auto' }}>
                        <Logo />
                    </Box>
                </Header>

                {/* <Divider /> */}
                {accountState.isLogged ? (
                    // <ButtonBase sx={{ width: '100%', justifyContent: 'start' }}>
                    //     <Avatar
                    //         src={UserImage}
                    //         sx={{
                    //             ...theme.typography.mediumAvatar,
                    //             margin: '8px 0 8px 8px !important',
                    //             cursor: 'pointer'
                    //         }}
                    //         aria-haspopup="true"
                    //         color="inherit"
                    //     />
                    //     <Typography style={{ marginLeft: 10 }} variant="h4">
                    //         {accountState.loggedUser?.name}
                    //     </Typography>
                    // </ButtonBase>
                    <></>
                ) : (
                    <>
                        <Button
                            onClick={() => handleSetAuthModal('login')}
                            style={{ marginBottom: 15 }}
                            variant="contained"
                        >
                            Zaloguj się
                        </Button>
                        <Button
                            onClick={() => handleSetAuthModal('register')}
                            variant="outlined"
                        >
                            Załóż konto
                        </Button>
                    </>
                )}
                <Divider sx={{ margin: '25px 0' }} />

                <Navigation  />

                <List
                    component="nav"
                    sx={{
                        width: '100%',
                        maxWidth: 350,
                        minWidth: 300,
                        // backgroundColor: theme.palette.background.paper,
                        borderRadius: '10px',
                        [theme.breakpoints.down('md')]: {
                            minWidth: '100%'
                        },
                        '& .MuiListItemButton-root': {
                            // mt: 0.5
                        }
                    }}
                >
                    {accountState.isLogged && (
                        <ListItemButton
                            component="a"
                            href="/dodaj"
                            sx={{
                                borderRadius: `${borderRadius}px`
                                // padding: 2
                                // backgroundColor: theme.palette.background.paper,
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 35 }}>
                                <Avatar
                                    src={UserImage}
                                    sx={{
                                        ...theme.typography.smallAvatar,
                                        // margin: '8px 0 8px 8px !important',
                                        cursor: 'pointer'
                                    }}
                                    aria-haspopup="true"
                                    color="inherit"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="body2">
                                        {' '}
                                        {accountState.loggedUser?.name}
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    )}

                    {accountState.isLogged && (
                        <ListItemButton
                            component="div"
                            sx={{
                                borderRadius: `${borderRadius}px`
                                // padding: 2
                                // backgroundColor: theme.palette.background.paper,
                            }}
                            onClick={() => dispatch(logout())}
                        >
                            <ListItemIcon sx={{ minWidth: 35 }}>
                                <IconLogout stroke={1.5} size="20" />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="body2">
                                        Wyloguj
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    )}
                </List>
                <Divider sx={{ margin: '35px 0' }} />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 15,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 'calc(100% - 30px)',
                        '& > *': {
                            // m: 1
                        }
                    }}
                >
                    <ToggleButtonGroup
                        style={{ width: '100%' }}
                        value={mode}
                        exclusive
                        onChange={handleMode}
                        fullWidth
                    >
                        <ToggleButton value="light" aria-label="left aligned">
                            <LightModeIcon />
                        </ToggleButton>
                        <ToggleButton value="dark" aria-label="right aligned">
                            <NightlightRoundIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Box style={{ marginTop: 20, fontSize: 15 }}>
                        © 2022 Portal, Inc. All rights reserved
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default UserSidebar;
