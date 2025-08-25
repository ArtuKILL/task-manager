import getTaskService from "@/app/lib/TaskServicesSingleton";
import { TaskService } from "@/app/modules/tasks/application/TaskService";
import TaskCard from "@/app/modules/tasks/components/TaskCard";
import { Task } from "@/app/modules/tasks/domain/Task";
import { TaskRepository } from "@/app/modules/tasks/infrastructure/TaskRepository";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Task"
};

interface SingleTaskPageParams {
  id: string;
};

export default async function SingleTaskPage({ params }: { params: Promise<SingleTaskPageParams> }) {
  const { id } = await params;
  const taskService = getTaskService();
  const taskId = parseInt(id);


  if (isNaN(taskId)) {
    notFound();
  }

  try {
    const task: Task = await taskService.getTask(taskId);
    return (
      <div className="min-h-screen">
        {task &&
          <TaskCard task={task} />}

      </div>
    )
  } catch {
    notFound();
  }
} 
