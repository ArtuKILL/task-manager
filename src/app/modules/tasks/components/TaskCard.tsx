import { Task, TASK_STATE } from "../domain/Task";
import StateBadge from "./StateBadge";

interface TaskCardProps {
  task: Task;
}



export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="border border-black rounded-md w-min-120 w-full min-h-50 overflow-hidden">
      <div className="flex justify-between p-3 border-b border-b-black">
        <h3 className="text-lg font-semibold truncate">
          {task.title}
        </h3>
        <StateBadge state={task.state} />
      </div>
      <div className="p-2">
        <p className="text-md line-clamp-5">{task.description}</p>
      </div>
    </div>
  );
}
