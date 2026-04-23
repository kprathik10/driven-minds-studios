
import React from 'react';
import { motion } from 'framer-motion';

const services = [
 ['Branding Solutions',['Brand Identity Design','Logo Design','Marketing Creatives','PowerPoint Presentation Design']],
 ['Photography & Video Services',['Photography','Videography','Ad Film Production','Video Editing']],
 ['Website & Social Media Services',['Website Design','Social Media Management','Content Creation','Landing Pages']],
 ['Dashboard & Automation Services',['Excel Dashboards','Power BI Dashboards','Workflow Automation','PowerPoint Reports']],
 ['Cyber Security Services',['Ethical Hacking','Security Audits','Vulnerability Testing','Risk Assessment']],
 ['Theatre Production Services',['Theatre Plays','Stage Design','Script Support','Production Planning']]
];

export default function App(){
return (
<div className="min-h-screen bg-[#111827] text-[#F8F4EC]">
<a href="https://wa.me/919270428498" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl">WhatsApp Us</a>
<header className="sticky top-0 bg-[#111827]/95 border-b border-slate-700">
<div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
<div>
<h1 className="text-2xl md:text-3xl font-bold">Driven Minds Studios</h1>
<p className="text-amber-400">Creative Solutions for Growing Brands</p>
</div>
<nav className="space-x-4 text-sm">
<a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>
</nav>
</div>
</header>

<section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
<div>
<h2 className="text-5xl font-bold leading-tight">Build a Strong Brand. Grow Your Business.</h2>
<p className="mt-5 text-slate-300">Driven Minds Studios is a branding agency and digital growth studio helping businesses with graphic design, website design, video production, social media management, PowerPoint presentations, Excel dashboards, Power BI dashboards, workflow automation, ethical hacking and cyber security services.</p>
<div className="mt-8 flex gap-4 flex-wrap">
<a href="https://wa.me/919270428498" className="px-6 py-3 bg-amber-400 text-slate-900 rounded-2xl font-semibold">Get Free Project Quote</a>
<a href="#services" className="px-6 py-3 border border-amber-400 rounded-2xl">View Services</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
{['Premium Branding','Video Production','Business Dashboards','Cyber Security'].map((x,i)=><div key={i} className="p-6 bg-[#F8F4EC] text-slate-900 rounded-3xl border border-amber-400">{x}</div>)}
</div>
</section>

<section id="services" className="max-w-6xl mx-auto px-6 py-16">
<h3 className="text-4xl font-bold">Our Services</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
{services.map((s,i)=><motion.div whileHover={{y:-4}} key={i} className="p-6 bg-[#F8F4EC] text-slate-900 rounded-3xl border border-amber-400"><h4 className="font-bold text-xl mb-3">{s[0]}</h4><ul>{s[1].map((v,j)=><li key={j}>• {v}</li>)}</ul></motion.div>)}
</div>
</section>

<section id="about" className="max-w-6xl mx-auto px-6 py-16">
<div className="p-8 bg-[#F8F4EC] text-slate-900 rounded-3xl border border-amber-400">
<h3 className="text-3xl font-bold">Why Businesses Choose Us</h3>
<p className="mt-4">Premium Quality • Direct Support • Fast Delivery • Business Focused</p>
</div>
</section>

<section id="contact" className="max-w-6xl mx-auto px-6 py-16">
<div className="grid md:grid-cols-2 gap-6">
<div className="p-8 bg-[#F8F4EC] text-slate-900 rounded-3xl border border-amber-400">
<h3 className="text-2xl font-bold">Get in Touch</h3>
<p className="mt-4">Phone: +91 9270428498<br/>Email: contact@dmstudios.com<br/>WhatsApp: Instant Replies</p>
</div>
<div className="p-8 bg-[#F8F4EC] text-slate-900 rounded-3xl border border-amber-400">
<h3 className="text-2xl font-bold">Grow Your Business Today</h3>
<p className="mt-4">Need branding, website design, dashboards, automation or video production? Message us today for a quick quote.</p>
</div>
</div>
</section>

<footer className="px-6 py-8 text-center text-slate-400 border-t border-slate-700">© 2026 Driven Minds Studios • Ideas Into Impact</footer>
</div>
)}