import React, { useEffect, useState } from "react";
import "./RankPage.css";
import Footer from "./Footer";
import axios from "axios";
import CardRank from "./CardRank";
import { useNavigate } from "react-router-dom";
import { Grid, Stack, Avatar } from "@mui/material";

function RankPage() {
  const navigate = useNavigate();
  const [foodlist, setfoodlist] = useState([]);
  const user = localStorage.getItem("uname");

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json";
    const res = axios.get(url).then((res) => {
      const array = res.data;
      const newarray = array.map((arr) => Object.assign(arr, { points: 0 }));
      newarray.sort((a, b) => b.points - a.points);
      setfoodlist(newarray);
    });
  }, []);
  console.log(foodlist);
  const handlelogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const handleuser = () => {
    navigate("/User");
  };
  return (
    <div>
      <div className="rank-header">
        <h1 className="food-icon">RanKF@@D</h1>
        <div className="sec-rank-div">
          <button className="logout-button" onClick={handlelogout}>
            {" "}
            LogOut
          </button>
          <Stack className="user-top" direction="row" spacing={2}>
            <Avatar alt={user} src="avatar.png" onClick={handleuser} />
          </Stack>
        </div>
      </div>
      <div>
        <Grid container spacing={2}>
          {foodlist.map((list) => {
            return (
              <Grid
                className="card-grid"
                item
                xs={12}
                sm={6}
                md={3}
                key={list.id}
              >
                <CardRank list={list} />
              </Grid>
            );
          })}
        </Grid>
      </div>

      <Footer />
    </div>
  );
}
export default RankPage;
