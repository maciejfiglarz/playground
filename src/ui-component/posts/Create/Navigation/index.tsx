//project imports
import { PostTypes } from "..";

//material ui
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PollIcon from "@mui/icons-material/Poll";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LinkIcon from "@mui/icons-material/Link";

type Props = {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
};

const tabs = [
  { icon: <ChromeReaderModeIcon />, key: "post", label: "Post" },
  { icon: <PhotoSizeSelectActualIcon />, key: "graphic", label: "Grafika" },
  { icon: <PollIcon />, key: "pool", label: "Ankieta" },
  { icon: <LinkIcon />, key: "link", label: "Link" },
  { icon: <CollectionsBookmarkIcon />, key: "gallery", label: "Galeria" },
];

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
        {tabs.map((item, index) => (
          <Tab
            key={index}
            // icon={item.icon}
            iconPosition="start"
            label={item.label}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default Switcher;
