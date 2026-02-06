"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  datasets: {
    bar: {
      barPercentage: 0.7,
      categoryPercentage: 0.6,
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: {
        font: { size: 10 },
        color: "#919191",
      },
    },
    y: {
      min: 0,
      max: 60,
      border: { display: true, color: "#E4E4E4" },
      grid: { display: false },
      ticks: {
        stepSize: 10,
        font: { size: 10 },
        color: "#919191",
        callback: (value: string | number) => {
          const n = Number(value);
          return n === 0 ? "0" : `${n}`;
        },
      },
    },
  },
};

const defaultLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export type InvestmentChartData = {
  labels: string[];
  datasets: { label: string; data: number[]; backgroundColor: string; borderRadius: number }[];
};

const defaultData: InvestmentChartData = {
  labels: defaultLabels,
  datasets: [
    { label: "Portfolio Value", data: [9850000, 9920000, 10050000, 10180000, 10220000, 10310000, 10385000, 10450000, 10520000, 10590000, 10625000, 10655000], backgroundColor: "#4545FE", borderRadius: 0 },
    { label: "Cash Flow", data: [38200, 38800, 39200, 39600, 39900, 40200, 40600, 41000, 41300, 41600, 41800, 41900], backgroundColor: "#12B76A", borderRadius: 0 },
  ],
};

export function InvestmentChart({ data = defaultData }: { data?: InvestmentChartData }) {
  return (
    <div className="h-[180px] w-full min-h-0 sm:h-[200px]">
      <Bar options={options} data={data} />
    </div>
  );
}
