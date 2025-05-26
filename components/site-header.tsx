"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Linkedin, Mail, Menu, Play } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/demo", label: "Bande Démo" },
    { href: "/projects", label: "Projets" },
    { href: "/illustrations", label: "Illustration/Chara" },
    { href: "/stop-motion", label: "Stop Motion" },
    { href: "/comics", label: "BD" },
    { href: "/contact", label: "CV/Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">Candice</span>
          </Link>
        </div>
        <div className="hidden flex-1 md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === route.href ? "text-primary font-semibold" : "text-foreground/60",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex md:items-center md:justify-end md:gap-4">
          <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://vimeo.com" className="text-muted-foreground hover:text-foreground">
            <Play className="h-5 w-5" />
            <span className="sr-only">Vimeo</span>
          </Link>
          <Link href="mailto:email@example.com" className="text-muted-foreground hover:text-foreground">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="px-2 py-6">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <span className="text-xl font-bold">Candice</span>
                </Link>
                <nav className="mt-6 flex flex-col space-y-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "flex py-2 text-base font-medium transition-colors hover:text-foreground/80",
                        pathname === route.href ? "text-primary font-semibold" : "text-foreground/60",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 flex items-center gap-4">
                  <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="https://vimeo.com" className="text-muted-foreground hover:text-foreground">
                    <Play className="h-5 w-5" />
                    <span className="sr-only">Vimeo</span>
                  </Link>
                  <Link href="mailto:email@example.com" className="text-muted-foreground hover:text-foreground">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
