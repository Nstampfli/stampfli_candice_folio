"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"
type ColorTheme = "amber" | "blue" | "purple" | "green" | "pink"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultColor?: ColorTheme
  storageKey?: string
  colorStorageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (color: ColorTheme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  colorTheme: "amber",
  setTheme: () => null,
  setColorTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultColor = "amber",
  storageKey = "vite-ui-theme",
  colorStorageKey = "vite-ui-color",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(storageKey)
      return storedTheme ? (storedTheme as Theme) : defaultTheme
    }
    return defaultTheme
  })

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    if (typeof window !== "undefined") {
      const storedColor = localStorage.getItem(colorStorageKey)
      return storedColor ? (storedColor as ColorTheme) : defaultColor
    }
    return defaultColor
  })

  useEffect(() => {
    const root = window.document.documentElement

    // Appliquer les classes immédiatement pour éviter le flash
    root.classList.remove("light", "dark")
    root.classList.remove("theme-amber", "theme-blue", "theme-purple", "theme-green", "theme-pink")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    root.classList.add(`theme-${colorTheme}`)

    // Stocker les préférences
    localStorage.setItem(storageKey, theme)
    localStorage.setItem(colorStorageKey, colorTheme)
  }, [theme, colorTheme, storageKey, colorStorageKey])

  // Ajouter un script pour éviter le flash lors du chargement initial
  useEffect(() => {
    // Cette fonction s'exécute une seule fois au montage du composant
    if (typeof window !== "undefined") {
      const script = document.createElement("script")
      script.innerHTML = `
        (function() {
          try {
            const storedTheme = localStorage.getItem("${storageKey}");
            const storedColor = localStorage.getItem("${colorStorageKey}");
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            
            const root = document.documentElement;
            
            if (storedTheme === "dark" || (storedTheme === "system" && systemTheme === "dark")) {
              root.classList.add("dark");
            } else {
              root.classList.add("light");
            }
            
            if (storedColor) {
              root.classList.add("theme-" + storedColor);
            } else {
              root.classList.add("theme-amber");
            }
          } catch (e) {
            console.error("Error applying theme:", e);
          }
        })();
      `
      script.id = "theme-initializer"

      // Vérifier si le script existe déjà pour éviter les doublons
      if (!document.getElementById("theme-initializer")) {
        document.head.appendChild(script)
      }
    }
  }, [storageKey, colorStorageKey])

  const value = {
    theme,
    colorTheme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
    },
    setColorTheme: (color: ColorTheme) => {
      setColorTheme(color)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
