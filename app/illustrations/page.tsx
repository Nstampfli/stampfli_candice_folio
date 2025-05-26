"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { ImageModal } from "@/components/image-modal"

export default function IllustrationsPage() {
  // État pour le modal d'image
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Fonction pour ouvrir le modal avec l'image sélectionnée
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setModalOpen(true)
  }

  // Fonction pour fermer le modal
  const closeModal = () => {
    setModalOpen(false)
  }

  // In a real app, this data would come from a database or CMS
  const illustrations = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Illustration ${i + 1}`,
    image: `/placeholder.svg?height=800&width=600&text=Illustration+${i + 1}`,
  }))

  return (
    <div className="relative min-h-screen bg-background">
      {/* Header */}
      <PageHeader
        title="Illustrations"
        imageSrc="/placeholder.svg?height=1080&width=1920&text=Illustrations"
        height="medium"
      />

      {/* Content */}
      <div className="relative z-10 bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 gap-6 sm:columns-2 md:columns-3">
            {illustrations.map((illustration, index) => (
              <motion.div
                key={illustration.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="mb-6 break-inside-avoid"
              >
                <div
                  className="group cursor-pointer overflow-hidden rounded-xl bg-gradient-primary-br p-1 shadow-xl"
                  onClick={() => openModal(illustration.image)}
                >
                  <div className="overflow-hidden rounded-lg bg-card">
                    <Image
                      src={illustration.image || "/placeholder.svg"}
                      alt={illustration.title}
                      width={600}
                      height={800}
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          src={selectedImage || "/placeholder.svg"}
          alt="Illustration en plein écran"
        />
      )}

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
