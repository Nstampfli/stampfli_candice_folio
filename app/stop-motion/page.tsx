"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"

export default function StopMotionPage() {
  // In a real app, this data would come from a database or CMS
  const projects = [
    {
      id: "rhinoceros",
      title: "Formation Décor Rhinocéros",
      description: "Projet de formation sur la création de décors pour le stop motion",
      image: "/placeholder.svg?height=400&width=600&text=Rhinoceros+Project",
    },
    {
      id: "show",
      title: "Show",
      description: "Projet d'animation stop motion pour une exposition",
      image: "/placeholder.svg?height=400&width=600&text=Show+Project",
    },
    {
      id: "soga",
      title: "Soga Monogatari",
      description: "Court-métrage en stop motion inspiré des contes japonais",
      image: "/placeholder.svg?height=400&width=600&text=Soga+Monogatari+Project",
    },
  ]

  return (
    <div className="relative min-h-screen bg-background">
      {/* Header */}
      <PageHeader
        title="Stop Motion"
        imageSrc="/placeholder.svg?height=1080&width=1920&text=Stop+Motion"
        height="medium"
      />

      {/* Content */}
      <div className="relative z-10 bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group"
              >
                <Link href={`/stop-motion/${project.id}`}>
                  <div className="overflow-hidden rounded-xl bg-gradient-primary-br p-1 shadow-xl">
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-card">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="mb-2 font-serif text-xl font-bold text-card-foreground">{project.title}</h2>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
