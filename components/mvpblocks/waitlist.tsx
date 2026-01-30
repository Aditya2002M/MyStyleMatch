'use client';

import type React from 'react';
import { useState, useEffect} from 'react';
import { ArrowRight, Sparkles, ExternalLink, ShieldCheck, Diamond, Globe } from 'lucide-react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Bricolage_Grotesque } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Ripple } from '../ui/ripple';
import { SparklesText } from '../ui/sparkles-text';

const brico = Bricolage_Grotesque({
  subsets: ['latin'],
});

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <main className={cn(
      "relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-6 transition-colors duration-1000",
      isDark ? "bg-[#0E0E0E]" : "bg-[#FAFAFA]"
    )}>
      
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.5 }}
        className="fixed inset-0 z-[200] bg-[#C89A3A] flex items-center justify-center"
      >
         <motion.div
           initial={{ opacity: 1, letterSpacing: "0.2em" }}
           animate={{ opacity: 0, letterSpacing: "1em" }}
           transition={{ duration: 0.8, delay: 0.8 }}
         >
            <h2 className="text-[#0E0E0E] font-bold text-4xl">STYLEMATCH</h2>
         </motion.div>
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none">

        <Ripple color={isDark ? "#C89A3A" : "#D4AF5A"} />
        
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${isDark ? '#C89A3A' : '#D4AF5A'} 0%, transparent 70%)`,
            left: spotlightX,
            top: spotlightY,
            x: "-50%",
            y: "-50%"
          }}
        />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          className="absolute top-1/2 left-0 w-full whitespace-nowrap -translate-y-1/2"
        >
          <h2 className={cn("text-[20vw] font-black uppercase tracking-tighter", brico.className)}>
            Ethnic • Fashion 
          </h2>
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
          className={cn(
            "mb-10 inline-flex items-center gap-3 px-5 py-2 rounded-full border backdrop-blur-xl shadow-2xl",
            isDark ? "border-[#C89A3A]/30 bg-[#141414]/50 text-[#C89A3A]" : "border-[#0F172A]/10 bg-white/50 text-[#0F172A]"
          )}
        >
          <Globe className="w-4 h-4 animate-spin-slow" />
          <span className="text-[20px] font-bold uppercase tracking-[0.3em]"></span>
          <div className="h-2 w-2 rounded-full bg-[#C89A3A]" />
          <span className="text-[20px] font-bold uppercase tracking-widest text-[#C89A3A]">Coming Soon</span>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 1 }}
  className="mb-8"
>
  <SparklesText
    sparklesCount={12}
    colors={{ first: "#C89A3A", second: "#D4AF5A" }}
    className={cn(
      "text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85]",
      isDark ? "text-white" : "text-[#0F172A]",
      brico.className
    )}
  >
    Style<span className="text-[#C89A3A] italic font-serif serif">Match</span>
  </SparklesText>
</motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className={cn(
            "max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-16",
            isDark ? "text-[#B3B3B3]" : "text-[#475569]"
          )}
        >
          Establishing the world's leading <span className="text-[#C89A3A] font-medium">Global Ambassador</span> of Indian couture. Leveraging <span className="font-semibold italic">EFGPT technology</span> to bridge tradition with 2026 innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="w-full max-w-lg"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-12 flex flex-col items-center gap-8"
          >
             <a 
              href="https://vendor.mystylematch.com"
              target="_blank"
              className={cn(
                "group relative flex items-center gap-3 px-8 py-5 rounded-2xl border border-[#C89A3A] overflow-hidden transition-all mb-2",
                isDark ? "text-white/60 hover:text-white hover:border-[#C89A3A]" : "text-[#0F172A]/60 hover:text-[#0F172A] hover:border-[#C89A3A]"
              )}
            >
              <Diamond className="w-4 h-4 text-[#C89A3A] transition-transform group-hover:rotate-45" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">I'm a vendor</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
            </a>
          </motion.div>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <form 
                onSubmit={handleSubmit} 
                className="group relative"
              >
                <div className={cn(
                  "flex flex-col sm:flex-row gap-3 p-3 rounded-[2rem] border transition-all duration-700",
                  isDark 
                    ? "bg-[#141414]/80 border-white/10 focus-within:border-[#C89A3A]/50 focus-within:shadow-[0_0_50px_rgba(200,154,58,0.15)] backdrop-blur-3xl" 
                    : "bg-white/80 border-[#0F172A]/10 focus-within:border-[#C89A3A] shadow-2xl backdrop-blur-3xl"
                )}>
                  <div className="flex-1 flex items-center px-4">
                    <Sparkles className="w-4 h-4 text-[#C89A3A] mr-3 opacity-50 group-focus-within:opacity-100 transition-opacity" />
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER EMAIL"
                      className={cn(
                        "w-full bg-transparent outline-none text-xs font-bold tracking-widest uppercase",
                        isDark ? "text-white placeholder:text-white/20" : "text-[#0F172A] placeholder:text-black/20"
                      )}
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden bg-[#C89A3A] hover:bg-[#D4AF5A] text-[#0E0E0E] px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 group/btn shadow-lg"
                  >
                    <span className="relative z-10">{isSubmitting ? "Syncing..." : "Join the Waitlist"}</span>
                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-6"
              >
                <div className="w-16 h-16 rounded-full border border-[#C89A3A] flex items-center justify-center text-[#C89A3A] animate-bounce">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className={cn("text-xl font-bold uppercase tracking-widest", isDark ? "text-white" : "text-[#0F172A]")}>
                  Invitation <span className="text-[#C89A3A]">Reserved</span>
                </h3>
              </motion.div>
            )}
          </AnimatePresence>

          
        </motion.div>

      </div>

      
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>

    </main>
  );
}