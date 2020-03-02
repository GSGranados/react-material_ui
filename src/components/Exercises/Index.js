import React from "react";
import { Grid} from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

const Index = () => {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane styles={styles}></LeftPane>
      </Grid>
      <Grid item sm>
        <RightPane styles={styles}></RightPane>
      </Grid>
    </Grid>
  );
};

export default Index;
