import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Card,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import "./CardRank.css";

const CardRank = ({ list }) => {
  const [open, setopen] = useState(false);
  const [threeContainercheck, setthreeContainercheck] = useState([]);
  const [isVoteClicked, setisVoteClicked] = useState(true);

  const { enqueueSnackbar } = useSnackbar();

  const thridcontainer = threeContainercheck;
  const handlevoteclick = () => {
    setopen(true);
    setisVoteClicked(true);
  };
  useEffect(() => {
    if (isVoteClicked) {
      setthreeContainercheck([...thridcontainer, list.dishName]);
      setisVoteClicked(false);
    }
  }, [list.dishName, isVoteClicked, thridcontainer]);

  console.log(threeContainercheck);

  const handlemouse = () => {
    enqueueSnackbar(
      "You can vote three of your top dishes! If you want to vote click on vote button ",
      { variant: "success" }
    );
  };
  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "Rank1") {
      list.points += 30;
    } else if (value === "Rank2") {
      list.points += 20;
    } else if (value === "Rank3") {
      list.points += 10;
    }
  };
  return (
    <>
      <Card className="card" key={list.id}>
        <CardMedia component="img" image={list.image} aria-label="stars" />
        <CardContent>
          <Typography variant="h3" className="card-title">
            {list.dishName}
          </Typography>
          <Typography variant="h6" className="card-description">
            {list.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            onClick={handlevoteclick}
            onMouseMove={handlemouse}
          >
            Vote
          </Button>
          <Button variant="contained" onClick={() => setopen(true)}>
            Edit
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>
          {" "}
          Rank Your favourite dish one among the three{" "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Rank1"
                  onChange={handleChange}
                  control={<Radio />}
                  label="Rank 1"
                />
                <FormControlLabel
                  value="Rank2"
                  onChange={handleChange}
                  control={<Radio />}
                  label="Rank 2"
                />
                <FormControlLabel
                  value="Rank3"
                  onChange={handleChange}
                  control={<Radio />}
                  label="Rank 3"
                />
              </RadioGroup>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setopen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardRank;
