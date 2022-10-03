//material ui
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

export interface avatarProps extends AvatarProps {
    size?: 'badge' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const ExtendedAvatar = ({ size, sx, ...others }: avatarProps) => {
    const theme = useTheme();
    let sizeSX = {};
    switch (size) {
        case 'badge':
            sizeSX = {
                width: theme.spacing(3.5),
                height: theme.spacing(3.5)
            };
            break;
        case 'xs':
            sizeSX = {
                width: theme.spacing(4.25),
                height: theme.spacing(4.25)
            };
            break;
        case 'sm':
            sizeSX = {
                width: theme.spacing(5),
                height: theme.spacing(5)
            };
            break;
        case 'lg':
            sizeSX = {
                width: theme.spacing(9),
                height: theme.spacing(9)
            };
            break;
        case 'xl':
            sizeSX = {
                width: theme.spacing(10.25),
                height: theme.spacing(10.25)
            };
            break;
        case 'md':
            sizeSX = {
                width: theme.spacing(7.5),
                height: theme.spacing(7.5)
            };
            break;
        default:
            sizeSX = {};
    }

    return <Avatar sx={{ ...sizeSX, ...sx }} {...others} />;
};

export default ExtendedAvatar;
