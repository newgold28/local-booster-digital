import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: 150, suffix: '+', label: 'Businesses Served', accent: 'text-primary' },
  { icon: Globe, value: 300, suffix: '+', label: 'Websites Delivered', accent: 'text-accent' },
  { icon: TrendingUp, value: 95, suffix: '%', label: 'Client Satisfaction', accent: 'text-primary' },
  { icon: Zap, value: 50, suffix: '+', label: 'AI Solutions Deployed', accent: 'text-accent' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-display font-bold text-foreground">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <Icon className={`w-8 h-8 ${stat.accent} mx-auto mb-3`} />
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
