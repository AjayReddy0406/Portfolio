'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Charles Schwab Financial Platform',
    description:
      'Built and maintained a responsive React 18 application using Next.js, Material UI, and Tailwind CSS. Integrated GraphQL, implemented SSR for SEO, and optimized performance with Redux and Webpack.',
    stack: ['React 18', 'Next.js', 'GraphQL', 'Material UI', 'Tailwind CSS', 'Redux'],
    image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=800&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'State Farm Claims Portal',
    description:
      'Developed an advanced claims dashboard using React 17, Redux Toolkit, and GraphQL. Implemented performance optimizations like code splitting, memoization, and used TypeScript utility types for type safety.',
    stack: ['React 17', 'Redux Toolkit', 'GraphQL', 'TypeScript', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1581091870622-6c79e7d264d3?w=800&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'SB Systems UI Revamp',
    description:
      'Modernized legacy applications using React 16, Redux, and Next.js. Integrated Apollo for GraphQL data fetching, implemented streaming SSR, and built dark/light theme support using CSS variables.',
    stack: ['React 16', 'Next.js', 'Redux', 'Apollo Client', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'UI Component Library',
    description:
      'Built reusable component libraries for internal products using React, TypeScript, and Figma prototypes. Focused on accessibility, responsiveness, and cross-browser compatibility.',
    stack: ['React', 'TypeScript', 'Figma', 'SASS', 'Webpack'],
    image: 'https://images.unsplash.com/photo-1603575448365-9c4973b7c894?w=800&h=400&fit=crop',
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
