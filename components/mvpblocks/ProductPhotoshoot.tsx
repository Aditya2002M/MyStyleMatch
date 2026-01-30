'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSpreadsheet, 
  ShoppingBag, 
  FileText, 
  Calendar, 
  MapPin, 
  Camera, 
  CheckCircle2 
} from 'lucide-react';

export default function ProductPhotoshoot() {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Part 1: Product Photoshoot Introduction */}
        <div className="mb-24">
          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Your product photoshoot, managed by StyleMatch
          </motion.h2>
          
          {/* Sub-heading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 mb-16 max-w-4xl leading-relaxed"
          >
            We help you launch faster by handling your product photography and catalog setup, so you don't need a studio, models, or a photography team to get started.
          </motion.p>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative w-full rounded-xl overflow-hidden shadow-md border border-slate-100"
            >
              <img 
                src="/images/saree.png"
                alt="Traditional Indian saree - dark emerald green with intricate copper and gold woven patterns"
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Right Column - FAQ Blocks */}
            <div className="space-y-10">
              {/* FAQ Block 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-5"
              >
                <div className="w-[3px] h-full bg-[#FDBF0F] flex-shrink-0 rounded-full min-h-[60px]" />
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    What do I get?
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    You get a complete, marketplace-ready image set for each product. These images are consistent, clean, and optimized for conversion on web and mobile.
                  </p>
                </div>
              </motion.div>

              {/* FAQ Block 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-5"
              >
                <div className="w-[3px] h-full bg-[#FDBF0F] flex-shrink-0 rounded-full min-h-[60px]" />
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    How long does it take?
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    For early vendors, setup typically takes 7-14 days, depending on the number of SKUs and product type. We share timelines upfront before anything is shipped or scheduled.
                  </p>
                </div>
              </motion.div>

              {/* FAQ Block 3 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex gap-5"
              >
                <div className="w-[3px] h-full bg-[#FDBF0F] flex-shrink-0 rounded-full min-h-[60px]" />
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    What do I need to send?
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Just your product list and inventory source. You can share it via CSV, Shopify, or even a WhatsApp list for the first batch.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Part 2: How the Photoshoot Process Works */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#242424] rounded-[3rem] p-12 md:p-16 shadow-xl border border-slate-800/50"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            How the photoshoot process works
          </h2>
          
          {/* Sub-heading */}
          <p className="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed">
            A simple, guided process designed for early vendors. We handle coordination so you don't have to.
          </p>

          {/* Four Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#333333] rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                STEP 1
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                Request & share your catalog
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed flex-1">
                Share your product list in any format. We'll help clean and structure it.
              </p>
              <div className="flex gap-4 items-center mt-auto">
                <FileSpreadsheet className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
                <ShoppingBag className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
                <FileText className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#333333] rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                STEP 2
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                We schedule & coordinate
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed flex-1">
                We handle all the logistics, scheduling, and coordination with photographers and studios.
              </p>
              <div className="flex gap-4 items-center mt-auto">
                <Calendar className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
                <MapPin className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#333333] rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                STEP 3
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                Photoshoot execution
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed flex-1">
                Professional photographers capture your products with consistent styling and quality.
              </p>
              <div className="flex gap-4 items-center mt-auto">
                <Camera className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
                <MapPin className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#333333] rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                STEP 4
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                Delivery & catalog ready
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed flex-1">
                Receive your complete image set, optimized and ready for your marketplace.
              </p>
              <div className="flex items-center justify-center mt-auto">
                <div className="w-14 h-14 rounded-full bg-slate-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 text-[#4CAF50]" strokeWidth={2} />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
