import { Users, Lightbulb, BookOpen } from "lucide-react";

const leadershipRoles = [
  {
    role: "Head of Corporate Relations",
    organization: "Imperial Data Science Society",
    period: "Jun 2025 – Present",
    description:
      "Managing external outreach for a 1,000+ member society, engaging 15+ industry professionals. Organised 5+ data science talks and panels with 50–100 attendees each.",
    icon: Users,
  },
  {
    role: "Head of Outreach",
    organization: "Imperial AI Society",
    period: "2024 – Present",
    description:
      "Leading outreach initiatives to promote AI education and awareness across the Imperial community, fostering connections between students and industry.",
    icon: Lightbulb,
  },
  {
    role: "Events Manager",
    organization: "Advisory Singapore",
    period: "Jan 2024 – Oct 2024",
    description:
      "Organised monthly career panels by sourcing panelists and managing communications with them. Achieved outreach of around 100 students for events. Organised in-person career experiential events in collaboration with firms.",
    icon: Users,
  },
  {
    role: "Strategy Analyst",
    organization: "Imperial Algorithmic Trading Society",
    period: "Oct 2024 – May 2025",
    description:
      "Backtested ML-driven strategies outperforming S&P 500 by 8%. Led Python workshops on strategy optimisation and market microstructure.",
    icon: BookOpen,
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="section">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="section-title">Leadership & Community</p>

        <div className="grid gap-6">
          {leadershipRoles.map((role, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card card-hover flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <role.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {role.role}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {role.period}
                  </span>
                </div>

                <p className="text-primary font-medium mb-2">
                  {role.organization}
                </p>

                <p className="text-muted-foreground">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
