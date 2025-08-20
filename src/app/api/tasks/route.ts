import { ERROR_CODES } from "@/app/lib/ErrorCodes";
import { SUCCESS_CODES } from "@/app/lib/SuccessCodes";
import { TaskService } from "@/app/modules/tasks/application/TaskService";
import { Task } from "@/app/modules/tasks/domain/Task";
import { TaskRepository } from "@/app/modules/tasks/infrastructure/TaskRepository";
import { PrismaClientKnownRequestError } from "@/generated/prisma/internal/prismaNamespace";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const taskRepo = new TaskRepository();
  const taskService = new TaskService(taskRepo);
  const tasks: Task[] = await taskService.getAllTasks();
  const responseTasks = tasks.map(task => {
    return {
      id: task.id,
      state: task.state,
      description: task.description,
      title: task.title,
    };
  });
  return NextResponse.json(responseTasks, { status: 200 });
};

export async function POST(request: NextRequest) {
  const task = await request.json();
  const taskRepo = new TaskRepository();
  const taskService = new TaskService(taskRepo);
  try {
    if (!task.id || typeof task.id !== "number") {

      return NextResponse.json({error: "Error on task id"}, {status: ERROR_CODES.BAD_REQUEST});
    };
    await taskService.createTask(task);
    return NextResponse.json({ msg: "Task created" }, { status: SUCCESS_CODES.CREATED });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError){
      if (e.code === "P2002")
        return NextResponse.json({error: "Error on task creation, id already taken."}, {status: ERROR_CODES.CONFLICT});
    }
    return NextResponse.json({ error: "Error on task creation" }, { status: ERROR_CODES.INTERNAL_SERVER});
  }
}


