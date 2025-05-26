"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Lock } from "lucide-react"

interface PasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (password: string) => void
  projectTitle: string
}

export function PasswordModal({ isOpen, onClose, onSubmit, projectTitle }: PasswordModalProps) {
  const [password, setPassword] = useState("")
  const [isShaking, setIsShaking] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!password.trim()) {
      setError("Veuillez entrer un mot de passe")
      handleShake()
      return
    }

    onSubmit(password)
  }

  const handleShake = () => {
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-md overflow-hidden rounded-2xl bg-gradient-primary-br p-0.5 ${isShaking ? "animate-shake" : ""}`}
      >
        <div className="rounded-[14px] bg-neutral-900 p-8">
          <div className="mb-6 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
              <Lock className="h-8 w-8 text-white" />
            </div>
          </div>

          <h3 className="mb-2 text-center font-serif text-2xl font-bold text-white">Accès Protégé</h3>
          <p className="mb-6 text-center text-white/70">
            Ce projet est protégé. Veuillez entrer le mot de passe pour y accéder.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError("")
                }}
                placeholder="Entrez le mot de passe"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                className="flex-1 rounded-lg bg-gradient-primary px-4 py-3 text-center font-medium text-white transition-transform hover:scale-105"
              >
                Accéder au projet
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-white/10 px-4 py-3 text-center font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
