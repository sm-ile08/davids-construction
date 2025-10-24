"use client";

import { motion } from "framer-motion";
import { Award, Users, Building2, CheckCircle } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: Building2, value: "9+", label: "Years Experience" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Award, value: "70+", label: "Projects Completed" },
  ];

  const values = [
    "Quality craftsmanship in every project",
    "Affordable and transparent pricing",
    "Timely project delivery",
    "Professional and experienced team",
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <img
                src="/professional-construction-worker-at-modern-buildin.jpg"
                alt="Construction professional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold font-serif">9+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-accent mb-4">
              ABOUT US
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Building Excellence Since 2016
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Led by{" "}
              <span className="font-semibold text-foreground">
                Fabiyi Adedayo David
              </span>
              , David's General Construction Works Ltd has been transforming
              visions into reality across Nigeria for almost a decade.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are dedicated to providing quality construction, technical and
              management services to our customers. We will help strive to
              implement along term relationship with our clients, based on
              safety, quality and timely delivery of service and an anticipation
              of their needs.
            </p>

            {/* Values */}
            <div className="space-y-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold font-serif text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
