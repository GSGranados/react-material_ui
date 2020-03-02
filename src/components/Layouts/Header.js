import React  from "react";
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const Header = () => {
  return (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="headline" color="inherit">Exercise Database</Typography>
    </Toolbar>
  </AppBar>);
};
export default Header;
