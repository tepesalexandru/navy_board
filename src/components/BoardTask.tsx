import { Box } from "@mui/material";
import React, { ReactElement } from "react";
import { ITask } from "../models/ITask";

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
      }}
    >
      {task.name}
    </Box>
  );
}
