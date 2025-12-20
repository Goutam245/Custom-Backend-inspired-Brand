import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  status: 'AVAILABLE' | 'LIMITED' | 'SOLD_OUT';
  quantity?: number;
  index?: number;
}

const statusColors = {
  AVAILABLE: 'text-success',
  LIMITED: 'text-warning',
  SOLD_OUT: 'text-error',
};

export const ProductCard = ({
  id,
  name,
  price,
  image,
  status,
  quantity,
  index = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      className="terminal-panel hover-glow group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* ASCII Border Decoration */}
      <div className="absolute top-0 left-0 text-primary/50 text-xs font-mono">╔</div>
      <div className="absolute top-0 right-0 text-primary/50 text-xs font-mono">╗</div>
      <div className="absolute bottom-0 left-0 text-primary/50 text-xs font-mono">╚</div>
      <div className="absolute bottom-0 right-0 text-primary/50 text-xs font-mono">╝</div>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-background-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 scanlines" />
        
        {/* Status Badge */}
        <div className={cn(
          'absolute top-3 right-3 px-2 py-1 text-xs font-mono border rounded-sm bg-background/80 backdrop-blur-sm',
          statusColors[status],
          status === 'AVAILABLE' && 'border-success/50',
          status === 'LIMITED' && 'border-warning/50',
          status === 'SOLD_OUT' && 'border-error/50',
        )}>
          [{status}]
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3 border-t border-primary/20">
        {/* Product ID */}
        <div className="text-xs font-mono text-foreground-muted">
          PRD_ID: {id}
        </div>

        {/* Product Name */}
        <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Price & Quantity */}
        <div className="flex justify-between items-center text-sm font-mono">
          <div>
            <span className="text-foreground-muted">PRICE: </span>
            <span className="text-primary text-glow">${price.toFixed(2)}</span>
          </div>
          {quantity !== undefined && (
            <div className="text-foreground-muted">
              QTY: {quantity}
            </div>
          )}
        </div>

        {/* Action Button */}
        <Button
          variant="terminal"
          className="w-full mt-2"
          disabled={status === 'SOLD_OUT'}
        >
          {status === 'SOLD_OUT' ? 'UNAVAILABLE' : 'EXECUTE_ORDER'}
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
