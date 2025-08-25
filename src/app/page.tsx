import type { Metadata } from 'next';
import { Task } from './modules/tasks/domain/Task';
import TaskCard from './modules/tasks/components/TaskCard';
import Link from 'next/link';
import getTaskService from './lib/TaskServicesSingleton';

export const metadata: Metadata = {
  title: `${process.env.APP_NAME || "Task Manager"} - Home`
};

export default async function Home() {

  const taskService = getTaskService();
  const tasks: Task[] = await taskService.getAllTasks();

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
