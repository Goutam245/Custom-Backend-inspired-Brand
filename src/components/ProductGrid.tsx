import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const products = [
  {
    id: '001',
    name: 'Terminal Hoodie',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
    status: 'AVAILABLE' as const,
    quantity: 247,
  },
  {
    id: '002',
    name: 'Matrix Cap',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop',
    status: 'LIMITED' as const,
    quantity: 23,
  },
  {
    id: '003',
    name: 'Code Runner Tee',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    status: 'AVAILABLE' as const,
    quantity: 156,
  },
  {
    id: '004',
    name: 'Cyber Joggers',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=600&fit=crop',
    status: 'AVAILABLE' as const,
    quantity: 89,
  },
  {
    id: '005',
    name: 'Hacker Backpack',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    status: 'LIMITED' as const,
    quantity: 12,
  },
  {
    id: '006',
    name: 'Console Socks (3-Pack)',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=600&fit=crop',
    status: 'SOLD_OUT' as const,
    quantity: 0,
  },
];

export const ProductGrid = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block terminal-panel px-6 py-3 mb-4">
            <span className="text-primary font-mono text-sm">{'>'} PRODUCT_CATALOGUE</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            AVAILABLE INVENTORY
          </h2>
          <p className="text-foreground-secondary max-w-xl mx-auto font-mono text-sm">
            [SELECT_ITEM] to view details and initiate purchase sequence
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} {...product} index={index} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-sm text-foreground-muted">
            DISPLAYING: 6/{products.length} ITEMS
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
