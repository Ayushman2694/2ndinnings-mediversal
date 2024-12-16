"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Quote, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "Mediversal has brought me peace of mind knowing my mother is well cared for. The staff is compassionate and professional.",
    name: "Priya M.",
    role: "Daughter of a patient",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "The 24/7 support has been a lifesaver. I can't imagine managing my father's care without Mediversal's help.",
    name: "Rahul S.",
    role: "Son of a patient",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "The personalized care plan for my grandmother has made a significant difference in her quality of life.",
    name: "Anita K.",
    role: "Granddaughter of a patient",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

function Button({
  variant = "default",
  size = "default",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  }
  const sizeStyles = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10"
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  )
}

function Avatar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props} />
  )
}

function AvatarImage({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img className="aspect-square h-full w-full" src={src} alt={alt} {...props} />
}

function AvatarFallback({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-full bg-muted"
      {...props}
    >
      {children}
    </div>
  )
}

export default function Section4() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0)

  const toggleVideo = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, you would control the video playback here
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gradient-to-b from-teal-900 to-teal-800 py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Real stories from families we've helped
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-teal-700/30 backdrop-blur-sm rounded-lg p-8 relative shadow-xl"
          >
            <Quote className="absolute top-4 left-4 h-8 w-8 text-teal-300 opacity-50" />
            <blockquote className="text-xl md:text-2xl text-teal-100 italic mb-6 relative z-10">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
                <AvatarFallback>{testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <cite className="text-teal-300 not-italic block font-semibold">
                  {testimonials[currentTestimonial].name}
                </cite>
                <span className="text-teal-400 text-sm">{testimonials[currentTestimonial].role}</span>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Button variant="ghost" size="icon" onClick={prevTestimonial} className="text-teal-300 hover:text-white hover:bg-teal-700/50">
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={nextTestimonial} className="text-teal-300 hover:text-white hover:bg-teal-700/50">
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-teal-800 rounded-lg overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700/50 to-teal-900/50 z-10"></div>
            <video
              className="w-full h-full object-cover"
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Button
                variant="outline"
                size="icon"
                className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={toggleVideo}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8" />
                )}
                <span className="sr-only">{isPlaying ? 'Pause video' : 'Play video'}</span>
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white z-20">
              <h3 className="font-semibold text-lg">Rajesh K.'s Story</h3>
              <p className="text-sm text-teal-100">Watch how Mediversal changed his father's life</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

