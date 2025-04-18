'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic from '../assets/rahul.jpg';

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-primary"
      >
        <Image
          src={profilePic}
          alt="Venkata Rahul"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 space-y-4"
      >
        <h1 className="text-4xl font-bold text-primary">
          Venkata Rahul
        </h1>
        <h2 className="text-2xl text-foreground/80">Sr Frontend Developer</h2>
        <p className="text-muted-foreground leading-relaxed">
            I am a Senior Frontend Developer with over 5 years of experience in building high-performance, responsive web applications using React, Angular, Vue.js, and Flutter. Proficient in modern UI frameworks like Tailwind CSS, Material-UI, and Bootstrap, I specialize in creating seamless user experiences and scalable applications. My expertise extends to state management, API integration, and cloud platforms like AWS. I am passionate about delivering pixel-perfect designs and optimizing performance, while ensuring high-quality code through unit testing and CI/CD practices.
        </p>
      </motion.div>
    </div>
  );
}