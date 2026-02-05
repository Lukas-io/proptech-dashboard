"use client";

import * as React from "react";
import { addMonths, format, subMonths } from "date-fns";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

function generateCalendarDays(currentDate: Date): Date[] {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days: Date[] = [];
  const totalDays = 42;
  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    days.push(date);
  }
  return days;
}

export function CalendarDrawer({
  trigger,
  open,
  onOpenChange,
  tooltipLabel = "Calendar",
}: {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  tooltipLabel?: string;
}) {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const calendarDays = React.useMemo(
    () => generateCalendarDays(currentDate),
    [currentDate]
  );

  const handlePreviousMonth = () => {
    setIsTransitioning(true);
    setCurrentDate((d) => subMonths(d, 1));
    setTimeout(() => setIsTransitioning(false), 200);
  };

  const handleNextMonth = () => {
    setIsTransitioning(true);
    setCurrentDate((d) => addMonths(d, 1));
    setTimeout(() => setIsTransitioning(false), 200);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <Tooltip>
        <DrawerTrigger asChild>
          <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        </DrawerTrigger>
        <TooltipContent>{tooltipLabel}</TooltipContent>
      </Tooltip>
      <DrawerContent
        className={cn(
          "h-full max-h-full w-[400px] max-w-full rounded-none border-l border-[#242424] bg-black p-0",
          "data-[vaul-drawer-direction=right]:mt-0 data-[vaul-drawer-direction=right]:max-h-none"
        )}
      >
        <div className="hidden" aria-hidden />
        <DrawerHeader className="flex flex-row items-center justify-between border-0 bg-[#171717] px-[23px] py-[13px]">
          <div className="flex items-center gap-2">
            <DrawerClose asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 text-white hover:bg-white/10 hover:text-white"
                aria-label="Back"
              >
                <ArrowLeft className="size-5" />
              </Button>
            </DrawerClose>
            <DrawerTitle className="text-base font-semibold text-white">
              Calendar
            </DrawerTitle>
          </div>
          <DrawerClose asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 text-white hover:bg-white/10 hover:text-white"
              aria-label="Close calendar"
            >
              <X className="size-5" />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div className="flex items-center justify-center gap-4 px-6 py-[17px]">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-[30px] text-white hover:scale-110 hover:bg-white/10 hover:text-white active:scale-95"
            onClick={handlePreviousMonth}
            aria-label="Previous month"
          >
            <ChevronLeft className="size-[14px] text-[#969696]" />
          </Button>
          <span
            className={cn(
              "min-w-[121px] text-center text-base font-semibold text-white transition-all duration-200",
              isTransitioning && "scale-95 opacity-50"
            )}
          >
            {format(currentDate, "MMMM yyyy")}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-[30px] text-white hover:scale-110 hover:bg-white/10 hover:text-white active:scale-95"
            onClick={handleNextMonth}
            aria-label="Next month"
          >
            <ChevronRight className="size-[14px] text-[#969696]" />
          </Button>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden px-6 pb-6">
          <div className="grid grid-cols-7">
            {WEEK_DAYS.map((day) => (
              <div
                key={day}
                className="flex h-[20px] w-[50px] items-start justify-start border border-[#242424] bg-transparent px-[5.68px] py-[5.68px] text-left text-[7.58px] font-semibold uppercase tracking-wide text-[#969696] first:rounded-tl-lg last:rounded-tr-lg"
              >
                {day}
              </div>
            ))}
          </div>
          <div
            className={cn(
              "grid grid-cols-7 transition-all duration-300",
              isTransitioning && "translate-y-2.5 opacity-70"
            )}
          >
            {calendarDays.map((date, index) => {
              const isSelected =
                selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();
              const isToday =
                date.getDate() === new Date().getDate() &&
                date.getMonth() === new Date().getMonth() &&
                date.getFullYear() === new Date().getFullYear();
              const isOutside = date.getMonth() !== currentDate.getMonth();
              const isFirstDayOfMonth = date.getDate() === 1;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDateSelect(date)}
                  className={cn(
                    "relative flex h-[90px] w-[50px] cursor-pointer items-start justify-start border border-[#242424] bg-transparent p-0 pl-[5.68px] pt-[5.68px] transition-all duration-200 hover:scale-[1.02] hover:bg-white/10",
                    isToday && !isSelected && "border-2 border-[#2525E6]"
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-[5.68px] top-[5.68px] z-0 h-5 rounded-xl transition-all duration-200",
                      isFirstDayOfMonth ? "w-10" : "w-7",
                      isSelected ? "bg-[#2525E6]" : "bg-transparent"
                    )}
                  />
                  <span
                    className={cn(
                      "relative z-10 text-center text-[9.94px] font-medium transition-all duration-200",
                      isSelected
                        ? "left-[9px] top-[3px] font-semibold text-white"
                        : "text-left",
                      !isSelected && isOutside && "text-[rgba(187,187,187,0.6)]",
                      !isSelected && !isOutside && "text-[#969696]"
                    )}
                  >
                    {isFirstDayOfMonth
                      ? `${format(date, "MMM")} ${date.getDate()}`
                      : date.getDate()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
