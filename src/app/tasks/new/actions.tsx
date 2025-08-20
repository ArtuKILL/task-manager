'use server'
import { TaskSchema, TaskSchemaType } from "@/app/lib/FormSchema";
import { toast } from "sonner";

export async function createTask(formData: TaskSchemaType) {

  const result = TaskSchema.safeParse(formData)

  if (!result.success) {
    return {
      status: "error",
      message: result.error.message
    };
  }

  const response = await fetch(`${process.env.API_URL}/api/tasks`, {
    method: "POST",
    body: JSON.stringify({
      description: formData.description,
      state: formData.state,
      title: formData.title,
    })
  });

  return await response.json();

}
