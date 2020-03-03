import React from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

const Footer = ({ muscles }) => {
  return (
    <>
      <Paper>
        <Tabs value={1} indicatorColor="primary" textColor="primary" centered>
          <Tab label="All" />
          {
            muscles.map((muscle) => {
            return(
            <Tab key={muscle} label={muscle} />
            )})
            }
        </Tabs>
      </Paper>
    </>
  );
};
export default Footer;
