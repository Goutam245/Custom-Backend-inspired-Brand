import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const CORRECT_PASSWORD = 'QREW2024';

const exclusiveProducts = [
  {
    id: 'EX-001',
    name: 'Elite Terminal Jacket',
    price: 299.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop',
    status: 'LIMITED' as const,
    quantity: 15,
  },
  {
    id: 'EX-002',
    name: 'Founders Edition Watch',
    price: 599.99,
    originalPrice: 749.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    status: 'LIMITED' as const,
    quantity: 8,
  },
  {
    id: 'EX-003',
    name: 'Cyber Sneakers V2',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    status: 'AVAILABLE' as const,
    quantity: 42,
  },
];

type AuthState = 'idle' | 'verifying' | 'success' | 'error' | 'locked';

const QrewExclusive = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authState, setAuthState] = useState<AuthState>('idle');
  const [attempts, setAttempts] = useState(0);
  const [sessionTime, setSessionTime] = useState(30 * 60);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (attempts >= 5) {
      setAuthState('locked');
      setErrorMessage('ACCESS_DENIED: TOO_MANY_ATTEMPTS');
      return;
    }

    setAuthState('verifying');

    // Simulate verification delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (password.toUpperCase() === CORRECT_PASSWORD) {
      setAuthState('success');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
      
      // Start session timer
      const interval = setInterval(() => {
        setSessionTime((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            setIsAuthenticated(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setAuthState('error');
      setAttempts((prev) => prev + 1);
      setErrorMessage(`ACCESS_DENIED: INVALID_CREDENTIALS (${5 - attempts - 1} attempts remaining)`);
      setTimeout(() => setAuthState('idle'), 2000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* Welcome Header */}
            <motion.div
              className="terminal-panel-glow p-6 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 text-success mb-1">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-mono text-sm">ACCESS_GRANTED</span>
                  </div>
                  <h1 className="font-heading text-xl md:text-2xl text-foreground">
                    WELCOME_BACK, QREW_MEMBER
                  </h1>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-foreground-muted block">SESSION_EXPIRES_IN:</span>
                  <span className="font-mono text-lg text-warning">{formatTime(sessionTime)}</span>
                </div>
              </div>
            </motion.div>

            {/* Exclusive Products */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-block terminal-panel px-6 py-3 mb-4">
                <span className="text-primary font-mono text-sm">{'>'} EXCLUSIVE_INVENTORY</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                QREW MEMBERS ONLY
              </h2>
              <p className="text-foreground-secondary font-mono text-sm">
                [PRE-ORDER] available • [SPECIAL_PRICING] activated
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exclusiveProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="terminal-panel hover-glow group relative overflow-hidden">
                    {/* Exclusive Badge */}
                    <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-primary text-primary-foreground text-xs font-mono rounded-sm">
                      QREW_EXCLUSIVE
                    </div>
                    
                    <div className="relative aspect-square overflow-hidden bg-background-secondary">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 px-2 py-1 text-xs font-mono border border-warning/50 text-warning bg-background/80 backdrop-blur-sm rounded-sm">
                        [{product.status}]
                      </div>
                    </div>

                    <div className="p-4 space-y-3 border-t border-primary/20">
                      <div className="text-xs font-mono text-foreground-muted">
                        PRD_ID: {product.id}
                      </div>
                      <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center text-sm font-mono">
                        <div>
                          <span className="text-foreground-muted line-through mr-2">${product.originalPrice}</span>
                          <span className="text-primary text-glow">${product.price}</span>
                        </div>
                        <div className="text-success text-xs">
                          SAVE ${(product.originalPrice - product.price).toFixed(2)}
                        </div>
                      </div>
                      <div className="text-xs font-mono text-foreground-muted">
                        UNITS_REMAINING: {product.quantity}
                      </div>
                      <Button variant="terminal" className="w-full">
                        PRE-ORDER_NOW
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Password Panel */}
            <div className="terminal-panel-glow p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-warning/10 border border-warning/30 rounded-sm mb-4">
                  <Lock className="w-8 h-8 text-warning" />
                </div>
                <h1 className="font-heading text-xl text-foreground mb-2">
                  RESTRICTED ACCESS ZONE
                </h1>
                <p className="text-foreground-secondary font-mono text-sm">
                  SECURITY CLEARANCE REQUIRED
                </p>
              </div>

              {/* Auth Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-sm text-foreground-muted mb-2">
                    {'>'} ENTER_ACCESS_CODE:
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={authState === 'locked' || authState === 'verifying'}
                      className="w-full bg-background-secondary border border-primary/30 text-foreground font-mono px-4 py-3 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_hsl(130_100%_50%/0.2)] transition-all disabled:opacity-50"
                      placeholder="________________"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary animate-terminal-blink">
                      █
                    </span>
                  </div>
                </div>

                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {authState === 'verifying' && (
                    <motion.div
                      className="flex items-center gap-2 text-info font-mono text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Loader2 className="w-4 h-4 animate-spin" />
                      VERIFYING_CREDENTIALS...
                    </motion.div>
                  )}

                  {authState === 'success' && (
                    <motion.div
                      className="flex items-center gap-2 text-success font-mono text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <CheckCircle className="w-4 h-4" />
                      ACCESS_GRANTED ✓
                    </motion.div>
                  )}

                  {(authState === 'error' || authState === 'locked') && (
                    <motion.div
                      className="flex items-center gap-2 text-error font-mono text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <AlertTriangle className="w-4 h-4" />
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress Bar (during verification) */}
                {authState === 'verifying' && (
                  <div className="w-full h-2 bg-background-secondary border border-primary/30">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  variant="access"
                  size="lg"
                  className="w-full"
                  disabled={authState === 'locked' || authState === 'verifying' || !password}
                >
                  {authState === 'verifying' ? 'PROCESSING...' : 'AUTHENTICATE'}
                </Button>
              </form>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-foreground-muted font-mono text-xs">
                  Authorized Personnel Only
                </p>
                <p className="text-foreground-muted font-mono text-xs mt-2">
                  Need access? Contact admin for credentials
                </p>
              </div>
            </div>

            {/* Hint for demo */}
            <p className="text-center text-foreground-muted font-mono text-xs mt-4">
              [DEMO] Password: QREW2024
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QrewExclusive;
