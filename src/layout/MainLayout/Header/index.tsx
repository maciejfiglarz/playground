import { useContext } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import AppContext from 'contexts/AppContext';
import UserSidebar from '../UserSidebar';

//assets
import { IconMenu2 } from '@tabler/icons';


const Header = () => {
    const theme = useTheme();
    const { setIsOpenNavigation, isOpenNavigation } = useContext(AppContext);

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
           
                }}
            >
                <Box
                    sx={{
                        width: 228,
                        display: 'flex',
                        [theme.breakpoints.down('md')]: {
                            width: 'auto',
                            flexDirection: 'row-reverse'
                        }
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            display: { xs: 'block', md: 'block' },
                            flexGrow: 1,
                            [theme.breakpoints.down('md')]: {
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%);'
                            },
                            
                        }}
                    >
                        <LogoSection />
                    </Box>

                    <ButtonBase
                        sx={{ borderRadius: '12px', overflow: 'hidden' }}
                    >
                        <Avatar
                            variant="rounded"
                            sx={{
                                ...theme.typography.commonAvatar,
                                ...theme.typography.mediumAvatar,
                                transition: 'all .2s ease-in-out',
                                background:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.dark.main
                                        : theme.palette.secondary.light,
                                color:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.secondary.main
                                        : theme.palette.secondary.dark,
                                '&:hover': {
                                    background:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.secondary.main
                                            : theme.palette.secondary.dark,
                                    color:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.secondary.light
                                            : theme.palette.secondary.light
                                },
                                [theme.breakpoints.up('md')]: {
                                    display: 'none'
                                }
                            }}
                            onClick={() =>
                                setIsOpenNavigation(!isOpenNavigation)
                            }
                            color="inherit"
                        >
                            <IconMenu2 stroke={1.5} size="1.3rem" />
                        </Avatar>
              
                    </ButtonBase>
                </Box>
                <Box>
                    <UserSidebar />
                </Box>
            </Box>
        </>
    );
};

export default Header;
