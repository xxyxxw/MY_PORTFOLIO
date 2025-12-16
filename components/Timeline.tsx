import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  return (
    <div className="relative py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Vertical Line */}
      {/* Mobile: Line is on the left. Desktop: Line is centered. */}
      <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent-blue to-transparent opacity-30" />

      <div className="space-y-12 md:space-y-24 w-full max-w-5xl relative z-10">
        {TIMELINE_EVENTS.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Mobile: flex-col with left padding. Desktop: flex-row (or reverse) with no padding.
              className={`relative flex flex-col md:flex-row items-start md:items-center w-full pl-12 md:pl-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              {/* Absolute positioned to align with the line. Mobile: left-6. Desktop: Center. */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center mt-1.5 md:mt-0">
                <div className="relative group cursor-pointer">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-accent-blue rounded-full shadow-[0_0_15px_rgba(0,163,255,0.6)] group-hover:scale-150 transition-transform duration-300" />
                  <div className="absolute -inset-2 rounded-full border border-accent-blue/30 scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </div>

              {/* Date Side */}
              {/* Mobile: Full width, left align, small margin. Desktop: Half width, aligned towards center. */}
              <div className={`w-full md:w-1/2 flex flex-col md:block mb-2 md:mb-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <span className="text-xl md:text-3xl font-light text-accent-blue/80 font-mono tracking-widest block">
                  {event.date.replace('.', '_')}
                </span>
              </div>

              {/* Icon & Text Side (Card) */}
              {/* Mobile: Full width. Desktop: Half width, aligned towards center. */}
              <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'}`}>
                <div 
                  className={`
                    w-full md:w-auto
                    p-4 rounded-2xl bg-glass backdrop-blur-md border border-glass-border shadow-lg 
                    transform hover:scale-105 transition-all duration-300 group 
                    flex items-center gap-4
                    /* Mobile: Always Icon Left, Text Right. Desktop: Alternates based on side. */
                    flex-row text-left
                    ${!isEven ? 'md:flex-row-reverse md:text-right' : 'md:flex-row md:text-left'}
                  `}
                >
                  <event.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-accent-blue transition-colors shrink-0" />
                  <span className="text-slate-200 font-medium text-sm md:text-lg leading-tight">{event.label}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;