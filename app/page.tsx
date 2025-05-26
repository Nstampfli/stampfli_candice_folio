"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorHidden, setCursorHidden] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 250])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Après les déclarations useState
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      setCursorHidden(false)
    }

    const handleMouseLeave = () => {
      setCursorHidden(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const featuredWorks = [
    {
      title: "Animation",
      category: "2D & Character Design",
      image: "/placeholder.svg?height=600&width=800&text=Animation",
      link: "/portfolio",
    },
    {
      title: "Stop Motion",
      category: "Puppets & Sets",
      image: "/placeholder.svg?height=600&width=800&text=Stop+Motion",
      link: "/stop-motion",
    },
    {
      title: "Illustration",
      category: "Digital & Traditional",
      image: "/placeholder.svg?height=600&width=800&text=Illustration",
      link: "/illustrations",
    },
  ]

  return (
    <>
      {/* Custom cursor */}
      <div
        className={`pointer-events-none fixed z-50 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm transition-all duration-700 ease-out md:block ${cursorHidden ? "opacity-0" : "opacity-100"} hidden`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorHidden ? 0 : 1})`,
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="h-2 w-2 rounded-full bg-gradient-primary"></div>
      </div>

      {/* Hero section */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/60 opacity-70"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        </motion.div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h1 className="mb-2 font-serif text-6xl font-bold italic tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] sm:text-7xl md:text-8xl">
              Candice
            </h1>
            <h2 className="mb-6 font-serif text-3xl font-medium italic tracking-tight text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] sm:text-4xl md:text-5xl">
              Stampfli
            </h2>
            <div className="mx-auto mb-8 h-px w-24 bg-white/50"></div>
            <p className="mx-auto mb-12 max-w-xl text-lg font-light tracking-wide text-white/90 md:text-xl">
              Animation • Character Design • Illustration • Stop Motion
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="relative mx-auto mb-16 h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-70 blur-xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Candice artwork"
                className="relative z-10 rounded-full object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-8"
            >
              <Link
                href="/portfolio"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-white/10 px-8 py-3 text-lg font-medium text-white backdrop-blur-md transition-all duration-500 hover:bg-white/20 hover:pr-12"
              >
                <span className="relative z-10">Découvrir mon univers</span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="cursor-pointer"
            onClick={scrollToContent}
          >
            <svg
              className="h-8 w-8 animate-pulse text-white/70 transition-colors duration-500 hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 500 + 300}s`, // 10x plus lent (50->500, 30->300)
                animationDelay: `${Math.random() * 5}s`,
                animationName: "float",
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in-out",
              }}
            />
          ))}
        </div>
      </div>

      {/* Featured works */}
      <section className="relative bg-background py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-5xl font-bold italic text-foreground md:text-6xl">Univers Créatif</h2>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={work.link} className="group block">
                  <div className="overflow-hidden rounded-2xl bg-gradient-primary-br p-0.5">
                    <div className="aspect-[4/5] overflow-hidden rounded-[14px] bg-card">
                      <div className="relative h-full w-full">
                        <Image
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                          <div className="mb-2 text-sm font-medium uppercase tracking-wider text-white/70">
                            {work.category}
                          </div>
                          <h3 className="font-serif text-2xl font-bold">{work.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 text-center"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-lg font-medium text-foreground transition-all duration-300 hover:bg-foreground/5"
            >
              Voir tous les projets
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-card py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary opacity-30 blur-xl dark:opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary opacity-30 blur-xl dark:opacity-50"></div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=About+Me"
                  alt="Candice portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-6 font-serif text-4xl font-bold italic text-foreground md:text-5xl">À propos</h2>
              <div className="mb-6 h-px w-16 bg-gradient-primary"></div>
              <p className="mb-6 text-lg leading-relaxed text-foreground/80">
                Artiste passionnée spécialisée dans l'animation 2D, le character design et l'illustration. Mon travail
                se concentre sur la création de personnages expressifs et d'univers immersifs.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-foreground/80">
                Diplômée de l'École des Gobelins, j'ai travaillé sur divers projets allant des courts-métrages
                d'animation aux illustrations pour l'édition, en passant par le stop motion et la bande dessinée.
              </p>
              <Link href="/contact" className="group inline-flex items-center text-lg font-medium text-foreground">
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20"></div>
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20"></div>
        </div>
      </section>
    </>
  )
}
