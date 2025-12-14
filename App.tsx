import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  ExternalLink,
  Award,
  Terminal,
  MapPin
} from 'lucide-react';

import Background from './components/Background';
import Timeline from './components/Timeline';
import Section from './components/Section';
import { 
  PROFILE, 
  HIGHSCHOOL_CONTENT, 
  UNIVERSITY_CONTENT, 
  CIRCLE_PROJECTS, 
  WORK_PROJECTS, 
  GOALS 
} from './constants';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-accent-blue selection:text-white">
      <Background />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-deep-blue/80 backdrop-blur-lg border-b border-glass-border">
        <div className="text-xl font-bold tracking-tighter text-white">
          YW<span className="text-accent-blue">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-accent-blue transition-colors">ABOUT</a>
          <a href="#timeline" className="hover:text-accent-blue transition-colors">TIMELINE</a>
          <a href="#works" className="hover:text-accent-blue transition-colors">WORKS</a>
          <a href="#contact" className="hover:text-accent-blue transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h2 className="text-accent-blue font-mono mb-4 text-lg">AI Engineer / Student</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            {PROFILE.romaji.toUpperCase()}
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto text-lg leading-relaxed">
            芝浦工業大学 情報通信コース所属。<br />
            技術で人々の生活をアップデートするエンジニアへ。
          </p>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.div>
      </header>

      <main className="container mx-auto px-4 md:px-8 max-w-6xl space-y-32 mb-20">
        
        {/* Profile Grid */}
        <Section id="about">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold border-l-4 border-accent-blue pl-4">ABOUT ME</h3>
              <div className="bg-glass border border-glass-border p-8 rounded-2xl backdrop-blur-sm space-y-4 shadow-2xl">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Name</span>
                  <span className="font-medium">{PROFILE.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Age</span>
                  <span className="font-medium">2005.09.28 (19)</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">From</span>
                  <span className="font-medium flex items-center gap-2"><MapPin size={16}/> {PROFILE.origin}</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Education</span>
                  <span className="font-medium text-right">{PROFILE.education.university}</span>
                </div>
                <div className="pt-4">
                   <h4 className="text-accent-blue text-sm mb-2">INTERESTS</h4>
                   <div className="flex flex-wrap gap-2">
                     {PROFILE.hobbies.map(h => (
                       <span key={h} className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                         {h}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
            <div className="relative">
               {/* Decorative floating elements */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
               <p className="text-lg leading-loose text-slate-300 font-light">
                 小学校1年生から高校3年生まで12年間野球に没頭。
                 スポーツで培った「継続力」と「チームワーク」を武器に、現在はAIエンジニアとして社会実装を目指して活動中。
                 Web開発からインタラクティブアートまで、幅広く技術を探求しています。
               </p>
            </div>
          </div>
        </Section>

        {/* Timeline */}
        <Section id="timeline" className="text-center">
          <h3 className="text-4xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-white inline-block">
            HISTORY
          </h3>
          <Timeline />
        </Section>

        {/* High School & University (Dual Card) */}
        <Section>
          <div className="grid md:grid-cols-2 gap-8">
            {/* High School */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-glass-border p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={100} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">{HIGHSCHOOL_CONTENT.title}</h4>
              <p className="text-slate-400 mb-6">{HIGHSCHOOL_CONTENT.description}</p>
              <ul className="space-y-3">
                {HIGHSCHOOL_CONTENT.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* University */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-bl from-slate-800 to-slate-900 border border-glass-border p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Terminal size={100} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">{UNIVERSITY_CONTENT.title}</h4>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {UNIVERSITY_CONTENT.stats.map((stat, i) => (
                  <div key={i} className="text-center bg-black/20 rounded-lg p-2">
                    <div className="text-xs text-slate-400">{stat.label}</div>
                    <div className="text-xl font-bold text-accent-blue">{stat.value}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {UNIVERSITY_CONTENT.details}
              </p>
            </motion.div>
          </div>
        </Section>

        {/* Works & Projects */}
        <Section id="works">
          <h3 className="text-3xl font-bold mb-12 border-l-4 border-accent-blue pl-4">WORKS & PROJECTS</h3>
          
          <div className="space-y-16">
            {/* Circle Projects */}
            <div>
              <h4 className="text-xl text-slate-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-slate-400"></span> Circle Activity (芝ラボ)
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {CIRCLE_PROJECTS.map((project, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-glass border border-glass-border p-6 rounded-xl flex flex-col h-full hover:border-accent-blue/50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      {project.icon && <project.icon className="text-accent-blue" size={24} />}
                      <span className="text-xs font-mono text-slate-500">{project.period}</span>
                    </div>
                    <h5 className="text-lg font-bold mb-2">{project.title}</h5>
                    <p className="text-sm text-slate-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">#{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work Projects */}
            <div>
              <h4 className="text-xl text-slate-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-slate-400"></span> Experience
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {WORK_PROJECTS.map((project, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-900/80 border border-slate-700 p-8 rounded-2xl flex flex-col relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue" />
                    <div className="flex justify-between items-center mb-4">
                       <h5 className="text-xl font-bold">{project.title}</h5>
                       {project.icon && <project.icon className="text-slate-600" size={32} />}
                    </div>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">{project.description}</p>
                    <div className="flex items-center gap-3 text-xs font-mono text-accent-blue">
                      {project.period}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Future Goals */}
        <Section>
           <div className="bg-gradient-to-r from-blue-900/40 to-slate-900/40 border border-glass-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-3xl font-bold mb-10 relative z-10">FUTURE GOALS</h3>
             <div className="grid md:grid-cols-2 gap-8 relative z-10">
               {GOALS.map((goal, i) => (
                 <div key={i} className="bg-black/20 p-6 rounded-xl border border-white/5 hover:bg-black/40 transition-colors">
                   <div className="mb-4 inline-block p-3 bg-accent-blue/20 rounded-full text-accent-blue">
                     <goal.icon size={24} />
                   </div>
                   <h4 className="text-xl font-bold mb-2">{goal.title}</h4>
                   <p className="text-slate-400 text-sm mb-2">{goal.date}</p>
                   <p className="text-slate-300 text-sm">{goal.description}</p>
                 </div>
               ))}
             </div>
           </div>
        </Section>

        {/* Footer/Contact */}
        <footer id="contact" className="py-20 text-center border-t border-slate-800">
          <h2 className="text-5xl font-bold mb-8 text-white tracking-tight">Let's Connect</h2>
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="p-4 bg-slate-800 rounded-full hover:bg-accent-blue hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <Github size={24} />
            </a>
            <a href="#" className="p-4 bg-slate-800 rounded-full hover:bg-accent-blue hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="p-4 bg-slate-800 rounded-full hover:bg-accent-blue hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © 2025 Watanabe Yuto. All Rights Reserved.
          </p>
        </footer>

      </main>
    </div>
  );
}

export default App;