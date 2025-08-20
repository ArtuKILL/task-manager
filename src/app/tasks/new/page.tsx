"use client";

import { Form, FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { TaskSchema, TaskSchemaType } from '@/app/lib/FormSchema';
import { TASK_STATE } from '@/app/modules/tasks/domain/Task';
import { FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem, SelectLabel } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { createTask } from './actions';
import { toast } from 'sonner';

async function onCreateTask(formValues: TaskSchemaType) {
  const response = await createTask(formValues);
  if (response.error){
    toast.error(response.error)
  } else if (response.msg) {
    toast.success(response.msg)
  } else {
    toast.error("Unkown error")
  }
}

export default function CreateNewTaskPage() {
  const form = useForm({
    resolver: standardSchemaResolver(TaskSchema),
    defaultValues: {
      title: "New Title",
      description: "",
      state: TASK_STATE.PENDING,
    },
  });
  return (
    <Form {...form}>
      <form className='px-50 min-h-screen' onSubmit={form.handleSubmit(onCreateTask)}>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Title
              </FormLabel>
              <FormControl>
                <Input placeholder='New Title'{...field} />
              </FormControl>
              <FormDescription>
                Please enter task title
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Description
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription>
                Task Description
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='state'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Task state
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Task State</SelectLabel>
                    <SelectItem value={TASK_STATE.PENDING}>Pending</SelectItem>
                    <SelectItem value={TASK_STATE.IN_PROGRESS}>In Progress</SelectItem>
                    <SelectItem value={TASK_STATE.DONE}>Done</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormDescription>
                Task State
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          Create New Task
        </Button>
      </form>
    </Form>);
}
