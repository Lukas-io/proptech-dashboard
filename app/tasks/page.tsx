"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { PageTransition } from "@/components/PageTransition";

const initialTasks = [
  { id: "1", title: "Complete due diligence for Riverside Apartments", due: "Today", priority: "high", done: false },
  { id: "2", title: "Review property inspection report - Downtown Plaza", due: "Today", priority: "medium", done: false },
  { id: "3", title: "Follow up with contractor on Cherry Creek repairs", due: "Tomorrow", priority: "high", done: true },
  { id: "4", title: "Update financial projections for Miami condo", due: "Feb 7", priority: "low", done: false },
  { id: "5", title: "Send monthly portfolio report to investors", due: "Feb 8", priority: "medium", done: false },
  { id: "6", title: "Schedule property walkthrough - Nashville duplex", due: "Feb 9", priority: "medium", done: false },
  { id: "7", title: "Review lease renewal for Seattle fourplex", due: "Feb 10", priority: "low", done: true },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const completed = tasks.filter((t) => t.done).length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  return (
    <PageTransition>
      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 md:px-16">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl font-semibold text-[#191919] sm:text-2xl">Tasks</h1>
          <p className="mt-1 text-sm text-[#606060]">Track and complete investment management tasks and follow-ups</p>
        </div>

        <section className="mb-8 grid gap-4 sm:grid-cols-3">
          <Card className="border-[#E4E4E4]">
            <CardContent className="pt-4">
              <p className="text-sm text-[#525252]">Total tasks</p>
              <p className="text-2xl font-semibold text-[#191919]">{tasks.length}</p>
            </CardContent>
          </Card>
          <Card className="border-[#E4E4E4]">
            <CardContent className="pt-4">
              <p className="text-sm text-[#525252]">Completed</p>
              <p className="text-2xl font-semibold text-[#12B76A]">{completed}</p>
            </CardContent>
          </Card>
          <Card className="border-[#E4E4E4]">
            <CardContent className="pt-4">
              <p className="text-sm text-[#525252]">Progress</p>
              <p className="text-2xl font-semibold text-[#4545FE]">{progress}%</p>
            </CardContent>
          </Card>
        </section>

        <Card className="mb-6 border-[#E4E4E4]">
          <CardHeader>
            <CardTitle className="text-lg">This week</CardTitle>
            <Progress value={progress} className="h-2" />
          </CardHeader>
        </Card>

        <Card className="border-[#E4E4E4]">
          <CardHeader>
            <CardTitle className="text-lg">My tasks</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="divide-y divide-[#E4E4E4]">
              {tasks.map((task) => (
                <li key={task.id} className="flex items-center gap-4 px-4 py-3 sm:px-6">
                  <Checkbox
                    id={task.id}
                    checked={task.done}
                    onCheckedChange={() => toggleTask(task.id)}
                    className="border-[#D6D6D6] data-[state=checked]:bg-[#105B48] data-[state=checked]:border-[#105B48]"
                  />
                  <label htmlFor={task.id} className="flex-1 cursor-pointer">
                    <span className={task.done ? "text-[#606060] line-through" : "font-medium text-[#191919]"}>{task.title}</span>
                    <span className="ml-2 text-xs text-[#606060]">Due {task.due}</span>
                  </label>
                  <Badge
                    variant="secondary"
                    className={
                      task.priority === "high"
                        ? "bg-[#F04438]/15 text-[#F04438]"
                        : task.priority === "medium"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-[#F5F5F5] text-[#737373]"
                    }
                  >
                    {task.priority}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </PageTransition>
  );
}
