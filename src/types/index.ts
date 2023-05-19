export type TodoStatus = "not-started" | "complete";

export type Todo = {
  id: string;
  status: TodoStatus;
  title: string;
};
