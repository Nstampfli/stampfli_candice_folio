"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Calendar, Tag, User, ExternalLink } from "lucide-react";
import { PasswordModal } from "@/components/password-modal";
import { ImageModal } from "@/components/image-modal";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // État pour le modal d'image
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Fonction pour ouvrir le modal avec l'image sélectionnée
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // In a real app, this data would come from a database or API
  const projectData = {
    lila: {
      title: "Lila Literacy and Language Assessment",
      description:
        "Un projet d'évaluation de la littératie et du langage pour les enfants. Ce projet a été réalisé en collaboration avec une équipe d'éducateurs et de designers.",
      headerImage: "/placeholder.svg?height=1080&width=1920&text=Lila+Project",
      images: Array.from({ length: 6 }).map(
        (_, i) =>
          `/placeholder.svg?height=800&width=1200&text=Lila+Image+${i + 1}`
      ),
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      process: Array.from({ length: 3 }).map(
        (_, i) =>
          `/placeholder.svg?height=800&width=1200&text=Lila+Process+${i + 1}`
      ),
      password: "demo123", // In a real app, this would be handled securely on the server
      date: "2023",
      client: "Ministère de l'Éducation",
      category: "Animation Éducative",
      website: "https://example.com/lila",
      challenge:
        "Créer un outil d'évaluation engageant et efficace pour les enfants tout en respectant les normes pédagogiques.",
      solution:
        "Développement d'une série de personnages animés et d'interfaces interactives adaptées aux différents âges et niveaux d'apprentissage.",
      isProtected: true,
    },
    quiquoi: {
      title: "QuiQuoi",
      description:
        "Projet d'animation interactive pour une exposition muséale. Les visiteurs peuvent interagir avec les personnages animés.",
      headerImage:
        "/placeholder.svg?height=1080&width=1920&text=QuiQuoi+Project",
      images: Array.from({ length: 5 }).map(
        (_, i) =>
          `/placeholder.svg?height=800&width=1200&text=QuiQuoi+Image+${i + 1}`
      ),
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      process: Array.from({ length: 4 }).map(
        (_, i) =>
          `/placeholder.svg?height=800&width=1200&text=QuiQuoi+Process+${i + 1}`
      ),
      date: "2022",
      client: "Musée d'Art Moderne",
      category: "Animation Interactive",
      website: "https://example.com/quiquoi",
      challenge:
        "Créer une expérience interactive qui engage les visiteurs du musée tout en transmettant des informations éducatives.",
      solution:
        "Conception de personnages animés réagissant aux mouvements des visiteurs grâce à des capteurs de mouvement et une programmation réactive.",
      isProtected: false,
    },
    // Autres projets...
  };

  const [project, setProject] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // @ts-ignore - This is just for demo purposes
    const projectInfo = projectData[projectId] || null;
    setProject(projectInfo);

    // Si le projet est protégé et que c'est le premier (lila), vérifier l'authentification
    if (projectInfo && projectInfo.isProtected && projectId === "lila") {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
      setIsPasswordModalOpen(false);
    }
  }, [projectId]);

  const handlePasswordSubmit = (password: string) => {
    // @ts-ignore - This is just for demo purposes
    if (project && password === project.password) {
      setIsAuthenticated(true);
      setIsPasswordModalOpen(false);
    } else {
      // In a real app, you would handle incorrect password more gracefully
      alert("Mot de passe incorrect");
    }
  };

  const handleClosePasswordModal = () => {
    router.push("/projects");
  };

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-950">
        <p className="text-2xl text-white">Projet non trouvé</p>
      </div>
    );
  }

  if (project.isProtected && !isAuthenticated) {
    return (
      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={handleClosePasswordModal}
        onSubmit={handlePasswordSubmit}
        projectTitle={project.title}
      />
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
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
      {/* Parallax header */}
      <div
        ref={headerRef}
        className="relative h-[50vh] overflow-hidden md:h-[70vh]"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src={project.headerImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-60 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        </motion.div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="container mx-auto px-4 text-center"
          >
            <Link
              href="/projects"
              className="group mb-8 inline-flex items-center text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Retour aux projets
            </Link>
            <h1 className="font-serif text-5xl font-bold italic text-foreground text-on-gradient drop-shadow-lg md:text-6xl">
              {project.title}
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-foreground/30"></div>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/90 text-on-gradient">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Project info cards */}
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="rounded-xl bg-card p-4">
            <div className="mb-2 flex items-center text-primary">
              <Calendar className="mr-2 h-5 w-5" />
              <h3 className="text-sm font-semibold uppercase">Date</h3>
            </div>
            <p className="text-foreground">{project.date}</p>
          </div>
          <div className="rounded-xl bg-card p-4">
            <div className="mb-2 flex items-center text-primary">
              <User className="mr-2 h-5 w-5" />
              <h3 className="text-sm font-semibold uppercase">Client</h3>
            </div>
            <p className="text-foreground">{project.client}</p>
          </div>
          <div className="rounded-xl bg-card p-4">
            <div className="mb-2 flex items-center text-primary">
              <Tag className="mr-2 h-5 w-5" />
              <h3 className="text-sm font-semibold uppercase">Catégorie</h3>
            </div>
            <p className="text-foreground">{project.category}</p>
          </div>
          {project.website && (
            <div className="rounded-xl bg-card p-4">
              <div className="mb-2 flex items-center text-primary">
                <ExternalLink className="mr-2 h-5 w-5" />
                <h3 className="text-sm font-semibold uppercase">Site Web</h3>
              </div>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-primary"
              >
                Voir le site
              </a>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="mb-16 flex justify-center">
          <div className="inline-flex rounded-full bg-card/20 p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("overview")}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === "overview"
                  ? "text-white"
                  : "text-foreground hover:text-foreground/60"
              }`}
            >
              {activeTab === "overview" && (
                <motion.span
                  layoutId="project-tab-indicator"
                  className="absolute inset-0 rounded-full bg-gradient-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Aperçu</span>
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === "gallery"
                  ? "text-white"
                  : "text-foreground hover:text-foreground/60"
              }`}
            >
              {activeTab === "gallery" && (
                <motion.span
                  layoutId="project-tab-indicator"
                  className="absolute inset-0 rounded-full bg-gradient-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Galerie</span>
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === "videos"
                  ? "text-white"
                  : "text-foreground hover:text-foreground/60"
              }`}
            >
              {activeTab === "videos" && (
                <motion.span
                  layoutId="project-tab-indicator"
                  className="absolute inset-0 rounded-full bg-gradient-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Vidéos</span>
            </button>
            <button
              onClick={() => setActiveTab("process")}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === "process"
                  ? "text-white"
                  : "text-foreground hover:text-foreground/60"
              }`}
            >
              {activeTab === "process" && (
                <motion.span
                  layoutId="project-tab-indicator"
                  className="absolute inset-0 rounded-full bg-gradient-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Processus</span>
            </button>
          </div>
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-12 md:grid-cols-2"
          >
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                Le Défi
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                {project.challenge}
              </p>

              <h2 className="mb-6 mt-12 font-serif text-3xl font-bold text-foreground">
                La Solution
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                {project.solution}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary opacity-70 blur-xl"></div>
              <div className="overflow-hidden rounded-xl bg-gradient-primary-br p-0.5 shadow-xl">
                <div className="aspect-video overflow-hidden rounded-lg bg-card">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={`${project.title} aperçu`}
                    width={1200}
                    height={675}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Gallery */}
        {activeTab === "gallery" && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {project.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                variants={item}
                className="group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => openModal(image)}
              >
                <div className="overflow-hidden rounded-xl bg-gradient-primary-br p-0.5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-card">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Videos */}
        {activeTab === "videos" && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {project.videos.map((videoUrl: string, index: number) => (
              <motion.div
                key={index}
                variants={item}
                className="overflow-hidden rounded-xl bg-gradient-primary-br p-0.5"
              >
                <div className="rounded-[10px] bg-card p-6">
                  <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                    {project.title} - Vidéo {index + 1}
                  </h3>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <iframe
                      src={videoUrl}
                      title={`${project.title} video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Process */}
        {activeTab === "process" && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {project.process.map((image: string, index: number) => (
              <motion.div
                key={index}
                variants={item}
                className="group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => openModal(image)}
              >
                <div className="overflow-hidden rounded-xl bg-gradient-primary-br p-0.5">
                  <div className="relative aspect-video overflow-hidden rounded-[10px] bg-card">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} process ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          src={selectedImage || "/placeholder.svg"}
          alt="Image en plein écran"
        />
      )}
    </div>
  );
}
