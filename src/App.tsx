import React, { useState } from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import CreateTaskPopup from "./CreateTaskPopup";
import { IState, ITask } from "./models/ITask";
import BoardTask from "./components/BoardTask";
import { Box } from "@mui/material";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

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
            <CreateTaskPopup
              onSave={(newTask: ITask) => {
                setTasks((oldTasks) => [...oldTasks, newTask]);
              }}
            />
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
          <CreateTaskPopup
            onSave={(newTask: ITask) => {
              setTasks((oldTasks) => [...oldTasks, newTask]);
            }}
          />
          {tasks
            .filter((t) => t.state === IState.IN_PROGRESS)
            .map((task) => (
              <BoardTask task={task} />
            ))}
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
          <CreateTaskPopup
            onSave={(newTask: ITask) => {
              setTasks((oldTasks) => [...oldTasks, newTask]);
            }}
          />
          {tasks
            .filter((t) => t.state === IState.IN_REVIEW)
            .map((task) => (
              <BoardTask task={task} />
            ))}
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
          <CreateTaskPopup
            onSave={(newTask: ITask) => {
              setTasks((oldTasks) => [...oldTasks, newTask]);
            }}
          />
          {tasks
            .filter((t) => t.state === IState.DONE)
            .map((task) => (
              <BoardTask task={task} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
