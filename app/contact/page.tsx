'use client'
import  Link  from "next/link"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { ToastAction } from "@/components/ui/toast"
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting me. I'll get back to you soon.",
      action: <ToastAction altText="Close">Close</ToastAction>,
    })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    

         <div className="flex space-x-4 mt-20 justify-center">
         <Link href="https://www.instagram.com/eyemnoob/" target="_blank" aria-label="Instagram">
           <FaInstagram className="text-primary hover:text-accent text-2xl" />
         </Link>
         <Link href="https://www.facebook.com/hashirdada.irshad" target="_blank" aria-label="Facebook">
           <FaFacebookF className="text-primary hover:text-accent text-2xl" />
         </Link>
         <Link href="https://linkedin.com/in/hashir-hussain-1a5a3b2ba" target="_blank" aria-label="LinkedIn">
           <FaLinkedinIn className="text-primary hover:text-accent text-2xl" />
         </Link>
         <Link href="https://github.com/hashir-qt" target="_blank" aria-label="GitHub">
           <FaGithub className="text-primary hover:text-accent text-2xl" />
         </Link>
       </div>
       </div>
  )
}