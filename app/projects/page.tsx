"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Calendar, Tag, User } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function ProjectsPage() {
  const projects = [
    {
      id: "lila",
      title: "Lila Literacy and Language Assessment",
      description:
        "Un projet d'évaluation de la littératie et du langage pour les enfants. Ce projet a été réalisé en collaboration avec une équipe d'éducateurs et de designers.",
      shortDescription: "Un projet d'évaluation de la littératie et du langage",
      image: "/placeholder.svg?height=600&width=800&text=Lila+Project",
      isProtected: true,
      password: "demo123", // In a real app, this would be handled securely on the server
      date: "2023",
      client: "Ministère de l'Éducation",
      category: "Animation Éducative",
    },
    {
      id: "quiquoi",
      title: "QuiQuoi",
      description:
        "Projet d'animation interactive pour une exposition muséale. Les visiteurs peuvent interagir avec les personnages animés.",
      shortDescription: "Projet d'animation interactive",
      image: "/placeholder.svg?height=600&width=800&text=QuiQuoi+Project",
      isProtected: false,
      date: "2022",
      client: "Musée d'Art Moderne",
      category: "Animation Interactive",
    },
    {
      id: "polix",
      title: "Polix",
      description:
        "Série animée éducative pour enfants explorant des concepts scientifiques de manière ludique.",
      shortDescription: "Série animée pour enfants",
      image: "/placeholder.svg?height=600&width=800&text=Polix+Project",
      isProtected: false,
      date: "2021",
      client: "Chaîne TV Jeunesse",
      category: "Série Animée",
    },
    {
      id: "spoocktacular",
      title: "Spoocktacular",
      description:
        "Court-métrage d'animation sur le thème d'Halloween, mêlant humour et frissons pour toute la famille.",
      shortDescription: "Animation sur le thème d'Halloween",
      image: "/placeholder.svg?height=600&width=800&text=Spoocktacular+Project",
      isProtected: false,
      date: "2022",
      client: "Festival d'Animation",
      category: "Court-métrage",
    },
    {
      id: "theomania",
      title: "Theomania",
      description:
        "Court-métrage d'animation explorant des thèmes philosophiques à travers un style visuel unique.",
      shortDescription: "Court-métrage d'animation",
      image: "/placeholder.svg?height=600&width=800&text=Theomania+Project",
      isProtected: false,
      date: "2020",
      client: "Production Indépendante",
      category: "Court-métrage",
    },
    {
      id: "apoil",
      title: "A Poil",
      description:
        "Projet d'animation expérimentale jouant sur les textures et les mouvements pour créer une expérience visuelle unique.",
      shortDescription: "Projet d'animation expérimentale",
      image: "/placeholder.svg?height=600&width=800&text=A+Poil+Project",
      isProtected: false,
      date: "2019",
      client: "Galerie d'Art Contemporain",
      category: "Animation Expérimentale",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <PageHeader
        title="Projets"
        imageSrc="/placeholder.svg?height=1080&width=1920&text=Projects"
        height="medium"
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="group">
              <div className="overflow-hidden rounded-xl bg-gradient-primary-br p-0.5 shadow-xl">
                <div className="rounded-[10px] bg-card">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-[10px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {project.isProtected && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                        <Lock className="mb-2 h-10 w-10 text-white drop-shadow-lg" />
                        <p className="text-center text-white text-on-gradient drop-shadow-lg">
                          Projet protégé
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <Calendar className="mr-1 h-3 w-3" />
                        {project.date}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <Tag className="mr-1 h-3 w-3" />
                        {project.category}
                      </span>
                    </div>

                    <h2 className="mb-2 font-serif text-xl font-bold text-card-foreground">
                      {project.title}
                    </h2>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {project.shortDescription}
                    </p>

                    <div className="mb-4 flex items-center text-xs text-muted-foreground">
                      <User className="mr-1 h-3 w-3" />
                      Client: {project.client}
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="group inline-flex w-full items-center justify-center rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    >
                      {project.isProtected ? (
                        <>
                          Projet protégé
                          <Lock className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Voir le projet
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
