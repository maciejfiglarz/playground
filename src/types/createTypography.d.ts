import { TypographyStyle } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles/createTypography' {

    // export type Variant =
    //     | 'commonAvatar'
    //     | 'smallAvatar'
    //     | 'mediumAvatar'
    //     | 'largeAvatar';

    export interface Typography extends Record<Variant, TypographyStyle>, FontStyle, TypographyUtils {
        commonAvatar: TypographyStyle;
        smallAvatar: TypographyStyle;
        mediumAvatar: TypographyStyle;
        largeAvatar: TypographyStyle;
        mainContent: TypographyStyle;
        menuCaption: TypographyStyle;
        subMenuCaption: TypographyStyle;
        customInput: TypographyStyle;
        subTitle1: TypographyStyle;
    }
}