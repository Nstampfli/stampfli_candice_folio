"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ImageModal } from "@/components/image-modal"

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Simulating portfolio pages
  const portfolioPages = [
    {
      title: "Character Design",
      description: "Exploration de personnages pour divers projets d'animation",
      images: [
        "/placeholder.svg?height=800&width=600&text=Character+1",
        "/placeholder.svg?height=800&width=600&text=Character+2",
        "/placeholder.svg?height=800&width=600&text=Character+3",
        "/placeholder.svg?height=800&width=600&text=Character+4",
      ],
    },
    {
      title: "Concept Art",
      description: "Développement visuel d'univers et d'ambiances",
      images: [
        "/placeholder.svg?height=800&width=600&text=Concept+1",
        "/placeholder.svg?height=800&width=600&text=Concept+2",
        "/placeholder.svg?height=800&width=600&text=Concept+3",
        "/placeholder.svg?height=800&width=600&text=Concept+4",
      ],
    },
    {
      title: "Animation Frames",
      description: "Sélection d'images clés de projets d'animation",
      images: [
        "/placeholder.svg?height=800&width=600&text=Animation+1",
        "/placeholder.svg?height=800&width=600&text=Animation+2",
        "/placeholder.svg?height=800&width=600&text=Animation+3",
        "/placeholder.svg?height=800&width=600&text=Animation+4",
      ],
    },
    {
      title: "Storyboards",
      description: "Planification visuelle de séquences narratives",
      images: [
        "/placeholder.svg?height=800&width=600&text=Storyboard+1",
        "/placeholder.svg?height=800&width=600&text=Storyboard+2",
        "/placeholder.svg?height=800&width=600&text=Storyboard+3",
        "/placeholder.svg?height=800&width=600&text=Storyboard+4",
      ],
    },
  ]

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev === portfolioPages.length - 1 ? 0 : prev + 1))
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? portfolioPages.length - 1 : prev - 1))
  }

  const goToPage = (index: number) => {
    setCurrentPage(index)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <PageHeader title="Portfolio" imageSrc="/placeholder.svg?height=1080&width=1920&text=Portfolio" height="medium" />

      {/* Portfolio Content */}
      <div className="relative bg-background py-16">
        <div className="container mx-auto px-4">
          {/* Section Navigation */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {portfolioPages.map((page, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  currentPage === index ? "text-white" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {currentPage === index && (
                  <motion.span
                    layoutId="portfolio-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{page.title}</span>
              </button>
            ))}
          </div>

          {/* Current Section */}
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="mb-8 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground">{portfolioPages[currentPage].title}</h2>
              <p className="mt-2 text-muted-foreground">{portfolioPages[currentPage].description}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {portfolioPages[currentPage].images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-primary-br opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${portfolioPages[currentPage].title} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      onClick={() => openModal(image)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                      aria-label="Zoom"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevPage}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground shadow-md transition-transform hover:scale-105 hover:bg-primary hover:text-white"
              aria-label="Page précédente"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              {portfolioPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    currentPage === index ? "bg-primary w-6" : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Aller à la section ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground shadow-md transition-transform hover:scale-105 hover:bg-primary hover:text-white"
              aria-label="Page suivante"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          src={selectedImage || "/placeholder.svg"}
          alt="Portfolio image en plein écran"
        />
      )}

      {/* Floating elements */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
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
