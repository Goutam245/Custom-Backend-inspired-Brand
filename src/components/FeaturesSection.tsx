import { motion } from 'framer-motion';
import { Shield, Zap, Package, Users, Lock, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'PREMIUM_QUALITY',
    description: 'Crafted with materials that exceed industry standards',
  },
  {
    icon: Zap,
    title: 'FAST_SHIPPING',
    description: 'Express delivery to your coordinates worldwide',
  },
  {
    icon: Package,
    title: 'SECURE_PACKAGING',
    description: 'Military-grade protection for every shipment',
  },
  {
    icon: Users,
    title: 'QREW_COMMUNITY',
    description: 'Join an exclusive collective of innovators',
  },
  {
    icon: Lock,
    title: 'ENCRYPTED_TRANSACTIONS',
    description: 'Bank-level security for all operations',
  },
  {
    icon: Globe,
    title: 'GLOBAL_ACCESS',
    description: 'Operating in 50+ countries worldwide',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, hsl(130 100% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block terminal-panel px-6 py-3 mb-4">
            <span className="text-primary font-mono text-sm">{'>'} SYSTEM_SPECIFICATIONS</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            WHY CHOOSE QREW
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="terminal-panel p-6 hover-glow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 border border-primary/30 rounded-sm group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                    [✓] {feature.title}
                  </h3>
                  <p className="text-foreground-secondary text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal Stats Panel */}
        <motion.div
          className="mt-16 terminal-panel-glow p-6 md:p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/20">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-xs text-foreground-muted">
              LIVE_METRICS
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'ACTIVE_USERS', value: '12,847' },
              { label: 'ORDERS_SHIPPED', value: '45,291' },
              { label: 'COUNTRIES', value: '53' },
              { label: 'UPTIME', value: '99.9%' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-heading text-primary text-glow mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-foreground-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
