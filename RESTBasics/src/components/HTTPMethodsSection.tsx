import { Download, Upload, RefreshCw, Trash2 } from "lucide-react";

const HTTPMethodsSection = () => {
  const methods = [
    {
      method: "GET",
      badgeClass: "method-get",
      icon: Download,
      description: "Retrieve data from the server",
      example: "GET /users",
      useCase: "Fetching a list of users or a single user's profile"
    },
    {
      method: "POST",
      badgeClass: "method-post",
      icon: Upload,
      description: "Create new data on the server",
      example: "POST /users",
      useCase: "Creating a new user account or submitting a form"
    },
    {
      method: "PUT",
      badgeClass: "method-put",
      icon: RefreshCw,
      description: "Update existing data on the server",
      example: "PUT /users/123",
      useCase: "Updating a user's profile information"
    },
    {
      method: "DELETE",
      badgeClass: "method-delete",
      icon: Trash2,
      description: "Remove data from the server",
      example: "DELETE /users/123",
      useCase: "Deleting a user account or removing a post"
    }
  ];

  return (
    <section id="http-methods" className="section-container scroll-mt-20">
      <h2 className="section-title">HTTP Methods</h2>
      <p className="section-subtitle">
        The four main methods used to interact with resources
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {methods.map((item, index) => (
          <div 
            key={item.method} 
            className="content-card animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <item.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`method-badge ${item.badgeClass}`}>
                    {item.method}
                  </span>
                </div>
                <p className="text-foreground font-medium mb-1">{item.description}</p>
                <p className="text-sm text-muted-foreground mb-3">{item.useCase}</p>
                <code className="code-block text-xs py-2 px-3 inline-block">
                  {item.example}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <p className="text-sm text-foreground">
          <strong>💡 Tip:</strong> These methods map to CRUD operations — 
          <span className="font-mono text-primary"> Create</span> (POST), 
          <span className="font-mono text-primary"> Read</span> (GET), 
          <span className="font-mono text-primary"> Update</span> (PUT), 
          <span className="font-mono text-primary"> Delete</span> (DELETE).
        </p>
      </div>
    </section>
  );
};

export default HTTPMethodsSection;
