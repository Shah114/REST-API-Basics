import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const RequestResponseSection = () => {
  const requestParts = [
    { name: "Method", example: "GET, POST, PUT, DELETE", description: "What action to perform" },
    { name: "URL", example: "/api/users/123", description: "Where to send the request" },
    { name: "Headers", example: "Content-Type: application/json", description: "Metadata about the request" },
    { name: "Body", example: '{ "name": "John" }', description: "Data to send (for POST/PUT)" }
  ];

  const responseParts = [
    { name: "Status Code", example: "200, 404, 500", description: "Was the request successful?" },
    { name: "Headers", example: "Content-Type: application/json", description: "Metadata about the response" },
    { name: "Body", example: "JSON data", description: "The actual data returned" }
  ];

  const jsonExample = `{
  "id": 1,
  "name": "John",
  "email": "john@example.com"
}`;

  return (
    <section id="request-response" className="section-container bg-secondary/20 scroll-mt-20">
      <h2 className="section-title">Request & Response</h2>
      <p className="section-subtitle">
        Understanding the structure of API communication
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Request */}
        <div className="content-card">
          <div className="flex items-center gap-2 mb-4">
            <ArrowUpRight className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Request</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">What the client sends to the server</p>
          
          <div className="space-y-3">
            {requestParts.map((part) => (
              <div key={part.name} className="flex items-start gap-3 text-sm">
                <span className="font-medium text-foreground min-w-[70px]">{part.name}</span>
                <span className="text-muted-foreground">{part.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Response */}
        <div className="content-card">
          <div className="flex items-center gap-2 mb-4">
            <ArrowDownLeft className="w-5 h-5 text-accent" />
            <h3 className="font-semibold text-foreground">Response</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">What the server sends back</p>
          
          <div className="space-y-3">
            {responseParts.map((part) => (
              <div key={part.name} className="flex items-start gap-3 text-sm">
                <span className="font-medium text-foreground min-w-[90px]">{part.name}</span>
                <span className="text-muted-foreground">{part.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* JSON Example */}
      <div className="content-card">
        <h4 className="font-semibold text-foreground mb-2">Example JSON Response</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Most APIs return data in JSON format — a structured way to represent data
        </p>
        <pre className="code-block">
          <code>{jsonExample}</code>
        </pre>
      </div>
    </section>
  );
};

export default RequestResponseSection;
