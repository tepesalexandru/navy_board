import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input, Stack } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircleRounded";

export default function CreateTaskPopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          endIcon={<AddCircle />}
          onClick={() => setOpen(true)}
        >
          Add a task
        </Button>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">{"New task"}</DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <Input
              placeholder="Task name"
              sx={{
                width: "300px",
              }}
            />
            <Input
              placeholder="Add a description..."
              sx={{
                width: "300px",
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
