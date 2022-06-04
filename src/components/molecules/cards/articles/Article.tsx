import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Stack, CardActionArea } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddIcon from "@mui/icons-material/Add";
import { HamBurger } from "../../../atoms/icons/IconButton.stories";

export type ArticleTypes = {
  id: number;
  src: string;
  title: string;
  authors: string;
  time_to_read: string;
  tot_reads: string;
  btnStatus: number;
  isHome: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  handleDblClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

function Article({
  id,
  src,
  title,
  authors,
  time_to_read,
  tot_reads,
  btnStatus,
  isHome,
  handleClick,
  handleDblClick,
}: ArticleTypes) {
  let btnStatusText = "Add to library";
  if (btnStatus === 0) {
    btnStatusText = "Add to library";
  } else if (btnStatus === 1) {
    btnStatusText = "Finished";
  } else {
    btnStatusText = "Read again";
  }

  return (
    <Card sx={{ maxWidth: 284 }}>
      <CardActionArea
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleDblClick(event, id)
        }
      >
        <CardMedia
          component="img"
          width="284px"
          height="282px"
          image={src}
          alt="article-img"
        />
      </CardActionArea>

      <CardContent>
        <Typography gutterBottom variant="subtitle2" component="div">
          {title}
        </Typography>

        <Stack spacing={1} direction="column">
          <Typography variant="body1" color="text.secondary">
            {authors}
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center">
              <AccessTimeIcon></AccessTimeIcon>
              <Typography variant="body2" color="text.secondary">
                {time_to_read}
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              <PersonOutlineIcon></PersonOutlineIcon>
              <Typography variant="body2" color="text.secondary">
                {tot_reads}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>

      {!isHome ? (
        <>
          <CardActions>
            <Button
              fullWidth
              size="small"
              onClick={(event) => handleClick(event, id)}
            >
              {btnStatusText}
            </Button>
          </CardActions>
          <Box sx={{ height: "15px", backgroundColor: "#F1F6F4" }}>
            <Box
              sx={{
                width: "88px",
                height: "15px",
                backgroundColor: "#E1ECFC",
              }}
            ></Box>
          </Box>
        </>
      ) : btnStatus === 0 ? (
        <CardActions>
          <Button
            fullWidth
            size="small"
            onClick={(event) => handleClick(event, id)}
            sx={{ height: "52px" }}
          >
            <AddIcon></AddIcon>
            {btnStatusText}
          </Button>
        </CardActions>
      ) : (
        <>
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <HamBurger></HamBurger>
          </CardActions>
          <Box sx={{ height: "15px", backgroundColor: "#F1F6F4" }}>
            <Box
              sx={{
                width: "88px",
                height: "15px",
                backgroundColor: "#E1ECFC",
              }}
            ></Box>
          </Box>
        </>
      )}
    </Card>
  );
}

export default Article;
