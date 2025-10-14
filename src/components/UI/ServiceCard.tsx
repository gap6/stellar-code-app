import React from 'react';
import GlowCardWrapper from './GlowCardWrapper'; // Import the wrapper
// We assume Lucide icons are loaded globally or imported via a helper, 
// but for simplicity in this single component, we rely on the data-lucide attribute.

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <GlowCardWrapper>
      <div className="glow-card flex flex-col items-center text-center">
        <div className="text-[var(--secondary-accent)] mb-6">
          {/* Lucide icon rendering */}
          <i data-lucide={icon} className="w-16 h-16 stroke-1.5" />
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        {/* Enforce min-height for consistent grid alignment */}
        <p className="text-gray-300 leading-relaxed min-h-14">{description}</p>
      </div>
    </GlowCardWrapper>
  );
};

export default ServiceCard;
