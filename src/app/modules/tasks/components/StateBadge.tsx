import { TASK_STATE, TaskState } from "../domain/Task";

interface StateBadgeProps {
  state: TaskState;
}

export default function StateBadge({state}: StateBadgeProps) {

  const getColorClasses = (_taskState: TaskState): { text: string; border: string } => {
    switch (_taskState) {
      case "PENDING":
        return { text: "text-gray-600", border: "border-gray-600" };
      case "IN_PROGRESS":
        return { text: "text-purple-600 text-md", border: "border-purple-600" };
      case "DONE":
        return { text: "text-green-600", border: "border-green-600" };
      default:
        return { text: "text-red-600", border: "border-red-600"  };
    }
  };


  const colorClasses = getColorClasses(state);

  return (
    <div className={`text-center rounded-2xl border-1 w-35 ${colorClasses.text} ${colorClasses.border}`}>
      {state.replace("_", " ")}
    </div>
  );
}
