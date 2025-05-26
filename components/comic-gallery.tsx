"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ImageModal } from "@/components/image-modal"

interface ComicGalleryProps {
  images: string[]
  title: string
}

export function ComicGallery({ images, title }: ComicGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{
              scale: 1.05,
              rotate: index % 2 === 0 ? 2 : -2,
              transition: { duration: 0.2 },
            }}
            className="group cursor-pointer"
            onClick={() => openModal(image)}
          >
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary/80 p-1 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="relative overflow-hidden rounded-md bg-card">
                <div className="artistic-filter">
                  <div className="relative h-[180px] w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${title} - image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          src={selectedImage || "/placeholder.svg"}
          alt={`${title} en plein écran`}
        />
      )}
    </div>
  )
}
