"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Info, X } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export default function DemoPage() {
  const [activeCategory, setActiveCategory] = useState("animation2D")
  const [selectedVideo, setSelectedVideo] = useState<null | {
    title: string
    description: string
    videoUrl: string
  }>(null)

  // In a real app, this data would come from a database or CMS
  const demoReels = {
    animation2D: [
      {
        id: 1,
        title: "Animation 2D Showreel 2023",
        description:
          "Compilation de mes travaux d'animation 2D réalisés en 2023. Ce showreel présente une variété de styles et de techniques d'animation, des personnages expressifs aux séquences d'action fluides.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Animation+2D+Showreel",
        duration: "2:45",
      },
      {
        id: 2,
        title: "Character Animation Demo",
        description:
          "Démonstration d'animation de personnages avec différentes expressions et mouvements. Cette démo met l'accent sur la fluidité des mouvements et l'expressivité des personnages dans diverses situations émotionnelles.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Character+Animation",
        duration: "1:30",
      },
      {
        id: 3,
        title: "Stylized Animation Techniques",
        description:
          "Exploration de techniques d'animation stylisées pour des projets artistiques. Cette démo présente des approches non conventionnelles et des effets visuels créatifs pour enrichir l'animation traditionnelle.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Stylized+Animation",
        duration: "3:15",
      },
    ],
    layoutPosing: [
      {
        id: 1,
        title: "Layout & Posing Showreel",
        description:
          "Démonstration de mes compétences en layout et posing pour l'animation. Ce showreel présente ma capacité à créer des compositions visuellement équilibrées et des poses dynamiques qui racontent une histoire.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Layout+Posing",
        duration: "2:10",
      },
      {
        id: 2,
        title: "Scene Composition Demo",
        description:
          "Exemples de compositions de scènes et de mise en place pour l'animation. Cette démo met en évidence ma compréhension de la perspective, de l'éclairage et de la composition pour créer des scènes visuellement captivantes.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Scene+Composition",
        duration: "1:45",
      },
      {
        id: 3,
        title: "Storyboard to Animation",
        description:
          "Processus de transformation d'un storyboard en animation finalisée. Cette démo montre les étapes intermédiaires et l'évolution d'une séquence, du croquis initial à l'animation complète.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Storyboard+Animation",
        duration: "4:20",
      },
    ],
    motionDesign: [
      {
        id: 1,
        title: "Motion Graphics Reel",
        description:
          "Collection de projets de motion design et d'animations graphiques. Ce showreel présente des animations de logos, des transitions créatives et des éléments graphiques animés pour divers clients.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Motion+Graphics",
        duration: "2:30",
      },
      {
        id: 2,
        title: "UI Animation Showcase",
        description:
          "Animations d'interfaces utilisateur et d'éléments interactifs. Cette démo présente des animations subtiles et fonctionnelles qui améliorent l'expérience utilisateur dans les applications et sites web.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=400&width=600&text=UI+Animation",
        duration: "1:50",
      },
    ],
  }

  const playVideo = (video: any) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Header */}
      <PageHeader
        title="Bande Démo"
        imageSrc="/placeholder.svg?height=1080&width=1920&text=Demo+Reel"
        height="medium"
      />

      {/* Content */}
      <div className="relative z-10 bg-background py-16">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-full bg-foreground/10 p-1 backdrop-blur-sm">
              <button
                onClick={() => setActiveCategory("animation2D")}
                className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "animation2D" ? "text-white" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {activeCategory === "animation2D" && (
                  <motion.span
                    layoutId="demo-category-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Animation 2D</span>
              </button>
              <button
                onClick={() => setActiveCategory("layoutPosing")}
                className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "layoutPosing" ? "text-white" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {activeCategory === "layoutPosing" && (
                  <motion.span
                    layoutId="demo-category-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Layout & Posing</span>
              </button>
              <button
                onClick={() => setActiveCategory("motionDesign")}
                className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "motionDesign" ? "text-white" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {activeCategory === "motionDesign" && (
                  <motion.span
                    layoutId="demo-category-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Motion Design</span>
              </button>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {demoReels[activeCategory as keyof typeof demoReels].map((demo, index) => (
                <motion.div
                  key={`${activeCategory}-${demo.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="overflow-hidden rounded-xl bg-gradient-primary-br p-0.5 shadow-lg">
                    <div className="rounded-lg bg-card">
                      <div className="relative aspect-video overflow-hidden rounded-t-lg">
                        <Image
                          src={demo.thumbnail || "/placeholder.svg"}
                          alt={demo.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                        {/* Play Button */}
                        <button
                          onClick={() => playVideo(demo)}
                          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/90 text-white opacity-0 shadow-lg transition-all duration-300 hover:bg-primary group-hover:opacity-100"
                          aria-label="Lire la vidéo"
                        >
                          <Play className="h-6 w-6" />
                        </button>

                        {/* Duration Badge */}
                        <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                          {demo.duration}
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="mb-1 font-serif text-lg font-bold text-card-foreground">{demo.title}</h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">{demo.description.split(".")[0]}.</p>

                        <div className="mt-4 flex justify-between">
                          <button
                            onClick={() => playVideo(demo)}
                            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                          >
                            <Play className="mr-1 h-4 w-4" />
                            Lire
                          </button>
                          <button
                            onClick={() => playVideo(demo)}
                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                          >
                            <Info className="mr-1 h-4 w-4" />
                            Détails
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-gradient-primary-br p-0.5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-lg bg-card">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="absolute h-full w-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="font-serif text-xl font-bold text-card-foreground">{selectedVideo.title}</h3>
                    <button
                      onClick={closeVideo}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20"
                      aria-label="Fermer"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-muted-foreground">{selectedVideo.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
