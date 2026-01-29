import { Send, Cog, CornerDownRight, CheckCircle } from "lucide-react";

const APIFlowSection = () => {
  const steps = [
    {
      number: 1,
      icon: Send,
      title: "Client Sends Request",
      description: "The frontend makes an HTTP request to a specific endpoint with a method, headers, and optionally a body.",
      example: "POST /api/users with { name: 'John' }"
    },
    {
      number: 2,
      icon: Cog,
      title: "Server Processes",
      description: "The backend receives the request, runs the necessary logic, and interacts with the database if needed.",
      example: "Validate data → Save to database"
    },
    {
      number: 3,
      icon: CornerDownRight,
      title: "Server Returns Response",
      description: "The server sends back a response with a status code and any relevant data.",
      example: "201 Created with { id: 1, name: 'John' }"
    }
  ];

  return (
    <section id="api-flow" className="section-container bg-secondary/20 scroll-mt-20">
      <h2 className="section-title">Simple API Flow</h2>
      <p className="section-subtitle">
        How a typical API request works from start to finish
      </p>

      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-border hidden md:block" />

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="content-card relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Step indicator */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                      Step {step.number}
                    </span>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-3">{step.description}</p>
                  <code className="code-block text-xs py-2 px-3 inline-block">
                    {step.example}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success indicator */}
        <div className="mt-8 flex items-center justify-center gap-3 text-accent animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Request Complete!</span>
        </div>
      </div>

      <div className="mt-10 p-6 bg-card border border-border rounded-xl text-center">
        <p className="text-foreground font-medium mb-2">That's the basic flow!</p>
        <p className="text-sm text-muted-foreground">
          Every API interaction follows this pattern: request → process → response. 
          Understanding this flow is key to working with any API.
        </p>
      </div>
    </section>
  );
};

export default APIFlowSection;
