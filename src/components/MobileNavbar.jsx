import Avatar from "@mui/material/Avatar";
import Appbar from "@mui/material/Appbar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Home from "@mui/icons-material/Home";
import ExploreOutlined from "@mui/icons-material/ExploreOutlined";
import WhatsApp from "@mui/icons-material/WhatsApp";
import AddBox from "@mui/icons-material/AddBox";
import { useTheme } from "@mui/material";

import ModeNight from "@mui/icons-material/ModeNight";

const MobileNavbar = () => {
  const theme = useTheme();
  return (
    <Appbar
      position='fixed'
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "background.paper",
        color: "primary",
        [theme.breakpoints.up("sm")]: { display: "none" }
      }}>
      <Toolbar
        variant='dense'
        sx={{
          color: "grey",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <IconButton>
          <ModeNight />
        </IconButton>
        <Home />
        <ExploreOutlined />
        <AddBox />
        <WhatsApp />
        <Avatar
          sx={{ width: 25, height: 25 }}
          src='https://picsum.photos/456/'
        />
      </Toolbar>
    </Appbar>
  );
};

export default MobileNavbar;
