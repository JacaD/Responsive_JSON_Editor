import React from "react";
import Grid from "@material-ui/core/Grid";

function CustomGrid({ classes, items }) {
  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
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
