import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Enter a valid email').max(255),
  phone: z.string().trim().min(1, 'Phone required').max(20),
  businessType: z.string().min(1, 'Select business type'),
  message: z.string().trim().min(1, 'Message required').max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const businessTypes = [
  'Restaurant / Food',
  'Retail / Fashion',
  'Real Estate',
  'Health & Beauty',
  'Professional Services',
  'Education',
  'Other',
];

function FloatingBubbles() {
  const bubbles = [
    { text: '💬', size: 'w-14 h-14', x: '10%', y: '20%', delay: 0 },
    { text: '📱', size: 'w-12 h-12', x: '70%', y: '10%', delay: 0.3 },
    { text: '🚀', size: 'w-16 h-16', x: '50%', y: '55%', delay: 0.6 },
    { text: '📧', size: 'w-11 h-11', x: '80%', y: '65%', delay: 0.9 },
    { text: '⭐', size: 'w-10 h-10', x: '20%', y: '75%', delay: 1.2 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute ${b.size} glass rounded-2xl border border-border/30 flex items-center justify-center text-lg`}
          style={{ left: b.x, top: b.y }}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: b.delay }}
          animate={{ y: [0, -12, 0], rotateZ: [0, 3, -3, 0] }}
        >
          {b.text}
        </motion.div>
      ))}
    </div>
  );
}

export default function ContactSection() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init('b9yVCEJipMsKFSR54');
  }, []);

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    try {
      await emailjs.send('service_q71qccs', 'template_7k9pwhr', { ...form });
      setSubmitted(true);
      toast({ title: 'Message sent!', description: "We'll get back to you within 24 hours." });
      setForm({ name: '', email: '', phone: '', businessType: '', message: '' });
      console.log('Email sent successfully ✅');
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({ title: 'Error', description: 'Message failed to send. Please try again.' });
    }
  };

  const contactInfo = [
    { icon: Phone, label: '+234 800 123 4567' },
    { icon: Mail, label: 'hello@localbooster.ng' },
    { icon: MapPin, label: 'Lagos, Nigeria' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-sm font-display font-semibold text-gradient tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Let's Grow Your Business <span className="text-gradient">Online</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to take your business digital? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Left — Decorative / Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[480px]">
              <FloatingBubbles />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-xl" />
            </div>

            <div className="space-y-4 mt-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{info.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl border border-border/50 p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">We'll review your details and reach out within 24 hours.</p>
                <Button
                  variant="heroOutline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', businessType: '', message: '' });
                  }}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl border border-border/50 p-8 space-y-5">
                {/* Name */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <Input
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => updateField('name', e.target.value)}
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                    maxLength={100}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => updateField('email', e.target.value)}
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                    maxLength={255}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <Input
                    type="tel"
                    placeholder="+234 814 749 5144"
                    value={form.phone}
                    onChange={e => updateField('phone', e.target.value)}
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                    maxLength={20}
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>

                {/* Business Type */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Business Type</label>
                  <Select value={form.businessType} onValueChange={v => updateField('businessType', v)}>
                    <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary/50">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map(t => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.businessType && <p className="text-xs text-destructive mt-1">{errors.businessType}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your business and what you'd like to achieve..."
                    value={form.message}
                    onChange={e => updateField('message', e.target.value)}
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 min-h-[120px] resize-none"
                    maxLength={2000}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full h-12 text-base font-display font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-xl gap-2">
                  <Send className="w-5 h-5" /> Let's Grow Your Business Online
                </Button>

                <p className="text-xs text-muted-foreground text-center">We respond within 24 hours. No spam, ever.</p>
              </form>
            )}

            {/* Mobile contact info */}
            <div className="lg:hidden flex flex-wrap gap-4 mt-8 justify-center">
              {contactInfo.map(info => (
                <div key={info.label} className="flex items-center gap-2 glass rounded-lg px-4 py-2 border border-border/50">
                  <info.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs text-foreground">{info.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}