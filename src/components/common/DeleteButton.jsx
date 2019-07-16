import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export default withStyles({
  root: {
    padding: "5px",
    margin: "0px",
    float: "right",
    "&:hover": {
      backgroundColor: "#ff0000"
    }
  }
})(Button);
