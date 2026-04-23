
import React from 'react';
import { motion } from 'framer-motion';
export default function App(){
 return (
<div className="min-h-screen bg-[#111827] text-[#F8F4EC]">
<a href="https://wa.me/919270428498" className="fixed bottom-6 right-6 bg-[#25D366] text-white px-5 py-3 rounded-full z-50 shadow-xl">WhatsApp Us</a>

<header className="px-6 py-8 border-b border-slate-700 sticky top-0 bg-[#111827]/95 backdrop-blur-xl z-40">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-4">
<img src="/logo.png" className="w-16 h-16 object-contain"/>
<div>
<h1 className="text-5xl leading-none" style={{fontFamily:'Darkline'}}>Driven Minds</h1>
<div className="text-sm tracking-[0.45em] text-[#D4AF37]" style={{fontFamily:'Outfit'}}>STUDIOS</div>
</div>
</div>
<nav className="hidden md:flex gap-6" style={{fontFamily:'Outfit'}}>
<a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a>
</nav>
</div>
</header>

<section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{fontFamily:'Outfit'}}>Build a Strong Brand. Grow Your Business.</h2>
<p className="mt-6 text-slate-300 text-lg">Driven Minds Studios helps businesses with branding, websites, social media, dashboards, automation, photography, video production and cyber security services.</p>
</div>
<div className="grid grid-cols-2 gap-6">
{['Premium Branding','Video Production','Dashboards','Cyber Security'].map((x,i)=>(
<motion.div whileHover={{y:-6}} key={i} className="p-6 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37]">{x}</motion.div>
))}
</div>
</section>

<section id="services" className="max-w-6xl mx-auto px-6 py-16">
<h3 className="text-4xl font-bold mb-6" style={{fontFamily:'Outfit'}}>Our Services</h3>
<div className="grid md:grid-cols-3 gap-6">
{['Branding','Web Design','Social Media','Dashboards','Automation','Video Production'].map((x,i)=>(
<div key={i} className="p-6 bg-[#F8F4EC] text-[#111827] rounded-3xl">{x}</div>
))}
</div>
</section>

<section id="portfolio" className="max-w-6xl mx-auto px-6 py-16">
<h3 className="text-4xl font-bold mb-6" style={{fontFamily:'Outfit'}}>Featured Work</h3>
<div className="grid md:grid-cols-3 gap-6">
{['Luxury Brand Kit','Business Website','CEO Dashboard'].map((x,i)=>(
<div key={i} className="p-8 bg-[#F8F4EC] text-[#111827] rounded-3xl">{x}</div>
))}
</div>
</section>

<section id="contact" className="max-w-6xl mx-auto px-6 py-16">
<h3 className="text-4xl font-bold mb-4" style={{fontFamily:'Outfit'}}>Contact</h3>
<p>Phone: +91 9270428498<br/>Email: contact@dmstudios.com</p>
</section>

<footer className="px-6 py-10 border-t border-slate-700 text-center text-slate-400">© 2026 Driven Minds Studios • Ideas Into Impact</footer>
</div>
)}