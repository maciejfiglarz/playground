import { ThemeOption } from './types';
import { borderRadius as configBorderRadius } from 'config/theme';


declare module '@mui/material/Button' {
    interface ButtonPropsOverrides {
        dashed: true;
        textTransform: string;
    }
}

export default function themeOverrides(theme: ThemeOption) {
    const bgColor = theme.mode === 'dark' ? theme.colors?.darkBackground : theme.colors?.grey50;
    return {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                },
                rounded: {
                    borderRadius: `${configBorderRadius}px`
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: '5px',
                    //@ts-ignore
                    textTransform: 'none' as const
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: theme.darkTextPrimary,
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    '&.Mui-selected': {
                        color: theme.menuSelected,
                        backgroundColor: theme.menuSelectedBack,
                        '&:hover': {
                            backgroundColor: theme.menuSelectedBack
                        },
                        '& .MuiListItemIcon-root': {
                            color: theme.menuSelected
                        }
                    },
                    '&:hover': {
                        backgroundColor: theme.menuSelectedBack,
                        color: theme.menuSelected,
                        '& .MuiListItemIcon-root': {
                            color: theme.menuSelected
                        }
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: bgColor,
                    // borderRadius: `px`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor:
                            theme.mode === 'dark'
                                ? theme.colors?.darkTextPrimary! + 28
                                : theme.colors?.grey400
                    },
                    '&:hover $notchedOutline': {
                        borderColor: theme.colors?.primaryLight
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1
                    }
                },
                input: {
                    fontWeight: 500,
                    background: bgColor,
                    padding: '15.5px 14px',
                    // borderRadius: `${theme?.customization?.borderRadius}px`,
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '10px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0
                        }
                    }
                },
                inputAdornedStart: {
                    paddingLeft: 4
                },
                notchedOutline: {
                    // borderRadius: `${theme?.customization?.borderRadius}px`
                }
            }
        }
    };
}
