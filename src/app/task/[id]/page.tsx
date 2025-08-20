import TaskCard from "@/app/modules/tasks/components/TaskCard";
import { Task } from "@/app/modules/tasks/domain/Task";
import { Metadata } from "next";
import { notFound, redirect, RedirectType } from "next/navigation";

export const metadata: Metadata = {
  title: "Task"
};

interface SingleTaskPageParams {
  id: string;
};

export default async function SingleTaskPage({params}: {params: Promise<SingleTaskPageParams>}){
  const {id} = await params;
  const response = await fetch(`${process.env.API_URL}/api/tasks/${id}`);
  const task: Task = await response.json();


  if (!response.ok){
    notFound();
  }
  
  return (
    <div className="min-h-screen">
    {task && 
    <TaskCard task={task}/>}

    </div>
  )
} 
