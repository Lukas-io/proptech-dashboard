"use client";

import { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { InvestmentChart, type InvestmentChartData } from "@/components/InvestmentChart";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const chartDataInitial: InvestmentChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    { label: "Total Inflow", data: [35, 5, 14, 14, 9, 36, 23, 23, 36], backgroundColor: "#4545FE", borderRadius: 0 },
    { label: "MRR", data: [27, 27, 6, 25, 2, 48, 36, 6, 33], backgroundColor: "#12B76A", borderRadius: 0 },
    { label: "Commission", data: [9, 9, 3, 9, 7, 7, 17, 17, 6], backgroundColor: "#F04438", borderRadius: 0 },
  ],
};

const chartDataNext: InvestmentChartData = {
  labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    { label: "Total Inflow", data: [28, 18, 42, 12, 31, 22, 19, 38, 25], backgroundColor: "#4545FE", borderRadius: 0 },
    { label: "MRR", data: [35, 14, 41, 8, 29, 33, 11, 44, 20], backgroundColor: "#12B76A", borderRadius: 0 },
    { label: "Commission", data: [12, 15, 8, 14, 10, 22, 19, 11, 16], backgroundColor: "#F04438", borderRadius: 0 },
  ],
};

const chartDataByStep = [chartDataInitial, chartDataNext];
const subtitleByStep = ["Showing overview Jan 2022 - Sep 2022", "Showing overview Oct 2022 - Jun 2023"];

const metricsByStep = [
  [
    { value: "₦120,000,000.00", label: "Total Inflow", change: "2.5%", trend: "up" as const, valueColor: "#4545FE" },
    { value: "₦50,000,000.00", label: "MRR", change: "2.5%", trend: "up" as const, valueColor: "#12B76A" },
    { value: "₦200,000,000.00", label: "Commission Revenue", change: "0.5%", trend: "down" as const, valueColor: "#14B8A6" },
    { value: "₦100,000,000.00", label: "GMV", change: "0.5%", trend: "down" as const, valueColor: "#F04438" },
  ],
  [
    { value: "₦142,000,000.00", label: "Total Inflow", change: "4.1%", trend: "up" as const, valueColor: "#4545FE" },
    { value: "₦58,000,000.00", label: "MRR", change: "3.2%", trend: "up" as const, valueColor: "#12B76A" },
    { value: "₦185,000,000.00", label: "Commission Revenue", change: "1.2%", trend: "down" as const, valueColor: "#14B8A6" },
    { value: "₦118,000,000.00", label: "GMV", change: "2.1%", trend: "up" as const, valueColor: "#F04438" },
  ],
];

function MetricCard({
  value,
  label,
  change,
  trend,
  valueColor,
}: {
  value: string;
  label: string;
  change: string;
  trend: "up" | "down";
  valueColor: string;
}) {
  // Determine font size based on value length
  const getValueFontSize = () => {
    const length = value.length;
    if (length > 18) return "text-xs sm:text-sm"; // Very long numbers
    if (length > 15) return "text-sm sm:text-base"; // Long numbers
    return "text-base sm:text-lg"; // Normal/short numbers
  };

  return (
    <div className="rounded-xl border border-[#E4E4E4] bg-white px-2 py-3 sm:px-3 sm:py-4 flex flex-col min-w-0 overflow-hidden">
      <p className={`${getValueFontSize()} font-semibold truncate`} style={{ color: valueColor }} title={value}>
        {value}
      </p>
      <div className="mt-1.5 sm:mt-2 flex items-center gap-2 min-w-0">
        <span className="text-xs sm:text-sm font-medium text-[#3D3D3D] shrink-0">{label}</span>
        <span className={`flex shrink-0 items-center gap-0.5 text-[10px] sm:text-xs`} style={{ color: label === "Total Inflow" ? "#12B76A" : valueColor }}>
          {trend === "up" ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
          {change}
        </span>
      </div>
    </div>
  );
}

export function PortfolioOverviewSection() {
  const [stepIndex, setStepIndex] = useState(0);
  const chartData = chartDataByStep[stepIndex]!;
  const subtitle = subtitleByStep[stepIndex]!;
  const metrics = metricsByStep[stepIndex]!;

  const goPrev = () => setStepIndex((i) => Math.max(0, i - 1));
  const goNext = () => setStepIndex((i) => Math.min(chartDataByStep.length - 1, i + 1));
  const canGoPrev = stepIndex > 0;
  const canGoNext = stepIndex < chartDataByStep.length - 1;

  return (
    <>
      <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#191919]">Sales Overview</h2>
          <p className="mt-1 text-xs text-[#606060]">{subtitle}</p>
        </div>
        <button
          type="button"
          disabled
          className="cursor-not-allowed disabled:pointer-events-auto rounded-full border border-[#D6D6D6] bg-white px-6 py-2.5 text-xs font-medium text-[#191919] opacity-60"
        >
          View Transactions
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-end gap-3">
        <div className="flex gap-2 rounded-lg bg-transparent p-0">
          <button type="button" className="rounded-lg bg-white px-4 py-2 text-sm text-[#3D3D3D]">
            1 Week
          </button>
          <button type="button" className="rounded-lg bg-white px-4 py-2 text-sm text-[#3D3D3D]">
            1 Month
          </button>
          <button type="button" className="rounded-lg bg-[#F5F5F5] px-4 py-2 text-sm font-semibold text-[#3D3D3D]">
            1 Year
          </button>
        </div>
      </div>
      <hr className="my-2.5 border-0 border-t border-[#E4E4E4]" />
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-5">
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 sm:flex sm:items-center sm:justify-center">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Previous period"
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full sm:h-7 sm:w-7 [&_svg]:size-3.5 sm:[&_svg]:size-4 ${
                canGoPrev ? "bg-[#F5F5F5] text-[#191919] hover:bg-[#E4E4E4]" : "bg-[#F5F5F5] text-[#919191] cursor-not-allowed"
              }`}
            >
              <MdArrowLeft />
            </button>
          </div>
          <div className="w-full min-w-0 px-1 sm:px-8">
            <InvestmentChart data={chartData} />
          </div>
          <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 sm:flex sm:items-center sm:justify-center">
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next period"
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full sm:h-7 sm:w-7 [&_svg]:size-3.5 sm:[&_svg]:size-4 ${
                canGoNext ? "bg-[#E4E4E4] text-[#191919] hover:bg-[#D6D6D6]" : "bg-[#E4E4E4] text-[#919191] cursor-not-allowed"
              }`}
            >
              <MdArrowRight />
            </button>
          </div>
        </div>
        <div className="grid min-w-0 w-full grid-cols-2 gap-2 sm:gap-3 lg:w-auto lg:min-w-[280px] lg:flex-1">
          {metrics.map((m) => (
            <MetricCard key={m.label} value={m.value} label={m.label} change={m.change} trend={m.trend} valueColor={m.valueColor} />
          ))}
        </div>
      </div>
    </>
  );
}
