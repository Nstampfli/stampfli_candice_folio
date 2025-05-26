"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Menu, Play, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ColorThemeToggle } from "@/components/color-theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const routes = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/demo", label: "Bande Démo" },
    { href: "/projects", label: "Projets" },
    { href: "/illustrations", label: "Illustrations" },
    { href: "/stop-motion", label: "Stop Motion" },
    { href: "/comics", label: "BD" },
    { href: "/contact", label: "CV/Contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 bg-background/30 backdrop-blur-md ${
        scrolled ? "bg-background/80" : "bg-background/30"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <Link href="/" className="z-50 text-xl font-bold md:text-2xl">
          <span className="font-serif italic">Candice</span>
        </Link>

        {/* Desktop Navigation - visible above 900px */}
        <nav className="hidden items-center space-x-6 lg:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-500 hover:text-primary ${
                pathname === route.href ? "text-primary" : "text-foreground"
              }`}
            >
              {pathname === route.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full h-[2px] w-full bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                />
              )}
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <ColorThemeToggle />

          {/* Mobile Menu Button - visible below 900px */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20 z-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 min-h-screen z-40 flex flex-col bg-gradient-to-b from-background/95 to-background/95 p-4 pt-24 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col space-y-6 p-4">
              {routes.map((route, index) => (
                <motion.div
                  key={route.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-medium text-foreground ${
                      pathname === route.href ? "text-primary" : ""
                    }`}
                  >
                    {route.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-auto flex justify-center space-x-8 p-4"
            >
              <Link
                href="https://instagram.com"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <Instagram className="h-6 w-6 text-foreground" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <Linkedin className="h-6 w-6 text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://vimeo.com"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <Play className="h-6 w-6 text-foreground" />
                <span className="sr-only">Vimeo</span>
              </Link>
              <Link
                href="mailto:email@example.com"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <Mail className="h-6 w-6 text-foreground" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
