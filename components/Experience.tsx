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
      'Developed scalable, SSR-ready UI components using React 18, Angular 17, and Next.js with TypeScript, leveraging Hooks, Signals, NgRx, and optimized styles using SASS/LESS and critical CSS',
      'Built full-stack features with Node.js and GraphQL by integrating REST APIs and microservices, implementing modular resolvers for scalable and efficient data handling',
      'Delivered real-time, accessible apps using JavaScript, HTML5, and CSS3 with semantic structure, minified styles, and optimized assets for improved performance and UX',
      'Designed interactive Figma prototypes for cross-functional collaboration and accelerated UI/UX cycles, while ensuring test coverage with Jest, Mocha, and Chai using TDD',
      'Deployed high-availability applications on AWS EC2 with auto-scaling, load balancing, and used Git for collaborative version control and conflict-free development'

    ],
  },
  {
    company: 'State Farm',
    position: 'Sr UI Developer',
    period: 'Jul 2021 – Jul 2022',
    location: 'Remote',
    responsibilities: [
      'Managed global application state in React 17 using Redux, Context API, and Redux Toolkit, optimizing reactivity and reducing unnecessary re-renders with Immer.js',
      'Built reusable logic in Angular 13 with custom directives, pipes, and TypeScript generics, improving component modularity and development efficiency',
      'Implemented SSR, SSG, and ISR in Next.js with GraphQL and Webpack code splitting, enhancing performance, SEO, and page speed for content-rich applications',
      'Created and tested RESTful APIs in Node.js using Express.js with middleware handling and route optimization, backed by Cypress, Selenium, and Puppeteer for E2E testing',
      'Developed structured, validated UI forms with HTML5 and CSS3, integrating input validation, accessibility best practices, and seamless Figma-driven UI consistency'

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