import React from "react";
import Grid from "@material-ui/core/Grid";

function CustomGrid({ items }) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Grid className={"GridContainer"} container spacing={2}>
          {items.map((item, index) => {
            return (
              <Grid item key={index}>
                {item}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CustomGrid;
