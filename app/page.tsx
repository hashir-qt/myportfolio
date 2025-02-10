"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa"
import hero from "./public/hero.jpg"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const MotionLink = motion(Link)

export default function Home() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Front-End"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-200px)] px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Image Section */}
      <motion.div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8" variants={itemVariants}>
        <motion.div
          className="rounded-full overflow-hidden h-60 w-60 md:h-80 md:w-80 shadow-lg mx-auto"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src={hero || "/placeholder.svg"} alt="Hero" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center lg:text-left"
        variants={containerVariants}
      >
        <motion.h1 className="lg:text-6xl sm:text-4xl font-bold mb-4" variants={itemVariants}>
          Hello, I am Hashir
        </motion.h1>
        <motion.p className="lg:text-xl mb-8 max-w-2xl" variants={itemVariants}>
          I am a passionate <span className="font-bold text-primary">{typedText}</span> web developer specializing in
          creating responsive and user-friendly websites. With expertise in React, Next.js, and modern web technologies,
          I bring ideas to life through code.
        </motion.p>

        {/* Button Section */}
        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6"
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

        <motion.div className="flex space-x-4 mt-6" variants={containerVariants}>
          {[
            { href: "https://www.instagram.com/eyemnoob/", icon: FaInstagram, label: "Instagram" },
            { href: "https://www.facebook.com/hashirdada.irshad", icon: FaFacebookF, label: "Facebook" },
            { href: "https://linkedin.com/in/hashir-hussain-1a5a3b2ba", icon: FaLinkedinIn, label: "LinkedIn" },
            { href: "https://github.com/hashir-qt", icon: FaGithub, label: "GitHub" },
          ].map((social, index) => (
            <MotionLink
              key={index}
              href={social.href}
              target="_blank"
              aria-label={social.label}
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="text-primary hover:text-accent text-2xl" />
            </MotionLink>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

