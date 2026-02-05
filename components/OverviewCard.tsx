import Image from "next/image";

export default function OverviewCard({
    title,
    icon,
    items,
}: {
    title: string;
    icon: React.ReactNode;
    items: { label: string; value: string }[];
}) {
    return (
        <div className="rounded-2xl border h-full border-[#E4E4E4] bg-white overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#E4E4E4] bg-[#F9FAFB] px-4 py-3 ">
                <div className="flex items-center gap-2">
                    {icon}
                    <h3 className="text-sm font-medium text-[#292929]">{title}</h3>
                </div>
                <span className="flex cursor-not-allowed items-center gap-0.5 text-xs font-medium text-[#4545FE] opacity-70" aria-disabled="true">
                    View all
                    <Image src="/icons/arrow-right.svg" alt="View all" width={18} height={18} />
                </span>
            </div>
            <div className="flex justify-between gap-4 px-4 py-8 h-full ">
                {items.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1 h-fit">
                        <span className="text-sm font-medium text-[#525252]">{item.label}</span>
                        <span className="text-2xl font-semibold text-[#141414]">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
