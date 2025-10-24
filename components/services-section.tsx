"use client";

import { motion } from "framer-motion";
import {
  Building,
  Hammer,
  PaintBucket,
  Wrench,
  Home,
  ClipboardCheck,
  Blocks,
  Fence,
  Cog,
  Drill,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Building,
      title: "Architectural Services",
      description:
        "Professional architectural design services tailored to your vision and budget, creating functional and beautiful spaces.",
    },
    {
      icon: Hammer,
      title: "Design and Civil Enginnering",
      description:
        "Complete construction services from foundation to finishing, ensuring quality workmanship at every stage.",
    },
    {
      icon: PaintBucket,
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces with our expert renovation services, breathing new life into your property.",
    },
    {
      icon: ClipboardCheck,
      title: "Engineering Management",
      description:
        "Professional project management and site supervision to ensure timely completion and quality standards.",
    },
    {
      icon: Wrench,
      title: "Planning and Development",
      description:
        "Comprehensive planning and development services to guide your construction project from concept to completion.",
    },
    {
      icon: Blocks,
      title: "Structural Engineering",
      description:
        "Comprehensive structural engineering solutions to ensure the safety and integrity of your buildings.",
    },
    {
      icon: Cog,
      title: "Electrical Engineering",
      description:
        "Expert electrical engineering services for safe, efficient, and code-compliant electrical systems.",
    },
    {
      icon: Drill,
      title: "Mechanical Engineering",
      description:
        "Innovative mechanical engineering solutions for HVAC, plumbing, and fire protection systems.",
    },
    {
      icon: Fence,
      title: "Public Health and Environmental",
      description:
        "Sustainable public health and environmental engineering services to promote well-being and eco-friendly practices.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-accent mb-4">
            WHAT WE OFFER
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive construction solutions to meet all your building needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card p-8 rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 text-balance">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
