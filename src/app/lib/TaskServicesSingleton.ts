import { TaskService } from "../modules/tasks/application/TaskService";

export default function getTaskService(): TaskService {
  return TaskService.instance;
}
