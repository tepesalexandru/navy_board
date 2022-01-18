import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Input, Stack } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircleRounded";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {IState, ITask} from './models/ITask';

const useStyles = makeStyles((theme: any) => ({
  formControl: {
    margin: (theme.spacing = "2"),
    minWidth: 200,
  },
}));

type Props = {
  onSave: (task: ITask) => void,
};

export default function CreateTaskPopup(props: Props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [state, setState] = useState<IState>(IState.TODO);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");

  const HandleChange = (event: any) => {
    setState(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    let newTask: ITask = {
      id: `${Math.floor(Math.random() * 200000)}`,
      name,
      description,
      assignee,
      state,
    };
    props.onSave(newTask);
    setOpen(false);
  };

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          sx={{ background: "#050A30" }}
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
        <DialogTitle
          id="alert-dialog-title"
          sx={{ background: "#000C66" }}
          color="white"
        >
          {"New task"}
        </DialogTitle>
        <DialogContent sx={{ background: "#000C66" }}>
          <Stack spacing={3}>
            <Input
              placeholder="Add a task name"
              sx={{
                width: "300px",
                color: "white",
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Add a description..."
              sx={{
                width: "300px",
                color: "white",
              }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              placeholder="Add User"
              sx={{
                width: "300px",
                color: "white",
              }}
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
            <FormControl
              className={classes.formControl}
              sx={{ background: "white" }}
            >
              <InputLabel sx={{ color: "black" }}>
                Set Status
              </InputLabel>
              <Select
                labelId="select-demo"
                id="status-select"
                value={state}
                onChange={HandleChange}
              >
                <MenuItem value={IState.TODO}>TODO</MenuItem>
                <MenuItem value={IState.IN_PROGRESS}>In Progress</MenuItem>
                <MenuItem value={IState.IN_REVIEW}>In Review</MenuItem>
                <MenuItem value={IState.DONE}>DONE</MenuItem>
              </Select>
            </FormControl>

            <DialogActions></DialogActions>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ background: "#000C66" }}>
          <Button
            onClick={handleClose}
            autoFocus
            sx={{ background: "#050A30" }}
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
