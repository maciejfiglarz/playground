import React, { useContext } from 'react';

//project imports
import Logo from 'ui-component/Logo';
import AppContext from 'contexts/AppContext';

//material ui
import {
    Box,
    Button,
    Stack,
    Divider,
    Grid,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Modal from 'ui-component/Modal';

// assets
import google from 'assets/icons/social-google.svg';

type Props = {
    children: React.ReactNode | React.ReactNode[];
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isLogo?: boolean;
    title?: string;
    type: string;
    renderBottom?: React.ReactNode;
};

const AuthWrapper = ({
    children,
    isLoading,
    setIsLoading,
    isLogo = false,
    title,
    type,
    renderBottom
}: Props) => {
    const { authModal, setAuthModal } = useContext(AppContext);
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClose = () => {
        setAuthModal(null);
    };

    return (
        <Modal
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isOpen={authModal === type ? true : false}
            handleClose={handleClose}
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={2}
            >
                <Grid item xs={12}>
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                        m={2}
                    >
                        {isLogo && <Logo />}

                        <Grid item>
                            <Stack
                                alignItems="center"
                                justifyContent="center"
                                spacing={1}
                            >
                                <Typography
                                    color={theme.palette.secondary.main}
                                    gutterBottom
                                    variant={matchDownSM ? 'h3' : 'h2'}
                                >
                                    {title}
                                </Typography>
                            </Stack>
                        </Grid>
                        <Button
                            disableElevation
                            fullWidth
                            // onClick={googleHandler}
                            size="large"
                            variant="outlined"
                            sx={{
                                color: 'grey.700',
                                backgroundColor:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.dark.main
                                        : theme.palette.grey[50],
                                borderColor:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.dark.light + 20
                                        : theme.palette.grey[100]
                            }}
                        >
                            <Box
                                sx={{
                                    mr: { xs: 1, sm: 2, width: 20 },
                                    mt: 0.5
                                }}
                            >
                                <img
                                    src={google}
                                    alt="google"
                                    width={16}
                                    height={16}
                                    // style={{ marginRight: matchDownSM ? 8 : 16 }}
                                />
                            </Box>
                            Połącz się z Google
                        </Button>
                    </Stack>
                </Grid>
                <Grid sx={{ mt: 1 }} item xs={12}>
                    {children}
                </Grid>
                {renderBottom && (
                    <Grid sx={{ mt: 1 }} item xs={12}>
                        <Divider />
                    </Grid>
                )}

                {renderBottom}
            </Grid>
        </Modal>
    );
};

export default AuthWrapper;
