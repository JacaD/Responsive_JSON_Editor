import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

function DialogBox({ input, onDataModified }) {
  let label = input.label;
  const [open, setOpen] = React.useState(false);
  let value;

  function handleChange(event) {
    value = event.target.value;
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSave() {
    if (value) {
      let newOptions = [...input.options];
      newOptions.push(value);
      onDataModified({ options: newOptions }, input.id);
    }
    setOpen(false);
  }

  return (
    <div
      onKeyPress={e => {
        if (e.key === "Enter") {
          handleSave();
        }
      }}
    >
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        new
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={handleChange}
            label={"Enter a new " + label.toLowerCase()}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogBox;
