'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Humana',
    position: 'Senior Frontend Software Engineer',
    period: 'April 2023 – Present',
    location: 'Boston, MA',
    responsibilities: [
      'Developed scalable, responsive UI components using React 18, Angular 18, and Tailwind CSS for healthcare portals.',
      'Integrated AI-powered chat systems using OpenAI GPT and WebRTC to enhance real-time patient-doctor communication.',
      'Built micro-frontend architecture with Webpack Module Federation to modularize large applications.',
      'Developed REST and GraphQL APIs using Flask and Spring Boot to streamline backend integration.',
      'Led CI/CD pipeline automation using Docker, Jenkins, GitHub Actions, and deployed apps to AWS and Azure.',
    ],
  },
  {
    company: 'Capital Group',
    position: 'Frontend Software Engineer',
    period: 'March 2021 – April 2022',
    location: 'San Antonio, TX',
    responsibilities: [
      'Developed React dashboards using React Query and Spring Boot APIs for financial applications.',
      'Built secure REST and GraphQL APIs using Flask, Django, and Node.js, improving data flow efficiency.',
      'Integrated AEM with third-party APIs and developed internationalized UI using React and Angular.',
      'Enhanced data pipelines using BigQuery and Cloud SQL, improving financial analytics performance.',
      'Deployed containerized microservices with AWS ECS/EKS and implemented RBAC using Azure AD.',
    ],
  },
  {
    company: 'Cyient',
    position: 'Frontend Web Developer',
    period: 'August 2019 – February 2021',
    location: 'Hyderabad, India',
    responsibilities: [
      'Implemented React and Angular UI components with SSR and lazy loading for improved performance.',
      'Developed and consumed GraphQL APIs, enhancing API efficiency and reducing over-fetching.',
      'Managed AWS deployments with Lambda, EC2, and API Gateway for scalable backend integration.',
      'Built REST APIs using Rails and Node.js, and scheduled background tasks using cron jobs.',
      'Optimized CI/CD pipelines and used Jasmine/Karma for frontend test automation.',
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
