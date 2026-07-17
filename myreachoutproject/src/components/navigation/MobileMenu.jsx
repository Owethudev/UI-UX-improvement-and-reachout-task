import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu({ open, onClose, items = [] }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const restoreBodyScroll = () => {
      document.body.style.overflow = "";
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    window.setTimeout(() => {
      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const focusTarget = focusableElements?.[0] ?? dialogRef.current;
      focusTarget?.focus();
    }, 40);

    return () => {
      restoreBodyScroll();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] bg-[#111111] lg:hidden"
          role="presentation"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[#111111]" />
          <motion.div
            ref={dialogRef}
            className="relative ml-auto flex h-full w-[88%] max-w-sm flex-col border-l border-black/10 bg-white p-5 shadow-[0_24px_80px_rgba(17,17,17,0.28)]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-1 pt-1">
              <span className="text-base font-black uppercase tracking-[0.24em] text-[#111111]">
                Mega<span className="text-[#D4AF37]">Mall</span>
              </span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-[#111111] transition hover:bg-[#f7f7f2] hover:text-[#D4AF37]"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-2 rounded-[1.5rem] bg-white p-3" aria-label="Mobile navigation links">
              {items.map((item) => (
                <Link
                  key={item.label}
                  to={item.to || item.href || "/"}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-[1.2rem] border border-transparent px-4 py-3.5 text-base font-semibold text-[#111111] transition-all duration-200 hover:border-[#D4AF37]/20 hover:bg-[#fff8e8] hover:text-[#D4AF37]"
                >
                  <span>{item.label}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#D4AF37] transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
