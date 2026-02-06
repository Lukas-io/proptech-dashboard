import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const IconDashboard = ({ className }: { className?: string }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="currentColor"/>
    </svg>
);

const IconListings = ({ className }: { className?: string }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M21 6H16.5V5.25C16.5 4.65326 16.2629 4.08097 15.841 3.65901C15.419 3.23705 14.8467 3 14.25 3H9.75C9.15326 3 8.58097 3.23705 8.15901 3.65901C7.73705 4.08097 7.5 4.65326 7.5 5.25V6H3C2.60218 6 2.22064 6.15804 1.93934 6.43934C1.65804 6.72064 1.5 7.10218 1.5 7.5V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6ZM9 5.25C9 5.05109 9.07902 4.86032 9.21967 4.71967C9.36032 4.57902 9.55109 4.5 9.75 4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25V6H9V5.25ZM21 7.5V10.5H18V9.75C18 9.55109 17.921 9.36032 17.7803 9.21967C17.6397 9.07902 17.4489 9 17.25 9C17.0511 9 16.8603 9.07902 16.7197 9.21967C16.579 9.36032 16.5 9.55109 16.5 9.75V10.5H7.5V9.75C7.5 9.55109 7.42098 9.36032 7.28033 9.21967C7.13968 9.07902 6.94891 9 6.75 9C6.55109 9 6.36032 9.07902 6.21967 9.21967C6.07902 9.36032 6 9.55109 6 9.75V10.5H3V7.5H21ZM21 18H3V12H6V12.75C6 12.9489 6.07902 13.1397 6.21967 13.2803C6.36032 13.421 6.55109 13.5 6.75 13.5C6.94891 13.5 7.13968 13.421 7.28033 13.2803C7.42098 13.1397 7.5 12.9489 7.5 12.75V12H16.5V12.75C16.5 12.9489 16.579 13.1397 16.7197 13.2803C16.8603 13.421 17.0511 13.5 17.25 13.5C17.4489 13.5 17.6397 13.421 17.7803 13.2803C17.921 13.1397 18 12.9489 18 12.75V12H21V18Z" fill="currentColor"/>
    </svg>
);

const IconUsers = ({ className }: { className?: string }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3C16.8604 3 17.6872 3.31607 18.2998 3.87868C18.9125 4.44129 19.2727 5.22174 19.3318 6.05493C19.3909 6.88811 19.1451 7.71547 18.6391 8.38064C18.1332 9.04582 17.4025 9.5 16.5909 9.66364" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21V19C20.9986 18.1771 20.7158 17.3811 20.2009 16.7482C19.686 16.1154 18.9712 15.6846 18.1818 15.5273" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const IconRequests = ({ className }: { className?: string }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 3H10C5 3 3 5 3 10V14C3 19 5 21 10 21H14C19 21 21 19 21 14V10C21 5 19 3 14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const IconApplications = ({ className }: { className?: string }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9H9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const IconTasks = ({ className }: { className?: string }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function NavTab({ active, label, icon, href }: { active?: boolean; label: string; icon: string; href?: string }) {
    const getIcon = () => {
        const iconClass = active ? "text-[#176D58]" : "text-[#52525B]";
        switch (icon) {
            case "dashboard": return <IconDashboard className={iconClass} />;
            case "listings": return <IconListings className={iconClass} />;
            case "users": return <IconUsers className={iconClass} />;
            case "requests": return <IconRequests className={iconClass} />;
            case "applications": return <IconApplications className={iconClass} />;
            case "tasks": return <IconTasks className={iconClass} />;
            default: return null;
        }
    };

    const content = (
        <>
            {getIcon()}
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