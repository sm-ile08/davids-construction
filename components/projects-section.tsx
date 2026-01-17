"use client";

import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  coverImage: string;
  location: string;
  googlePhotosLink: string;
}

export function ProjectsSection() {
  const [showGallery, setShowGallery] = useState(false);

  const projects: Project[] = [
    {
      title: "Bowen University Main Gate",
      description: "Modern entrance gate design for Bowen University",
      coverImage: "/daddy2.jpg",
      location: "Iwo",
      googlePhotosLink: "https://photos.app.goo.gl/wGim6k827AwaFHiK8",
    },
    {
      title: "Bowen University Dialysis Center",
      description: "State-of-the-art dialysis facility construction",
      coverImage: "/20161208_162005.jpg",
      location: "Iwo",
      googlePhotosLink: "https://photos.app.goo.gl/C18t9RGhXJAjucqb6",
    },
    {
      title: "BBSF Cafeteria Building",
      description: "Cafeteria facility for Bowen",
      coverImage: "/daddy7.jpeg",
      location: "Iwo",
      googlePhotosLink: "https://photos.app.goo.gl/5bssiyakQbqxnNZB8",
    },
    {
      title: "Bowen University Hospital Extension",
      description:
        "Expansion of medical facilities at Bowen University Teaching Hospital",
      coverImage: "/daddy9.jpeg",
      location: "Iwo",
      googlePhotosLink: "https://photos.app.goo.gl/2kUd9mFgdwhQh4hm6",
    },
    {
      title: "Private Residence",
      description: "Modern cafeteria interior design for Bowen",
      coverImage: "/IMG_20210601_105416.jpg",
      location: "Kolapo Ishola GRA, Ibadan",
      googlePhotosLink: "https://photos.app.goo.gl/waq7dtxRocZcpVWv9",
    },
    {
      title: "Coca-Cola Depot",
      description:
        "Construction of a state-of-the-art Coca-Cola distribution depot",
      coverImage: "/20221213_114341.jpg",
      location: "Moniya, Ibadan",
      googlePhotosLink: "https://photos.app.goo.gl/LxiCYZRxFMHX5pqZ8",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-blue-600 mb-4">
            OUR PORTFOLIO
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our
            commitment to quality and excellence
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
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 mb-2">
                  {project.location}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowGallery(true)}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>

        {showGallery && (
          <div className="fixed inset-0 z-50 bg-black/95 overflow-y-auto">
            <button
              onClick={() => setShowGallery(false)}
              className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="container mx-auto px-4 py-20">
              <h2 className="text-white text-4xl font-bold text-center mb-12">
                Project Gallery
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={project.coverImage || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {project.location}
                        </p>
                        <button
                          onClick={() =>
                            window.open(project.googlePhotosLink, "_blank")
                          }
                          className="inline-flex items-center justify-center px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors w-full"
                        >
                          View Photos
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
