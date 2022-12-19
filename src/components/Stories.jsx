import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import NavigateNext from "@mui/icons-material/NavigateNext";

export const StoriesAvatar = styled(Avatar)(({ theme }) => ({
  border: "2.5px solid white",
  outline: "3px inset red",
  width: 55,
  height: 55
}));
const Stories = () => {
  return (
    <Card sx={{ width: "85%", margin: "auto", marginBottom: 2, marginTop: 5 }}>
      <CardContent>
        <Stack direction='row' spacing={1.5} justifyContent='center'>
          <Box>
            <StoriesAvatar src='https://picsum.photos/456/' />
            <Typography component='h3'>Chidy</Typography>
          </Box>
          <Box>
            <StoriesAvatar src='https://picsum.photos/201/' />
            <Typography component='h3'>Sultan</Typography>
          </Box>
          <Box>
            <StoriesAvatar src='https://picsum.photos/202/' />
            <Typography component='h3'>Karim</Typography>
          </Box>
          <Box>
            <StoriesAvatar src='https://picsum.photos/203/' />
            <Typography component='h3'>Maua</Typography>
          </Box>
          <Box>
            <StoriesAvatar src='https://picsum.photos/204/' />
            <Typography component='h3'>Khalfan</Typography>
          </Box>
          <Box>
            <StoriesAvatar src='https://picsum.photos/205/' />
            <Typography component='h3'>Samira</Typography>
          </Box>
          <Box>
            <StoriesAvatar src='https://picsum.photos/206/' />
            <Typography component='h3'>Subaiya</Typography>
          </Box>
          <Fab
            size='small'
            color='white'
            sx={{
              position: "relative",
              zIndex: 567,
              top: 17,
              left: -30
            }}>
            <NavigateNext />
          </Fab>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Stories;
