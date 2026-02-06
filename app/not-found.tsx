import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <PageTransition>
      <main className="mx-auto flex min-h-[calc(100vh-180px)] max-w-[1440px] flex-col items-center justify-center px-4 py-12 sm:px-6 md:px-16">
        <div className="text-center">
          {/* Large 404 */}
          <div className="mb-6 flex items-center justify-center">
            <span className="text-[120px] font-bold leading-none text-[#105B48] sm:text-[160px] md:text-[200px]">
              404
            </span>
          </div>

          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-[#105B48]/10 p-6">
              <Search className="h-16 w-16 text-[#105B48]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mb-3 text-2xl font-bold text-[#191919] sm:text-3xl md:text-4xl">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-md text-base text-[#606060] sm:text-lg">
            Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full rounded-[50px] bg-[#105B48] px-8 font-[Euclid_Circular_B] text-base font-medium text-white hover:bg-[#0d4a39] sm:w-auto"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Dashboard
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-[50px] border-2 border-[#E4E4E4] px-8 font-[Euclid_Circular_B] text-base font-medium text-[#191919] hover:border-[#105B48] hover:bg-[#105B48]/5 sm:w-auto"
            >
              <Link href="/properties">
                <Search className="mr-2 h-5 w-5" />
                Browse Properties
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 rounded-2xl border border-[#E4E4E4] bg-white p-6">
            <p className="mb-4 text-sm font-semibold text-[#191919]">
              Or explore these sections:
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-lg border border-[#E4E4E4] p-3 text-left transition-colors hover:border-[#105B48] hover:bg-[#105B48]/5"
              >
                <Image src="/icons/dashboard.svg" alt="" width={20} height={20} />
                <span className="text-sm font-medium text-[#191919]">Dashboard</span>
              </Link>
              <Link
                href="/properties"
                className="flex items-center gap-2 rounded-lg border border-[#E4E4E4] p-3 text-left transition-colors hover:border-[#105B48] hover:bg-[#105B48]/5"
              >
                <Image src="/icons/listings.svg" alt="" width={20} height={20} />
                <span className="text-sm font-medium text-[#191919]">Listings</span>
              </Link>
              <Link
                href="/investors"
                className="flex items-center gap-2 rounded-lg border border-[#E4E4E4] p-3 text-left transition-colors hover:border-[#105B48] hover:bg-[#105B48]/5"
              >
                <Image src="/icons/users.svg" alt="" width={20} height={20} />
                <span className="text-sm font-medium text-[#191919]">Users</span>
              </Link>
              <Link
                href="/opportunities"
                className="flex items-center gap-2 rounded-lg border border-[#E4E4E4] p-3 text-left transition-colors hover:border-[#105B48] hover:bg-[#105B48]/5"
              >
                <Image src="/icons/requests.svg" alt="" width={20} height={20} />
                <span className="text-sm font-medium text-[#191919]">Request</span>
              </Link>
              <Link
                href="/proposals"
                className="flex items-center gap-2 rounded-lg border border-[#E4E4E4] p-3 text-left transition-colors hover:border-[#105B48] hover:bg-[#105B48]/5"
              >
                <Image src="/icons/applications.svg" alt="" width={20} height={20} />
                <span className="text-sm font-medium text-[#191919]">Applications</span>
              </Link>
              <Link
                href="/tasks"
                className="flex items-center gap-2 rounded-lg border border-[#E4E4E4] p-3 text-left transition-colors hover:border-[#105B48] hover:bg-[#105B48]/5"
              >
                <Image src="/icons/tasks.svg" alt="" width={20} height={20} />
                <span className="text-sm font-medium text-[#191919]">Tasks</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
