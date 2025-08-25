import { JsonObject } from "@prisma/client/runtime/library";
import { Task, TASK_STATE, TaskState } from "../domain/Task";
import { TaskRepository } from "../infrastructure/TaskRepository";

export class TaskService {
  private _repository;
  private static _instance: TaskService;


  private constructor(repository: TaskRepository) {
    this._repository = repository;
  }

  public static get instance(): TaskService {
    if (!TaskService._instance) {
      TaskService._instance = new TaskService(TaskRepository.instance);
    }
    return TaskService._instance;
  }

  public async getAllTasks(): Promise<Task[]> {
    return await this._repository.getAll();
  };

  public getTask(id: number): Promise<Task> {
    return this._repository.getById(id);
  }

  public async createTask(task: JsonObject) {

    if (typeof task.id !== "number")
      return;

    if (typeof task.description !== "string")
      return;

    if (typeof task.state !== "string")
      return;

    try {
      const newTask: Task = new Task({
        id: task.id,
        description: task.description,
        state: task.state as TaskState
      })
      return this._repository.create(newTask);
    } catch (error) {

    }


  }

} 
