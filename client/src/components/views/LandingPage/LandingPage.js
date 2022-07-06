import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _auth from "./../../../hoc/auth";
import NavBar from "../_NavBar/NavBar";
import Footer from "../_Footer/Footer";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);
  _auth(null);

  return (
    <div className = "LandingPage">
      <NavBar />
      <div className="LandingPageWrapper">
        <h2>Main Page</h2>
        <img
          className="sampleBanner"
          src={process.env.PUBLIC_URL + `/assets/sample1.jpg`}
        />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
