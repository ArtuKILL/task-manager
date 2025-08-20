import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${process.env.APP_NAME || "Task Manager"} - Home`
};

export default function Home() {
  return (
    <div className="w-full h-screen">
    </div>
  );
}
