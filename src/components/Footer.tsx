import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Twitter, Instagram, Youtube, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-primary/20 bg-background-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl text-primary text-glow font-bold">
                QREW COLLECTIVE
              </span>
            </div>
            <p className="text-foreground-secondary text-sm font-mono mb-6 max-w-sm">
              {'>'} A crew of innovators, creators, and rebels.
              <br />
              {'>'} Delivering exclusive experiences.
              <br />
              {'>'} Transcending traditional commerce.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, label: 'TWITTER', href: '#' },
                { icon: Instagram, label: 'INSTAGRAM', href: '#' },
                { icon: Youtube, label: 'YOUTUBE', href: '#' },
                { icon: Github, label: 'GITHUB', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 border border-primary/30 text-foreground-secondary hover:text-primary hover:border-primary hover:shadow-[0_0_10px_hsl(130_100%_50%/0.3)] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-mono text-sm text-foreground mb-4">{'>'} NAVIGATION</h4>
            <ul className="space-y-2">
              {[
                { label: 'HOME', path: '/' },
                { label: 'PRODUCTS', path: '/products' },
                { label: 'QREW_EXCLUSIVE', path: '/qrew' },
                { label: 'ABOUT', path: '/about' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-mono text-sm text-foreground-secondary hover:text-primary transition-colors"
                  >
                    [{link.label}]
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-mono text-sm text-foreground mb-4">{'>'} SYSTEM</h4>
            <ul className="space-y-2">
              {[
                { label: 'TERMS', path: '#' },
                { label: 'PRIVACY', path: '#' },
                { label: 'CONTACT', path: '#' },
                { label: 'FAQ', path: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="font-mono text-sm text-foreground-secondary hover:text-primary transition-colors"
                  >
                    [{link.label}]
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-foreground-muted">
            <div>
              © 2024 QREW COLLECTIVE | ALL_RIGHTS_RESERVED
            </div>
            <div className="flex items-center gap-4">
              <span>BUILT_WITH: INNOVATION + CODE</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                SYSTEM_OPERATIONAL
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
