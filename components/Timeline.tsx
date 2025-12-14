import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  return (
    <div className="relative py-20 px-4 flex flex-col items-center justify-center">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent-blue to-transparent opacity-30" />

      <div className="space-y-24 w-full max-w-5xl relative z-10">
        {TIMELINE_EVENTS.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center w-full ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Date Side */}
              <div className={`w-1/2 flex ${isEven ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                <span className="text-3xl font-light text-accent-blue/80 font-mono tracking-widest">
                  {event.date.replace('.', '_')}
                </span>
              </div>

              {/* Center Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="relative group cursor-pointer">
                  <div className="w-4 h-4 bg-accent-blue rounded-full shadow-[0_0_15px_rgba(0,163,255,0.6)] group-hover:scale-150 transition-transform duration-300" />
                  <div className="absolute -inset-2 rounded-full border border-accent-blue/30 scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </div>

              {/* Icon & Text Side */}
              <div className={`w-1/2 flex ${isEven ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                <div 
                  className={`
                    p-4 rounded-2xl bg-glass backdrop-blur-md border border-glass-border shadow-lg 
                    transform hover:scale-105 transition-all duration-300 group 
                    flex items-center gap-4
                    ${!isEven ? 'flex-row-reverse text-right' : 'flex-row text-left'}
                  `}
                >
                  <event.icon className="w-8 h-8 text-white group-hover:text-accent-blue transition-colors shrink-0" />
                  <span className="text-slate-200 font-medium md:text-lg">{event.label}</span>
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