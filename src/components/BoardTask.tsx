import React, { ReactElement } from "react";
import { ITask } from "../models/ITask";

interface Props {
  task: ITask;
}

export default function BoardTask({ task }: Props): ReactElement {
  return <div style={{ color: "white" }}>{task.name}</div>;
}
