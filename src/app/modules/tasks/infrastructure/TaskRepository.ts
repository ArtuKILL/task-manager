import Client from "@/app/lib/PrismaClient";
import { Task } from "../domain/Task";
import { IRepository } from "./IRepository";
import { Prisma, TaskModel } from "@/generated/prisma/client";
import { ERROR_CODES } from "@/app/lib/ErrorCodes";
import { PrismaClientValidationError } from "@/generated/prisma/internal/prismaNamespace";

export class TaskRepository implements IRepository<Task, TaskModel> {

  private _client = Client;

  public async create(task: Task): Promise<TaskModel> {
    console.log("create");
    return new Promise((resolve, reject) => {
      try {
        resolve(this._client.taskModel.create({
          data: {
            id: task.id,
            title: task.title,
            content: task.description,
            state: task.state
          }
        }));
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2002') {
            reject(new Error("task id already taken", { cause: ERROR_CODES.CONFLICT }));
          } 
          else {
            reject(new Error("Internal server error", { cause: ERROR_CODES.INTERNAL_SERVER }));
          }
        } else {
          reject(new Error("Internal server error", { cause: ERROR_CODES.INTERNAL_SERVER }));
        }
      }
    });
  }

  public async delete(task: Task): Promise<TaskModel> {
    const promise = this._client.taskModel.delete({
      where: {
        id: task.id
      }
    }).finally(() => this._client.$disconnect());
    return promise;
  }

  public async getById(id: number): Promise<Task> {
    return new Promise((resolve, reject) => {
      this._client.taskModel.findUnique({
        where: {
          id: id,
        }
      }).then(
        taskModel => {
          if (taskModel)
            resolve(
              new Task({
                id: taskModel.id,
                state: taskModel.state,
                description: taskModel.content,
                title: taskModel.title
              })
            )
          else
            reject(new Error("task model not found", { cause: ERROR_CODES.NOT_FOUND }));
        }
      ).finally(() => this._client.$disconnect());
    });
  }

  public async getAll(): Promise<Task[]> {
    return new Promise((resolve) => {
      this._client.taskModel.findMany().then(
        taskModels => {
          resolve(taskModels.map(taskModel =>
            new Task({
              id: taskModel.id,
              title: taskModel.title,
              description: taskModel.content,
              state: taskModel.state,
            })
          ))
        }
      ).finally(() => this._client.$disconnect());
    })
  }

  public update(task: Task): Promise<TaskModel> {
    return this._client.taskModel.update({
      where: {
        id: task.id
      },
      data: {
        title: task.title,
        content: task.description,
        state: task.state
      }
    });
  }
}


