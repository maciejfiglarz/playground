import { Color} from '@mui/material';

export interface ThemeOption {
    mode: string;
    colors: {
        readonly [key: string]: string;
    };
    heading: string;
    paper: string;
    backgroundDefault: string;
    background: string;
    darkTextPrimary: string;
    darkTextSecondary: string;
    textDark: string;
    menuSelected: string;
    menuSelectedBack: string;
    divider: string;
}

export type PaletteMode = 'light' | 'dark';

export interface CustomTypography {
    commonAvatar?: {
        cursor: string;
        borderRadius: string;
    };
    listAvatar?: {
        width: string;
        height: string;
        fontSize: string;
    };
    smallAvatar?: {
        width: string;
        height: string;
        fontSize: string;
    };
    mediumAvatar?: {
        width: string;
        height: string;
        fontSize: string;
    };
    largeAvatar?: {
        width: string;
        height: string;
        fontSize: string;
    };
    menuCaption?: {
        fontSize: string;
        fontWeight: number;
        color?: Color | (Color | undefined)[] | Color[];
        padding: string;
        textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'inherit';
        marginTop: string;
    };
    subMenuCaption?: {
        fontSize: string;
        fontWeight: number;
        color: Color | (Color | undefined)[] | Color[];
        textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'inherit';
    };
}
