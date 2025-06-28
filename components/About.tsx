'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic from '../assets/AjayReddy.jpg';

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
          alt="Ajay Reddy"
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
          Ajay Reddy
        </h1>
        <h2 className="text-2xl text-foreground/80">Sr Frontend Software Engineer</h2>
        <p className="text-muted-foreground leading-relaxed">
            Senior Frontend Software Engineer with over 5 years of experience delivering scalable, high-performance web applications using React, Angular, and Vue. Skilled in JavaScript, TypeScript, Redux, and real-time analytics with React Query and WebSockets. Experienced in integrating AI-powered solutions such as OpenAI’s GPT and WebRTC for real-time chat applications, enhancing user interaction in healthcare systems. Strong backend knowledge with Java, Spring Boot, and Python, and hands-on expertise in cloud deployments (AWS, Azure), CI/CD pipelines, and test automation. Proven success in building responsive, secure, and accessible applications across finance and healthcare domains.
        </p>
      </motion.div>
    </div>
  );
}