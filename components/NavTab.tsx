import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NavTab({ active, label, icon, href }: { active?: boolean; label: string; icon: string; href?: string }) {
    const content = (
        <>
            {icon === "home" && <Image src="/icons/dashboard.svg" alt="" width={20} height={20} />}
            {icon === "briefcase" && <Image src="/icons/listings.svg" alt="" width={20} height={20} />}
            {icon === "user" && <Image src="/icons/profile.svg" alt="" width={20} height={20} />}
            {icon === "document" && <Image src="/icons/request.svg" alt="" width={20} height={20} />}
            {icon === "scroll" && <Image src="/icons/applications.svg" alt="" width={20} height={20} />}
            {icon === "task" && <Image src="/icons/tasks.svg" alt="" width={20} height={20} />}
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