import { ExternalLink, Github } from "lucide-react";
import immc2021Report from "@/assets/IMMC_2021_Report.pdf";

const projects = [
  {
    title: "SPAC Stock Monitoring Dashboard",
    context: "Independent Project",
    problem: "Tracking SPAC lifecycle events and anomalies is manual and time-consuming",
    description:
      "Built and deployed full-stack SPAC monitoring web app using FastAPI, React, and Supabase, with agents for lifecycle tracking and anomaly detection, and an MCP chatbot for financial insights.",
    tech: ["FastAPI", "React", "Supabase", "AI Agents"],
    github: "https://github.com/rq1234/stock-monitoring",
  },
  {
    title: "Optiver Market Making Challenge",
    context: "IC Hack – Top 5 Finalist (Europe's Largest Hackathon)",
    problem: "Identifying real-time mispricing across simulated exchanges",
    description:
      "Built real-time arbitrage and market-making algorithms to detect mispricing opportunities across multiple simulated exchanges.",
    tech: ["Python", "Algorithmic Trading", "Real-time Systems"],
  },
  {
    title: "Portfolio Optimisation Model",
    context: "QRT Algorithmic Trading Competition",
    problem: "Dynamically allocating investments to maximise risk-adjusted returns",
    description:
      "Implemented convex portfolio optimisation to maximise Sharpe ratio with automated pipeline for scraping, preprocessing, and training on 19-min interval data.",
    tech: ["Python", "Convex Optimisation", "ML Pipeline"],
  },
  {
    title: "Identifying the Greatest Tennis Player of All Time",
    context: "International Math Modelling Competition (IMMC) 2021",
    problem:
      "Objectively ranking elite tennis players under different performance criteria and subjective weightings",
    description:
      "Applied the TOPSIS multi-criteria decision-making method, computing Euclidean distances to rank players across multiple weighting scenarios and conducting sensitivity analysis to test robustness of rankings.",
    tech: ["Python", "Operations Research", "TOPSIS", "Sensitivity Analysis"],
    demo: immc2021Report,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="section-title">Projects</p>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card card-hover"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {project.context}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                                 border border-border rounded-lg
                                 hover:bg-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                                 border border-border rounded-lg
                                 hover:bg-secondary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Report
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

