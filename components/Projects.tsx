'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Humana Healthcare Portal',
    description:
      'Engineered scalable React 18 and Angular 18 portals for healthcare members and providers. Integrated OpenAI GPT for real-time chat, WebRTC for consultations, and GraphQL APIs. Implemented micro-frontend architecture and automated CI/CD on AWS and Azure.',
    stack: [
      'React 18',
      'Angular 18',
      'OpenAI GPT',
      'WebRTC',
      'GraphQL',
      'Tailwind CSS',
      'Spring Boot',
      'Docker',
    ],
    image:
      'https://images.unsplash.com/photo-1555421689-43cad7100751?w=800&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'Capital Group Financial Dashboard',
    description:
      'Developed high-performance dashboards using React Query, Spring Boot APIs, and Django backend. Integrated BigQuery pipelines for analytics, deployed with AWS ECS/EKS, and secured with Azure RBAC.',
    stack: [
      'React',
      'React Query',
      'Spring Boot',
      'Django',
      'GraphQL',
      'BigQuery',
      'AWS',
      'Azure',
    ],
    image:
      'https://images.unsplash.com/photo-1624378439575-758de21133a8?w=800&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'Cyient Web Revamp',
    description:
      'Modernized legacy frontend using React 16 and AngularJS. Migrated REST APIs to GraphQL, implemented SSR streaming, and deployed scalable infrastructure with AWS Lambda and API Gateway.',
    stack: [
      'React 16',
      'AngularJS',
      'GraphQL',
      'SSR',
      'AWS Lambda',
      'Node.js',
    ],
    image:
      'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'AI Chat Integration System',
    description:
      'Built and integrated OpenAI-powered chat with WebSockets and React WebRTC for real-time healthcare communication. Implemented secure messaging and role-based data access.',
    stack: ['React', 'OpenAI GPT', 'WebSockets', 'WebRTC', 'Flask', 'JWT', 'Azure'],
    image:
      'https://images.unsplash.com/photo-1605902711622-cfb43c4437f1?w=800&h=400&fit=crop',
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
