"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavTab from "./NavTab";
import { CalendarDrawer } from "./CalendarDrawer";
import { BudgetingModal } from "./BudgetingModal";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Header() {
    const pathname = usePathname();
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-[#105B48]">
            <div className="flex h-14 items-center justify-between px-4 sm:h-20 sm:px-6 md:px-16">
                <div className="flex items-center gap-2">
                    <Image src="/icons/Logo.svg" alt="Expert Investment" width={180} height={32} className="h-8 w-auto" />
                </div>
                <div className="flex items-center gap-3 sm:gap-6">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon-lg"
                                className="hidden text-white/90 hover:bg-white/10 hover:text-white sm:flex [&_svg]:size-7"
                                aria-label="Investment Calculator"
                                onClick={() => setCalculatorOpen(true)}
                            >
                                <Image src="/icons/budget.svg" alt="" width={28} height={36} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Investment Calculator</TooltipContent>
                    </Tooltip>
                    <BudgetingModal open={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
                    <CalendarDrawer
                        trigger={
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon-lg"
                                className="hidden text-white/90 hover:bg-white/10 hover:text-white sm:flex [&_svg]:size-7"
                                aria-label="Calendar"
                            >
                                <Image src="/icons/calendar.svg" alt="" width={28} height={36} />
                            </Button>
                        }
                    />
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon-lg"
                                disabled
                                className="hidden text-white/90 hover:bg-white/10 hover:text-white sm:flex [&_svg]:size-7"
                                aria-label="Activity Log"
                            >
                                <Image src="/icons/document-search.svg" alt="" width={28} height={36} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Activity Log</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon-lg"
                                disabled
                                className="hidden text-white/90 hover:bg-white/10 hover:text-white sm:flex [&_svg]:size-7"
                                aria-label="Reports"
                            >
                                <Image src="/icons/payout.svg" alt="" width={28} height={36} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Reports</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon-lg"
                                disabled
                                className="hidden cursor text-white/90 hover:bg-white/10 hover:text-white sm:flex [&_svg]:size-7"
                                aria-label="Market Insights"
                            >
                                <Image src="/icons/market-place.svg" alt="" width={28} height={36} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Market Insights</TooltipContent>
                    </Tooltip>
                    <Avatar size="lg" className="size-9 bg-white text-[#105B48] sm:size-10 cursor-not-allowed">
                        <AvatarFallback className="text-sm font-medium sm:text-base">A</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <nav className="flex items-center gap-1 overflow-x-auto border-t border-white/10 bg-white px-4 py-3 sm:gap-2 sm:px-6 sm:py-3 md:justify-between md:px-16">
                <NavTab href="/" active={pathname === "/"} label="Dashboard" icon="dashboard" />
                <NavTab href="/properties" active={pathname === "/properties"} label="Listings" icon="listings" />
                <NavTab href="/investors" active={pathname === "/investors"} label="Users" icon="users" />
                <NavTab href="/opportunities" active={pathname === "/opportunities"} label="Request" icon="requests" />
                <NavTab href="/proposals" active={pathname === "/proposals"} label="Applications" icon="applications" />
                <NavTab href="/tasks" active={pathname === "/tasks"} label="Tasks" icon="tasks" />
            </nav>
        </header>
    );
}
