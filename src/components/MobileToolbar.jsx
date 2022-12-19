import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import Appbar from "@mui/material/Appbar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Search from "@mui/icons-material/Search";

const MobileToolbar = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginBottom: 6,
        [theme.breakpoints.up("sm")]: {
          display: "none"
        }
      }}>
      <Appbar
        position='fixed'
        sx={{
          width: "100%",
          backgroundColor: "background.paper",
          color: "grey",
          boxShadow: "none",
          borderBottom: ".5px solid #ccc"
        }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='h6' component='span'>
            Instagram
          </Typography>
          <Box
            sx={{
              backgroundColor: "#ddd",
              padding: 0.5,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <Search />
            <InputBase color='darkerColor' placeholder='Search ' />
          </Box>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </Toolbar>
      </Appbar>
      <Divider variant='fullWidth' />
    </Box>
  );
};

export default MobileToolbar;
