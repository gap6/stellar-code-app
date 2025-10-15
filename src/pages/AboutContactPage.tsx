import React, { useEffect } from 'react';

const AboutContactPage: React.FC = () => {
  useEffect(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  return (
    <>
      <section id="about" className="relative z-10 py-16 md:py-24 px-4">
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

      <section id="contact" className="relative z-10 py-16 md:py-24 px-4">
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
    </>
  );
};

export default AboutContactPage;
