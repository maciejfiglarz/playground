import { ThemeOption, PaletteMode } from "./types";

export default function themePalette(theme: ThemeOption) {
    return {
        mode: theme.mode as PaletteMode,
        common: {
            black: theme.colors?.darkPaper
        },
        primary: {
            light: theme.mode === 'dark' ? theme.colors?.darkPrimaryLight : theme.colors?.primaryLight,
            main: theme.mode === 'dark' ? theme.colors?.darkPrimaryMain : theme.colors?.primaryMain,
            dark: theme.mode === 'dark' ? theme.colors?.darkPrimaryDark : theme.colors?.primaryDark,
            200: theme.mode === 'dark' ? theme.colors?.darkPrimary200 : theme.colors?.primary200,
            800: theme.mode === 'dark' ? theme.colors?.darkPrimary800 : theme.colors?.primary800
        },
        secondary: {
            light: theme.mode === 'dark' ? theme.colors?.darkSecondaryLight : theme.colors?.secondaryLight,
            main: theme.mode === 'dark' ? theme.colors?.darkSecondaryMain : theme.colors?.secondaryMain,
            dark: theme.mode === 'dark' ? theme.colors?.darkSecondaryDark : theme.colors?.secondaryDark,
            200: theme.mode === 'dark' ? theme.colors?.darkSecondary200 : theme.colors?.secondary200,
            800: theme.mode === 'dark' ? theme.colors?.darkSecondary800 : theme.colors?.secondary800
        },
        error: {
            light: theme.colors?.errorLight,
            main: theme.colors?.errorMain,
            dark: theme.colors?.errorDark
        },
        warning: {
            light: theme.colors?.warningLight,
            main: theme.colors?.warningMain,
            dark: theme.colors?.warningDark
        },
        success: {
            light: theme.colors?.successLight,
            200: theme.colors?.success200,
            main: theme.colors?.successMain,
            dark: theme.colors?.successDark
        },
        dark: {
            light: theme.colors?.darkTextPrimary,
            main: theme.colors?.darkLevel1,
            dark: theme.colors?.darkLevel2,
            800: theme.colors?.darkBackground,
            900: theme.colors?.darkPaper
        },
        grey: {
            50: theme.colors?.grey50,
            100: theme.colors?.grey100,
            200: theme.colors?.grey200,
            300: theme.colors?.grey300,
            400: theme.colors?.grey400,
            500: theme.colors?.grey500,
            600: theme.colors?.grey600,
            700: theme.colors?.grey700,
            900: theme.colors?.grey900,
        },
        text: {
            primary: theme.darkTextPrimary,
            secondary: theme.darkTextSecondary,
            dark: theme.textDark,
            hint: theme.colors?.grey100
        },
        background: {
            paper: theme.paper,
            default: theme.backgroundDefault
        }
    };
}
