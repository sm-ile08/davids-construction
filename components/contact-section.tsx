"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, my name is ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/2348061631674?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "08061631674",
      href: "tel:+2348061631674",
    },
    {
      icon: Mail,
      label: "Email",
      value: "dayofabiyi2003@gmail.com",
      href: "mailto:dayofabiyi2003@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nigeria",
      href: "Plot 4 & 5, Oke Omi, Olodo, Ibadan",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-accent mb-4">
            GET IN TOUCH
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Looking to build or renovate your space?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Let's discuss your project and bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Reach out to us through any of the following channels. We're
                here to answer your questions and discuss your construction
                needs.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <info.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white"
                onClick={() => window.open("tel:+2348061631674")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg border border-border shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
