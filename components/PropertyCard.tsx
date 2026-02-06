"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Home, Bed, Bath, Maximize2 } from "lucide-react";
import { InvestmentProperty } from "@/types";

const AUTO_ADVANCE_MS = 4000;

type PropertyCardProps = Partial<InvestmentProperty> & {
  badge?: string;
  title?: string;
  imageSrc?: string | null;
  images?: string[];
  dots?: number;
  activeDot?: number;
  showChat?: boolean;
  roi?: number;
  cashFlow?: number;
  appreciation?: number;
};

export default function PropertyCard(props: PropertyCardProps) {
  const {
    badge,
    title,
    imageSrc,
    images: imagesProp,
    dots: dotsProp,
    activeDot: activeDotProp,
    showChat = true,
    id,
    location,
    financials,
    metrics,
    status,
    isNew,
  } = props;

  const images = imagesProp ?? (imageSrc ? [imageSrc] : []);
  const [activeIndex, setActiveIndex] = useState(activeDotProp ?? 0);
  const dotCount = dotsProp ?? images.length;
  const safeIndex = images.length ? activeIndex % images.length : 0;
  const showDots = images.length > 1 && dotCount > 0;

  // Use provided data or fallback to props
  const displayTitle = title || 'Property';
  const displayBadge = badge || (isNew ? 'New' : (status === 'under-contract' ? 'Under Contract' : (status === 'sold' ? 'Sold' : location?.city)));
  const roi = financials?.roi;
  const cashFlow = financials?.netCashFlow;
  const appreciation = financials?.appreciation;
  const price = financials?.currentValue;
  const beds = metrics?.bedsCount;
  const baths = metrics?.bathsCount;
  const sqft = metrics?.sqft;

  const goTo = useCallback(
    (index: number) => {
      if (images.length <= 1) return;
      setActiveIndex(index % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [images.length]);

  const slideTransition = { type: "tween" as const, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const };

  const cardContent = (
    <motion.div
      className="group relative h-[320px] w-full overflow-hidden rounded-xl bg-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300"
      initial={false}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      {images.length > 0 ? (
        <AnimatePresence initial={false}>
          <motion.div
            key={safeIndex}
            className="absolute inset-0"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={slideTransition}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src={images[safeIndex]!}
                alt={displayTitle}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 418px"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]" />
      )}

      {/* Dark gradient overlay for better text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />

      {/* Status badge for sold/under contract */}
      {(status === 'sold' || status === 'under-contract') && (
        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
          <span className="text-white text-2xl font-bold uppercase tracking-wide px-6 py-3 bg-black/60 rounded-lg">
            {status === 'sold' ? 'Sold' : 'Under Contract'}
          </span>
        </div>
      )}

      {/* Top Bar - Badges and Wishlist */}
      <div className="absolute top-0 left-0 right-0 p-3 flex items-start justify-between z-20">
        {/* Left side - Performance badges */}
        <div className="flex flex-col gap-1.5">
          {roi !== undefined && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-1 rounded-full bg-[#12B76A] px-3 py-1.5 text-xs font-bold text-white shadow-lg"
            >
              <Home className="h-3 w-3" />
              ROI {roi.toFixed(1)}%
            </motion.span>
          )}
          {cashFlow !== undefined && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-1 rounded-full bg-[#4545FE] px-3 py-1.5 text-xs font-bold text-white shadow-lg"
            >
              ${(cashFlow/1000).toFixed(1)}K/mo
            </motion.span>
          )}
          {appreciation !== undefined && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1 rounded-full bg-[#14B8A6] px-3 py-1.5 text-xs font-bold text-white shadow-lg"
            >
              +{appreciation.toFixed(1)}%
            </motion.span>
          )}
        </div>

        {/* Right side - Action buttons */}
        {showChat && status === 'active' && (
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#242526] text-white shadow-lg hover:bg-[#3a3a3c] transition-colors"
            aria-label="Chat"
          >
            <Image src="/icons/chat.svg" alt="Chat" width={20} height={20} />
          </button>
        )}
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <div className="mb-2 flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-white/80" />
          <p className="text-xs font-semibold uppercase tracking-wide text-white/90">{displayBadge}</p>
        </div>
        <h3 className="text-lg font-bold text-white leading-tight line-clamp-2 mb-2">
          {displayTitle}
        </h3>

        {/* Property details */}
        {(price || beds || baths || sqft) && (
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {price && (
              <span className="text-white font-bold text-xl">
                ${(price / 1000).toFixed(0)}K
              </span>
            )}
            {(beds || baths || sqft) && (
              <div className="flex items-center gap-3 text-white/90 text-xs">
                {beds !== undefined && beds > 0 && (
                  <span className="flex items-center gap-1">
                    <Bed className="h-3.5 w-3.5" />
                    {beds}
                  </span>
                )}
                {baths !== undefined && baths > 0 && (
                  <span className="flex items-center gap-1">
                    <Bath className="h-3.5 w-3.5" />
                    {baths}
                  </span>
                )}
                {sqft && (
                  <span className="flex items-center gap-1">
                    <Maximize2 className="h-3.5 w-3.5" />
                    {sqft.toLocaleString()} sqft
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Image dots/carousel indicators */}
        {showDots && (
          <div className="flex justify-center gap-1.5 mt-2">
            {Array.from({ length: Math.min(dotCount, images.length) }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  goTo(i);
                }}
                aria-label={`View image ${i + 1}`}
                className="p-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <motion.span
                  className={`block h-2 w-2 rounded-full transition-all ${
                    i === safeIndex
                      ? "bg-white scale-125 shadow-lg"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  animate={{ scale: i === safeIndex ? 1.25 : 1 }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  // If we have an ID, wrap in link
  if (id) {
    return (
      <Link href={`/properties/${id}`} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
