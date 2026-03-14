import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Globe, Sparkles, Heart, Target, Bot } from 'lucide-react';
import AboutScene from '@/components/AboutScene';

const timelineSteps = [
  {
    year: '2020',
    title: 'Freelance Beginnings',
    description: 'Started with a passion for web design, helping small shops and vendors in Lagos get their first online presence.',
    icon: Rocket,
    color: 'from-primary to-accent',
  },
  {
    year: '2022',
    title: 'Helping Local Businesses',
    description: 'Grew into a trusted partner for local Nigerian businesses — from restaurants to fashion brands — building websites that actually drive customers.',
    icon: Users,
    color: 'from-accent to-primary',
  },
  {
    year: '2024',
    title: 'Expanding Digital Services',
    description: 'Now offering SEO, Google Business optimization, social media management, and full digital marketing — a complete growth engine for local businesses.',
    icon: Globe,
    color: 'from-primary to-accent',
  },
  {
    year: '2025',
    title: 'AI-Powered Solutions',
    description: 'Embracing AI to supercharge business growth — from intelligent chatbots and automated marketing to AI content generation, helping businesses work smarter.',
    icon: Bot,
    color: 'from-violet-500 to-primary',
  },
];

const infoCards = [
  {
    icon: Heart,
    title: 'Our Mission',
    description: 'To empower every Nigerian business with the digital tools they need to compete, grow, and thrive online.',
  },
  {
    icon: Sparkles,
    title: 'Our Approach',
    description: 'We blend creativity with data-driven strategy. Every website, every campaign is designed to deliver real, measurable results.',
  },
  {
    icon: Target,
    title: 'Our Promise',
    description: "Your success is our success. We don't just build — we partner with you for the long run, adapting as your business evolves.",
  },
];

function TimelineItem({ step, index }: { step: typeof timelineSteps[0]; index: number }) {
  const Icon = step.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`flex items-center gap-6 md:gap-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:text-left`}
    >
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group">
          <span className="text-sm font-display font-bold text-gradient">{step.year}</span>
          <h3 className="text-xl font-display font-bold text-foreground mt-1 mb-2">{step.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="relative flex-shrink-0">
        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center glow-primary`}>
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

function FloatingCard({ card, index }: { card: typeof infoCards[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        animate={{
          y: hovered ? -8 : 0,
          rotateY: hovered ? 5 : 0,
          rotateX: hovered ? -5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        className="glass rounded-2xl p-8 h-full border border-border/50 hover:border-primary/40 transition-colors duration-300"
      >
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 10 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5"
        >
          <Icon className="w-7 h-7 text-primary" />
        </motion.div>

        <h3 className="text-xl font-display font-bold text-foreground mb-3">{card.title}</h3>

        <motion.p
          animate={{ opacity: hovered ? 1 : 0.7 }}
          className="text-muted-foreground text-sm leading-relaxed"
        >
          {card.description}
        </motion.p>

        {/* Glow effect on hover */}
        <motion.div
          animate={{ opacity: hovered ? 0.15 : 0 }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent blur-xl -z-10"
        />
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <AboutScene />
      </Suspense>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <span className="text-sm font-display font-semibold text-gradient tracking-wider uppercase">About Us</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Built From Passion,{' '}
            <span className="text-gradient">Driven by Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We started as a small freelance team with one big dream — to make the digital world
            accessible to every Nigerian business, no matter how small. Today, we're proud to be
            a trusted growth partner for businesses across the country.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-28">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent hidden md:block" />
            <div className="space-y-12 md:space-y-16">
              {timelineSteps.map((step, i) => (
                <TimelineItem key={step.year} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {infoCards.map((card, i) => (
            <FloatingCard key={card.title} card={card} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
