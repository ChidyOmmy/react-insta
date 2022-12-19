import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { StoriesAvatar } from "./Stories";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";
import { useTheme } from "@mui/material";

import Comments from "./Comments";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import SendOutlined from "@mui/icons-material/SendOutlined";
import MapsUgcOutlined from "@mui/icons-material/MapsUgcOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import EmojiEmotionsOutlined from "@mui/icons-material/EmojiEmotionsOutlined";
import Favorite from "@mui/icons-material/Favorite";
import TurnedIn from "@mui/icons-material/TurnedIn";

export const IconsBox = styled(Box)(({ theme }) => ({}));
const PostAvatar = styled(Avatar)(({ theme }) => ({
  width: "20px",
  height: "20px"
}));

const CommentsModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px"
}));

const Post = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Card
        sx={{
          margin: 5,
          marginTop: 0,
          marginBottom: 2,
          [theme.breakpoints.up("md")]: { width: "85%" },
          [theme.breakpoints.down("sm")]: {
            width: "82%"
          }
        }}>
        <CardHeader
          sx={{
            ".MuiCardHeader-action": {
              marginTop: 1,
              marginBottom: 1
            }
          }}
          title='Chidy'
          avatar={<StoriesAvatar src='https://picsum.photos/456/' />}
          action={<MoreHoriz />}
        />
        <Box>
          <CardMedia
            onLoad={() => setLoaded(true)}
            component='img'
            src='https://picsum.photos/1980'
            height='90%'
            onDoubleClick={(e) => setLiked(liked === false ? true : false)}
            sx={{ display: loaded ? "inline" : "none" }}
          />
          <Skeleton
            variant='rectangular'
            height={350}
            sx={{ display: loaded ? "none" : "block" }}
          />
        </Box>

        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconsBox sx={{ marginLeft: 1 }}>
            <Tooltip title='like post'>
              <IconButton>
                <Checkbox
                  disableRipple
                  icon={<FavoriteBorder />}
                  onChange={(e) => setLiked(liked === false ? true : false)}
                  checked={liked}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title='comment' onClick={(e) => setOpen(true)}>
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
            checkedIcon={<TurnedIn color='darkerColor' />}
          />
        </CardActions>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            padding: 0,
            paddingLeft: 2
          }}>
          <Box sx={{ display: "flex" }}>
            <AvatarGroup>
              <PostAvatar src='https://picsum.photos/456' />
              <PostAvatar src='https://picsum.photos/476' />
              <PostAvatar src='https://picsum.photos/406' />
            </AvatarGroup>
            <Typography component='span'>
              liked by <b>Sultan</b> and <b>43,567</b> others
            </Typography>
          </Box>
          <Typography>
            <b>chidy</b>
            <Typography component='span' color='blue'>
              #Trending
            </Typography>
            <Typography component='span'> Lorem Ipmsum ..</Typography>
          </Typography>
          <Typography
            component='a'
            onClick={(e) => setOpen(true)}
            sx={{ cursor: "pointer" }}
            color='secondary'>
            View all 519 comments
          </Typography>
          <br />
          <Typography color='secondary.light' fontSize='small'>
            12 HRS AGO
          </Typography>
        </CardContent>
        <Divider />
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 1
            }}>
            <EmojiEmotionsOutlined />
            <InputBase placeholder='Add a comment' width='80%' />
            <Button variant='text' size='small'>
              POST
            </Button>
          </Box>
        </CardActionArea>
      </Card>
      <CommentsModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Comments />
      </CommentsModal>
    </>
  );
};

export default Post;
