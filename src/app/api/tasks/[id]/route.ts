import getTaskService from "@/app/lib/TaskServicesSingleton";
import { Task } from "@/app/modules/tasks/domain/Task";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  console.log(params);
  const { id } = await params;
  console.log(params);
  const taskService = getTaskService();
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
