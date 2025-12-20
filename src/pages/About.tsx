import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Users, Zap, Globe, Shield, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block terminal-panel px-6 py-3 mb-6">
              <span className="text-primary font-mono text-sm">{'>'} SYSTEM_INFO</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              ABOUT QREW COLLECTIVE
            </h1>
            <p className="text-foreground-secondary max-w-2xl mx-auto font-mono text-base md:text-lg">
              We are not just a brand. We are a collective.
              <br />
              <span className="text-primary text-glow">A crew of innovators, creators, and rebels.</span>
            </p>
          </motion.div>

          {/* Terminal Info Panel */}
          <motion.div
            className="terminal-panel-glow p-6 md:p-8 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-4 text-xs font-mono text-foreground-muted">
                about@qrew:~
              </span>
            </div>

            <div className="space-y-4 font-mono text-sm md:text-base">
              <p className="text-foreground-secondary">
                <span className="text-primary">{'>'}</span> Founded in 2024, QREW COLLECTIVE emerged from the intersection of technology and fashion.
              </p>
              <p className="text-foreground-secondary">
                <span className="text-primary">{'>'}</span> Our mission: Deliver exclusive experiences that transcend traditional commerce.
              </p>
              <p className="text-foreground-secondary">
                <span className="text-primary">{'>'}</span> We believe in quality over quantity, exclusivity over mass production.
              </p>
              <p className="text-foreground-secondary">
                <span className="text-primary">{'>'}</span> Every piece we create tells a story of innovation and rebellion.
              </p>
              <p className="text-primary text-glow mt-6">
                {'>'} JOIN THE COLLECTIVE. BECOME PART OF THE QREW._
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[
              {
                icon: Users,
                title: 'COMMUNITY_FIRST',
                description: 'Building a global network of like-minded individuals who share our vision.',
              },
              {
                icon: Zap,
                title: 'INNOVATION_DRIVEN',
                description: 'Pushing boundaries in design, technology, and customer experience.',
              },
              {
                icon: Shield,
                title: 'QUALITY_ASSURED',
                description: 'Premium materials and craftsmanship in every product we release.',
              },
              {
                icon: Globe,
                title: 'GLOBAL_REACH',
                description: 'Shipping to 50+ countries with localized support and fast delivery.',
              },
              {
                icon: Code,
                title: 'TECH_INTEGRATED',
                description: 'Seamless digital experiences from browsing to unboxing.',
              },
              {
                icon: Terminal,
                title: 'EXCLUSIVE_ACCESS',
                description: 'Members-only drops and early access to limited editions.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="terminal-panel p-6 hover-glow group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 border border-primary/30 rounded-sm group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                      [✓] {value.title}
                    </h3>
                    <p className="text-foreground-secondary text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="terminal-panel-glow p-8 md:p-12 max-w-2xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                READY TO JOIN?
              </h2>
              <p className="text-foreground-secondary font-mono mb-6">
                Start exploring our catalogue or apply for QREW exclusive access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/products">VIEW_PRODUCTS</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/qrew">QREW_ACCESS</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
