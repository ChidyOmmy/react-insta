import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Skeleton from "@mui/material/Skeleton";
import { IconsBox } from "./Post";
import { useState } from "react";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Verified from "@mui/icons-material/Verified";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import MapsUgcOutlined from "@mui/icons-material/MapsUgcOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import TurnedIn from "@mui/icons-material/TurnedIn";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import { useTheme } from "@mui/material";
const Comments = () => {
  const theme = useTheme();
  const [liked, setLiked] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <Box
      sx={{ width: "65%", margin: 0, marginTop: "auto", marginBottom: "auto" }}>
      <Card
        sx={{
          display: "flex",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            width: "100%"
          }
        }}>
        <CardMedia
          component='img'
          onLoad={() => setLoaded(true)}
          image='https://picsum.photos/1980'
          onDoubleClick={(e) => setLiked(liked === false ? true : false)}
          sx={{
            width: "50%",
            [theme.breakpoints.down("md")]: { width: "100%" },
            display: loaded ? "inline" : "none"
          }}
        />
        <Box
          sx={{
            width: "50%",
            display: loaded ? "none" : "block",
            [theme.breakpoints.down("md")]: { width: "100%" }
          }}>
          <Skeleton variant='rectangle' height={567} />
        </Box>

        <Box
          sx={{
            width: "50%",
            [theme.breakpoints.down("md")]: { width: "100%" }
          }}>
          <CardHeader
            sx={{
              ".MuiCardHeader-action": {
                marginTop: 1,
                marginBottom: 1
              }
            }}
            title={
              <>
                <Typography
                  variant='span'
                  sx={{ fontWeight: "bold", fontSize: "20px" }}>
                  Chidy
                </Typography>
                <Verified color='info' sx={{ fontSize: "20px" }} mr={1} />
              </>
            }
            avatar={
              <Avatar
                src='https://picsum.photos/456/'
                sx={{ width: 30, height: 30 }}
              />
            }
            action={<MoreHoriz />}
          />
          <Divider />
          <List>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src='https://picsum.photos/456/'
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: "flex" }}>
                    <Typography mr={0.5} sx={{ fontWeight: "bold" }}>
                      Chidy
                    </Typography>
                    <Verified color='info' sx={{ fontSize: "20px" }} mr={1} />
                    <Typography variant='body'>
                      Never Gonna Give You Up
                    </Typography>
                  </Box>
                }
                secondary={
                  <Box sx={{ display: "flex" }}>
                    <Typography color='secondary.light' mr={1}>
                      1 hr
                    </Typography>
                    <Typography color='secondary'>see translation</Typography>
                  </Box>
                }
              />
            </ListItem>

            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src='https://picsum.photos/342/'
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      variant='title'
                      mr={1}
                      sx={{ fontWeight: "bold" }}>
                      Sultan
                    </Typography>
                    <Typography variant='body'>
                      Never gonna let you down
                    </Typography>
                  </Box>
                }
                secondary={
                  <>
                    <Box sx={{ display: "flex" }}>
                      <Typography color='secondary.light' mr={1}>
                        1 hr
                      </Typography>
                      <Typography color='secondary' mr={1}>
                        36 likes
                      </Typography>
                      <Typography color='secondary' mr={1}>
                        reply
                      </Typography>
                      <Typography color='secondary'>see translation</Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "8px" }}>
                      <Box
                        sx={{
                          border: "0",
                          borderBottom: "1px solid grey",
                          display: "inline-block",
                          width: "24px"
                        }}></Box>
                      <Typography>View replies 36</Typography>
                    </Box>
                  </>
                }
              />
              <ListItemSecondaryAction>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src='https://picsum.photos/242/'
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      variant='title'
                      mr={1}
                      sx={{ fontWeight: "bold" }}>
                      Karim
                    </Typography>
                    <Typography variant='body'>
                      Never gonna run around
                    </Typography>
                  </Box>
                }
                secondary={
                  <>
                    <Box sx={{ display: "flex" }}>
                      <Typography color='secondary.light' mr={1}>
                        1 hr
                      </Typography>
                      <Typography color='secondary' mr={1}>
                        36 likes
                      </Typography>
                      <Typography color='secondary' mr={1}>
                        reply
                      </Typography>
                      <Typography color='secondary'>see translation</Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "8px" }}>
                      <Box
                        sx={{
                          border: "0",
                          borderBottom: "1px solid grey",
                          display: "inline-block",
                          width: "24px"
                        }}></Box>
                      <Typography>View replies 36</Typography>
                    </Box>
                  </>
                }
              />
              <ListItemSecondaryAction>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar sx={{ width: 30, height: 30 }} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      variant='title'
                      mr={1}
                      sx={{ fontWeight: "bold" }}>
                      Khalfan
                    </Typography>
                    <Typography variant='body'>...and desert you</Typography>
                  </Box>
                }
                secondary={
                  <>
                    <Box sx={{ display: "flex" }}>
                      <Typography color='secondary.light' mr={1}>
                        1 hr
                      </Typography>
                      <Typography color='secondary' mr={1}>
                        36 likes
                      </Typography>
                      <Typography color='secondary' mr={1}>
                        reply
                      </Typography>
                      <Typography color='secondary'>see translation</Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "8px" }}>
                      <Box
                        sx={{
                          border: "0",
                          borderBottom: "1px solid grey",
                          display: "inline-block",
                          width: "24px"
                        }}></Box>
                      <Typography>View replies 36</Typography>
                    </Box>
                  </>
                }
              />
              <ListItemSecondaryAction>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Divider />
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconsBox sx={{ marginLeft: 1 }}>
              <Tooltip title='like post'>
                <IconButton>
                  <Checkbox
                    disableRipple
                    checked={liked === true ? true : false}
                    onChange={(e) => setLiked(!liked)}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title='comment'>
                <IconButton>
                  <MapsUgcOutlined />
                </IconButton>
              </Tooltip>
              <Tooltip title='Share'>
                <IconButton>
                  <SendOutlined />
                </IconButton>
              </Tooltip>
            </IconsBox>
            <Checkbox
              icon={<TurnedInNotOutlinedIcon />}
              checkedIcon={<TurnedIn sx={{ color: "black" }} />}
            />
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default Comments;
