"use client";

import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FiSettings, FiTrendingUp, FiBarChart2 } from "react-icons/fi";
import { FaCalculator } from "react-icons/fa";

const features = [
  {
    icon: FiSettings,
    title: "Calculate ROI and cash-on-cash returns",
    description:
      "Analyze potential investments with detailed financial projections and return calculations.",
  },
  {
    icon: FiTrendingUp,
    title: "Track investment performance over time",
    description:
      "Monitor your properties against targets with real-time performance metrics and analytics.",
  },
  {
    icon: FiBarChart2,
    title: "Compare scenarios and forecast returns",
    description:
      "Adjust variables, compare investment strategies, and model future portfolio growth.",
  },
];

interface BudgetingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BudgetingModal({ open, onClose }: BudgetingModalProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        showCloseButton={true}
        className="max-w-[438px] gap-0 overflow-visible rounded-[10px] border-0 bg-transparent p-0 shadow-none **:data-[slot=dialog-close]:text-white **:data-[slot=dialog-close]:hover:bg-white/10 **:data-[slot=dialog-close]:hover:text-white"
        aria-labelledby="calculator-dialog-title"
      >
        <div
          className="relative z-0 flex justify-center px-6 pt-[26px] pb-0"
          style={{
            backgroundColor: "#105B48",
            borderRadius: "10px 10px 0 0",
            marginBottom: "-80px",
          }}
        >
          <div className="relative h-[264px] w-[386px] overflow-hidden rounded-xl">
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(16,91,72,0.9) 0%, rgba(16,91,72,0.95) 100%)",
              }}
            />
            <div className="absolute left-1/2 top-[48%] z-10 -translate-x-1/2 -translate-y-1/2">
              <FaCalculator className="size-20 text-white" />
            </div>
          </div>
        </div>

        <div className="relative z-10 rounded-b-2xl bg-white px-12 py-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="mb-6 flex items-center gap-[25px]"
              >
                <Icon
                  className="size-6 shrink-0 text-[#52525B]"
                  strokeWidth={1.5}
                />
                <div className="flex flex-col gap-1">
                  <h3
                    id={index === 0 ? "calculator-dialog-title" : undefined}
                    className="font-[Euclid_Circular_B] text-base font-semibold text-[#191919]"
                  >
                    {feature.title}
                  </h3>
                  <p className="font-[Euclid_Circular_B] text-xs font-normal text-[#606060]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
          <Button
            onClick={onClose}
            className="mt-2 h-12 w-full rounded-[50px] bg-[#105B48] font-[Euclid_Circular_B] text-base font-medium text-white hover:bg-[#0d4a39]"
          >
            Open Calculator
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
