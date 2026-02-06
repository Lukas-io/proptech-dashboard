import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NavTab({ active, label, icon, href }: { active?: boolean; label: string; icon: string; href?: string }) {
    const iconClassName = active
        ? "brightness-0 saturate-100 invert-[39%] sepia-[28%] saturate-[1766%] hue-rotate-[122deg]"
        : "brightness-0 saturate-100 opacity-60";

    const content = (
        <>
            {icon === "dashboard" && <Image src="/icons/dashboard.svg" alt="" width={20} height={20} className={iconClassName} />}
            {icon === "listings" && <Image src="/icons/listings.svg" alt="" width={20} height={20} className={iconClassName} />}
            {icon === "users" && <Image src="/icons/users.svg" alt="" width={20} height={20} className={iconClassName} />}
            {icon === "requests" && <Image src="/icons/requests.svg" alt="" width={20} height={20} className={iconClassName} />}
            {icon === "applications" && <Image src="/icons/applications.svg" alt="" width={20} height={20} className={iconClassName} />}
            {icon === "tasks" && <Image src="/icons/tasks.svg" alt="" width={20} height={20} className={iconClassName} />}
            {label}
        </>
    );
    const className = cn(
        "shrink-0 gap-2 rounded-lg px-4 py-2 text-sm font-medium",
        active
            ? "bg-[rgba(23,109,88,0.15)] text-[#176D58] hover:bg-[rgba(23,109,88,0.2)] hover:text-[#176D58]"
            : "text-[#3D3D3D] hover:bg-gray-100"
    );
    if (href) {
        return (
            <Button variant="ghost" size="sm" className={className} asChild>
                <Link href={href}>{content}</Link>
            </Button>
        );
    }
    return (
        <Button variant="ghost" size="sm" className={className}>
            {content}
        </Button>
    );
}