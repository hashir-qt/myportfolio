"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Code, FileJson, Globe, Layout, Palette, Server, GraduationCap, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

// Define a unified type for education and courses
type EducationItem = {
  title: string
  institution?: string
  platform?: string
  year: string
  icon: JSX.Element
}

export default function About() {
  const skills = [
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "Next.js", icon: <Globe className="w-6 h-6" /> },
    { name: "TypeScript", icon: <FileJson className="w-6 h-6" /> },
    { name: "JavaScript", icon: <FileJson className="w-6 h-6" /> },
    { name: "HTML5", icon: <Layout className="w-6 h-6" /> },
    { name: "CSS3", icon: <Palette className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-6 h-6" /> },
    { name: "Node.js", icon: <Server className="w-6 h-6" /> },
    { name: "Python", icon: <FileJson className="w-6 h-6" /> },
    { name: "Django", icon: <Globe className="w-6 h-6" /> },
  ]

  const education: EducationItem[] = [
    {
      title: "Bachelors in Computer Science",
      institution: "University Of Karachi UBIT",
      year: "2025 - 2029",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Intermediate in Computer Science",
      institution: "Adamjee Institute",
      year: "2022 - 2024",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ]

  const courses: EducationItem[] = [
    {
      title: "Agentic AI",
      platform: "GIAIC",
      year: "2024-2025",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Front-End Developement",
      platform: "GIAIC",
      year: "2024",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Python Web Mastery",
      platform: "SMIT",
      year: "2024-2025",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-4xl font-bold mb-8" variants={itemVariants}>
        About Me
      </motion.h1>
      <MotionCard className="w-full max-w-3xl mb-8" variants={itemVariants}>
  <CardContent className="p-6">
    <motion.p className="lg:text-lg md:text-lg sm:text-xs mb-4" variants={itemVariants}>
      I am Hashir, a passionate web developer, cloud enthusiast, and AI engineer with a deep understanding of modern 
      technologies. With a strong foundation in full-stack development, I specialize in building robust, scalable, 
      and user-friendly web applications that provide exceptional user experiences.
    </motion.p>
    <motion.p className="lg:text-lg md:text-lg mb-4" variants={itemVariants}>
      My core expertise lies in Next.js, TypeScript, Tailwind CSS, and Django. I have experience working with 
      Sanity for content management, ShadCN UI for sleek UI components, and Clerk for authentication. Additionally, 
      I am well-versed in Python, particularly with Django for backend development. 
    </motion.p>
    <motion.p className="lg:text-lg md:text-lg mb-4" variants={itemVariants}>
      Currently, I am enrolled in a Certified Cloud Native AI Engineer program, further enhancing my skills in cloud 
      computing and AI-driven solutions. My projects include a dynamic cryptocurrency blog, an e-commerce marketplace, 
      and an admin dashboard&mdash;all built with Next.js and modern web technologies.
    </motion.p>
    <motion.p className="lg:text-lg md:text-lg mb-4" variants={itemVariants}>
      I actively participate in hackathons, continuously learning and refining my craft. Beyond coding, I have a love 
      for anime, particularly <em>Attack on Titan</em>, and I also write on Medium, sharing insights and knowledge about 
      web development and tech trends.
    </motion.p>
    <motion.p className="lg:text-lg md:text-lg" variants={itemVariants}>
      Whether it&apos;s front-end design, backend architecture, or cloud-native applications, I thrive on solving complex 
      challenges and staying ahead of the latest trends in the ever-evolving tech landscape.
    </motion.p>
  </CardContent>
</MotionCard>


      <motion.h1 className="text-3xl font-bold mb-6" variants={itemVariants}>
        My Skills
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8 w-full max-w-3xl"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <MotionCard
            key={index}
            className="bg-accent text-accent-foreground"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                {skill.icon}
              </motion.div>
              <b className="text-sm font-semibold mt-2">{skill.name}</b>
            </CardContent>
          </MotionCard>
        ))}
      </motion.div>

      <motion.h1 className="text-3xl font-bold mb-6" variants={itemVariants}>
        Education & Courses
      </motion.h1>
      <motion.div className="grid gap-6 mb-8 w-full max-w-3xl" variants={containerVariants}>
        {[...education, ...courses].map((item, index) => (
          <MotionCard key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 2 }}>
                  {item.icon}
                </motion.div>
                <span className="ml-2">{item.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.institution || item.platform}</p>
              <p className="text-sm text-muted-foreground">{item.year}</p>
            </CardContent>
          </MotionCard>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Button asChild>
            <Link href="/projects">View My Projects</Link>
          </Button>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

