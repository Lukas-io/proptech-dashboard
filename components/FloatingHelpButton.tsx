"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function FloatingHelpButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#242526] text-white shadow-2xl hover:bg-[#3a3a3c] transition-all duration-300 hover:scale-110"
        aria-label="Help & Support"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image src="/icons/messages.svg" alt="" width={24} height={24} />
      </motion.button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <div className="p-4">
            <h2 className="text-xl font-bold text-[#191919] mb-2">Help & Support</h2>
            <p className="text-sm text-[#606060] mb-4">
              Need assistance? Our team is here to help you with your property investment journey.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:support@expertinvestment.com"
                className="block p-3 rounded-lg border border-[#E4E4E4] hover:border-[#105B48] hover:bg-[#105B48]/5 transition-colors"
              >
                <p className="font-semibold text-[#191919]">Email Support</p>
                <p className="text-sm text-[#606060]">support@expertinvestment.com</p>
              </a>
              <a
                href="tel:+1-800-555-0123"
                className="block p-3 rounded-lg border border-[#E4E4E4] hover:border-[#105B48] hover:bg-[#105B48]/5 transition-colors"
              >
                <p className="font-semibold text-[#191919]">Phone Support</p>
                <p className="text-sm text-[#606060]">+1 (800) 555-0123</p>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
