import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section bg-card/30">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <p className="section-title">Contact</p>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Let's Connect
        </h2>
        
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about AI, finance, and technology.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:rqy24@ic.ac.uk"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            rqy24@ic.ac.uk
          </a>
          
          <a
            href="https://github.com/rq1234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          
          <a
            href="https://linkedin.com/in/rongquanyeo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground mt-16">
          © {new Date().getFullYear()} Rong Quan Yeo. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
