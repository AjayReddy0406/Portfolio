'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Charles Schwab',
    position: 'Sr. Frontend Developer',
    period: 'May 2023 – Present',
    location: 'Miami, FL',
    responsibilities: [
      'Built scalable, responsive UI components with React 18, TypeScript, and Tailwind CSS, improving performance and user experience across platforms.',
      'Implemented GraphQL queries and mutations with Apollo Client to streamline data fetching and reduce over-fetching issues.',
      'Led Next.js SSR projects with dynamic routing and Webpack optimization for faster initial load and SEO benefits.',
      'Collaborated in Figma-driven agile sprints, ensuring pixel-perfect UI designs and rapid feature rollouts.',
      'Deployed apps using AWS (EC2, ELB, Auto Scaling) and managed CI/CD pipelines for consistent releases.'
    ],
  },
  {
    company: 'State Farm',
    position: 'Sr. Frontend Developer',
    period: 'Jul 2021 – Jul 2022',
    location: 'Bloomington, IL',
    responsibilities: [
      'Built enterprise-scale React 17 apps with Redux Toolkit and Context API for efficient state management.',
      'Optimized performance through Webpack code splitting and Next.js static generation techniques.',
      'Created dynamic GraphQL schemas and integrated RESTful services using Node.js and Express.js.',
      'Maintained test coverage with Jest, Cypress, and Selenium for end-to-end and unit testing.',
      'Ensured accessibility and semantic HTML/CSS across all views following WCAG guidelines.'
    ],
  },
  {
    company: 'SB Systems',
    position: 'Frontend/UI Developer',
    period: 'Jun 2019 – Jun 2021',
    location: 'Hyderabad, India',
    responsibilities: [
      'Developed reusable UI components and libraries in React 16 and Angular, improving development efficiency.',
      'Enhanced frontend performance with SSR, lazy loading, and Apollo GraphQL caching strategies.',
      'Streamlined CI/CD with Git hooks, AWS deployments, and automated testing for quality assurance.',
      'Built interactive dashboards using Figma prototypes and Vue.js for CRM analytics.',
      'Integrated AWS services (Lambda, RDS, S3) for scalable and secure backend API deployments.'
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
