import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'PRODUCTS', path: '/products' },
  { label: 'QREW_EXCLUSIVE', path: '/qrew' },
  { label: 'ABOUT', path: '/about' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 text-primary group-hover:animate-pulse" />
            <span className="font-heading text-primary text-glow font-bold tracking-wider">
              QREW
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-4 py-2 font-mono text-sm tracking-wide transition-all duration-300 relative group',
                  location.pathname === item.path
                    ? 'text-primary text-glow'
                    : 'text-foreground-secondary hover:text-primary'
                )}
              >
                <span className={cn(
                  'mr-1 transition-opacity duration-300',
                  location.pathname === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                )}>
                  {'> '}
                </span>
                {item.label}
                {location.pathname === item.path && (
                  <motion.span
                    className="animate-terminal-blink text-primary ml-1"
                    layoutId="cursor"
                  >
                    _
                  </motion.span>
                )}
              </Link>
            ))}
          </div>

          {/* System Status */}
          <div className="hidden md:flex items-center gap-4 text-xs font-mono text-foreground-muted">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              ONLINE
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background-secondary border-t border-primary/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      'block px-4 py-3 font-mono text-sm tracking-wide transition-all duration-300 rounded',
                      location.pathname === item.path
                        ? 'text-primary bg-primary/10 text-glow'
                        : 'text-foreground-secondary hover:text-primary hover:bg-primary/5'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {'> '}{item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
