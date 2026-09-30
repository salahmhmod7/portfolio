"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    let lastHidden = false;
    let lastActive = "home";
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = window.scrollY;
        const nextHidden = y > last && y > 120;
        last = y;
        if (nextHidden !== lastHidden) {
          lastHidden = nextHidden;
          setHidden(nextHidden);
        }

        // active section (cheap: offsetTop reads only, no layout thrash)
        const sections = navigationItems
          .map((n) => document.getElementById(n.id))
          .filter(Boolean) as HTMLElement[];
        const scrollPos = y + 160;
        let current = "home";
        for (const s of sections) {
          if (s.offsetTop <= scrollPos) current = s.id;
        }
        if (current !== lastActive) {
          lastActive = current;
          setActive(current);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-4 z-[70] flex justify-center px-4"
      >
        <nav className="glass-strong flex w-full max-w-4xl items-center justify-between rounded-full px-3 py-2 sm:px-4">
          <a
            href="#home"
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight"
          >
            <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(94,234,212,0.8)]" />
            <span className="hidden sm:inline">Salah Mahmoud</span>
            <span className="sm:hidden">SM</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    active === item.id
                      ? "bg-white/[0.06] text-ink-primary"
                      : "text-ink-muted hover:text-ink-primary",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="glass-strong absolute right-0 top-0 h-full w-[78%] max-w-sm p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {navigationItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-lg text-ink-primary hover:bg-white/[0.05]"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}