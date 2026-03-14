import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Most projects are delivered within 2–4 weeks depending on complexity. A simple landing page can be ready in as little as 5 business days, while larger sites with custom features may take up to 6 weeks.',
  },
  {
    question: 'Do you provide hosting?',
    answer: 'Yes! We offer fast, secure hosting with SSL certificates, daily backups, and 99.9% uptime — all included in our maintenance plans so you never have to worry about the technical side.',
  },
  {
    question: 'Will my website work on mobile?',
    answer: 'Absolutely. Every website we build is fully responsive and optimised for mobile, tablet, and desktop. We test across all major devices and browsers before launch.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Our packages start from £499 for a starter website. We offer transparent pricing with no hidden fees — and every project gets a free consultation so we can tailor a quote to your exact needs.',
  },
  {
    question: 'Do you help with SEO?',
    answer: 'Yes — every website includes on-page SEO fundamentals. We also offer dedicated local SEO packages to help your business rank higher on Google and attract more customers in your area.',
  },
];

function FAQCard({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: 800 }}
    >
      <motion.div
        animate={{
          rotateX: hovered ? -2 : 0,
          rotateY: hovered ? 2 : 0,
          scale: hovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`glass rounded-2xl border transition-colors duration-300 overflow-hidden ${
          open ? 'border-primary/30' : 'border-border/50'
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 p-5 sm:p-6 text-left cursor-pointer"
        >
          <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transition-transform duration-300 ${open ? 'scale-110' : ''}`}>
            <HelpCircle className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="flex-1 font-display font-semibold text-foreground text-sm sm:text-base">
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[4.5rem]">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover glow */}
        <motion.div
          animate={{ opacity: hovered || open ? 0.06 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-sm font-display font-semibold text-gradient tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Here are the answers to what our clients ask most.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQCard key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
