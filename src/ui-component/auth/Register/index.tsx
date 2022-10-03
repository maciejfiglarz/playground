import * as Yup from 'yup';
import { Formik } from 'formik';
import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';

//project imports
import AuthWrapper from '../Wrapper';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import {
    // DefaultRootStateProps,
    StringColorProps
} from 'types';
import AppContext from 'contexts/AppContext';
// import Logo from 'ui-component/Logo';

//material ui
import {
    Box,
    Button,
    // Stack,
    // IconButton,
    Checkbox,
    // Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    // Stack,
    Typography
    // TextField,
    // useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// assets
// import google from 'assets/icons/social-google.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Register = () => {
    // const { authModal, setAuthModal } = useContext(AppContext);
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState<StringColorProps>();
    const [checked, setChecked] = useState(true);
    const { setAuthModal } = useContext(AppContext);
    // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [isLoading, setIsLoading] = useState(false);
    // const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.SyntheticEvent) => {
        event.preventDefault();
    };
    const changePassword = (value: string) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };
    // const handleClose = () => {
    //     setAuthModal(null);
    // };

    const renderBottom = (
        <Grid item xs={12}>
            <Grid item container direction="column" alignItems="center" xs={12}>
                <Typography
                    onClick={() => setAuthModal('login')}
                    variant="subtitle1"
                    sx={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                    Masz już konto?
                </Typography>
            </Grid>
        </Grid>
    );
    return (
        <AuthWrapper
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            title="Dołącz do nas"
            renderBottom={renderBottom}
            type="register"
        >
            <Grid item xs={12}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email('Must be a valid email')
                            .max(255)
                            .required('Email is required'),
                        password: Yup.string()
                            .max(255)
                            .required('Password is required')
                    })}
                    onSubmit={async (
                        values,
                        { setErrors, setStatus, setSubmitting }
                    ) => {
                        // try {
                        //     await firebaseRegister(
                        //         values.email,
                        //         values.password
                        //     ).then(
                        //         () => {
                        //             // WARNING: do not set any formik state here as formik might be already destroyed here. You may get following error by doing so.
                        //             // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.
                        //             // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
                        //             // github issue: https://github.com/formium/formik/issues/2430
                        //         },
                        //         (err: any) => {
                        //             if (scriptedRef.current) {
                        //                 setStatus({ success: false });
                        //                 setErrors({ submit: err.message });
                        //                 setSubmitting(false);
                        //             }
                        //         }
                        //     );
                        // } catch (err: any) {
                        //     console.error(err);
                        //     if (scriptedRef.current) {
                        //         setStatus({ success: false });
                        //         setErrors({ submit: err.message });
                        //         setSubmitting(false);
                        //     }
                        // }
                    }}
                >
                    {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values
                    }) => (
                        <form
                            noValidate
                            onSubmit={handleSubmit}
                            // {...others}
                        >
                            <FormControl
                                fullWidth
                                error={Boolean(touched.email && errors.email)}
                                sx={{ ...theme.typography.customInput }}
                            >
                                <InputLabel htmlFor="email-register">
                                    Login
                                </InputLabel>
                                <OutlinedInput
                                    id="login-register"
                                    type="text"
                                    value={values.email}
                                    name="login"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    inputProps={{}}
                                />
                                {/* {touched.email && errors.email && (
                                    <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                    >
                                        {errors.email}
                                    </FormHelperText>
                                )} */}
                            </FormControl>

                            <FormControl
                                fullWidth
                                error={Boolean(touched.email && errors.email)}
                                sx={{ ...theme.typography.customInput }}
                            >
                                <InputLabel htmlFor="email-register">
                                    Email
                                </InputLabel>
                                <OutlinedInput
                                    id="email-register"
                                    type="email"
                                    value={values.email}
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    inputProps={{}}
                                />
                                {touched.email && errors.email && (
                                    <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                    >
                                        {errors.email}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl
                                fullWidth
                                error={Boolean(
                                    touched.password && errors.password
                                )}
                                sx={{ ...theme.typography.customInput }}
                            >
                                <InputLabel htmlFor="password-register">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="password-register"
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    name="password"
                                    label="Password"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        changePassword(e.target.value);
                                    }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                edge="end"
                                                size="large"
                                            >
                                                {showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    inputProps={{}}
                                />
                                {/* {touched.password && errors.password && (
                                    <FormHelperText
                                        error
                                        id="standard-weight-helper-text-password-register"
                                    >
                                        {errors.password}
                                    </FormHelperText>
                                )} */}
                            </FormControl>

                            {strength !== 0 && (
                                <FormControl fullWidth>
                                    <Box sx={{ mb: 2 }}>
                                        <Grid
                                            container
                                            spacing={2}
                                            alignItems="center"
                                        >
                                            <Grid item>
                                                <Box
                                                    style={{
                                                        backgroundColor:
                                                            level?.color
                                                    }}
                                                    sx={{
                                                        width: 85,
                                                        height: 8,
                                                        borderRadius: '7px'
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    variant="subtitle1"
                                                    fontSize="0.75rem"
                                                >
                                                    {level?.label}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </FormControl>
                            )}
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={(event) =>
                                                    setChecked(
                                                        event.target.checked
                                                    )
                                                }
                                                name="checked"
                                                color="primary"
                                            />
                                        }
                                        label={
                                            <Typography
                                                style={{
                                                    display: 'flex'
                                                }}
                                                variant="subtitle1"
                                            >
                                                Akceptuję &nbsp;
                                                <Typography
                                                    variant="subtitle1"
                                                    // component={Link}
                                                    // to="#"
                                                >
                                                    regulamin.
                                                </Typography>
                                            </Typography>
                                        }
                                    />
                                </Grid>
                            </Grid>

                            {errors.submit && (
                                <Box sx={{ mt: 3 }}>
                                    <FormHelperText error>
                                        {errors.submit}
                                    </FormHelperText>
                                </Box>
                            )}

                            <Box sx={{ mt: 2 }}>
                                {/* <AnimateButton> */}
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Załóż konto
                                </Button>
                                {/* </AnimateButton> */}
                            </Box>
                        </form>
                    )}
                </Formik>
            </Grid>
        </AuthWrapper>
    );
};

export default Register;
