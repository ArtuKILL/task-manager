import type { Metadata } from 'next';
import { Task, TaskState } from './modules/tasks/domain/Task';
import TaskCard from './modules/tasks/components/TaskCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `${process.env.APP_NAME || "Task Manager"} - Home`
};

export default async function Home() {

  const response = await fetch(`${process.env.API_URL}/api/tasks`, {
    method: "GET",
  });

  const tasks: Task[] = await response.json();

  const taskElements = tasks.map(task => (
    <Link href={`/task/${task.id}`} key={`task-${task.id}`}>
      <TaskCard task={task} />
    </Link>
  ));

  return (
    <div className="w-full max-h-max min-h-screen overflow-hidden">
      <div className='grid grid-cols-3 gap-3'>
        {taskElements}
      </div>
    </div>
  );
}
