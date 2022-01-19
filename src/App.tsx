import React, { useState } from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import CreateTaskPopup from "./CreateTaskPopup";
import { IState, ITask } from "./models/ITask";
import BoardTask from "./components/BoardTask";
import { Box, Button } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircleRounded";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <AppBar position="static" sx={{ background: "#050A30" }}>
          <Toolbar>
            <Typography
              variant="h4"
              sx={{ flexGrow: 1 }}
              style={{ fontWeight: 600 }}
            >
              The Navy Board
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <div className="container">
        <div className="todo">
          <AppBar position="static" sx={{ background: "#7EC8E3" }}>
            <Toolbar>
              <Typography
                variant="h4"
                sx={{ flexGrow: 1, textAlign: "center", color: "#000C66" }}
                style={{ fontWeight: 600 }}
              >
                TO DO
              </Typography>
            </Toolbar>
          </AppBar>
          <Box sx={{ padding: "16px" }}>
            <Button
              sx={{ background: "#050A30" }}
              variant="contained"
              endIcon={<AddCircle />}
              onClick={() => setOpen(true)}
            >
              Add a task
            </Button>

            {tasks
              .filter((t) => t.state === IState.TODO)
              .map((task) => (
                <BoardTask task={task} />
              ))}
          </Box>
        </div>

        <div className="inprogress">
          <AppBar position="static" sx={{ background: "#7EC8E3" }}>
            <Toolbar>
              <Typography
                variant="h4"
                sx={{ flexGrow: 1, textAlign: "center", color: "#000C66" }}
                style={{ fontWeight: 600 }}
              >
                IN PROGRESS
              </Typography>
            </Toolbar>
          </AppBar>
          <Box sx={{ padding: "16px" }}>
            <Button
              sx={{ background: "#050A30" }}
              variant="contained"
              endIcon={<AddCircle />}
              onClick={() => setOpen(true)}
            >
              Add a task
            </Button>
            {tasks
              .filter((t) => t.state === IState.IN_PROGRESS)
              .map((task) => (
                <BoardTask task={task} />
              ))}
          </Box>
        </div>

        <div className="inreview">
          <AppBar position="static" sx={{ background: "#7EC8E3" }}>
            <Toolbar>
              <Typography
                variant="h4"
                sx={{ flexGrow: 1, textAlign: "center", color: "#000C66" }}
                style={{ fontWeight: 600 }}
              >
                IN REVIEW
              </Typography>
            </Toolbar>
          </AppBar>
          <Box sx={{ padding: "16px" }}>
            <Button
              sx={{ background: "#050A30" }}
              variant="contained"
              endIcon={<AddCircle />}
              onClick={() => setOpen(true)}
            >
              Add a task
            </Button>
            {tasks
              .filter((t) => t.state === IState.IN_REVIEW)
              .map((task) => (
                <BoardTask task={task} />
              ))}
          </Box>
        </div>
        <div className="done">
          <AppBar position="static" sx={{ background: "#7EC8E3" }}>
            <Toolbar>
              <Typography
                variant="h4"
                sx={{ flexGrow: 1, textAlign: "center", color: "#000C66" }}
                style={{ fontWeight: 600 }}
              >
                DONE
              </Typography>
            </Toolbar>
          </AppBar>
          <Box sx={{ padding: "16px" }}>
            <Button
              sx={{ background: "#050A30" }}
              variant="contained"
              endIcon={<AddCircle />}
              onClick={() => setOpen(true)}
            >
              Add a task
            </Button>
            {tasks
              .filter((t) => t.state === IState.DONE)
              .map((task) => (
                <BoardTask task={task} />
              ))}
          </Box>
        </div>
      </div>
      <CreateTaskPopup
        onSave={(newTask: ITask) => {
          setTasks((oldTasks) => [...oldTasks, newTask]);
        }}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}

export default App;
