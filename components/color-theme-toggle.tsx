"use client"

import { useState } from "react"
import { useTheme } from "@/components/theme-context"
import { Palette } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ColorThemeToggle() {
  const { colorTheme, setColorTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const colorOptions = [
    { name: "amber", label: "Ambre", class: "bg-gradient-to-r from-amber-500 to-orange-500" },
    { name: "blue", label: "Bleu", class: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { name: "purple", label: "Violet", class: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "green", label: "Vert", class: "bg-gradient-to-r from-emerald-500 to-teal-500" },
    { name: "pink", label: "Rose", class: "bg-gradient-to-r from-pink-500 to-rose-500" },
  ]

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleColorChange = (color: string) => {
    setColorTheme(color as any)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Changer la couleur du thème"
      >
        <Palette className="h-5 w-5 text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full z-50 mt-2 w-48 origin-top-right rounded-lg bg-white p-2 shadow-lg dark:bg-neutral-900"
          >
            <div className="space-y-1 py-1">
              {colorOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => handleColorChange(option.name)}
                  className={`flex w-full items-center rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted ${
                    colorTheme === option.name ? "bg-muted" : ""
                  }`}
                >
                  <span className={`mr-2 inline-block h-4 w-4 rounded-full ${option.class}`}></span>
                  {option.label}
                  {colorTheme === option.name && (
                    <svg
                      className="ml-auto h-4 w-4 text-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
