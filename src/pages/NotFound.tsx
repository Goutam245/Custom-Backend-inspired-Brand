import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="terminal-panel-glow p-8 md:p-12 max-w-lg mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 justify-center mb-6 pb-4 border-b border-primary/20">
            <div className="w-3 h-3 rounded-full bg-error" />
            <div className="w-3 h-3 rounded-full bg-warning" />
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="ml-4 text-xs font-mono text-foreground-muted">
              error@qrew:~
            </span>
          </div>

          {/* Error Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-error/10 border border-error/30 rounded-sm mb-6">
            <AlertTriangle className="w-10 h-10 text-error" />
          </div>

          {/* Error Message */}
          <div className="space-y-4 font-mono">
            <h1 className="text-4xl md:text-5xl font-heading text-error">
              ERROR 404
            </h1>
            <p className="text-foreground-secondary">
              <span className="text-primary">{'>'}</span> PAGE_NOT_FOUND
            </p>
            <p className="text-foreground-muted text-sm">
              The requested resource does not exist on this server.
            </p>
          </div>

          {/* Action */}
          <div className="mt-8">
            <Button variant="terminal" size="lg" asChild>
              <Link to="/">
                RETURN_HOME
              </Link>
            </Button>
          </div>

          {/* Footer */}
          <p className="text-foreground-muted font-mono text-xs mt-8">
            If this error persists, contact system administrator
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
