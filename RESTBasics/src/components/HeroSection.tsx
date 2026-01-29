import { Globe, Server, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("what-is-api");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[var(--gradient-hero)] border-b border-border/50 pt-16">
      <div className="section-container text-center py-24 md:py-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
          <Globe className="w-4 h-4" />
          <span>Backend Fundamentals</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          REST API Basics
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Learn how backend APIs work in a simple and practical way
        </p>
        
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          REST APIs are the backbone of modern web applications. They're how your frontend 
          (what users see) communicates with your backend (where data lives). 
          Understanding REST is essential for any developer.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-elevated hover:border-border transition-all duration-300">
            <Server className="w-4 h-4 text-primary" />
            <span>8 Sections</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-elevated hover:border-border transition-all duration-300">
            <span>Beginner Friendly</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="mt-16 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <span className="text-sm">Start Learning</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
