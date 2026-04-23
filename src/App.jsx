import React from 'react';
import { motion } from 'framer-motion';

export default function App(){
return (
<div className="min-h-screen bg-[#111827] text-[#F8F4EC]">
<a href="https://wa.me/919270428498" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white px-5 py-3 rounded-full z-50 shadow-xl">WhatsApp Us</a>

<header className="px-6 py-8 border-b border-slate-700 sticky top-0 bg-[#111827]/95 backdrop-blur-xl">
<div className="max-w-6xl mx-auto flex justify-between items-center gap-8">
<a href="/" className="flex items-center gap-4">
<img src="/logo.png" className="w-16 h-16 object-contain"/>
<div>
<h1 style={{fontFamily:'Darkline'}} className="text-5xl leading-none">Driven Minds</h1>
<div style={{fontFamily:'Outfit'}} className="text-sm tracking-[0.45em] text-[#D4AF37]">STUDIOS</div>
</div>
</a>
<nav className="hidden md:flex gap-6" style={{fontFamily:'Outfit'}}>
<a href="#services">Services</a>
<a href="#portfolio">Portfolio</a>
<a href="#contact">Contact</a>
</nav>
</div>
</header>

<section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 style={{fontFamily:'Outfit'}} className="text-5xl md:text-6xl font-bold leading-tight">Build a Strong Brand. Grow Your Business.</h2>
<p className="mt-6 text-slate-300 text-lg">Driven Minds Studios is a branding agency and digital growth studio helping businesses with graphic design, website design, video production, social media management, PowerPoint presentations, dashboards, workflow automation and cyber security services.</p>
<div className="mt-8 flex gap-4 flex-wrap">
<a href="https://wa.me/919270428498" target="_blank" rel="noreferrer" className="px-6 py-3 bg-[#D4AF37] text-[#111827] rounded-2xl font-semibold">Get Free Project Quote</a>
<a href="#services" className="px-6 py-3 border border-[#D4AF37] rounded-2xl font-semibold">View Services</a>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
{['Premium Branding','Video Production','Business Dashboards','Cyber Security'].map((x,i)=><motion.div whileHover={{y:-6}} key={i} className="p-6 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37]">{x}</motion.div>)}
</div>
</section>

<section id="services" className="max-w-6xl mx-auto px-6 py-16">
<h3 style={{fontFamily:'Outfit'}} className="text-4xl font-bold mb-6">Our Services</h3>
<div className="grid md:grid-cols-3 gap-6">
{['Branding Solutions','Photography & Video','Website & Social Media','Dashboards & Automation','Cyber Security','Theatre Production'].map((x,i)=><div key={i} className="p-6 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37]">{x}</div>)}
</div>
</section>

<section id="portfolio" className="max-w-6xl mx-auto px-6 py-16">
<h3 style={{fontFamily:'Outfit'}} className="text-4xl font-bold mb-6">Featured Work</h3>
<div className="grid md:grid-cols-3 gap-6">
{['Luxury Brand Kit','Business Website','CEO Dashboard'].map((x,i)=><div key={i} className="p-8 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37]">{x}</div>)}
</div>
</section>

<section id="contact" className="max-w-6xl mx-auto px-6 py-16">
<div className="grid md:grid-cols-2 gap-6">
<div className="p-8 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37]"><h3 className="text-2xl font-bold">Get In Touch</h3><p className="mt-4">Phone: +91 9270428498<br/>Email: contact@dmstudios.com</p></div>
<div className="p-8 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37]"><h3 className="text-2xl font-bold">Grow Your Business Today</h3><p className="mt-4">Need branding, websites, dashboards or videos? Message us today.</p></div>
</div>
</section>

<footer className="px-6 py-10 border-t border-slate-700 text-center text-slate-400">© 2026 Driven Minds Studios • Ideas Into Impact</footer>
</div>
)}