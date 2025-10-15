import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  return (
    <section className="relative z-10 py-16 md:py-24 px-4">
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
  );
};

export default AboutPage;
