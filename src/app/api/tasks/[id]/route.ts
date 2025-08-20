import { TaskService } from "@/app/modules/tasks/application/TaskService";
import { Task } from "@/app/modules/tasks/domain/Task";
import { TaskRepository } from "@/app/modules/tasks/infrastructure/TaskRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest, ctx: RouteContext<'/tasks/[id]'>) {
  const {id} = await ctx.params;
  const taskRepo = new TaskRepository();
  const taskService = new TaskService(taskRepo);
  const taskId: number = parseInt(id);
  if (isNaN(taskId)) {
    return NextResponse.json({ error: "bad request" }, { status: 400 })
  };
  try {
    const task: Task = await taskService.getTask(taskId);
    const responseTask = {
      id: task.id,
      title: task.title,
      description: task.description,
      state: task.state
    }
    return NextResponse.json(responseTask, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal Service Error" }, { status: 500 });
  }
};
