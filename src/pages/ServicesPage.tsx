import React, { useEffect } from 'react';
import GlowCardWrapper from '../components/UI/GlowCardWrapper';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  { icon: 'cloud-cog', title: 'Web Development', description: 'Crafting responsive, high-performance websites from custom builds to e-commerce platforms.' },
  { icon: 'smartphone', title: 'Mobile App Development', description: 'Designing and developing intuitive and powerful mobile applications for iOS and Android.' },
  { icon: 'rocket', title: 'Custom Software Solutions', description: 'Building bespoke software to streamline your operations and meet unique business needs.' },
  { icon: 'brain', title: 'AI & Machine Learning', description: 'Integrating intelligent solutions to automate tasks and provide deeper insights.' },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <GlowCardWrapper>
    <div className="glow-card flex flex-col items-center text-center">
      <div className="text-[var(--secondary-accent)] mb-6">
        <i data-lucide={icon} className="w-16 h-16 stroke-1.5" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed min-h-[4rem]">{description}</p>
    </div>
  </GlowCardWrapper>
);

const ServicesPage: React.FC = () => {
  useEffect(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  return (
    <section className="relative z-10 py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">Our <span className="text-[var(--secondary-accent)]">Services</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
