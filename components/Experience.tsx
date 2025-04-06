'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Verizon',
    position: 'Sr UI Developer',
    period: 'May 2023 – Present',
    location: 'Remote',
    responsibilities: [
      'Built reusable UI components with React 18 and Hooks',
      'Designed wireframes & prototypes using Figma and Adobe XD',
      'Integrated RESTful APIs with Axios for asynchronous data handling',
      'Deployed scalable apps on AWS EC2 with auto-scaling',
      'Used Bootstrap grid and Tailwind for responsive layouts',
      'Improved SEO using semantic HTML5 and performance-optimized CSS3',
    ],
  },
  {
    company: 'State Farm',
    position: 'Sr UI Developer',
    period: 'Jul 2021 – Jul 2022',
    location: 'Remote',
    responsibilities: [
      'Migrated app to React 17 with Redux Toolkit and Context API',
      'Created custom design systems using Figma auto-layout',
      'Developed RESTful APIs using Node.js and Express',
      'Wrote unit tests using Jest and Cypress',
      'Improved accessibility (WCAG) and UX with keyboard navigation and ARIA roles',
    ],
  },
  {
    company: 'ISOFT Technologies',
    position: 'UI Developer',
    period: 'Jun 2019 – Jun 2021',
    location: 'Hybrid',
    responsibilities: [
        'Built a reusable design system and component library in React, improving scalability, consistency, and speed of UI development across multiple applications',
        'Automated project workflows by configuring Angular CLI and Git hooks for linting, formatting, and commit validations, enhancing code quality and development discipline',
        'Integrated Apollo Client with React and GraphQL for real-time updates, client-side caching, and optimized state management with minimal network overhead',
        'Designed and managed secure, performant cloud databases using AWS RDS and DynamoDB, applying indexing, access control, and schema modeling for efficiency and scalability',
        'Conducted load, performance, and E2E testing using Apache JMeter, Gatling, and Cypress, ensuring stability and responsiveness under heavy traffic and real-world usage'
    ],
  },
];

export default function Experience() {
  return (
    <div className="space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-primary mb-8"
      >
        Work Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-card-foreground">
                {exp.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}