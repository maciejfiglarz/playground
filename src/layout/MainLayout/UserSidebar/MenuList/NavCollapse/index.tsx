import { useState } from 'react';

//project imports
import { borderRadius as themeBorderRadius } from 'config/theme';
import { MenuProps } from './../index';

//material ui
import {
    // Avatar,

    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NavCollapse = ({
    id,
    title,
    type,
    icon,
    loggedUser,
    url,
    children
}: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        // setSelected(!selected ? menu.id : null);
        // setSelected(null);
    };

    return (
        <>
            <ListItemButton
                sx={{
                    borderRadius: `${themeBorderRadius}px`,
                    mb: 0.5,
                    alignItems: 'center'
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
                    {icon}
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography
                            variant={isOpen ? 'h5' : 'body1'}
                            color="inherit"
                            sx={{ my: 'auto' }}
                        >
                            {title}
                        </Typography>
                    }
                />
                {isOpen ? (
                    <ExpandLessIcon fontSize="small" />
                ) : (
                    <ExpandMoreIcon fontSize="small" />
                )}
            </ListItemButton>
            {children?.map((subItem) => (
                <ListItemButton
                    sx={{
                        borderRadius: `${themeBorderRadius}px`,
                        mb: 0.5,
                        alignItems: 'center'
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
                        {subItem.icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant={isOpen ? 'h5' : 'body1'}
                                color="inherit"
                                sx={{ my: 'auto' }}
                            >
                                {title}
                            </Typography>
                        }
                    />
                    {isOpen ? (
                        <ExpandLessIcon fontSize="small" />
                    ) : (
                        <ExpandMoreIcon fontSize="small" />
                    )}
                </ListItemButton>
            ))}
        </>
    );
};

export default NavCollapse;
