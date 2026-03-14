import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Map, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    summary: 'We listen first.',
    detail: 'We start by understanding your business, goals, and target audience. Through a free discovery call, we map out exactly what you need to win online — no jargon, just real talk.',
    accent: 'from-primary to-blue-400',
  },
  {
    icon: Map,
    title: 'Planning',
    summary: 'Strategy that fits.',
    detail: 'We craft a tailored digital roadmap — choosing the right mix of website design, SEO, branding, and social media to maximise your budget and get results fast.',
    accent: 'from-accent to-cyan-300',
  },
  {
    icon: Hammer,
    title: 'Build & Review',
    summary: 'You stay in control.',
    detail: 'We design and develop everything with your input at every stage. You review, we refine — until it\'s pixel-perfect and ready to impress your customers.',
    accent: 'from-blue-400 to-primary',
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    summary: 'Go live and grow.',
    detail: 'We launch your project and don\'t disappear. Ongoing support, analytics tracking, and growth strategies keep your business climbing long after day one.',
    accent: 'from-emerald-500 to-teal-400',
  },
];

function StepNode({ step, index, isActive, onClick }: {
  step: typeof steps[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex flex-col items-center"
      style={{ perspective: 600 }}
    >
      {/* Glowing node */}
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          scale: isActive ? 1.15 : hovered ? 1.08 : 1,
          rotateY: hovered ? 8 : 0,
          rotateX: hovered ? -5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg cursor-pointer border-2 transition-colors duration-300 ${
          isActive ? 'border-foreground/20' : 'border-transparent'
        }`}
      >
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" strokeWidth={1.8} />

        {/* Pulse ring when active */}
        {isActive && (
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.accent}`}
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Glow underneath */}
      <motion.div
        animate={{ opacity: isActive || hovered ? 0.3 : 0.08, scale: isActive ? 1.2 : 1 }}
        transition={{ duration: 0.4 }}
        className={`absolute top-2 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${step.accent} blur-xl -z-10`}
      />

      {/* Step number */}
      <div className="mt-4 mb-1 text-xs font-display font-semibold text-muted-foreground tracking-wider uppercase">
        Step {index + 1}
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base font-display font-bold text-foreground text-center">
        {step.title}
      </h3>
      <p className="text-xs text-muted-foreground mt-1 text-center">{step.summary}</p>
    </motion.div>
  );
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

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
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Your Path to{' '}
            <span className="text-gradient">Digital Success</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Four simple steps from idea to launch. Click any step to learn more.
          </p>
        </motion.div>

        {/* Steps with connecting line */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5">
            <div className="w-full h-full bg-border/40 rounded-full" />
            {/* Animated fill */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-emerald-500 rounded-full"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            />
          </div>

          {/* Connecting line (mobile – vertical) */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="w-full h-full bg-border/40 rounded-full" />
            <motion.div
              className="absolute inset-x-0 top-0 bg-gradient-to-b from-primary via-accent to-emerald-500 rounded-full"
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            />
          </div>

          {/* Step nodes */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
            {steps.map((step, i) => (
              <StepNode
                key={step.title}
                step={step}
                index={i}
                isActive={activeStep === i}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
              />
            ))}
          </div>
        </div>

        {/* Expanded detail panel */}
        <AnimatePresence mode="wait">
          {activeStep !== null && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mt-14 max-w-2xl mx-auto"
            >
              <div className="glass rounded-2xl border border-border/50 p-8 relative overflow-hidden">
                {/* Accent glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].accent} opacity-[0.04] rounded-2xl`} />

                <div className="relative flex items-start gap-5">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${steps[activeStep].accent} flex items-center justify-center shadow-lg`}>
                    {(() => { const Icon = steps[activeStep].icon; return <Icon className="w-6 h-6 text-primary-foreground" />; })()}
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-foreground mb-2">
                      Step {activeStep + 1}: {steps[activeStep].title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {steps[activeStep].detail}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${steps[activeStep].accent}`} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
