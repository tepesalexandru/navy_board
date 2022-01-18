export enum IState {
    TODO,
    IN_PROGRESS,
    IN_REVIEW,
    DONE
}

export type ITask = {
    id: string;
    name: string;
    description: string;
    assignee: string;
    state: IState;
}