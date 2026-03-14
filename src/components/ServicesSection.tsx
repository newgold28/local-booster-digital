import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Search, Share2, Palette, ArrowRight, Bot, MessageSquare, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    description: 'We craft stunning, lightning-fast websites that convert visitors into loyal customers. Your online storefront, built to impress and engineered to perform.',
    accent: 'from-primary to-blue-400',
    glowColor: '--primary',
  },
  {
    icon: Search,
    title: 'Local SEO & Google Business',
    description: 'Get found by customers searching near you. We optimize your Google Business profile and local rankings so you show up first — right when it matters.',
    accent: 'from-accent to-cyan-300',
    glowColor: '--accent',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Build a thriving community around your brand. We create scroll-stopping content and manage your social channels to keep your audience engaged and growing.',
    accent: 'from-blue-400 to-primary',
    glowColor: '--primary',
  },
  {
    icon: Palette,
    title: 'Branding & Logo Design',
    description: 'Stand out from the crowd with a brand identity that tells your story. From logos to full brand kits, we design visuals that leave a lasting impression.',
    accent: 'from-cyan-300 to-accent',
    glowColor: '--accent',
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Automate customer support and capture leads 24/7 with intelligent AI chatbots. Instant answers, appointment booking, and seamless handoff to your team.',
    accent: 'from-violet-500 to-primary',
    glowColor: '--primary',
  },
  {
    icon: Sparkles,
    title: 'AI Content & Copywriting',
    description: 'Generate high-quality blog posts, product descriptions, and ad copy powered by AI. Save hours of writing while keeping your brand voice consistent.',
    accent: 'from-primary to-violet-400',
    glowColor: '--primary',
  },
  {
    icon: MessageSquare,
    title: 'AI-Powered Marketing Automation',
    description: 'Smart email campaigns, personalized recommendations, and predictive analytics that help you reach the right customers at the right time — automatically.',
    accent: 'from-violet-400 to-accent',
    glowColor: '--accent',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      className="relative group cursor-pointer"
      style={{ perspective: 800 }}
    >
      <motion.div
        animate={{
          rotateY: hovered ? mousePos.x * 15 : 0,
          rotateX: hovered ? -mousePos.y * 15 : 0,
          z: hovered ? 30 : 0,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative glass rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 transition-colors duration-500 overflow-hidden"
      >
        {/* Gradient shimmer on hover */}
        <motion.div
          animate={{ opacity: hovered ? 0.08 : 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 bg-gradient-to-br ${service.accent} rounded-2xl`}
        />

        {/* 3D Icon container */}
        <motion.div
          animate={{
            scale: hovered ? 1.15 : 1,
            rotateZ: hovered ? 8 : 0,
            y: hovered ? -4 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
          className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.8} />
          {/* Icon shadow / depth */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.accent} blur-xl opacity-40 -z-10 scale-110`} />
        </motion.div>

        {/* Content */}
        <div style={{ transform: 'translateZ(10px)' }}>
          <h3 className="text-xl font-display font-bold text-foreground mb-3">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {service.description}
          </p>

          {/* CTA hint */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-primary text-sm font-medium"
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Bottom glow line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.accent} origin-left`}
        />
      </motion.div>

      {/* External glow */}
      <motion.div
        animate={{ opacity: hovered ? 0.12 : 0, scale: hovered ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className={`absolute -inset-3 rounded-3xl bg-gradient-to-br ${service.accent} blur-2xl -z-10`}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <span className="text-sm font-display font-semibold text-gradient tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Services That{' '}
            <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From your first website to full digital dominance — we provide everything
            your business needs to win online.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
