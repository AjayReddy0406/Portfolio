'use client';

import { motion } from 'framer-motion';

const skillsData = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', value: 95 },
      { name: 'Angular', value: 90 },
      { name: 'Vue.js', value: 85 },
      { name: 'Next.js', value: 92 },
      { name: 'HTML/CSS', value: 98 },
    ],
  },
  {
    name: 'UI/UX Design',
    skills: [
      { name: 'Figma', value: 88 },
      { name: 'Adobe XD', value: 85 },
      { name: 'Tailwind', value: 95 },
      { name: 'Material UI', value: 90 },
    ],
  },
  {
    name: 'State Management',
    skills: [
      { name: 'Redux', value: 92 },
      { name: 'Context API', value: 95 },
      { name: 'NgRx', value: 85 },
      { name: 'Vuex', value: 82 },
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