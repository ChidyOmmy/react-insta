import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

import Home from "@mui/icons-material/Home";
import Search from "@mui/icons-material/Search";
import ExploreOutlined from "@mui/icons-material/ExploreOutlined";
import WhatsApp from "@mui/icons-material/WhatsApp";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddBox from "@mui/icons-material/AddBox";
import Menu from "@mui/icons-material/Menu";
import ModeNight from "@mui/icons-material/ModeNight";
import Instagram from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material";

const NavbarText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.text.primary,
  [theme.breakpoints.down("lg")]: { display: "none" }
}));
const Navbar = ({ mode, setMode }) => {
  const theme = useTheme();
  return (
    <Box
      flex={1}
      sx={{
        [theme.breakpoints.up("xl")]: { paddingRight: "70px" },
        [theme.breakpoints.down("sm")]: { display: "none" },
        minWidth: "50px"
      }}>
      <Box position='fixed'>
        <Box m={3}>
          <Typography
            color='text.primary'
            variant='h5'
            sx={{
              [theme.breakpoints.down("lg")]: { display: "none" }
            }}>
            Instagram
          </Typography>
          <Instagram
            sx={{ [theme.breakpoints.up("lg")]: { display: "none" } }}
          />
        </Box>
        <List sx={{ margin: 0, marginTop: 5 }}>
          <ListItem>
            <ListItemIcon>
              <Home sx={{ color: "primary" }} />
            </ListItemIcon>
            <NavbarText>Home</NavbarText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Search sx={{ color: "primary" }} />
            </ListItemIcon>
            <NavbarText>Search</NavbarText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ExploreOutlined sx={{ color: "primary" }} />
            </ListItemIcon>
            <NavbarText>Explore</NavbarText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WhatsApp sx={{ color: "primary" }} />
            </ListItemIcon>
            <NavbarText>Messages</NavbarText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FavoriteBorder sx={{ color: "primary" }} />
            </ListItemIcon>
            <NavbarText>Notifications</NavbarText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AddBox sx={{ color: "primary" }} />
            </ListItemIcon>
            <NavbarText>Create</NavbarText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                src='https://picsum.photos/456/'
                sx={{ width: 22, height: 22 }}
              />
            </ListItemAvatar>
            <NavbarText>Profile</NavbarText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ModeNight
                onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemIcon>
            <Switch
              sx={{ [theme.breakpoints.down("lg")]: { display: "none" } }}
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              checked={mode === "dark" ? true : false}
            />
          </ListItem>
          <ListItem sx={{ marginTop: "50px" }}>
            <ListItemIcon>
              <Menu sx={{ color: "primary" }} />
            </ListItemIcon>
            <NavbarText>More</NavbarText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Navbar;
