// material-ui

// project imports
import { category } from 'config/menu';
import NavItem from './NavItem';
import { NavItemType } from 'types';
import { List, Typography, useTheme } from '@mui/material';

// ==============================|| MAIN SIDEBAR MENU LIST ||============================== //

export interface NavItemProps {
    item: NavItemType;
}

const SidebarCategories = () => {
    const theme = useTheme();
    return (
        <>
            <List
                subheader={
                    <Typography
                        variant="caption"
                        sx={{ ...theme.typography.menuCaption }}
                        display="block"
                        gutterBottom
                    >
                        {category.title}
                    </Typography>
                }
            >
                {category.items.map((item: NavItemType) => (
                    <NavItem key={item.id} item={item} />
                ))}
            </List>
        </>
    );
};

export default SidebarCategories;
