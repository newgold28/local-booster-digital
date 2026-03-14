import { motion } from 'framer-motion';
import { Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroContent() {
  return (
    <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center min-h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Globe className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">
            Web Design · Local SEO · AI-Powered Solutions
          </span>
          <Sparkles className="w-4 h-4 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
        >
          Boost Your Business{' '}
          <span className="text-gradient">With AI & Digital</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          We build stunning websites, boost your Google visibility, and deploy
          AI-powered tools like chatbots and smart marketing — so your business thrives in the digital age.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Get a Website
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
            Boost My Business
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-primary animate-pulse-glow" />
        </motion.div>
      </motion.div>
    </div>
  );
}
