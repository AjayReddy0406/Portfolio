'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic from '../assets/ajay.jpg';

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
          alt="Ajay Kumar Reddy Pisati"
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
          Ajay Kumar
        </h1>
        <h2 className="text-2xl text-foreground/80">Sr UI Developer</h2>
        <p className="text-muted-foreground leading-relaxed">
          A passionate Sr UI Developer with over 5 years of experience building
          performant, responsive, and accessible web applications using React.js,
          Angular, and Vue.js. I excel in writing semantic HTML, scalable CSS using
          Tailwind, and interactive JavaScript and TypeScript interfaces. My
          expertise extends to modern design tools like Figma and Adobe XD, and I
          am proficient in API integration, component libraries, cross-browser
          support, and Agile methodologies.
        </p>
      </motion.div>
    </div>
  );
}