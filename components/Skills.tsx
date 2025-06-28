'use client';

import { motion } from 'framer-motion';

const skillsData = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', value: 95 },
      { name: 'Angular', value: 90 },
      { name: 'Vue.js', value: 85 },
      { name: 'Next.js', value: 88 },
      { name: 'HTML/CSS', value: 98 },
      { name: 'TypeScript', value: 92 },
      { name: 'JavaScript (ES6+)', value: 95 },
    ],
  },
  {
    name: 'UI/UX Design',
    skills: [
      { name: 'Figma', value: 90 },
      { name: 'Adobe XD', value: 85 },
      { name: 'Photoshop', value: 82 },
      { name: 'Tailwind CSS', value: 95 },
      { name: 'Material UI', value: 90 },
      { name: 'Bootstrap', value: 90 },
      { name: 'Ant Design', value: 85 },
    ],
  },
  {
    name: 'State Management',
    skills: [
      { name: 'Redux', value: 92 },
      { name: 'Redux-Saga', value: 88 },
      { name: 'Context API', value: 90 },
      { name: 'NgRx', value: 85 },
    ],
  },
  {
    name: 'Backend & APIs',
    skills: [
      { name: 'Java', value: 88 },
      { name: 'Spring Boot', value: 85 },
      { name: 'Python', value: 80 },
      { name: 'Flask/Django', value: 80 },
      { name: 'GraphQL', value: 85 },
      { name: 'REST APIs', value: 90 },
      { name: 'Node.js', value: 80 },
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      { name: 'AWS', value: 85 },
      { name: 'Azure', value: 80 },
      { name: 'Docker', value: 85 },
      { name: 'Jenkins', value: 80 },
      { name: 'CI/CD Pipelines', value: 85 },
      { name: 'GitHub Actions', value: 78 },
    ],
  },
  {
    name: 'Testing',
    skills: [
      { name: 'Jest', value: 88 },
      { name: 'Cypress', value: 85 },
      { name: 'Selenium', value: 82 },
      { name: 'Mocha', value: 80 },
      { name: 'Karma/Jasmine', value: 80 },
    ],
  },
  {
    name: 'AI/Real-Time',
    skills: [
      { name: 'OpenAI GPT Integration', value: 75 },
      { name: 'WebRTC', value: 70 },
      { name: 'React Query', value: 88 },
      { name: 'WebSockets', value: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-8">Technical Skills</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-card-foreground">
              {category.name}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-card-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-primary"
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
