import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

import photo1 from '@/assets/testimonial-1.png';
import photo2 from '@/assets/testimonial-2.png';
import photo3 from '@/assets/testimonial-3.png';
import photo4 from '@/assets/testimonial-4.png';

const testimonials = [
  {
    name: 'Adaeze Okonkwo',
    role: 'Owner, Mama\'s Kitchen',
    photo: photo1,
    text: 'Since Local Booster built our website, customer calls have doubled. People find us on Google now instead of just word of mouth. Best investment we ever made!',
    topic: 'More Customers',
    stars: 5,
    accent: 'from-orange-500 to-amber-400',
  },
  {
    name: 'Chukwudi Eze',
    role: 'CEO, City Fashion Store',
    photo: photo2,
    text: 'Our online visibility went from zero to page one on Google. We now get orders from across Nigeria — something we never imagined possible for our small boutique.',
    topic: 'Better Online Visibility',
    stars: 5,
    accent: 'from-primary to-blue-400',
  },
  {
    name: 'Funke Adeyemi',
    role: 'Founder, Lagos Bakes',
    photo: photo3,
    text: 'They delivered our website in just 5 days — and it looked incredible. The speed and quality blew us away. We started getting enquiries the very first week!',
    topic: 'Fast Website Delivery',
    stars: 5,
    accent: 'from-accent to-cyan-300',
  },
  {
    name: 'Emeka Nwosu',
    role: 'MD, Lagos Real Estate',
    photo: photo4,
    text: 'From branding to website to SEO — everything was handled professionally. They truly understand what Nigerian businesses need to succeed online.',
    topic: 'Professional Service',
    stars: 5,
    accent: 'from-emerald-500 to-teal-400',
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
      className="relative group"
      style={{ perspective: 800 }}
    >
      <motion.div
        animate={{
          rotateY: hovered ? mousePos.x * 12 : 0,
          rotateX: hovered ? -mousePos.y * 12 : 0,
          z: hovered ? 20 : 0,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative glass rounded-2xl p-7 h-full border border-border/50 hover:border-primary/30 transition-colors duration-500 overflow-hidden"
      >
        {/* Gradient shimmer */}
        <motion.div
          animate={{ opacity: hovered ? 0.06 : 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 bg-gradient-to-br ${testimonial.accent} rounded-2xl`}
        />

        {/* Quote icon */}
        <div style={{ transform: 'translateZ(15px)' }}>
          <Quote className="w-8 h-8 text-primary/20 mb-4" />
        </div>

        {/* Topic badge */}
        <div style={{ transform: 'translateZ(12px)' }}>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${testimonial.accent} text-primary-foreground mb-4`}>
            {testimonial.topic}
          </span>
        </div>

        {/* Testimonial text */}
        <div style={{ transform: 'translateZ(10px)' }}>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
            "{testimonial.text}"
          </p>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-5" style={{ transform: 'translateZ(8px)' }}>
          {Array.from({ length: testimonial.stars }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Client info */}
        <div className="flex items-center gap-3" style={{ transform: 'translateZ(14px)' }}>
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <Avatar className="w-12 h-12 border-2 border-primary/30">
              <AvatarImage src={testimonial.photo} alt={testimonial.name} />
              <AvatarFallback className="bg-secondary text-foreground text-sm font-bold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </motion.div>
          <div>
            <p className="text-sm font-display font-bold text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>

        {/* Bottom glow line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${testimonial.accent} origin-left`}
        />
      </motion.div>

      {/* External glow */}
      <motion.div
        animate={{ opacity: hovered ? 0.1 : 0, scale: hovered ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className={`absolute -inset-3 rounded-3xl bg-gradient-to-br ${testimonial.accent} blur-2xl -z-10`}
      />
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute top-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <span className="text-sm font-display font-semibold text-gradient tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            What Our Clients{' '}
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don't just take our word for it — hear from the businesses we've helped grow online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
