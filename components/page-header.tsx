"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface PageHeaderProps {
  title: string
  imageSrc: string
  height?: "small" | "medium" | "large"
}

export function PageHeader({ title, imageSrc, height = "medium" }: PageHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const heightClass = {
    small: "h-[30vh]",
    medium: "h-[50vh]",
    large: "h-[70vh]",
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${heightClass[height]}`}>
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/80 opacity-60 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl font-bold italic text-white drop-shadow-lg md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  )
}
