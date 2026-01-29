import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-4xl mx-auto px-6 py-10 text-center">
        <div className="inline-flex items-center gap-2 text-muted-foreground mb-3">
          <BookOpen className="w-4 h-4" />
          <span className="text-sm font-medium">REST API Basics</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Built for learning backend fundamentals
        </p>
        <p className="text-xs text-muted-foreground/60 mt-4">
          A beginner-friendly guide to understanding how APIs work
        </p>
      </div>
    </footer>
  );
};

export default Footer;
