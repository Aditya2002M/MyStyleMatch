'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import {  Diamond, ShieldCheck, Zap, Globe, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Bricolage_Grotesque } from 'next/font/google';
import ProductPhotoshoot from './ProductPhotoshoot';

const brico = Bricolage_Grotesque({ subsets: ['latin'] });

export default function About() {
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0.4, 0.7], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.4, 0.7], [-5, 0]);

  return (
    <section className="relative w-full bg-[#FAFAFA] dark:bg-[#0E0E0E] py-32 overflow-hidden transition-colors duration-700">
      
      <div className="max-w-7xl mx-auto px-6 mb-40">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <h2 className={cn("text-8xl md:text-[11rem] font-bold leading-[0.75] tracking-tighter dark:text-white text-[#0F172A]", brico.className)}>
              Global <br /> 
              <span className="text-[#C89A3A]">Heritage</span> <br /> 
              Link.
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:w-1/3 pt-10"
          >
            <p className="text-xl dark:text-[#B3B3B3] text-[#475569] leading-relaxed font-light italic border-l-2 border-[#C89A3A] pl-8">
              "To establish StyleMatch as the leading global brand, leveraging technology to blend tradition with innovation and foster cultural inclusivity."
            </p>
            <div className="mt-8 flex flex-col gap-4">
               <div className="flex gap-2">
                  <div className="px-3 py-1 rounded-full border border-[#C89A3A]/20 text-[10px] uppercase font-bold text-[#C89A3A]">US Based</div>
                  <div className="px-3 py-1 rounded-full border border-[#C89A3A]/20 text-[10px] uppercase font-bold text-[#C89A3A]">AI Powered</div>
               </div>
               <p className="text-[10px] uppercase tracking-widest text-[#C89A3A] font-bold">Ambassador of Indian Couture</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 h-[120vh] md:h-[150vh] hidden md:block">
        {[
          { 
            title: "EFGPT Engine", 
            desc: "Our Ethnic Fashion Generative Pre-Trained Transformer provides personalized recommendations based on style, fit, and budget.",
            color: "bg-[#141414]", 
            top: "0%", 
            left: "10%",
            icon: <Zap />
          },
          { 
            title: "Curated Curation", 
            desc: "We connect international buyers with a trusted list of retailers and designers, ensuring absolute quality and cultural authenticity.",
            color: "bg-[#1A1A1A]", 
            top: "20%", 
            left: "40%",
            icon: <ShieldCheck />
          },
          { 
            title: "Data-Centric Insights", 
            desc: "Leveraging innovative technology to redefine how global customers discover and connect with India's rich fashion legacy.",
            color: "bg-[#222222]", 
            top: "40%", 
            left: "70%",
            icon: <Globe />
          }
        ].map((card, i) => (
          <motion.div
            key={i}
            style={{ scale, rotate, }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className={cn(
              "absolute w-[450px] p-12 rounded-[3rem] border border-[#C89A3A]/20 shadow-2xl group cursor-none",
              card.color
            )} 
            style={{ top: card.top, left: card.left }}
          >
            <div className="text-[#C89A3A] mb-8 group-hover:scale-125 transition-transform duration-500">
              {card.icon}
            </div>
            <h4 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">{card.title}</h4>
            <p className="text-[#B3B3B3] leading-relaxed font-light">{card.desc}</p>
            <div className="mt-10 flex items-center gap-2 text-[#C89A3A] text-xs font-bold uppercase tracking-widest">
              Explore Vision <Plus className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden px-6 space-y-6 mb-40">
         <div className="p-8 bg-[#141414] rounded-3xl border border-[#C89A3A]/20">
            <h4 className="text-white font-bold text-xl mb-4 uppercase">EFGPT Tech</h4>
            <p className="text-[#B3B3B3] text-sm">Personalized Indian ethnic styling recommendations powered by Generative AI.</p>
         </div>
         <div className="p-8 bg-[#141414] rounded-3xl border border-[#C89A3A]/20">
            <h4 className="text-white font-bold text-xl mb-4 uppercase">Cultural Bridge</h4>
            <p className="text-[#B3B3B3] text-sm">Connecting the international buyer to India's most prestigious designers.</p>
         </div>
      </div>

      <ProductPhotoshoot></ProductPhotoshoot>
      
      <div className="relative w-full mt-4">
        <div className="bg-[#C89A3A] py-24 md:py-40">
           <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
             <motion.div
               whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
               className="mb-10 text-[#0E0E0E]"
             >
               <Diamond className="w-16 h-16" />
             </motion.div>

             <h3 className={cn("text-6xl md:text-[10rem] font-bold text-[#0E0E0E] tracking-tighter leading-[0.8] mb-16", brico.className)}>
               Seamlessly <br /> <span className="opacity-40">Trusted.</span>
             </h3>

             <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: "#0E0E0E", color: "#C89A3A" }}
                  className="px-16 py-8 bg-transparent border-2 border-[#0E0E0E] text-[#0E0E0E] rounded-full font-black text-sm uppercase tracking-[0.3em] transition-all"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Join Waitlist
                </motion.button>
                
             </div>
           </div>
        </div>
      </div>

      {/* Background Decorative Stamp */}
      <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none hidden xl:block">
        <span className="text-[8rem] font-black text-[#C89A3A]">STYLEMATCH</span>
      </div>

    </section>
  );
}