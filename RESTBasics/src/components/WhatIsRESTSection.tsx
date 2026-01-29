import { FileText, Link, RefreshCw } from "lucide-react";

const WhatIsRESTSection = () => {
  const principles = [
    {
      icon: RefreshCw,
      title: "Stateless",
      description: "Each request contains all information needed. The server doesn't remember previous requests."
    },
    {
      icon: Link,
      title: "Resource-Based URLs",
      description: "Everything is a resource accessed via a unique URL, like /users or /products/123."
    },
    {
      icon: FileText,
      title: "Standard Methods",
      description: "Uses HTTP methods (GET, POST, PUT, DELETE) to perform actions on resources."
    }
  ];

  return (
    <section id="what-is-rest" className="section-container bg-secondary/20 scroll-mt-20">
      <h2 className="section-title">What Is REST?</h2>
      <p className="section-subtitle">
        REST (Representational State Transfer) is an architectural style for building APIs
      </p>

      <div className="content-card mb-10">
        <p className="text-foreground leading-relaxed">
          REST is a set of <strong>rules and conventions</strong> for how clients and servers should communicate. 
          It's not a protocol or standard—it's a way of designing your API so it's predictable, 
          scalable, and easy to use.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {principles.map((principle, index) => (
          <div 
            key={principle.title} 
            className="content-card animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <principle.icon className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-semibold text-foreground mb-2">{principle.title}</h4>
            <p className="text-sm text-muted-foreground">{principle.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <p className="text-sm text-muted-foreground mb-3 font-medium">Example Endpoints</p>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <code className="code-block flex-1 py-2">/users</code>
            <span className="text-sm text-muted-foreground">Get all users</span>
          </div>
          <div className="flex items-center gap-3">
            <code className="code-block flex-1 py-2">/users/123</code>
            <span className="text-sm text-muted-foreground">Get user with ID 123</span>
          </div>
          <div className="flex items-center gap-3">
            <code className="code-block flex-1 py-2">/users/123/posts</code>
            <span className="text-sm text-muted-foreground">Get posts by user 123</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRESTSection;
