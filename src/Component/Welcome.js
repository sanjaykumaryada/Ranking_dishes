import React from "react";
import "./Welcome.css";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  return (
    <>
      <div className="welcome-main">
        <Header />
        <div className="secondary-div">
          <input className="input" placeholder="Taste and rate food"></input>
          <button className="button" onClick={() => navigate("/Login")}>
            Find Food
          </button>

          <div>
            <h5>where we are</h5>
            <p>
              Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai
              Pune& more.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Welcome;
