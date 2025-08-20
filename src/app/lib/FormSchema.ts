import { type } from "os";
import z from "zod";

export const TaskSchema = z.object({
  title: z.string().min(3, "Title must have at least 3 characters").max(50, "Title maximun is 50 characters"),
  description: z.string().min(0).max(255, "Maximun of 255 execed"),
  state: z.enum(["DONE", "IN_PROGRESS", "PENDING"])
})

export type TaskSchemaType = z.infer<typeof TaskSchema>;
