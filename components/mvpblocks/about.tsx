'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Diamond, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Plus, 
  Tag, 
  ClipboardCheck, 
  TrendingUp, 
  Eye 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Bricolage_Grotesque } from 'next/font/google';
import ProductPhotoshoot from './ProductPhotoshoot';

const brico = Bricolage_Grotesque({ subsets: ['latin'] });

export default function About() {
  const vendorFeatures = [
    {
      title: "Sell smarter, not blindly",
      icon: <Tag size={24} />,
      points: [
        "See which products & variants attract demand",
        "Spot slow-moving items early",
        "Clear insights, no complex dashboards"
      ]
    },
    {
      title: "Stay in control of inventory",
      icon: <ClipboardCheck size={24} />,
      points: [
        "Live inventory sync to avoid overselling",
        "Stock is reserved during checkout",
        "Full visibility across all listed products"
      ]
    },
    {
      title: "Look premium",
      icon: <Diamond size={24} />,
      points: [
        "Professional, marketplace-ready images",
        "Consistent lighting, angles, and styling",
        "Faster launch with a polished catalog"
      ]
    },
    {
      title: "Future planning using demand",
      icon: <TrendingUp size={24} />,
      points: [
        "Early trend signals from platform activity",
        "Simple demand indicators (MVP-ready)",
        "Avoid overstocking or stockouts"
      ]
    },
    {
      title: "Start with zero upfront risk",
      icon: <Zap size={24} />,
      points: [
        "$0 until your first sale",
        "Photography + catalog setup support",
        "No long-term lock-in"
      ]
    },
    {
      title: "Get visibility beyond listings",
      icon: <Eye size={24} />,
      points: [
        "Curated collections across the app",
        "Influencer and campaign opportunities",
        "Vendor education through workshops"
      ]
    }
  ];

  return (
    <section className="relative w-full bg-[#FAFAFA] dark:bg-[#0E0E0E] py-32 overflow-hidden transition-colors duration-700">
      
      {/* Header Section */}
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
              "StyleMatch aims to redefine how international buyers discover and connect with India’s rich fashion heritage."
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

      {/* Grid Cards Section */}
      <div className="max-w-7xl mx-auto px-6 mb-40">
        {/* Removed scale and rotate scroll-tracking from this container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendorFeatures.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // Interaction strictly on hover
              whileHover={{ 
                rotate: -3, 
                scale: 1.02,
                backgroundColor: "#141414",
                transition: { duration: 0.1, ease: "easeOut" }
              }}
              className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm transition-all duration-300 flex flex-col min-h-[380px] cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center mb-8 transition-colors group-hover:bg-[#C89A3A]/20 group-hover:text-[#C89A3A]">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-6 tracking-tight transition-colors text-slate-900 group-hover:text-[#C89A3A]">
                {card.title}
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4 flex-1">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm transition-colors text-slate-500 group-hover:text-[#B3B3B3] font-light">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C89A3A] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Bottom Decoration */}
              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-[#C89A3A]">
                Explore Feature <Plus size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProductPhotoshoot />
      
      {/* Background Decorative Stamp */}
      <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none hidden xl:block">
        <span className="text-[8rem] font-black text-[#C89A3A]">STYLEMATCH</span>
      </div>

    </section>
  );
}