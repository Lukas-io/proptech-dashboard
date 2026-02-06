"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: "/icons/budgeting/category.svg",
    title: "Set up annual budgets by account category",
    description:
      "Allocate funds across income and expense lines with full visibility.",
  },
  {
    icon: "/icons/budgeting/track.svg",
    title: "Track actuals vs budget in real time",
    description:
      "See how your community is performing against plan, month by month.",
  },
  {
    icon: "/icons/budgeting/figures.svg",
    title: "Adjust figures and forecast with ease",
    description:
      "Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.",
  },
];

interface BudgetingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BudgetingModal({ open, onClose }: BudgetingModalProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <AnimatePresence>
        {open && (
          <DialogContent
            showCloseButton={true}
            className="max-w-[438px] gap-0 overflow-visible rounded-[10px] border-0 bg-transparent p-0 shadow-none **:data-[slot=dialog-close]:text-white **:data-[slot=dialog-close]:hover:bg-white/10 **:data-[slot=dialog-close]:hover:text-white"
            aria-labelledby="calculator-dialog-title"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Top Section with Blur Background */}
              <div
                className="relative z-0 flex justify-center px-6 pt-[26px] pb-0"
                style={{
                  backgroundColor: "#0C2841",
                  borderRadius: "10px 10px 0 0",
                  marginBottom: "-80px",
                }}
              >
                <motion.div
                  className="relative h-[264px] w-[386px] overflow-hidden rounded-xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {/* Blur Background Image with Calculator Icon */}
                  <Image
                    src="/images/overview_blur_budgeting.png"
                    alt="Calculator background"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Animated floating particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-2 w-2 rounded-full bg-white/20"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Bottom Section with Features */}
              <motion.div
                className="relative z-10 rounded-b-2xl bg-white px-12 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {features.map((feature, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="mb-6 flex items-center gap-[25px]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={feature.icon}
                          alt=""
                          width={24}
                          height={24}
                          className="size-6 shrink-0"
                        />
                      </motion.div>
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
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={onClose}
                    className="mt-2 h-12 w-full rounded-[50px] bg-[#18181B] font-[Euclid_Circular_B] text-base font-medium text-white hover:bg-[#27272A] transition-all duration-300 hover:shadow-lg"
                  >
                    Open Calculator
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
