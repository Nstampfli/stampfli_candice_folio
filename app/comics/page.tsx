"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { ComicGallery } from "@/components/comic-gallery"

export default function ComicsPage() {
  // In a real app, this data would come from a database or CMS
  const comics = [
    {
      id: "comic1",
      title: "Le Voyage Fantastique",
      description: "Une aventure dans un monde imaginaire",
      images: [
        "/placeholder.svg?height=600&width=450&text=Comic+1+Page+1",
        "/placeholder.svg?height=600&width=450&text=Comic+1+Page+2",
        "/placeholder.svg?height=600&width=450&text=Comic+1+Page+3",
        "/placeholder.svg?height=600&width=450&text=Comic+1+Page+4",
        "/placeholder.svg?height=600&width=450&text=Comic+1+Page+5",
        "/placeholder.svg?height=600&width=450&text=Comic+1+Page+6",
        "/placeholder.svg?height=600&width=450&text=Comic+1+Page+7",
        "/placeholder.svg?height=600&width=450&text=Comic+1+Page+8",
      ],
      pages: 24,
    },
    {
      id: "comic2",
      title: "Chroniques Urbaines",
      description: "Histoires courtes se déroulant en ville",
      images: [
        "/placeholder.svg?height=600&width=450&text=Comic+2+Page+1",
        "/placeholder.svg?height=600&width=450&text=Comic+2+Page+2",
        "/placeholder.svg?height=600&width=450&text=Comic+2+Page+3",
        "/placeholder.svg?height=600&width=450&text=Comic+2+Page+4",
        "/placeholder.svg?height=600&width=450&text=Comic+2+Page+5",
        "/placeholder.svg?height=600&width=450&text=Comic+2+Page+6",
      ],
      pages: 32,
    },
    {
      id: "comic3",
      title: "Mémoires d'un Chat",
      description: "La vie vue à travers les yeux d'un félin",
      images: [
        "/placeholder.svg?height=600&width=450&text=Comic+3+Page+1",
        "/placeholder.svg?height=600&width=450&text=Comic+3+Page+2",
        "/placeholder.svg?height=600&width=450&text=Comic+3+Page+3",
        "/placeholder.svg?height=600&width=450&text=Comic+3+Page+4",
        "/placeholder.svg?height=600&width=450&text=Comic+3+Page+5",
        "/placeholder.svg?height=600&width=450&text=Comic+3+Page+6",
        "/placeholder.svg?height=600&width=450&text=Comic+3+Page+7",
      ],
      pages: 18,
    },
    {
      id: "comic4",
      title: "L'Étrange Cas",
      description: "Une enquête mystérieuse dans un petit village",
      images: [
        "/placeholder.svg?height=600&width=450&text=Comic+4+Page+1",
        "/placeholder.svg?height=600&width=450&text=Comic+4+Page+2",
        "/placeholder.svg?height=600&width=450&text=Comic+4+Page+3",
        "/placeholder.svg?height=600&width=450&text=Comic+4+Page+4",
        "/placeholder.svg?height=600&width=450&text=Comic+4+Page+5",
        "/placeholder.svg?height=600&width=450&text=Comic+4+Page+6",
        "/placeholder.svg?height=600&width=450&text=Comic+4+Page+7",
        "/placeholder.svg?height=600&width=450&text=Comic+4+Page+8",
      ],
      pages: 42,
    },
  ]

  return (
    <div className="relative min-h-screen bg-background">
      {/* Header */}
      <PageHeader title="BD" imageSrc="/placeholder.svg?height=1080&width=1920&text=Comics" height="medium" />

      {/* Content */}
      <div className="relative z-10 bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {comics.map((comic, index) => (
              <motion.div
                key={comic.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Élément décoratif */}
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary opacity-20 blur-xl dark:opacity-30"></div>

                <div className="overflow-hidden rounded-xl bg-gradient-primary-br p-0.5 shadow-xl">
                  <div className="rounded-lg bg-card p-6">
                    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="font-serif text-3xl font-bold text-card-foreground">{comic.title}</h2>
                        <p className="mt-2 text-muted-foreground">{comic.description}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{comic.pages} pages</p>
                      </div>

                      <Link
                        href={`/comics/${comic.id}`}
                        className="mt-4 inline-flex items-center rounded-full bg-gradient-primary px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 md:mt-0"
                      >
                        Voir la BD complète
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>

                    <ComicGallery images={comic.images} title={comic.title} />
                  </div>
                </div>
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
