//material ui
import {
    // useTheme,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';

// project imports
import { NavItemType } from 'types';

export interface NavItemProps {
    item: NavItemType;
}

// ==============================|| SIDEBAR LIST ITEM ||============================== //

const NavItem = ({ item }: NavItemProps) => {
    // const theme = useTheme();
    return (
        <>
            <ListItemButton>
                <ListItemIcon sx={{ my: 'auto', minWidth: 36 }}>
                    {/* <item.icon></item.icon> */}
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant="body1" color="inherit">
                            {item.title}
                        </Typography>
                    }
                />
            </ListItemButton>
        </>
    );
};

export default NavItem;
