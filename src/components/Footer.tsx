import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logoIcon from '@/assets/logo-icon.png';

const navLinks = ['Services', 'About', 'Portfolio', 'Testimonials', 'FAQ', 'Contact'];
const services = ['Web Design', 'SEO Optimization', 'AI Chatbots', 'AI Marketing', 'Social Media', 'Branding & Logo'];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-card/60 border-t border-border/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <img src={logoIcon} alt="Local Booster Digital" className="w-8 h-8" />
              <span className="font-display font-bold text-lg text-foreground">
                Local Booster <span className="text-gradient">Digital</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping local businesses grow online with stunning websites, powerful SEO, and digital strategies that deliver results.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg glass text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Get In Touch</h4>
            {[
              { icon: Mail, text: 'hello@localbooster.digital' },
              { icon: Phone, text: '+44 (0) 123 456 7890' },
              { icon: MapPin, text: 'London, United Kingdom' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Local Booster Digital. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg glass text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
