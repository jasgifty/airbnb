import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and strech your imaginations</h1>
        <h5>
          plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
