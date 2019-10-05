import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static" style={{ marginBottom: "20px" }}>
      <Toolbar>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          noWrap
          style={{ flex: 1, color: "white", cursor: "pointer" }}
        >
          Recipy - Find Your Perfect Recipe
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
