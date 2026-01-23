const experiences = [
  {
    role: "Data Engineering and AI Intern",
    company: "Amili Singapore",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Built automated data pipeline using PostgreSQL, AWS S3, and OpenAI embeddings to vectorise 10000+ documents for semantic search",
      "Trained XGBoost models with SHAP integration for risk classification and interpretable feature attribution",
      "Deployed full-stack chatbot with React and AWS EC2, supporting RAG-based Q&A and reducing manual search time"
    ]
  },
  {
    role: "Student Immersion Programme – Work Shadowing Participant",
    company: "Amazon Web Services (AWS)",
    period: "Apr 2025",
    bullets: [
      "Built a generative AI-powered music recommendation app using AWS PartyRock to suggest songs tailored to user's mood"
    ]
  },
  {
    role: "Spring Intern",
    company: "Citadel & Citadel Securities",
    period: "Apr 2025",
    bullets: [
      "Selected as 1 of 80 students across EMEA for Citadel's European Trading Invitational",
      "Built and tuned Avellaneda-Stoikov market-making model in Python, achieving top 5 team placement"
    ]
  },
  {
    role: "Intern",
    company: "GAO Capital Singapore",
    period: "Feb 2024 – Apr 2024",
    bullets: [
      "Built dashboards using Bloomberg API to track Indian option volatility, reducing data review time",
      "Conducted time series analysis on Nikkei 225 to identify seasonality patterns for trading signals",
      "Backtested quantitative strategies computing Sharpe ratio and drawdown metrics"
    ]
  },
  {
    role: "Intelligence Admin Assistant",
    company: "Singapore Army",
    period: "Jan 2022 – Nov 2023",
    bullets: [
      "Built PowerBI dashboards to automate performance tracking, reducing reporting time by 40%",
      "Digitised military exercise maps using ArcGIS, enhancing training realism for 500+ personnel"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-card/30">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="text-3xl font-bold text-primary mb-10">Experience</p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
              
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-muted-foreground font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-primary font-medium">
                  {exp.company}
                </p>
                
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
