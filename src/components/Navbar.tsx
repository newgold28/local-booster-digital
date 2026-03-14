import { motion } from 'framer-motion';
import logoIcon from '@/assets/logo-icon.png';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoIcon} alt="Local Booster Digital" className="w-10 h-10" />
          <span className="font-display font-bold text-lg text-foreground">
            Local Booster <span className="text-gradient">Digital</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
