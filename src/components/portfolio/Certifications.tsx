import { Award, ExternalLink } from "lucide-react";
import awsLogo from "@/assets/aws.png";
import harvardLogo from "@/assets/harvard.png";
import nyuLogo from "@/assets/nyu.png";
import whartonLogo from "@/assets/wharton.jpg";

const certificationGroups = [
  {
    category: "Cloud & Engineering",
    items: [
      {
        name: "AWS Solutions Architect Associate",
        issuer: "Amazon Web Services",
        date: "2025",
        logo: awsLogo,
        verifyUrl:
          "https://www.credly.com/badges/ed77de59-1b65-46cc-90a3-97313f8b2233/linked_in_profile",
      },
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2025",
        logo: awsLogo,
        verifyUrl:
          "https://www.credly.com/badges/7772df9c-dcc4-4606-84c5-6dc28820be00/linked_in_profile",
      },
      {
        name: "CS50X: Introduction to Computer Science",
        issuer: "Harvard University",
        date: "2023",
        logo: harvardLogo,
        verifyUrl:
          "https://courses.edx.org/certificates/8c1aa6fd1d6547179eb262fe50074564",
      },
    ],
  },
  {
    category: "Finance Analytics",
    items: [
      {
        name: "Machine Learning & Reinforcement Learning in Finance",
        issuer: "NYU",
        date: "2024",
        logo: nyuLogo,
        verifyUrl:
          "https://www.coursera.org/account/accomplishments/specialization/XJV4IVXF4FK2",
      },
      {
        name: "Business Analytics Specialization",
        issuer: "Wharton",
        date: "2024",
        logo: whartonLogo,
        verifyUrl:
          "https://www.coursera.org/account/accomplishments/specialization/6H82H86T3JXC",
      },
      {
        name: "Finance & Accounting Specialization",
        issuer: "Wharton",
        date: "2024",
        logo: whartonLogo,
        verifyUrl:
          "https://www.coursera.org/account/accomplishments/specialization/FYD22QIA4E0X",
      },
    ],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section bg-card/30">
      <div className="container max-w-5xl mx-auto px-6">
        <p className="section-title">Certifications & Credentials</p>

        <div className="space-y-12">
          {certificationGroups.map((group, index) => (
            <div key={index}>
              {/* Category header */}
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                {group.category}
              </h3>

              {/* Cards row */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((cert, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between p-5 rounded-lg border border-border bg-background/50 hover:border-primary/30 transition-colors"
                  >
                    {/* Top content */}
                    <div className="flex items-start gap-3 mb-4">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-10 h-10 object-contain opacity-80 flex-shrink-0"
                      />

                      <div>
                        <h4 className="font-medium text-foreground leading-snug mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Bottom meta */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {cert.date}
                      </span>

                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                        >
                          Verify
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

