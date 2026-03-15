import React from 'react';

export default function About() {
  return (
    <section className="relative bg-[#0a0a0a] px-6 py-24 md:px-12 lg:px-24 font-sans text-white z-20 border-t border-white/5">
      <div className="relative mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">About Me</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Python', 'SQL', 'GenAI', 'LangChain', 'Machine Learning', 'Data Pipelines', 'Power BI'].map((skill) => (
                <span key={skill} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-white/90">Education</h3>
              <div className="mb-6 relative group">
                <h4 className="font-semibold text-lg text-white/90">Master's in Business Data Science and Analytics</h4>
                <div className="text-sm font-medium text-white/60 mb-2">Michigan State University (STEM, GPA 4.0) · 2025</div>
                <p className="text-sm text-white/50 leading-relaxed">
                  Focused on predictive modeling, generative AI, advanced statistics, and converting complex analytical methodologies into actionable business strategies.
                </p>
              </div>
              <div className="relative group">
                <h4 className="font-semibold text-lg text-white/90">Bachelor of Engineering, Mechanical</h4>
                <div className="text-sm font-medium text-white/60 mb-2">University of Mumbai · 2019</div>
                <p className="text-sm text-white/50 leading-relaxed">
                  Leveraged computational mathematics, Python-based simulations, and statistical mechanics, bridging the analytical gap between physical engineering systems and modern computer science algorithms.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              I'm a data science and analytics professional with 5+ years of industry experience delivering end-to-end analytics, machine learning, and GenAI solutions across enterprise and growth-stage organizations.
            </p>
            <p>
              I've built production ML models, RAG pipelines, and analytics platforms that drove $2M+ in revenue impact, improved model accuracy (AUC 0.90), increased offer precision by 25%, and supported $0.8M+ investment decisions.
            </p>
            <p>
              My experience spans Python, SQL, R, Power BI, Tableau, ML modeling, experimentation, ETL pipelines, and GenAI (LLMs, embeddings, vector databases, LangChain). I specialize in translating complex data into executive-ready insights and scalable decision systems.
            </p>
            <p>
              Previously at Infosys, Qahwah House, and Maxval Technologies, I partnered with business, engineering, and leadership teams to solve real-world problems across finance, retail, operations, and strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
