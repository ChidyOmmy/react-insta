import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";
const SidebarAvatar = styled(Avatar)(({ theme }) => ({
  width: 33,
  height: 33
}));
const Sidebar = () => {
  const theme = useTheme();
  return (
    <Box flex={3} sx={{ [theme.breakpoints.down("md")]: { display: "none" } }}>
      <Card
        sx={{
          padding: 2,
          border: "none",
          boxShadow: "none",
          margin: 2,
          marginTop: 5,
          marginLeft: 0
        }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 55, height: 55 }}
              src='https://picsum.photos/456/'
            />
          }
          action={
            <Button variant='text' size='small'>
              switch
            </Button>
          }
          title='Chidy'
          subheader='Rashid Shakili'
        />
      </Card>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography color='secondary'>Suggestions For You</Typography>
        <Button size='small' variant='text' color='secondary'>
          See All
        </Button>
      </Box>
      <List>
        <ListItem
          secondaryAction={
            <Button variant='text' size='small'>
              Follow
            </Button>
          }>
          <ListItemAvatar>
            <SidebarAvatar src='https://picsum.photos/456' />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant='span' color='text.primary'>
                Subaiya
              </Typography>
            }
            secondary='Followed by Chidy and 653 others'
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <Button variant='text' size='small'>
              Follow
            </Button>
          }>
          <ListItemAvatar>
            <SidebarAvatar src='https://picsum.photos/496' />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant='span' color='text.primary'>
                Maua
              </Typography>
            }
            secondary='Followed by Karim and 13,012 others'
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <Button variant='text' size='small'>
              Follow
            </Button>
          }>
          <ListItemAvatar>
            <SidebarAvatar src='https://picsum.photos/556' />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant='span' color='text.primary'>
                Sultan
              </Typography>
            }
            secondary='Followed by Maua and 91 others'
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
