import { Monitor, Server, ArrowRight, ArrowLeft } from "lucide-react";

const WhatIsAPISection = () => {
  return (
    <section id="what-is-api" className="section-container scroll-mt-20">
      <h2 className="section-title">What Is an API?</h2>
      <p className="section-subtitle">
        API stands for Application Programming Interface
      </p>

      <div className="content-card mb-10">
        <p className="text-foreground leading-relaxed mb-6">
          Think of an API as a <strong>messenger</strong> that takes your request, tells a system what you want, 
          and returns the response back to you. It's the bridge that lets different software applications 
          talk to each other.
        </p>
        
        <p className="text-muted-foreground">
          When you use an app on your phone or browse a website, you're often using APIs behind the scenes 
          to fetch data, send messages, or perform actions on a server.
        </p>
      </div>

      {/* Visual Diagram */}
      <div className="bg-secondary/30 rounded-xl p-6 md:p-8">
        <p className="text-sm text-muted-foreground text-center mb-6 font-medium">
          How Frontend and Backend Communicate
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Client */}
          <div className="diagram-box flex-1 max-w-[200px]">
            <Monitor className="w-10 h-10 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-1">Client</h4>
            <p className="text-xs text-muted-foreground">Frontend / Browser</p>
          </div>

          {/* Arrow - Request */}
          <div className="flex flex-col items-center gap-1">
            <div className="hidden md:flex items-center gap-2 diagram-arrow">
              <span className="text-xs">Request</span>
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className="md:hidden flex items-center gap-2 diagram-arrow rotate-90">
              <ArrowRight className="w-5 h-5" />
            </div>
            <code className="text-xs bg-code-bg px-2 py-1 rounded border border-code-border font-mono">
              GET /users
            </code>
            <div className="hidden md:flex items-center gap-2 diagram-arrow mt-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-xs">Response</span>
            </div>
          </div>

          {/* Server */}
          <div className="diagram-box flex-1 max-w-[200px]">
            <Server className="w-10 h-10 text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-1">Server</h4>
            <p className="text-xs text-muted-foreground">Backend / Database</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-block bg-card border border-border rounded-lg px-4 py-3 text-sm">
            <span className="text-muted-foreground">Response: </span>
            <code className="font-mono text-foreground">{"{ users: [...] }"}</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAPISection;
