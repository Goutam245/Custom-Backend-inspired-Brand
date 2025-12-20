import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TerminalLineProps {
  prefix?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  status?: 'success' | 'error' | 'warning' | 'info' | 'loading';
}

const statusIcons = {
  success: '[✓]',
  error: '[✗]',
  warning: '[⚠]',
  info: '[i]',
  loading: '[◉]',
};

const statusColors = {
  success: 'text-success',
  error: 'text-error',
  warning: 'text-warning',
  info: 'text-info',
  loading: 'text-primary animate-pulse',
};

export const TerminalLine = ({
  prefix = '>',
  children,
  className,
  delay = 0,
  status,
}: TerminalLineProps) => {
  return (
    <motion.div
      className={cn('font-mono text-sm md:text-base', className)}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      <span className="text-primary mr-2">{prefix}</span>
      {status && (
        <span className={cn('mr-2', statusColors[status])}>
          {statusIcons[status]}
        </span>
      )}
      <span className="text-foreground">{children}</span>
    </motion.div>
  );
};

export default TerminalLine;
