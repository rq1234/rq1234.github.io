const About = () => {
  return (
    <section id="about" className="section">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="section-title">About</p>
        
        <div className="space-y-6 text-foreground/90 text-lg leading-relaxed">
          <p>
            I'm a second-year undergraduate at <span className="text-primary">Imperial College London</span>, 
            studying Economics, Finance & Data Science. My work sits at the intersection of 
            <span className="text-primary"> artificial intelligence</span>, 
            <span className="text-primary"> quantitative finance</span>, and 
            <span className="text-primary"> cloud engineering</span>.
          </p>
          
          <p>
            I'm driven by the challenge of building systems that make sense of complexity—whether 
            that's developing machine learning pipelines for financial analytics, designing 
            market-making algorithms, or creating intelligent chatbots that surface insights from 
            financial data.
          </p>
          
          <p>
            Beyond technical work, I lead outreach and corporate relations for Imperial's 
            Data Science and AI societies, where I help bridge the gap between academia and 
            industry while fostering inclusive tech communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;