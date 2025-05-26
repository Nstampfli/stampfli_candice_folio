"use client"

import type React from "react"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Mail, Play, Send } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after submission
      if (formRef.current) {
        formRef.current.reset()
        setFormState({ name: "", email: "", message: "" })
      }

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Header */}
      <PageHeader
        title="CV & Contact"
        imageSrc="/placeholder.svg?height=1080&width=1920&text=Contact"
        height="medium"
      />

      {/* Content */}
      <div className="relative z-10 bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* CV Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary/80 p-0.5 shadow-xl">
                <div className="rounded-lg bg-card p-6">
                  <h2 className="mb-6 font-serif text-3xl font-bold text-card-foreground">À propos de moi</h2>

                  <div className="space-y-6 text-card-foreground">
                    <p className="leading-relaxed">
                      Je suis une artiste spécialisée dans l'animation 2D, le character design et l'illustration.
                      Passionnée par la narration visuelle, je m'efforce de créer des personnages expressifs et des
                      univers immersifs.
                    </p>

                    <div>
                      <h3 className="mb-3 font-serif text-xl font-bold">Formation</h3>
                      <ul className="space-y-3">
                        <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                          <div className="font-medium">École des Gobelins</div>
                          <div className="text-sm text-muted-foreground">Diplôme en Animation, 2018-2021</div>
                        </li>
                        <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                          <div className="font-medium">École Supérieure d'Art</div>
                          <div className="text-sm text-muted-foreground">Licence en Arts Visuels, 2015-2018</div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 font-serif text-xl font-bold">Expérience</h3>
                      <ul className="space-y-3">
                        <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                          <div className="font-medium">Studio d'Animation XYZ</div>
                          <div className="text-sm">Character Designer & Animatrice</div>
                          <div className="text-sm text-muted-foreground">2021-Présent</div>
                        </li>
                        <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                          <div className="font-medium">Agence Créative ABC</div>
                          <div className="text-sm">Illustratrice Freelance</div>
                          <div className="text-sm text-muted-foreground">2019-2021</div>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="mb-3 font-serif text-xl font-bold">Compétences</h3>
                        <ul className="space-y-1 text-sm">
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Animation 2D
                          </li>
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Character Design
                          </li>
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Storyboard
                          </li>
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Illustration
                          </li>
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Stop Motion
                          </li>
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Bande Dessinée
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 font-serif text-xl font-bold">Logiciels</h3>
                        <ul className="space-y-1 text-sm">
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Adobe Photoshop
                          </li>
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Adobe Illustrator
                          </li>
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Adobe After Effects
                          </li>
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Toon Boom Harmony
                          </li>
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Procreate
                          </li>
                          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.4rem] before:h-1 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-primary/80">
                            Blender
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/CV_Candice_2023.pdf"
                        target="_blank"
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-primary/80 px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg"
                      >
                        Télécharger mon CV
                        <svg
                          className="ml-2 h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary/80 p-0.5 shadow-xl">
                <div className="rounded-lg bg-card p-6">
                  <h2 className="mb-6 font-serif text-3xl font-bold text-card-foreground">Me contacter</h2>

                  <div className="space-y-6 text-card-foreground">
                    <p className="leading-relaxed">
                      Je suis ouverte aux opportunités de freelance, collaborations et emplois à temps plein dans les
                      domaines de l'animation, l'illustration et le character design.
                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Link
                        href="mailto:candice@example.com"
                        className="group flex items-center gap-4 rounded-lg border border-border bg-background/5 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-background/10"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-sm text-muted-foreground group-hover:text-card-foreground">
                            candice@example.com
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="https://instagram.com/candice"
                        target="_blank"
                        className="group flex items-center gap-4 rounded-lg border border-border bg-background/5 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-background/10"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80">
                          <Instagram className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Instagram</div>
                          <div className="text-sm text-muted-foreground group-hover:text-card-foreground">
                            @candice.art
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="https://linkedin.com/in/candice"
                        target="_blank"
                        className="group flex items-center gap-4 rounded-lg border border-border bg-background/5 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-background/10"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80">
                          <Linkedin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">LinkedIn</div>
                          <div className="text-sm text-muted-foreground group-hover:text-card-foreground">
                            linkedin.com/in/candice
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="https://vimeo.com/candice"
                        target="_blank"
                        className="group flex items-center gap-4 rounded-lg border border-border bg-background/5 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-background/10"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Vimeo</div>
                          <div className="text-sm text-muted-foreground group-hover:text-card-foreground">
                            vimeo.com/candice
                          </div>
                        </div>
                      </Link>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-4">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-card-foreground">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-input bg-background/5 px-4 py-3 text-card-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-card-foreground">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-input bg-background/5 px-4 py-3 text-card-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-card-foreground">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full rounded-lg border border-input bg-background/5 px-4 py-3 text-card-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                          placeholder="Votre message..."
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="mr-2 h-5 w-5 animate-spin text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Envoi en cours...
                            </>
                          ) : isSubmitted ? (
                            <>
                              <svg
                                className="mr-2 h-5 w-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                              Message envoyé !
                            </>
                          ) : (
                            <>
                              Envoyer le message
                              <Send className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-foreground opacity-5 dark:opacity-10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              animationName: i % 2 === 0 ? "float1" : "float2",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  )
}
