"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import ecom from "../public/ecom.png"
import dashboard from "../public/dashboard.png"
import Blog from "../public/Blog.png"
import dynecom from "../public/dynecom.png"
import code from "../public/30day.webp"
import resume from "../public/resume.png"

const projects = [
  {
    title: "Avion Ecom",
    description: "A full-stack e-commerce solution with React, Next.js, and API.",
    technologies: ["React", "Next.js", "API", "TailwindCSS", "Sanity", "Clerk"],
    githubLink: "https://github.com/hashir-qt/marketplace_01",
    liveLink: "https://marketplace-01.vercel.app/",
    imageUrl: ecom,
  },
  {
    title: "Avion Admin",
    description: "Real-time Order Tracking application using Sanity and   Sanity.",
    technologies: ["React", "Next.js", "API Integration", "Sanity", "TailwindCSS"],
    githubLink: "https://github.com/hashir-qt/AvionAdmin",
    liveLink: "https://avion-admin.vercel.app/",
    imageUrl: dashboard,
  },
  {
    title: "Dynamic Blogging Website",
    description: "A Dynamic Blogging Website built with Next.js and Sanity.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Sanity"],
    githubLink: "https://github.com/hashir-qt/nextjs-ml-2-blog",
    liveLink: "https://nextjs-ml-2-blog.vercel.app/",
    imageUrl: Blog,
  },
  {
    title: "Dynamic Ecom",
    description: "A Dynamic Ecom built with Next.js and Sanity.",
    technologies: ["Next.js", "API", "Tailwind CSS", "Sanity"],
    githubLink: "https://github.com/hashir-qt/dynamic-ecom-store",
    liveLink: "https://dynamic-ecom-store.vercel.app/",
    imageUrl: dynecom,
  },
  {
    title: "30-Days-of-Code",
    description: "A 30 day of coding challenge to overcome difficulties in Next.js.",
    technologies: ["Next.js", "Typescript", "Tailwind CSS"],
    githubLink: "https://github.com/hashir-qt",
    liveLink: "https://your-live-link-here.com",
    imageUrl: code,
  },
  {
    title: "Resume Builder",
    description: "A Problem Solving product which generates Sleek Resume with Javascript.",
    technologies: ["HTML", "CSS", "Tailwind", "Javascript"],
    githubLink: "https://github.com/hashir-qt",
    liveLink: "https://your-live-link-here.com",
    imageUrl: resume,
  },
]

export default function Projects() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="relative overflow-hidden group">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={project.githubLink}
                    className="text-white mx-2 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </Link>
                  <Link
                    href={project.liveLink}
                    className="text-white mx-2 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={24} />
                  </Link>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={project.githubLink}
                  className="text-primary hover:underline mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Link>
                <Link
                  href={project.liveLink}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

