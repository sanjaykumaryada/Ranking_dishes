import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-main">
      <h1 className="food-icon">RanKF@@D</h1>

      <div className="button-div">
        <button onClick={() => navigate("/Login")}>Login</button>
      </div>
    </div>
  );
}
export default Header;
