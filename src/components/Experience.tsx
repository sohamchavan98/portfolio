import React from 'react';

const experiences = [
  {
    role: 'Data Analyst - Global Student Ambassador',
    company: 'Michigan State University',
    date: 'Aug 2025 - Dec 2025',
    bullets: [
      'Discovered strategic engagement patterns across 15 global events (600+ registrations) by conducting comprehensive data analyses on student demographics and attendance metrics.',
      'Improved programming decisions and employer partnerships by delivering data-driven recommendations that optimized workshop formats.',
      'Expanded career opportunities for international students by acting as a liaison between candidates and corporate partners across finance, analytics, and tech.',
      'Amplified event visibility and participation by leading targeted outreach campaigns, resulting in a 20% increase in cross-cultural engagement initiatives.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Qahwah House',
    date: 'Jul 2025 - Aug 2025',
    bullets: [
      'Elevated site-selection accuracy by 35% by engineering a Random Forest predictive model integrating demographic, competition, and mobility datasets.',
      'Guided $0.8M in Q4 capital investments by delivering high-confidence (AUC=0.90) intelligence and risk assessments for new retail expansion locations.',
      'Accelerated executive decision-making speed by designing automated GIS and Power BI dashboards pinpointing 12 high-ROI geographic coordinates.',
      'Streamlined the geographical expansion strategy by bridging spatial data with machine learning workflows for scalable future deployments.',
    ],
  },
  {
    role: 'Senior Data Analyst',
    company: 'Infosys',
    date: 'Apr 2024 - Dec 2024',
    bullets: [
      'Reduced manual competitor research effort by 40% by architecting an end-to-end RAG system using LangChain, OpenAI embeddings, and Vector Databases.',
      'Increased average order value by 12% and offer precision by 25% by deploying core algorithmic components for a credit scoring recommendation platform analyzing 500K+ profiles.',
      'Decreased new hire onboarding time by 35% by mentoring 30+ analysts on advanced SQL optimization, Power BI, and statistical modeling best practices.',
      'Awarded Best Employee by Infosys (Dec 2025) across the division by delivering exceptional, high-impact machine learning and data engineering solutions.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Infosys',
    date: 'Feb 2022 - Apr 2024',
    bullets: [
      'Decreased enterprise report latency by 40% by automating 12+ Power BI dashboards powered by robust SQL stored procedures and ETL pipelines.',
      'Boosted customer onboarding conversion by 9% and retention by 7% by designing and executing rigorous A/B and multivariate experimentation frameworks.',
      'Improved data reliability across severe compliance metrics by collaborating with cross-functional engineering and data science teams in Agile sprints (JIRA).',
      'Scaled analytics capabilities by refactoring legacy data pipelines, ensuring highly available and performant telemetry for downstream business intelligence.',
    ],
  },
  {
    role: 'Business Data Analyst',
    company: 'Maxval Technologies',
    date: 'Mar 2020 - Feb 2022',
    bullets: [
      'Increased operational capacity-planning accuracy by 40% by developing robust time-series forecasting models using Python and advanced statistical methods.',
      'Amplified marketing campaign ROI by 12% by deploying R-based behavioral customer segmentation algorithms to tailor strategic outreach.',
      'Reduced systemic operational costs by 17% by engineering financial tracking dashboards in Tableau that surfaced actionable cost-visibility insights.',
      'Fortified end-to-end data accuracy for 2M+ client records by building scalable Python and SQL ETL pipelines paired with rigorous reconciliation frameworks.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative bg-[#0a0a0a] px-6 py-24 md:px-12 lg:px-24 font-sans text-white z-20">
      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-16">Experience</h2>
        
        <div className="space-y-12 border-l border-white/10 pl-6 ml-3 md:pl-10 md:ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-3 w-3 rounded-full border-2 border-[#0a0a0a] bg-white/40 ring-2 ring-white/10 group-hover:bg-white transition-colors duration-300" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white/90">{exp.role}</h3>
                  <div className="text-lg font-medium text-white/60 mt-1">{exp.company}</div>
                </div>
                <div className="mt-2 text-sm text-white/40 md:mt-0 font-mono tracking-tight shrink-0">
                  {exp.date}
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-white/70 leading-relaxed flex">
                    <span className="mr-3 text-white/30">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
