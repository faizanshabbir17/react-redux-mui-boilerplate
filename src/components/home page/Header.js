import React from "react";
import logo from "../../assets/images/logo.svg";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Counter } from "../../features/counter/Counter";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className="iconbuttonsyle"
            color="inherit"
            aria-label="Menu"
            // onClick={this.onLeftIconButtonClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            className="headertypoclass"
          >
            My React App
          </Typography>
          <Button color="inherit" align="right">
            <Link to="/login"> Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
