import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Phone, ShoppingCart, Home, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Solistar Industrial Machines',
    category: 'Industrial Kitchen Equipment',
    icon: ShoppingCart,
    url: 'https://www.solistarmachines.com.ng/',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accentGradient: 'from-blue-500 to-cyan-400',
    problem: 'Solistar Industrial Machines needed a professional online presence to showcase their premium commercial kitchen machinery for bakeries, hotels, restaurants, and food processing facilities.',
    solution: 'We built a sleek, modern website highlighting their full product catalog with detailed specifications, inquiry forms, and optimized SEO for the Nigerian industrial equipment market.',
    result: 'Inquiries increased by 55%',
    resultIcon: TrendingUp,
    beforeStats: [
      { label: 'Monthly Inquiries', value: '~30' },
      { label: 'Google Visibility', value: 'Low' },
      { label: 'Online Catalog', value: 'None' },
    ],
    afterStats: [
      { label: 'Monthly Inquiries', value: '70+' },
      { label: 'Google Ranking', value: 'Page 1' },
      { label: 'Online Catalog', value: 'Full Range' },
    ],
  },
  {
    title: 'CVision Security Solutions',
    category: 'Security & Surveillance',
    icon: ShoppingCart,
    url: 'https://www.cvision.com.ng/',
    gradient: 'from-pink-500/20 to-rose-500/20',
    accentGradient: 'from-pink-500 to-rose-400',
    problem: 'CVision needed a professional website to showcase their HIK security camera solutions, installation services, and support offerings to businesses across Nigeria.',
    solution: 'Built a modern, trust-building website with product catalogs, service breakdowns, client testimonials, and an easy inquiry system for security consultations.',
    result: 'Client inquiries up 50%',
    resultIcon: TrendingUp,
    beforeStats: [
      { label: 'Online Presence', value: 'None' },
      { label: 'Monthly Inquiries', value: '~15' },
      { label: 'Service Visibility', value: 'Word of mouth' },
    ],
    afterStats: [
      { label: 'Online Presence', value: 'Professional' },
      { label: 'Monthly Inquiries', value: '45+' },
      { label: 'Service Visibility', value: 'Nationwide' },
    ],
  },
  {
    title: 'Afroscrap Metals',
    category: 'Metal Scrap Trading',
    icon: ShoppingCart,
    url: 'https://www.afroscrapmetals.com/',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accentGradient: 'from-emerald-500 to-teal-400',
    problem: 'Afroscrap Metals, a bulk metal scrap trading company with over 15 years of experience, lacked a professional online presence to attract international buyers and showcase their recycling capabilities.',
    solution: 'We designed a modern, trust-driven website highlighting their services, experience, and export capabilities with optimized SEO for the metal recycling industry across Africa.',
    result: 'International inquiries up 60%',
    resultIcon: TrendingUp,
    beforeStats: [
      { label: 'Online Presence', value: 'None' },
      { label: 'International Leads', value: '~10/mo' },
      { label: 'Service Visibility', value: 'Local only' },
    ],
    afterStats: [
      { label: 'Online Presence', value: 'Professional' },
      { label: 'International Leads', value: '40+/mo' },
      { label: 'Service Visibility', value: 'Pan-African' },
    ],
  },
];

function DeviceMockup({ project, index, isActive }: { project: typeof projects[0]; index: number; isActive: boolean }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="flex-shrink-0 w-[85vw] sm:w-[480px] md:w-[540px] snap-center"
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{
          rotateY: flipped ? 180 : 0,
          scale: isActive ? 1 : 0.92,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full"
      >
        {/* FRONT — Device Screen */}
        <div className="relative" style={{ backfaceVisibility: 'hidden' }}>
          {/* Device frame */}
          <div className="glass rounded-2xl border border-border/50 overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-3">
                <div className="bg-muted/50 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono truncate">
                  {project.url || `www.${project.title.toLowerCase().replace(/['\s]/g, '')}.com`}
                </div>
              </div>
            </div>

            {/* Screen content */}
            <div className={`relative bg-gradient-to-br ${project.gradient} p-8 sm:p-10 min-h-[360px] flex flex-col justify-between`}>
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.accentGradient} mb-4`}>
                  <Icon className="w-3.5 h-3.5 text-primary-foreground" />
                  <span className="text-xs font-semibold text-primary-foreground">{project.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                  {project.problem}
                </p>
              </div>

              {/* Result highlight */}
              <div className="glass rounded-xl p-4 inline-flex items-center gap-3 self-start">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.accentGradient} flex items-center justify-center`}>
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Key Result</p>
                  <p className="text-sm font-display font-bold text-foreground">{project.result}</p>
                </div>
              </div>
            </div>

            {/* Flip prompt */}
            <button
              onClick={() => setFlipped(true)}
              className="w-full py-3 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors bg-secondary/20"
            >
              View full case study <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* BACK — Case Study Details */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="glass rounded-2xl border border-border/50 overflow-hidden h-full flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/40 bg-secondary/30">
              <h4 className="font-display font-bold text-foreground">{project.title} — Case Study</h4>
              <button
                onClick={() => setFlipped(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-xs"
              >
                ← Back
              </button>
            </div>

            <div className="p-6 sm:p-8 flex-1 overflow-y-auto space-y-6">
              {/* Problem & Solution */}
              <div>
                <h5 className="text-xs font-display font-semibold text-gradient uppercase tracking-wider mb-2">The Problem</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h5 className="text-xs font-display font-semibold text-gradient uppercase tracking-wider mb-2">Our Solution</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-xs font-display font-semibold text-destructive/80 uppercase tracking-wider mb-3">Before</h5>
                  <div className="space-y-2">
                    {project.beforeStats.map((s) => (
                      <div key={s.label} className="bg-destructive/5 border border-destructive/10 rounded-lg p-3">
                        <p className="text-[11px] text-muted-foreground">{s.label}</p>
                        <p className="text-sm font-display font-bold text-foreground">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-display font-semibold text-green-400 uppercase tracking-wider mb-3">After</h5>
                  <div className="space-y-2">
                    {project.afterStats.map((s) => (
                      <div key={s.label} className="bg-green-500/5 border border-green-500/10 rounded-lg p-3">
                        <p className="text-[11px] text-muted-foreground">{s.label}</p>
                        <p className="text-sm font-display font-bold text-foreground">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visit Website Link */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-display font-semibold hover:bg-primary/20 transition-colors"
                >
                  Visit Live Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth ?? 500;
    const gap = 24;
    const newIndex = dir === 'right'
      ? Math.min(activeIndex + 1, projects.length - 1)
      : Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    scrollRef.current.scrollTo({ left: newIndex * (cardWidth + gap), behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth ?? 500;
    const gap = 24;
    const idx = Math.round(scrollRef.current.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(idx, projects.length - 1));
  };

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <span className="text-sm font-display font-semibold text-gradient tracking-wider uppercase">
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-3 mb-6">
              Real Projects,{' '}
              <span className="text-gradient">Real Results</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              See how we've transformed Nigerian businesses with powerful digital solutions.
              Tap any project to explore the full case study.
            </p>
          </motion.div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-3 mb-10">
            <Button
              variant="heroOutline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={activeIndex === 0}
              className="w-11 h-11 rounded-full disabled:opacity-30"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            {/* Dots */}
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    if (!scrollRef.current) return;
                    const cardWidth = scrollRef.current.children[0]?.clientWidth ?? 500;
                    scrollRef.current.scrollTo({ left: i * (cardWidth + 24), behavior: 'smooth' });
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="heroOutline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={activeIndex === projects.length - 1}
              className="w-11 h-11 rounded-full disabled:opacity-30"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-[max(1.5rem,calc((100vw-540px)/2))] pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => (
            <DeviceMockup
              key={project.title}
              project={project}
              index={i}
              isActive={i === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
