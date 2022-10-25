// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    CardProps
} from '@mui/material';

export interface MainCardProps {
    border?: boolean;
    boxShadow?: boolean;
    elevation?: number;
    children: React.ReactNode | React.ReactNode[];
    title?: React.ReactNode | string;
    sx?: CardProps['sx'];
}

const MainCard = ({
    border,
    boxShadow,
    title,
    children,
    elevation,
    sx = {}
}: MainCardProps) => {
    const theme = useTheme();
    return (
        <Card
            // ref={ref}
            // {...others}
            elevation={elevation}
            sx={{
                border: border ? '1px solid' : 'none',
                position:"relative",
                borderColor:
                    theme.palette.mode === 'dark'
                        ? theme.palette.background.default
                        : theme.palette.primary[200] + 75,
                ':hover': {
                    // boxShadow: boxShadow
                    //     ? shadow ||
                    // boxShadow:
                    //     theme.palette.mode === 'dark'
                    //         ? '0 2px 14px 0 rgb(33 150 243 / 10%)'
                    //         : '0 2px 14px 0 rgb(32 40 45 / 8%)'
                    // : 'inherit'
                },
                ...sx
            }}
        >
            {title && (
                <CardHeader
                    title={<Typography variant="h3">{title}</Typography>}
                />
            )}
            {title && <Divider />}
            <CardContent>{children}</CardContent>
        </Card>
    );
};

export default MainCard;
