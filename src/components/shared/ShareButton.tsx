import React, { useState } from 'react';
import { Share2, Check, Copy, Link } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareButtonProps {
  url: string;
  title: string;
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: `Check out ${title} on Prilo ProgramHub!`,
          url
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          handleCopyToClipboard();
        }
      }
    } else {
      handleCopyToClipboard();
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors gap-2 text-gray-700"
      >
        <Share2 className="h-5 w-5" />
        <span className="hidden sm:inline">Share</span>
      </button>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap flex items-center gap-2"
          >
            <Check className="h-4 w-4" />
            Link copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}