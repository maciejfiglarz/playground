import { useState } from "react";

//project imports
import { borderRadius as themeBorderRadius } from "config/theme";
import { MenuProps } from "../index";

//material ui
import {
  // Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  List,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

//assets
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavCollapse = ({
  id,
  title,
  type,
  icon,
  url,
  action,
  children,
}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();

  const handleClick = () => {
    // if (type === "collapse") {
    //   setIsOpen(!isOpen);
    // } else {
    // }
    // // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // action ? action() : null;
    // setSelected(!selected ? menu.id : null);
    // setSelected(null);
  };

  console.log("action", action);

  return (
    <>
      <ListItemButton
        key={id}
        {...(action
          ? { onClick: ()=>action() }
          : { component: "a", href: url })}
        // component="a"
        // href={url}
        sx={{
          borderRadius: `${themeBorderRadius}px`,
          mb: 0.5,
          alignItems: "center",
        }}
        selected={isOpen}
      >
        <ListItemIcon
        // sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant={"h5"} color="inherit" sx={{ my: "auto" }}>
              {title}
            </Typography>
          }
        />
        {type === "collapse" && (
          <>
            {isOpen ? (
              <ExpandLessIcon fontSize="small" />
            ) : (
              <ExpandMoreIcon fontSize="small" />
            )}
          </>
        )}
      </ListItemButton>

      {/* {children ? (
        <>
          <ListItemButton
            key={id}
            sx={{
              borderRadius: `${themeBorderRadius}px`,
              mb: 0.5,
              alignItems: "center",
              // backgroundColor:
              //     level > 1 ? 'transparent !important' : 'inherit',
              // py: level > 1 ? 1 : 1.25,
              // pl: `${level * 24}px`
            }}
            selected={isOpen}
            onClick={handleClick}
          >
            <ListItemIcon
            // sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant={"h5"} color="inherit" sx={{ my: "auto" }}>
                  {title}
                </Typography>
              }
            />
            {type === "collapse" && (
              <>
                {isOpen ? (
                  <ExpandLessIcon fontSize="small" />
                ) : (
                  <ExpandMoreIcon fontSize="small" />
                )}
              </>
            )}
          </ListItemButton>

          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                position: "relative",
                "&:after": {
                  content: "''",
                  position: "absolute",
                  left: "32px",
                  top: 0,
                  height: "100%",
                  width: "1px",
                  opacity: theme.palette.mode === "dark" ? 0.2 : 1,
                  background:
                    theme.palette.mode === "dark"
                      ? theme.palette.dark.light
                      : theme.palette.primary.light,
                },
              }}
            >
              {children?.map((subItem) => (
                <ListItemButton
                  key={subItem.id}
                  sx={{
                    borderRadius: `${themeBorderRadius}px`,
                    mb: 0.5,
                    alignItems: "center",
                    backgroundColor: "transparent !important",
                    pl: 9,
                    // pl: `${level * 24}px`
                  }}
                  // selected={selected === menu.id}
                  onClick={handleClick}
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant={isOpen ? "h5" : "body1"}
                        color="inherit"
                        sx={{ my: "auto" }}
                      >
                        {subItem.title}
                      </Typography>
                    }
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <ListItemButton
          key={id}
          component={url ? Link : "button"}
          to={url ? url : null}
          sx={{
            borderRadius: `${themeBorderRadius}px`,
            mb: 0.5,
            alignItems: "center",
            // backgroundColor:
            //     level > 1 ? 'transparent !important' : 'inherit',
            // py: level > 1 ? 1 : 1.25,
            // pl: `${level * 24}px`
          }}
          selected={isOpen}
          onClick={handleClick}
        >
          <ListItemIcon
          // sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant={"h5"} color="inherit" sx={{ my: "auto" }}>
                {title}
              </Typography>
            }
          />
          {type === "collapse" && (
            <>
              {isOpen ? (
                <ExpandLessIcon fontSize="small" />
              ) : (
                <ExpandMoreIcon fontSize="small" />
              )}
            </>
          )}
        </ListItemButton>
      )} */}
    </>
  );
};

export default NavCollapse;
