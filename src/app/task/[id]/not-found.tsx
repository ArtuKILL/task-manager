'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function TaskNotFound() {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      toast.error("Task not found");
      router.push("/");
    }, 3000);
  }, [router]);


  return (
    <div className="flex h-screen items-center justify-center">
      <h2 className="text-red-500 font-bold text-5xl">TASK NOT FOUND - ERROR 404</h2>
    </div>
  );
}
