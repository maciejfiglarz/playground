//project imports
import { PostTypes } from "..";

//material ui
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { OverrideIcon } from "types";

//assets
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PollIcon from "@mui/icons-material/Poll";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LinkIcon from "@mui/icons-material/Link";

type Props = {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
};

type TabsData = {
  [key: number]: {
    icon: OverrideIcon;
    key: "post" | "graphic" | "link" | "gallery" | "pool";
    label: "Post" | "Grafika" | "Link" | "Ankieta" | "Galeria";
  };
};

const tabs: TabsData = {
  0: { icon: <ChromeReaderModeIcon />, key: "post", label: "Post" },
  1: { icon: <PhotoSizeSelectActualIcon />, key: "graphic", label: "Grafika" },
  2: { icon: <PollIcon />, key: "pool", label: "Ankieta" },
  3: { icon: <LinkIcon />, key: "link", label: "Link" },
  4: { icon: <CollectionsBookmarkIcon />, key: "gallery", label: "Galeria" },
};

const Switcher = ({ tab, setTab }: Props) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(Number(newValue));
  };
  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Tabs
        scrollButtons="auto"
        variant="scrollable"
        value={tab}
        onChange={handleChange}
      >
        {Object.values(tabs).map(({ key, label }) => (
          <Tab
            key={key}
            // icon={item.icon}
            iconPosition="start"
            label={label}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default Switcher;
