import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Clapperboard,
  BarChart3,
  ShieldCheck,
  Palette,
  Camera,
  Globe,
  LineChart,
  Lock,
 Drama,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function App() {
  const services = [
    {
      title: "Branding Solutions",
      icon: <Palette size={24} className="text-[#D4AF37]" />,
      points: [
        "Brand Identity Design",
        "Logo Design",
        "Marketing Creatives",
        "PowerPoint Presentations",
      ],
    },
    {
      title: "Photography & Video",
      icon: <Camera size={24} className="text-[#D4AF37]" />,
      points: [
        "Photography",
        "Videography",
        "Ad Film Production",
        "Video Editing",
      ],
    },
    {
      title: "Website & Social Media",
      icon: <Globe size={24} className="text-[#D4AF37]" />,
      points: [
        "Website Design",
        "Landing Pages",
        "Social Media Handling",
        "Content Creation",
      ],
    },
    {
      title: "Dashboards & Automation",
      icon: <LineChart size={24} className="text-[#D4AF37]" />,
      points: [
        "Excel Dashboards",
        "Power BI Dashboards",
        "Workflow Automation",
        "Business Reports",
      ],
    },
    {
      title: "Cyber Security",
      icon: <Lock size={24} className="text-[#D4AF37]" />,
      points: [
        "Ethical Hacking",
        "Security Audits",
        "Vulnerability Testing",
        "Risk Assessment",
      ],
    },
    {
      title: "Theatre Production",
      icon: <Drama size={24} className="text-[#D4AF37]" />,
      points: [
        "Theatre Plays",
        "Stage Design",
        "Script Support",
        "Production Planning",
      ],
    },
  ];

  const starterWork = [
    {
      title: "Luxury Brand Concepts",
      desc: "Premium identity directions created for emerging businesses.",
    },
    {
      title: "Conversion Website Builds",
      desc: "High-trust layouts designed to generate leads and inquiries.",
    },
    {
      title: "Executive Dashboards",
      desc: "Clean data systems for founders and decision makers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1328] text-white font-[Montserrat] overflow-hidden">
      {/* Watermark Logo */}
      <img
        src="/logo.png"
        alt=""
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] opacity-[0.08] pointer-events-none z-0 hidden md:block"
      />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919270428498"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl font-semibold hover:scale-105 transition flex items-center gap-2"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0A1328]/85 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-4 group relative z-10">
            <img
              src="/logo.png"
              className="w-25 h-25 object-contain group-hover:scale-105 transition"
            />
                    </a>

          {/* Nav */}
          <nav
            className="hidden md:flex gap-8 text-sm relative z-10"
            style={{ fontFamily: "Outfit" }}
          >
            {[
              ["Services", "#services"],
              ["Work", "#work"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="relative group text-white/80 hover:text-white transition"
              >
                {name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-block mb-5 px-4 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-xs tracking-[0.35em]">
            PREMIUM CREATIVE GROWTH STUDIO
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold leading-tight"
            style={{ fontFamily: "Outfit" }}
          >
            We Build Brands That Look Premium & Sell Better.
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
            Branding, websites, dashboards, content systems and business visuals
            built to help serious businesses attract clients and grow faster.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919270428498"
              className="px-7 py-4 bg-[#D4AF37] text-[#111827] rounded-2xl font-semibold hover:scale-105 transition flex items-center gap-2"
            >
              Get Free Strategy Call <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="px-7 py-4 border border-[#D4AF37] rounded-2xl hover:bg-white/5 transition"
            >
              View Services
            </a>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            Branding • Websites • Dashboards • Content • Security
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {[
            {
              title: "Premium Branding",
              icon: <Crown className="text-[#D4AF37]" />,
            },
            {
              title: "Video Production",
              icon: <Clapperboard className="text-[#D4AF37]" />,
            },
            {
              title: "Business Dashboards",
              icon: <BarChart3 className="text-[#D4AF37]" />,
            },
            {
              title: "Cyber Security",
              icon: <ShieldCheck className="text-[#D4AF37]" />,
            },
          ].map((item, i) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={i}
              className="p-7 rounded-3xl bg-[#F8F4EC] text-[#111827] border border-[#D4AF37] shadow-xl"
            >
              <div className="mb-4">{item.icon}</div>
              {item.title}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-20 relative z-10"
      >
        <h3
          className="text-4xl font-bold mb-3"
          style={{ fontFamily: "Outfit" }}
        >
          Our Services
        </h3>

        <p className="text-gray-300 mb-10">
          Premium services designed to help businesses attract customers and
          grow faster.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={i}
              className="p-7 rounded-3xl bg-[#F8F4EC] text-[#111827] border border-[#D4AF37]"
            >
              <div className="mb-4">{service.icon}</div>

              <h4
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Outfit" }}
              >
                {service.title}
              </h4>

              <ul className="space-y-3 text-[15px]">
                {service.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work (No fake portfolio claims) */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h3
          className="text-4xl font-bold mb-3"
          style={{ fontFamily: "Outfit" }}
        >
          What We Build
        </h3>

        <p className="text-gray-300 mb-10">
          We’re a new studio with fresh energy, modern execution and premium
          standards.
        </p>

        <div className="grid md:grid-cols-3 gap-7">
          {starterWork.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#F8F4EC] text-[#111827] border border-[#D4AF37]"
            >
              <h4
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "Outfit" }}
              >
                {item.title}
              </h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 relative z-10"
      >
        <div className="rounded-3xl border border-[#D4AF37]/30 p-10 bg-white/[0.03]">
          <h3
            className="text-4xl font-bold"
            style={{ fontFamily: "Outfit" }}
          >
            Why Choose Driven Minds Studios
          </h3>

          <p className="mt-5 text-gray-300 max-w-3xl leading-relaxed">
            We combine creative thinking, modern design and business logic to
            build assets that actually help brands grow — not just look pretty.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 pb-24 relative z-10"
      >
        <div className="rounded-3xl p-10 bg-[#F8F4EC] text-[#111827] border border-[#D4AF37]">
          <h3
            className="text-4xl font-bold"
            style={{ fontFamily: "Outfit" }}
          >
            Ready to Grow Your Brand?
          </h3>

          <p className="mt-4 text-lg max-w-2xl">
            Message us on WhatsApp for a free strategy consultation and discover
            how your business can look more premium and convert more customers.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919270428498"
              className="px-7 py-4 bg-[#111827] text-white rounded-2xl font-semibold flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            <a
              href="tel:9270428498"
              className="px-7 py-4 border border-[#111827] rounded-2xl font-semibold flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm opacity-70">
            +91 9270428498 • contact@dmstudios.com
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm relative z-10">
        © 2026 Driven Minds Studios • Ideas Into Impact
      </footer>
    </div>
  );
}
