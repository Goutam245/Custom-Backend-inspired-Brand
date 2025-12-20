import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AsciiLogo from './AsciiLogo';
import TerminalText from './TerminalText';

const bootSequence = [
  { text: '> INITIALIZING_SYSTEM...', delay: 0 },
  { text: '> LOADING_ASSETS... [COMPLETE]', delay: 800, status: 'success' as const },
  { text: '> ESTABLISHING_CONNECTION... [SUCCESS]', delay: 1600, status: 'success' as const },
  { text: '> AUTHENTICATING_USER... [VERIFIED]', delay: 2400, status: 'success' as const },
];

export const HeroSection = () => {
  const [bootComplete, setBootComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setBootComplete(true);
    }, 3200);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3600);

    return () => {
      clearTimeout(bootTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${mins}m ${secs}s`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(130 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(130 100% 50% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Window */}
          <motion.div
            className="terminal-panel-glow p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-4 text-xs font-mono text-foreground-muted">
                terminal@qrew:~
              </span>
            </div>

            {/* Boot Sequence */}
            <div className="space-y-2 mb-8 min-h-[120px]">
              {bootSequence.map((line, index) => (
                <motion.div
                  key={index}
                  className="font-mono text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: line.delay / 1000, duration: 0.3 }}
                >
                  <span className="text-foreground-secondary">
                    {line.text.split('[')[0]}
                  </span>
                  {line.text.includes('[') && (
                    <span className={line.status === 'success' ? 'text-success' : 'text-foreground'}>
                      [{line.text.split('[')[1]}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Logo & Main Content */}
            {bootComplete && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-8">
                  <AsciiLogo />
                </div>

                {showContent && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    {/* System Stats */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-mono text-foreground-muted">
                      <div className="flex items-center gap-2">
                        <span className="text-foreground-secondary">STATUS:</span>
                        <span className="text-success flex items-center gap-1">
                          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                          OPERATIONAL
                        </span>
                      </div>
                      <div>
                        <span className="text-foreground-secondary">VERSION:</span>
                        <span className="text-primary ml-2">2.0.1</span>
                      </div>
                      <div>
                        <span className="text-foreground-secondary">UPTIME:</span>
                        <span className="text-primary ml-2">{formatUptime(uptime)}</span>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-foreground-secondary text-sm md:text-base max-w-xl mx-auto">
                      We are not just a brand. We are a collective.
                      <br />
                      <span className="text-primary text-glow">A crew of innovators, creators, and rebels.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button variant="hero" size="xl" asChild>
                        <Link to="/products">
                          ACCESS_SYSTEM
                        </Link>
                      </Button>
                      <Button variant="outline" size="xl" asChild>
                        <Link to="/qrew">
                          QREW_EXCLUSIVE
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Scroll Indicator */}
          {showContent && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col items-center gap-2 text-foreground-muted">
                <span className="text-xs font-mono">SCROLL_DOWN</span>
                <motion.div
                  className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
                  animate={{ scaleY: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
