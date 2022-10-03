// import { useState } from 'react';

//project imports
import { OverrideIcon } from 'types';
import NavCollapse from './NavCollapse';
// import NavItem from './NavCollapse';

//material ui
import {
    // Avatar,
    List,
    Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import AddCircleIcon from '@mui/icons-material/AddCircle';

//aseets
import { IconCookie, IconReportAnalytics, IconInfoCircle } from '@tabler/icons';

export interface MenuProps {
    id: string;
    title: string;
    type: string;
    icon: OverrideIcon;
    loggedUser: false;
    url?: string;
    children?: {
        id: string;
        title: string;
        type: string;
        url: string;
        icon: OverrideIcon;
    }[];
}

const menuItems: MenuProps[] = [
    {
        id: 'add',
        title: 'Dodaj',
        type: 'item',
        icon: <AddCircleIcon />,
        loggedUser: false,
        url: '/dodaj'
    },
    {
        id: 'info',
        title: 'Informacje',
        type: 'collapse',
        icon: <IconInfoCircle />,
        loggedUser: false,
        children: [
            {
                id: 'statute',
                title: 'Regulamin',
                type: 'item',
                url: '/dashboard/default',
                icon: <IconReportAnalytics />
            },
            {
                id: 'policy',
                title: 'Polityka prywatności',
                type: 'item',
                url: '/dashboard/analytics',
                icon: <IconCookie />
            }
        ]
    }
];

const MenuList = () => {
    const theme = useTheme();

    const items = menuItems.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse key={menu.id} {...menu} />;
            case 'item':
                return 'item';
            // return <NavItem key={menu.id} item={menu} />;
            default:
                return (
                    <Typography
                        key={menu.id}
                        variant="h6"
                        color="error"
                        align="center"
                    >
                        Coś poszło nie tak
                    </Typography>
                );
        }
    });

    return (
        <List
            component="nav"
            sx={{
                width: '100%',
                maxWidth: 350,
                minWidth: 300,
                // backgroundColor: theme.palette.background.paper,
                borderRadius: '10px',
                [theme.breakpoints.down('md')]: {
                    minWidth: '100%'
                },
                '& .MuiListItemButton-root': {
                    // mt: 0.5
                }
            }}
        >
            {items}
            {/* {menuItems.map((item) => (
                <>
                    {(!item.loggedUser || item.loggedUser === isLogged) && (
                        <ListItemButton
                            sx={{
                                borderRadius: `${themeBorderRadius}px`,
                                mb: 0.5,
                                alignItems: 'flex-start'
                                // backgroundColor:
                                //     level > 1 ? 'transparent !important' : 'inherit',
                                // py: level > 1 ? 1 : 1.25,
                                // pl: `${level * 24}px`
                            }}
                            // selected={selected === menu.id}
                            onClick={handleClick}
                        >
                            <ListItemIcon
                            // sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant={
                                            selected === item.id
                                                ? 'h5'
                                                : 'body1'
                                        }
                                        color="inherit"
                                        sx={{ my: 'auto' }}
                                    >
                                        {item.title}
                                    </Typography>
                                }
                            />
                            {selected === item.id ? (
                                <ExpandLessIcon fontSize="small" />
                            ) : (
                                <ExpandMoreIcon fontSize="small" />
                            )}
                        </ListItemButton>
                    )}
                </>
            ))} */}
        </List>
    );
};

export default MenuList;
