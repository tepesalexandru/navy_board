import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Input, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IState, ITask } from "./models/ITask";

const useStyles = makeStyles((theme: any) => ({
  formControl: {
    margin: (theme.spacing = "2"),
    minWidth: 200,
    borderRadius: "5px",
  },
}));

type Props = {
  open: boolean;
  setOpen: (state: boolean) => void;
  taskSelected?: ITask;
  setTaskSelected: (task: ITask | undefined) => void;
  setTasks: any;
  tasks: ITask[];
};

export default function CreateTaskPopup({
  open,
  setOpen,
  taskSelected,
  setTaskSelected,
  setTasks,
  tasks,
}: Props) {
  const classes = useStyles();
  const [state, setState] = useState<IState>(IState.TODO);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");

  const HandleChange = (event: any) => {
    setState(event.target.value);
  };

  useEffect(() => {
    if (taskSelected) {
      setOpen(true);
      setName(taskSelected.name);
      setDescription(taskSelected.description);
      setAssignee(taskSelected.assignee);
      setState(taskSelected.state);
    }
  }, [taskSelected]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTaskSelected(undefined);
  };

  const saveTask = () => {
    let newTask: ITask = {
      id: `${Math.floor(Math.random() * 200000)}`,
      name,
      description,
      assignee,
      state,
    };
    if (newTask.name === "" || newTask.assignee === "") return;

    if (taskSelected) {
      let taskIndex = tasks.findIndex(
        (task: ITask) => task.id === taskSelected.id
      );
      const oldTasks = [...tasks];
      if (taskIndex > -1) {
        oldTasks[taskIndex] = { ...newTask };
      }
      setTasks(oldTasks);
    } else {
      setTasks((oldTasks: ITask[]) => [...oldTasks, newTask]);
    }
    setOpen(false);
    setTaskSelected(undefined);
    setName("");
    setDescription("");
    setAssignee("");
    setState(IState.TODO);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Stack spacing={2} direction="row"></Stack>
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
              <Select
                labelId="select-demo"
                id="status-select"
                value={state}
                onChange={HandleChange}
                sx={{ background: "#030936", color: "#fff" }}
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
            onClick={saveTask}
            autoFocus
            sx={{ background: "#050A30" }}
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
