import React  from "react";
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const Header = () => {
  return (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" color="inherit">Exercise Database</Typography>
    </Toolbar>
  </AppBar>);
};
export default Header;
