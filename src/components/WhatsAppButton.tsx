import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '234XXXXXXXXXX';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowBubble(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Message Bubble */}
      <AnimatePresence>
        {showBubble && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative glass rounded-2xl rounded-br-sm px-4 py-3 max-w-[260px] shadow-lg"
          >
            <button
              onClick={() => { setDismissed(true); setShowBubble(false); }}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
            >
              <X className="w-3 h-3 text-muted-foreground" />
            </button>
            <p className="text-sm text-foreground leading-snug">
              👋 Hi there! Need a website or help boosting your business online?
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <div className="group relative">
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="glass rounded-lg px-3 py-1.5 text-xs text-foreground whitespace-nowrap shadow-md">
            Chat with us on WhatsApp
          </div>
        </div>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] cursor-pointer"
          style={{ backgroundColor: '#25D366' }}
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 4px 20px rgba(37,211,102,0.4)',
              '0 4px 35px rgba(37,211,102,0.6)',
              '0 4px 20px rgba(37,211,102,0.4)',
            ],
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            scale: { type: 'spring', stiffness: 300 },
          }}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: '#25D366' }} />

          <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={0} />
        </motion.a>
      </div>
    </div>
  );
}
