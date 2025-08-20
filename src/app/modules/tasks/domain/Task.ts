
export const TASK_STATE = {
  PENDING: "PENDING",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE"
} as const;

type ObjectValues<T> = T[keyof T];

export type TaskState = ObjectValues<typeof TASK_STATE>;

interface TaskProps {
  id: number;
  state?: TaskState;
  description?: string;
  title?: string;
}

export class Task {

  private _state: TaskState = TASK_STATE.PENDING;
  private _description: string = "";
  private _title: string = "";
  private _id: number = 0;

  constructor({ id, state, description, title }: TaskProps) {

    if (id) {
      this._id = id;
    }

    if (state) {
      this._state = state;
    }
    if (description) {
      this._description = description;

    }
    if (title) {
      this._title = title;
    }
  }

  public get state() {
    return this._state;
  }

  public set state(newState: TaskState) {
    this._state = newState;
  }

  public get description() {
    return this._description;
  }

  public set description(newDescription: string) {
    this._description = newDescription;
  }

  public get title() {
    return this._title;
  }

  public set title(newTitle: string) {
    this._title = newTitle;
  }

  public get id() {
    return this._id;
  }
}
