'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Verizon Admin Dashboard',
    description:
      'A comprehensive admin dashboard built with React 18 and Next.js, featuring dynamic data visualization, user management, and real-time analytics.',
    stack: ['React 18', 'Next.js', 'AWS', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'State Farm Claims Portal',
    description:
      'A claims processing dashboard with advanced form handling, filtering capabilities, and comprehensive user management system.',
    stack: ['React 17', 'Redux Toolkit', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'ISOFT E-Commerce UI Kit',
    description:
      'A comprehensive e-commerce UI library featuring product cards, checkout flows, and advanced filtering components.',
    stack: ['React', 'Next.js', 'Tailwind', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'UI Playground',
    description:
      'A showcase of reusable UI components demonstrating modern design patterns, accessibility features, and responsive layouts.',
    stack: ['React', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&h=400&fit=crop',
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-primary mb-8"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink size={20} />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}