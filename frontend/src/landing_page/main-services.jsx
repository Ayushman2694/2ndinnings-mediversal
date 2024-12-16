"use client";

import { motion } from "framer-motion";

import {
  ChevronRight,
  Heart,
  Activity,
  Clock,
  Users,
  Pill,
  Home,
  Phone,
} from "lucide-react";


const services = [
  {
    icon: Heart,
    title: "24/7 Emergency Care",
    description: "Round-the-clock support for any medical emergencies.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description:
      "Regular check-ups and vital sign monitoring for proactive care.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Clock,
    title: "Medication Management",
    description: "Timely reminders and assistance with medication intake.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Users,
    title: "Companionship",
    description:
      "Friendly companionship to combat loneliness and promote mental well-being.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Pill,
    title: "Specialized Care",
    description:
      "Tailored care plans for specific health conditions like dementia or diabetes.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Home,
    title: "Home Safety Assessments",
    description:
      "Regular evaluations to ensure a safe living environment for seniors.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6FFF9] via-[#F0FFF9] to-[#E6FFF9]">
      <header className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          2nd Innings
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/plans"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            Plans
          </Link>
          <Link
            href="/services"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/blog"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            Blog
          </Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            Our Comprehensive Care Services
          </h1>
          <p className="text-xl text-teal-600 max-w-2xl mx-auto">
            Discover the range of services we offer to ensure the comfort,
            health, and happiness of your loved ones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full flex flex-col border rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-teal-700">
                      {service.title}
                    </h2>
                    <p className="text-teal-600">{service.description}</p>
                  </div>
                </div>
                <div className="relative h-40 mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <button className="w-full mt-4 bg-transparent border border-teal-600 text-teal-600 py-2 px-4 rounded-md hover:bg-teal-600 hover:text-white transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-4">
            Need Personalized Assistance?
          </h2>
          <p className="text-teal-600 mb-6 max-w-2xl mx-auto">
            Our care experts are ready to discuss your specific needs and create
            a tailored care plan for your loved ones.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md text-lg flex items-center justify-center">
            <Phone className="w-5 h-5 mr-2" />
            Schedule a Free Consultation
          </button>
        </motion.div>
      </main>
    </div>
  );
}
