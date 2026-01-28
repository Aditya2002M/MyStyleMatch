'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Quote, Layers, Compass, Fingerprint } from 'lucide-react';

export default function About() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section className="relative w-full bg-white py-32 overflow-hidden">
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <motion.h2 
          style={{ x: y2 }}
          className="text-[20vw] font-bold whitespace-nowrap text-slate-900 leading-none"
        >
          Style Match
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="relative mb-40 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-full md:w-1/2 aspect-[4/5] bg-rose-50 rounded-[4rem] overflow-hidden"
          >

            <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-blue-100" />
            <div className="absolute inset-0 flex items-center justify-center">
               <Sparkles className="w-32 h-32 text-rose-200 animate-pulse" />
            </div>

            <motion.div 
              style={{ y: y1 }}
              className="absolute bottom-10 -right-8 p-8 bg-white/80 backdrop-blur-xl border border-rose-100 rounded-3xl shadow-xl max-w-xs"
            >
              <h4 className="font-bold text-slate-900 mb-2">Curated by Intelligence</h4>
              <p className="text-sm text-slate-500 italic">" We don't just find clothes; we find your cultural counterpart."</p>
            </motion.div>
          </motion.div>

          <div className="w-full md:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 rounded-full border border-rose-200 bg-gradient-to-b from-rose-50 to-blue-50 text-rose-500 text-xs font-bold uppercase tracking-widest"
            >
              The StyleMatch Vision
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold text-slate-900 leading-[1.1]"
            >
              The Soul of India, <br/>
              <span className="text-rose-400 font-serif italic">Matched</span> to You.
            </motion.h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              StyleMatch is a reimagining of the ethnic marketplace. We’ve replaced the chaos of endless searching with a sophisticated AI stylist that understands the nuance of every weave and the importance of every occasion.
            </p>
          </div>
        </div>

        <div className="relative mb-40">

          <svg className="absolute top-0 left-0 w-full h-full hidden lg:block pointer-events-none opacity-20" viewBox="0 0 1200 400">
            <path d="M50,100 C200,100 300,300 600,300 S1000,100 1150,100" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="8 8" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              { 
                title: "Digital Fingerprint", 
                desc: "Every artisan's work is uniquely logged to ensure absolute authenticity and fair trade.",
                icon: <Fingerprint />, 
                color: "from-rose-50 to-rose-100/50" 
              },
              { 
                title: "Curated Compass", 
                desc: "Our AI doesn't just search; it guides you through India's diverse regional textiles.",
                icon: <Compass />, 
                color: "from-blue-50 to-blue-100/50",
                translate: "lg:translate-y-24"
              },
              { 
                title: "Seamless Layers", 
                desc: "From the loom to your doorstep—we manage the complexity of global logistics.",
                icon: <Layers />, 
                color: "from-slate-50 to-slate-100/50" 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`group p-1 bg-gradient-to-br rounded-[3rem] ${item.color} ${item.translate || ""}`}
              >
                <div className="bg-white p-10 rounded-[2.8rem] h-full transition-all duration-500 group-hover:bg-transparent">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 text-slate-900 group-hover:scale-110 group-hover:shadow-xl transition-all">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div 
            style={{ rotate }}
            className="absolute -top-20 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"
          />
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 border-l-4 border-blue-400 pl-8 py-4">
               <Quote className="w-12 h-12 text-rose-100 mb-4" />
               <h3 className="text-4xl font-bold text-slate-900 mb-6">"We wanted to bridge the gap between global demand and local artistry."</h3>
               <p className="text-slate-400 font-medium">— Our Founding Philosophy</p>
            </div>
            
            <div className="md:col-span-7 space-y-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-slate-800">The Problem</h4>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Indian ethnic wear is a language. But for the global buyer, the dialects are confusing. Sizes vary, quality is inconsistent, and the most beautiful pieces often stay hidden in local boutiques.
                </p>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-slate-800">Our Solution</h4>
                <p className="text-slate-500 text-lg leading-relaxed">
                  We built <span className="text-rose-500 font-semibold underline decoration-rose-200 underline-offset-4">StyleMatch</span>. It’s an intelligent ecosystem. We verify every designer and use our EFGPT styling engine to act as your personal concierge—ensuring your style is never compromised by geography.
                </p>
              </div>

              <motion.button 
                whileHover={{ gap: '2rem' }}
                className="flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-bold group transition-all"
              >
                Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>

      </div>

      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-[10%] right-[5%] w-64 h-64 bg-rose-50 rounded-full blur-[80px] opacity-50"
      />
    </section>
  );
}