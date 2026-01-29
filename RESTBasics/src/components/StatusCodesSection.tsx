import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

const StatusCodesSection = () => {
  const statusCodes = [
    {
      code: "200",
      name: "OK",
      description: "The request was successful",
      type: "success",
      icon: CheckCircle
    },
    {
      code: "201",
      name: "Created",
      description: "A new resource was created successfully",
      type: "success",
      icon: CheckCircle
    },
    {
      code: "400",
      name: "Bad Request",
      description: "The request was invalid or malformed",
      type: "warning",
      icon: AlertCircle
    },
    {
      code: "401",
      name: "Unauthorized",
      description: "Authentication is required",
      type: "warning",
      icon: AlertCircle
    },
    {
      code: "404",
      name: "Not Found",
      description: "The requested resource doesn't exist",
      type: "warning",
      icon: AlertCircle
    },
    {
      code: "500",
      name: "Server Error",
      description: "Something went wrong on the server",
      type: "error",
      icon: XCircle
    }
  ];

  const getStatusClass = (type: string) => {
    switch (type) {
      case "success": return "status-success";
      case "warning": return "status-warning";
      case "error": return "status-error";
      default: return "";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "success": return "text-emerald-500";
      case "warning": return "text-amber-500";
      case "error": return "text-red-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="status-codes" className="section-container scroll-mt-20">
      <h2 className="section-title">HTTP Status Codes</h2>
      <p className="section-subtitle">
        Every response includes a status code telling you what happened
      </p>

      <div className="grid gap-4">
        {statusCodes.map((status, index) => (
          <div 
            key={status.code} 
            className="content-card flex items-center gap-4 animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <status.icon className={`w-5 h-5 flex-shrink-0 ${getIconColor(status.type)}`} />
            <span className={`status-badge ${getStatusClass(status.type)} min-w-[50px] justify-center`}>
              {status.code}
            </span>
            <span className="font-medium text-foreground min-w-[120px]">{status.name}</span>
            <span className="text-sm text-muted-foreground">{status.description}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
        <div className="p-4 status-success rounded-lg">
          <span className="font-semibold">2xx Success</span>
          <p className="mt-1 opacity-80">Everything worked as expected</p>
        </div>
        <div className="p-4 status-warning rounded-lg">
          <span className="font-semibold">4xx Client Error</span>
          <p className="mt-1 opacity-80">Something wrong with the request</p>
        </div>
        <div className="p-4 status-error rounded-lg">
          <span className="font-semibold">5xx Server Error</span>
          <p className="mt-1 opacity-80">Something wrong on the server</p>
        </div>
      </div>
    </section>
  );
};

export default StatusCodesSection;
