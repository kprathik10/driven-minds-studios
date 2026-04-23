
import React from "react";
import { motion } from "framer-motion";

const services = [
["Branding Solutions",["Brand Identity Design","Logo Design","Marketing Creatives","PowerPoint & Business Presentation Design"]],
["Photography & Video Services",["Photography","Videography","Ad Film Production","Video Editing"]],
["Website & Social Media Services",["Website Design","Social Media Management","Content Creation","Landing Pages"]],
["Dashboard & Automation Services",["Excel Dashboards","Power BI Dashboards","Workflow Automation","PowerPoint Reports"]],
["Cyber Security Services",["Ethical Hacking","Security Audits","Vulnerability Testing","Risk Assessment"]],
["Theatre Production Services",["Theatre Plays","Stage Design","Script Support","Production Planning"]],
];

export default function App(){
return (
<div className="min-h-screen bg-[#111827] text-[#F8F4EC]">
<a href="https://wa.me/919270428498" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl font-semibold hover:scale-105 transition">WhatsApp Us</a>

<header className="px-6 py-8 border-b border-slate-700 sticky top-0 bg-[#111827]/95 backdrop-blur-xl z-40">
<div className="max-w-6xl mx-auto flex justify-between items-center gap-8">
<div className="flex items-center gap-4">
<img src="https://dummyimage.com/72x72/d4af37/111827.png&text=DM" className="w-14 h-14 rounded-2xl shadow-xl" />
<div>
<h1 className="text-4xl md:text-6xl font-black italic leading-none">Driven Minds</h1>
<div className="text-sm md:text-xl tracking-[0.45em] text-[#D4AF37] mt-1">STUDIOS</div>
</div>
</div>
<nav className="hidden md:flex gap-6 text-sm">
<a href="#services">Services</a>
<a href="#portfolio">Portfolio</a>
<a href="#contact">Contact</a>
</nav>
</div>
</header>

<section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<div className="inline-block px-4 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-xs tracking-[0.25em] uppercase">Driven Minds Signature Studio</div>
<h2 className="text-5xl md:text-6xl font-bold italic leading-tight">Build a Strong Brand. Grow Your Business.</h2>
<p className="text-slate-300 text-lg leading-relaxed">Driven Minds Studios is a branding agency and digital growth studio helping businesses with graphic design, website design, video production, social media management, PowerPoint presentations, Excel dashboards, Power BI dashboards, workflow automation, ethical hacking and cyber security services.</p>
<div className="flex flex-wrap gap-4">
<a href="https://wa.me/919270428498" className="px-6 py-3 bg-[#D4AF37] text-[#111827] rounded-2xl font-semibold">Get Free Project Quote</a>
<a href="#services" className="px-6 py-3 border border-[#D4AF37] rounded-2xl">View Services</a>
</div>
</div>

<div className="grid grid-cols-2 gap-6">
{["Premium Branding","Video Production","Business Dashboards","Cyber Security"].map((x,i)=>(
<motion.div whileHover={{y:-6}} key={i} className="p-7 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37] shadow-xl">{x}</motion.div>
))}
</div>
</section>

<section id="services" className="max-w-6xl mx-auto px-6 py-16">
<h3 className="text-4xl font-bold mb-4">Our Services</h3>
<p className="text-slate-300 mb-8">Professional services designed to help businesses attract customers, improve systems and grow faster.</p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{services.map((s,i)=>(
<motion.div whileHover={{y:-6}} key={i} className="p-6 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37] shadow-xl">
<h4 className="text-xl font-bold mb-3">{s[0]}</h4>
<ul className="space-y-2">{s[1].map((v,j)=><li key={j}>• {v}</li>)}</ul>
</motion.div>
))}
</div>
</section>

<section id="portfolio" className="max-w-6xl mx-auto px-6 py-16">
<h3 className="text-4xl font-bold mb-4">Featured Work</h3>
<p className="text-slate-300 mb-8">A glimpse into premium branding, websites, dashboards and content experiences we build.</p>
<div className="grid md:grid-cols-3 gap-6">
{[
["Luxury Brand Kit","Identity system, packaging and social rollout."],
["Business Website","Lead-focused premium website with SEO structure."],
["CEO Dashboard","Power BI analytics with live KPI visibility."]
].map((x,i)=>(
<motion.div whileHover={{y:-8}} key={i} className="p-8 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37] shadow-2xl">
<h4 className="text-2xl font-bold mb-2">{x[0]}</h4><p>{x[1]}</p>
</motion.div>
))}
</div>
</section>

<section id="contact" className="max-w-6xl mx-auto px-6 py-16">
<div className="grid md:grid-cols-2 gap-6">
<div className="p-8 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37]">
<h3 className="text-2xl font-bold">Get in Touch</h3>
<p className="mt-4">Phone: +91 9270428498<br/>Email: contact@dmstudios.com<br/>WhatsApp: Instant Replies</p>
</div>
<div className="p-8 bg-[#F8F4EC] text-[#111827] rounded-3xl border border-[#D4AF37]">
<h3 className="text-2xl font-bold">Grow Your Business Today</h3>
<p className="mt-4">Need branding, website design, dashboards, automation or video production? Message us today for a quick quote.</p>
</div>
</div>
</section>

<footer className="px-6 py-12 border-t border-slate-700 text-center text-slate-400">© 2026 Driven Minds Studios • Ideas Into Impact</footer>
</div>
)}