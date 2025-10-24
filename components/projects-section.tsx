"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "4-Bedroom Duplex in Lagos",
      description: "Modern luxury duplex with contemporary design and premium finishes",
      image: "/modern-4-bedroom-duplex-house-exterior.jpg",
      location: "Lagos",
    },
    {
      title: "Commercial Office Complex",
      description: "Three-story office building with state-of-the-art facilities",
      image: "/modern-commercial-office-building.jpg",
      location: "Abuja",
    },
    {
      title: "5-Bedroom Bungalow",
      description: "Spacious family home with elegant architectural details",
      image: "/modern-5-bedroom-bungalow-house.jpg",
      location: "Ibadan",
    },
    {
      title: "Residential Estate Development",
      description: "Complete estate with 20 modern housing units",
      image: "/modern-residential-estate-development.jpg",
      location: "Port Harcourt",
    },
    {
      title: "Luxury Villa",
      description: "High-end villa with swimming pool and landscaped gardens",
      image: "/luxury-villa-pool.png",
      location: "Lagos",
    },
    {
      title: "Church Building",
      description: "Modern worship center with capacity for 500 people",
      image: "/modern-church-building-architecture.jpg",
      location: "Ogun",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-accent mb-4">OUR PORTFOLIO</div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our portfolio of completed projects showcasing our commitment to quality and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-accent mb-2">{project.location}</div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 text-balance">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">{project.description}</p>
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
