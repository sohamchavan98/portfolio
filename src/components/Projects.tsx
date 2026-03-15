import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Text to SQL Model',
    category: 'NLP & AI Engineering',
    description: 'Developed an intelligent chatbot converting natural language into complex SQL queries, enabling non-technical users to seamlessly extract insights from databases.',
    year: '2024',
    link: 'https://github.com/sohamchavan98/Text-to-SQL-Chatbot-By-Soham',
  },
  {
    title: 'Medical AI ChatBot',
    category: 'Healthcare AI & LLMs',
    description: 'Architected an AI-powered conversational agent for medical domain assistance, utilizing state-of-the-art language models to provide accurate, context-aware responses.',
    year: '2024',
    link: 'https://github.com/sohamchavan98/AI-Doctor-by-Soham',
  },
  {
    title: 'Amazon Sales Data',
    category: 'Data Analytics & Visualization',
    description: 'Analyzed extensive Amazon sales datasets to uncover revenue trends and consumer behaviors, delivering actionable insights through comprehensive exploratory data analysis.',
    year: '2023',
    link: 'https://github.com/sohamchavan98/Analyzing-Amazon-Sales-data',
  },
  {
    title: 'Location Intelligence',
    category: 'Predictive Modeling & GIS',
    description: 'Built a predictive site-selection model for retail in NY & NJ, leveraging geographical and demographic data to identify highly profitable expansion coordinates.',
    year: '2025',
    link: 'https://github.com/sohamchavan98/-Site-Selection-Prediction-Model-in-New-York-and-New-Jersey-',
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] px-6 py-32 md:px-12 lg:px-24 font-sans text-white z-20">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Selected Work</h2>
          <p className="mt-4 max-w-xl text-lg text-white/60">
            A few projects I've worked on recently, showcasing a mix of design, motion, and robust engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1"
            >
              <div className="mb-12">
                <div className="mb-4 flex items-center justify-between text-sm text-white/50">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent group-hover:to-white/80 transition-all duration-500">
                  {project.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 self-start rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors group-hover:bg-white/10 group-hover:text-white"
              >
                View Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Hover Glow effect for the card */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-overlay">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer minimal */}
      <footer className="mt-32 border-t border-white/5 pt-8 text-center text-sm text-white/30">
        © {new Date().getFullYear()} Soham Chavan. All rights reserved.
      </footer>
    </section>
  );
}
