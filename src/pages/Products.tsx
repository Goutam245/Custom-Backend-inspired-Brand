import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const allProducts = [
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
  {
    id: '007',
    name: 'Binary Watch',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop',
    status: 'AVAILABLE' as const,
    quantity: 67,
  },
  {
    id: '008',
    name: 'Debug Beanie',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=600&fit=crop',
    status: 'AVAILABLE' as const,
    quantity: 134,
  },
  {
    id: '009',
    name: 'Kernel Panic Jacket',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1544923246-77307dd628b9?w=600&h=600&fit=crop',
    status: 'LIMITED' as const,
    quantity: 9,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block terminal-panel px-6 py-3 mb-4">
              <span className="text-primary font-mono text-sm">{'>'} FULL_CATALOGUE</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              ALL PRODUCTS
            </h1>
            <p className="text-foreground-secondary max-w-xl mx-auto font-mono text-sm">
              Browse our complete inventory of premium merchandise
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            className="terminal-panel p-4 mb-8 flex flex-wrap gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex gap-2 text-sm font-mono">
              <span className="text-foreground-muted">FILTER:</span>
              <button className="text-primary hover:underline">[ALL]</button>
              <button className="text-foreground-secondary hover:text-primary">[AVAILABLE]</button>
              <button className="text-foreground-secondary hover:text-primary">[LIMITED]</button>
            </div>
            <div className="text-sm font-mono text-foreground-muted">
              SHOWING: {allProducts.length} ITEMS
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
