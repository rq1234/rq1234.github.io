import { Github, Linkedin, FileText } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import resumePDF from "@/assets/Rong_Quan_Yeo_Resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-24"
    >
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
              <img
                src={profileImage}
                alt="Rong Quan Yeo"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Rong Quan Yeo
            </h1>

            {/* Degree */}
            <p className="text-lg md:text-xl text-primary font-medium mb-10">
              Economics, Finance & Data Science @ Imperial College London
            </p>

            {/* Value Proposition */}
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-12">
              <p className="mb-4 font-medium text-foreground/90">
                <strong>Building intelligent systems</strong> at the intersection
                of:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-5 pl-1">
                <li>AI & Machine Learning</li>
                <li>Finance & Quantitative Analysis</li>
                <li>Cloud Engineering & Data Pipelines</li>
              </ul>

              <p>
                Passionate about turning complex data into{" "}
                <strong className="text-foreground">
                  actionable insights
                </strong>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4">
              {/* Primary + Secondary */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {/* Primary */}
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Projects
                </a>

                {/* Secondary */}
                <a
                  href={resumePDF}
                  download="Rong_Quan_Yeo_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </a>

                <a
                  href="https://github.com/rq1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>

              {/* Verification */}
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://linkedin.com/in/rongquanyeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground border border-border/50 rounded-lg hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

