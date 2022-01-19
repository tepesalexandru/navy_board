import { Box } from "@mui/material";
import React, { ReactElement } from "react";
import { ITask } from "../models/ITask";
import AssigneeIcon from "@mui/icons-material/AccountCircle";

interface Props {
  task: ITask;
}

export default function BoardTask({ task }: Props): ReactElement {
  return (
    <Box
      sx={{
        color: "white",
        background: "rgba(5, 10, 48, 0.6);",
        borderRadius: "4px",
        padding: "16px",
        margin: "16px 0px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box>{task.name}</Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "10px"
        }}
      >
        <AssigneeIcon /> {task.assignee}
      </Box>
    </Box>
  );
}
