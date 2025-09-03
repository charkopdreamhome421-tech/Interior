"use client";

import { motion } from "framer-motion";
import { CheckIcon, UserGroupIcon, CreditCardIcon, KeyIcon } from "@heroicons/react/24/outline";
import { SiSamsung, SiBosch, SiSiemens, SiHaier, SiPhilips } from "react-icons/si";
import Accordion from "@/components/Accordion";

export default function HomePage() {
  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

  const metrics = [
    { value: '9020+', label: 'Homes' },
    { value: '100+', label: 'Quality checks' },
    { value: '5', label: 'Years Warranty' },
    { value: '4.6+', label: 'star rating' },
  ];
  const budgetHomes = [
    { name: 'Modern Apartments', imageUrl: 'https://picsum.photos/400/300?random=1' },
    { name: 'Luxury Villas', imageUrl: 'https://picsum.photos/400/300?random=2' },
    { name: 'Compact Studios', imageUrl: 'https://picsum.photos/400/300?random=3' },
  ];
  const offerings = ["Modular Kitchen", "Wardrobes & Storage", "Living", "Bathroom", "Space saving furniture", "Full home interior", "Commercial interiors"];
  const benefits = ["Price match guarantee", "Flat 10-year warranty", "45-day delivery", "Post-installation service"];
  const howItWorks = [
    { name: 'Meet designer', description: 'Discuss your vision and get a personalized quote.', icon: UserGroupIcon },
    { name: 'Place order', description: 'Finalize the design and book your interior project.', icon: CreditCardIcon },
    { name: 'Move in', description: 'Get your dream home delivered, hassle-free.', icon: KeyIcon },
  ];
  const faqs = [
    { q: "What is the cost of interior design?", a: "The cost of interior design depends on the scope of the project, the materials used, and the size of the space. We offer customized packages to fit various budgets." },
    { q: "How long does the interior design process take?", a: "A typical project takes about 45-60 days from design finalization to handover. The exact timeline can vary based on the project complexity." },
    { q: "Do you provide a warranty for your work?", a: "Yes, we provide a flat 10-year warranty on our modular products and dedicated post-installation service for your peace of mind." },
  ];
  const partners = [
    { name: 'Samsung', icon: SiSamsung },
    { name: 'Bosch', icon: SiBosch },
    { name: 'Siemens', icon: SiSiemens },
    { name: 'Haier', icon: SiHaier },
    { name: 'Philips', icon: SiPhilips },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Interior designers in Mumbai</h1>
            <p className="mt-4 text-lg text-gray-200">Designs for every style</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md ml-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Get started</h2>
            <form>
              <div className="mb-4"><input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500" /></div>
              <div className="mb-4"><input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500" /></div>
              <div className="mb-6">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-500 focus:ring-2 focus:ring-rose-500">
                  <option>Property Type</option><option>Apartment</option><option>Villa</option><option>Office</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3 bg-rose-500 text-white font-bold rounded-md hover:bg-rose-600 transition-colors">BOOK FREE DESIGN SESSION</button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="bg-brand-secondary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Karni Interiors?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (<div key={metric.label}><p className="text-4xl font-extrabold">{metric.value}</p><p className="mt-2 text-lg opacity-90">{metric.label}</p></div>))}
          </div>
        </div>
      </section>

      {/* Homes for every budget Section */}
      <section id="homes-for-every-budget" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">Homes for every budget</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {budgetHomes.map((home) => (
              <div key={home.name} className="rounded-lg overflow-hidden shadow-lg group">
                <img src={home.imageUrl} alt={home.name} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6 bg-white"><h3 className="font-bold text-xl text-brand-dark">{home.name}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer Section */}
      <section id="what-we-offer" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">What we offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-dark">Our Services</h3>
              <ul className="space-y-3">{offerings.map((item) => (<li key={item} className="flex items-center"><CheckIcon className="h-6 w-6 text-green-500 mr-3" /><span>{item}</span></li>))}</ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-dark">Our Promise</h3>
              <ul className="space-y-3">{benefits.map((item) => (<li key={item} className="flex items-center"><CheckIcon className="h-6 w-6 text-green-500 mr-3" /><span>{item}</span></li>))}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 text-brand-dark">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorks.map((step) => (
              <div key={step.name}>
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-secondary text-white mx-auto mb-5"><step.icon className="h-10 w-10" /></div>
                <h3 className="text-xl font-bold text-brand-dark">{step.name}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section id="trusted-partners" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-brand-dark">Our trusted partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            {partners.map((partner) => (<partner.icon key={partner.name} className="h-12 text-gray-500" title={partner.name} />))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (<Accordion key={index} title={faq.q}><p>{faq.a}</p></Accordion>))}
          </div>
        </div>
      </section>
    </div>
  );
}
