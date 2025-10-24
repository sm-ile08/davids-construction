"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Oluwaseun Adeyemi",
      role: "Homeowner, Lagos",
      content:
        "David and his team built our dream home exactly as we envisioned. The attention to detail and professionalism was outstanding. Highly recommended!",
      rating: 5,
    },
    {
      name: "Mrs. Chioma Okafor",
      role: "Business Owner, Abuja",
      content:
        "Excellent work on our office complex. The project was completed on time and within budget. Very impressed with the quality of construction.",
      rating: 5,
    },
    {
      name: "Engr. Tunde Bakare",
      role: "Property Developer, Ibadan",
      content:
        "I have worked with David on multiple projects. His expertise and commitment to excellence make him my go-to contractor for all construction needs.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-accent mb-4">TESTIMONIALS</div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-pretty">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20"
            >
              <Quote className="h-10 w-10 text-accent mb-4" />
              <p className="text-white/90 mb-6 leading-relaxed text-pretty">"{testimonial.content}"</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-white/70">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
