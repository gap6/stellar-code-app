import React, { useEffect, useCallback } from 'react';
// 1. IMPORT LAYOUT COMPONENTS
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// 2. IMPORT UI/CARD COMPONENTS
import GlowCardWrapper from './components/UI/GlowCardWrapper';

// --- Interface & Data Definitions ---

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface PortfolioItem {
  iconClass: string;
  title: string;
  description: string;
  stockStatus: string; // Stock status for inventory tracking
}

const servicesData: Service[] = [
  { icon: 'cloud-cog', title: 'Web Development', description: 'Crafting responsive, high-performance websites from custom builds to e-commerce platforms.' },
  { icon: 'smartphone', title: 'Mobile App Development', description: 'Designing and developing intuitive and powerful mobile applications for iOS and Android.' },
  { icon: 'rocket', title: 'Custom Software Solutions', description: 'Building bespoke software to streamline your operations and meet unique business needs.' },
  { icon: 'brain', title: 'AI & Machine Learning', description: 'Integrating intelligent solutions to automate tasks and provide deeper insights.' },
];

const portfolioData: PortfolioItem[] = [
  { iconClass: 'fa-brands fa-shopify', title: 'E-commerce Platform', description: 'A robust online store with seamless purchasing experience and inventory management.', stockStatus: 'IN STOCK' },
  { iconClass: 'fa-solid fa-graduation-cap', title: 'Education App', description: 'Interactive mobile application designed for personalized learning and progress tracking.', stockStatus: 'IN STOCK' },
  { iconClass: 'fa-solid fa-flask-vial', title: 'LMS App', description: 'Cross-platform mobile **Laboratory Management System** application for on-the-go access to sample and inventory data.', stockStatus: 'IN STOCK' },
  { iconClass: 'fa-solid fa-microscope', title: 'LMS Software', description: 'Scalable, cloud-based **Laboratory Management System** for institutional use and administration.', stockStatus: 'IN STOCK' },
];

// --- Sub-Components (Defined here for immediate use in the App) ---

// Component for a single Service Card
const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <GlowCardWrapper>
    <div className="glow-card flex flex-col items-center text-center">
      <div className="text-[var(--secondary-accent)] mb-6">
        {/* Lucide icon rendering */}
        <i data-lucide={icon} className="w-16 h-16 stroke-1.5" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      {/* Enforce min-height for consistent grid alignment */}
      <p className="text-gray-400 leading-relaxed min-h-[4rem]">{description}</p>
    </div>
  </GlowCardWrapper>
);

// Component for a single Portfolio Item Card
const PortfolioCard: React.FC<PortfolioItem> = ({ iconClass, title, description, stockStatus }) => (
  // Use GlowCardWrapper as a link (isLink=true)
  <GlowCardWrapper isLink={true}>
    <div className="glow-card p-6 flex flex-col items-start h-full justify-between">
      <div>
        {/* Font Awesome icon rendering */}
        <div className="text-[var(--secondary-accent)] mb-4 text-6xl">
          <i className={iconClass} />
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--secondary-accent)] transition">{title}</h3>
        {/* Enforce min-height for consistent alignment */}
        <p className="text-gray-500 text-lg min-h-[3rem]">{description}</p>
      </div>
      <div className='flex items-center justify-between w-full mt-4'>
        {/* Stock Status Badge */}
        <span className='text-xs font-semibold px-2 py-1 rounded bg-green-500/20 text-green-400'>
          {stockStatus}
        </span>
        {/* View Project Link */}
        <span className="text-[var(--secondary-accent)] flex items-center group-hover:underline text-sm">
          View Project <i data-lucide="arrow-right" className="w-4 h-4 ml-2" />
        </span>
      </div>
    </div>
  </GlowCardWrapper>
);

// --- Main App Component ---
const App: React.FC = () => {

  
  useEffect(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Header (Non-sticky) */}
      <Header />

      <div className="relative z-10">
        <main>
          {/* Hero Section */}
           <section className="relative z-10 text-center py-20 md:py-32 px-4 min-h-screen flex flex-col items-center justify-center backdrop-blur-[2px] bg-black/5">
 
            {/* Hero Content */}
            <div className="relative z-20 mx-auto w-full max-w-5xl"> 
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in">
                Innovate. <span className="text-[var(--secondary-accent)]">Create.</span> Elevate.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto animate-fade-in-delay">
                We build cutting-edge software, stunning apps, and powerful websites that propel your business forward.
              </p>
              <a href="#contact" className="inline-block bg-[var(--secondary-accent)] text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-violet-700 transition duration-300 shadow-lg transform hover:scale-105">
                Let's Talk!
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="relative z-10 py-16 md:py-24 px-4 backdrop-blur-[2px] bg-black/5">
            <div className="container mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">Our <span className="text-[var(--secondary-accent)]">Services</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </section>

          {/* Our Products Section */}
          <section id="our-products" className="relative z-10 py-16 md:py-24 px-4 backdrop-blur-[2px] bg-black/5">
            <div className="container mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">Our <span className="text-[var(--secondary-accent)]">Products</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {portfolioData.map((project, index) => (
                  <PortfolioCard key={index} {...project} />
                ))}
              </div>
              <div className="text-center mt-12">
                <a href="#" className="cta-button inline-block bg-[var(--secondary-accent)] text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-violet-700 transition duration-300 shadow-lg transform hover:scale-105">
                  View All Projects
                </a>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="relative z-10 py-16 md:py-24 px-4 backdrop-blur-[2px] bg-black/5">
            <div className="container mx-auto text-center max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-12">About <span className="text-[var(--secondary-accent)]">StellarCode</span></h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                At StellarCode, we are a team of passionate innovators dedicated to transforming ideas into digital realities. With expertise spanning full-stack development, mobile solutions, AI integration, and captivating UI/UX, we're committed to delivering excellence and pushing the boundaries of technology.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Our mission is to help businesses thrive in the digital age by creating scalable, secure, and user-centric solutions that stand out in the crowded online universe.
              </p>
              <div className="mt-12 flex justify-center space-x-6">
                <div className="text-center">
                  <i data-lucide="lightbulb" className="w-12 h-12 mx-auto text-[var(--secondary-accent)] mb-3" />
                  <p className="text-xl font-semibold">Innovative Solutions</p>
                </div>
                <div className="text-center">
                  <i data-lucide="handshake" className="w-12 h-12 mx-auto text-[var(--secondary-accent)] mb-3" />
                  <p className="text-xl font-semibold">Client-Centric Approach</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative z-10 py-16 md:py-24 px-4 backdrop-blur-[2px] bg-black/5">
            <div className="container mx-auto text-center max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Get in <span className="text-[var(--secondary-accent)]">Touch</span></h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10">
                Ready to start your next project or just want to say hello? Fill out the form below or reach out directly!
              </p>

              <form className="space-y-6 text-left">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">Name</label>
                  <input type="text" id="name" className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-[var(--secondary-accent)] focus:ring-1 focus:ring-[var(--secondary-accent)] text-white placeholder-gray-400 transition" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">Email</label>
                  <input type="email" id="email" className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-[var(--secondary-accent)] focus:ring-1 focus:ring-[var(--secondary-accent)] text-white placeholder-gray-400 transition" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">Message</label>
                  <textarea id="message" rows={6} className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-[var(--secondary-accent)] focus:ring-1 focus:ring-[var(--secondary-accent)] text-white placeholder-gray-400 transition" placeholder="Tell us about your project..." />
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-[var(--secondary-accent)] text-white font-bold py-4 px-12 rounded-full text-xl hover:bg-violet-700 transition duration-300 shadow-lg transform hover:scale-105">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>

      {/* 2. Footer */}
      <Footer />
    </div>
  );
};

export default App;