'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-primary mb-8"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <a
          href="mailto:ajaynet.fse@gmail.com"
          className="flex items-center gap-4 bg-card p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <div className="p-3 bg-primary/10 rounded-full">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">ajaynet.fse@gmail.com</p>
          </div>
        </a>

        <a
          href="tel:+17609368683"
          className="flex items-center gap-4 bg-card p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <div className="p-3 bg-primary/10 rounded-full">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground">Phone</h3>
            <p className="text-sm text-muted-foreground">+1 (760)-936-8683</p>
          </div>
        </a>

        <a
          href="http://www.linkedin.com/in/reddy5679"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-card p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <div className="p-3 bg-primary/10 rounded-full">
            <Linkedin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </div>
        </a>
      </motion.div>
    </div>
  );
}