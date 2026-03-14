import { motion } from 'framer-motion';
import { Globe, Layers, Zap, TrendingUp, Monitor, Palette, Type, BoxIcon, Sun, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const colors = [
  { name: 'Primary Blue', hex: '#0056FF', hsl: '217 91% 60%', token: '--primary', class: 'bg-primary' },
  { name: 'Deep Black', hex: '#0A0A0A', hsl: '222 47% 6%', token: '--background', class: 'bg-background' },
  { name: 'Electric Blue', hex: '#00B4D8', hsl: '199 89% 48%', token: '--accent', class: 'bg-accent' },
  { name: 'Card Surface', hex: '#141A2E', hsl: '222 44% 10%', token: '--card', class: 'bg-card' },
  { name: 'Muted', hex: '#1E2640', hsl: '222 40% 16%', token: '--muted', class: 'bg-muted' },
  { name: 'Foreground', hex: '#F8FAFC', hsl: '210 40% 98%', token: '--foreground', class: 'bg-foreground' },
];

const typographySamples = [
  { label: 'Display / H1', className: 'text-5xl sm:text-6xl font-display font-bold', text: 'Space Grotesk Bold' },
  { label: 'Heading / H2', className: 'text-3xl sm:text-4xl font-display font-bold', text: 'Section Heading' },
  { label: 'Subheading / H3', className: 'text-xl sm:text-2xl font-display font-semibold', text: 'Subheading Semibold' },
  { label: 'Body', className: 'text-base font-body', text: 'Inter – clean, readable body text for paragraphs and long-form content.' },
  { label: 'Caption', className: 'text-sm font-body text-muted-foreground', text: 'Small caption or helper text' },
];

const uiElements = [
  { icon: BoxIcon, title: 'Glassmorphism Cards', desc: 'Semi-transparent surfaces with backdrop blur and subtle borders.' },
  { icon: Sun, title: 'Soft Shadows & Glow', desc: 'Colored box-shadows that radiate from primary and accent hues.' },
  { icon: Layers, title: '3D Lighting & Depth', desc: 'Perspective transforms, hover tilts, and layered z-depth effects.' },
  { icon: Sparkles, title: 'Smooth Motion', desc: 'Spring-based Framer Motion transitions with staggered reveals.' },
];

const imageryIcons = [
  { icon: Globe, label: '3D Globe / Icons' },
  { icon: Monitor, label: 'Digital Tech Visuals' },
  { icon: TrendingUp, label: 'Business Growth' },
  { icon: Zap, label: 'Performance' },
];

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-lg text-foreground hover:text-primary transition-colors">
            ← Back to Site
          </Link>
          <span className="font-display font-semibold text-sm text-muted-foreground tracking-wider uppercase">Visual Style Guide</span>
        </div>
      </nav>

      <div className="pt-28 pb-32 container mx-auto px-6 space-y-32">
        {/* Hero */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-display font-semibold text-gradient tracking-wider uppercase">Design System</span>
          <h1 className="text-5xl sm:text-7xl font-display font-bold text-foreground mt-4 mb-6">
            Visual <span className="text-gradient">Style Guide</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The design language powering Local Booster Digital — built for depth, clarity, and impact.
          </p>
        </motion.div>

        {/* ── COLORS ── */}
        <motion.section {...fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-display font-bold text-foreground">Colour Palette</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {colors.map((c, i) => (
              <motion.div
                key={c.token}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl border border-border/50 overflow-hidden group"
              >
                <div className={`${c.class} h-24 sm:h-28 transition-transform duration-300 group-hover:scale-105`} />
                <div className="p-4 space-y-1">
                  <p className="font-display font-semibold text-sm text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{c.hex}</p>
                  <p className="text-xs text-muted-foreground font-mono">{c.token}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient strip */}
          <div className="mt-8 rounded-2xl overflow-hidden">
            <div className="h-16 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl" />
            <p className="text-center text-xs text-muted-foreground mt-3 font-mono">
              .text-gradient · from-primary → to-accent
            </p>
          </div>
        </motion.section>

        {/* ── TYPOGRAPHY ── */}
        <motion.section {...fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Type className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-display font-bold text-foreground">Typography</h2>
          </div>
          <div className="glass rounded-2xl border border-border/50 divide-y divide-border/30">
            {typographySamples.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8"
              >
                <span className="text-xs font-mono text-muted-foreground w-32 flex-shrink-0 uppercase tracking-wider">{t.label}</span>
                <span className={`${t.className} text-foreground`}>{t.text}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="glass px-4 py-2 rounded-xl text-sm font-display font-semibold">Heading: Space Grotesk</span>
            <span className="glass px-4 py-2 rounded-xl text-sm font-body">Body: Inter</span>
          </div>
        </motion.section>

        {/* ── UI STYLE ── */}
        <motion.section {...fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-display font-bold text-foreground">UI Style</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {uiElements.map((el, i) => {
              const Icon = el.icon;
              return (
                <motion.div
                  key={el.title}
                  initial={{ opacity: 0, y: 20, rotateX: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.03, rotateY: 3 }}
                  style={{ perspective: 600 }}
                  className="glass rounded-2xl border border-border/50 p-6 sm:p-8 relative overflow-hidden group cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">{el.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{el.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Live demos */}
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {/* Glass card */}
            <div className="glass rounded-2xl p-6 text-center space-y-2">
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">.glass</p>
              <p className="text-sm text-foreground">Glassmorphism surface</p>
            </div>
            {/* Glow primary */}
            <div className="glass rounded-2xl p-6 text-center space-y-2 glow-primary">
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">.glow-primary</p>
              <p className="text-sm text-foreground">Primary glow shadow</p>
            </div>
            {/* Glow accent */}
            <div className="glass rounded-2xl p-6 text-center space-y-2 glow-accent">
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">.glow-accent</p>
              <p className="text-sm text-foreground">Accent glow shadow</p>
            </div>
          </div>
        </motion.section>

        {/* ── IMAGERY STYLE ── */}
        <motion.section {...fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-display font-bold text-foreground">Imagery Style</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {imageryIcons.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                  whileHover={{ y: -8, rotateY: 10 }}
                  style={{ perspective: 600 }}
                  className="glass rounded-2xl border border-border/50 p-6 flex flex-col items-center gap-4 cursor-default"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-display font-semibold text-foreground text-center">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-8 glass rounded-2xl border border-border/50 p-6 sm:p-8">
            <h3 className="font-display font-bold text-foreground mb-3">Visual Direction</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>• <strong className="text-foreground">3D Icons</strong> — Rendered with gradients, depth, and soft lighting</li>
              <li>• <strong className="text-foreground">Digital Technology</strong> — Circuits, data flows, holographic elements</li>
              <li>• <strong className="text-foreground">Business Growth</strong> — Upward trajectories, charts, connectivity</li>
              <li>• <strong className="text-foreground">Colour treatment</strong> — Always use brand primary/accent gradients</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
