import { JsonObject } from "@prisma/client/runtime/library";
import { IRepository } from "../infrastructure/IRepository";
import { Prisma } from "@/generated/prisma/client";

export class TaskService<T, R> {
  private _repository;
  constructor(repository: IRepository<T, R>) {
    this._repository = repository;
  }

  public async getAllTasks(): Promise<T[]> {
    return await this._repository.getAll();
  };

  public getTask(id: number): Promise<T> {
    return this._repository.getById(id);
  }

  public async createTask(task: JsonObject) {
      const newTask: T  = task as T;
      return this._repository.create(newTask);
  }

} 
