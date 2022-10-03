import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
// import { amber, deepOrange, grey } from '@mui/material/colors';
import themePalette from './palette';
import themeTypography from './typography';
import color from './_colors.module.scss';
import themeOverrides from './overrides';

// declare module '@mui/material/styles' {

//   interface Palette {
//     selected: PaletteColorOptions;
//   }
//   interface PaletteOptions {
//     selected: PaletteColorOptions;
//   }
// }

const getTheme = (mode: string) => {
    const themeOption = {
        mode,
        colors: color,
        heading: '',
        paper: '',
        backgroundDefault: '',
        background: '',
        darkTextPrimary: '',
        darkTextSecondary: '',
        textDark: '',
        menuSelected: '',
        menuSelectedBack: '',
        divider: ''
    };

    switch (mode) {
        case 'dark':
            themeOption.paper = color.darkLevel2;
            themeOption.backgroundDefault =color.darkbackground;
            themeOption.background = color.darkBackground;
            themeOption.darkTextPrimary = color.darkTextPrimary;
            themeOption.darkTextSecondary = color.darkTextSecondary;
            themeOption.textDark = color.darkTextPrimary;
            themeOption.menuSelected = color.darkSecondaryMain;
            themeOption.menuSelectedBack = color.darkSecondaryMain + 15;
            themeOption.divider = color.darkTextPrimary;
            themeOption.heading = color.darkTextTitle;
            break;
        case 'light':
        default:
            themeOption.paper = color.paper;
            themeOption.backgroundDefault = color.background;
            themeOption.background = color.primaryLight;
            themeOption.darkTextPrimary = color.grey700;
            themeOption.darkTextSecondary = color.grey500;
            themeOption.textDark = color.grey900;
            themeOption.menuSelected = color.secondaryDark;
            themeOption.menuSelectedBack = color.secondaryLight;
            themeOption.divider = color.grey200;
            themeOption.heading = color.grey900;
            break;
    }

    const themeOptions: ThemeOptions = {
        palette: themePalette(themeOption),
        typography: themeTypography(themeOption)
        // overrides: themeOverrides(themeOption),
        // mixins: {
        //     toolbar: {
        //         minHeight: '48px',
        //         padding: '16px',
        //         '@media (min-width: 600px)': {
        //             minHeight: '48px'
        //         }
        //     }
        // }
    };

    const theme: Theme = createTheme(themeOptions);
    theme.components = themeOverrides(themeOption);

    return theme;
};

export default getTheme;
