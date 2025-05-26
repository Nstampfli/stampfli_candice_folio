"use client";

import { useTheme } from "@/components/theme-context";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="navbar-icon group hover:bg-primary/20"
      aria-label={
        theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"
      }
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
        transition={{ duration: 0.3 }}
        key={theme === "light" ? "light" : "dark"}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-foreground group-hover:text-primary" />
        ) : (
          <Sun className="h-5 w-5 text-foreground group-hover:text-primary" />
        )}
      </motion.div>
    </button>
  );
}
