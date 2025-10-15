import React, { useEffect } from 'react';
import GlowCardWrapper from '../components/UI/GlowCardWrapper';

interface PortfolioItem {
  iconClass: string;
  title: string;
  description: string;
  stockStatus: string;
}

const portfolioData: PortfolioItem[] = [
  { iconClass: 'fa-brands fa-shopify', title: 'E-commerce Platform', description: 'A robust online store with seamless purchasing experience and inventory management.', stockStatus: 'IN STOCK' },
  { iconClass: 'fa-solid fa-graduation-cap', title: 'Education App', description: 'Interactive mobile application designed for personalized learning and progress tracking.', stockStatus: 'IN STOCK' },
  { iconClass: 'fa-solid fa-flask-vial', title: 'LMS App', description: 'Cross-platform mobile **Laboratory Management System** application for on-the-go access to sample and inventory data.', stockStatus: 'IN STOCK' },
  { iconClass: 'fa-solid fa-microscope', title: 'LMS Software', description: 'Scalable, cloud-based **Laboratory Management System** for institutional use and administration.', stockStatus: 'IN STOCK' },
];

const PortfolioCard: React.FC<PortfolioItem> = ({ iconClass, title, description, stockStatus }) => (
  <GlowCardWrapper isLink={true}>
    <div className="glow-card p-6 flex flex-col items-start h-full justify-between">
      <div>
        <div className="text-[var(--secondary-accent)] mb-4 text-6xl">
          <i className={iconClass} />
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--secondary-accent)] transition">{title}</h3>
        <p className="text-gray-500 text-lg min-h-[3rem]">{description}</p>
      </div>
      <div className='flex items-center justify-between w-full mt-4'>
        <span className='text-xs font-semibold px-2 py-1 rounded bg-green-500/20 text-green-400'>
          {stockStatus}
        </span>
        <span className="text-[var(--secondary-accent)] flex items-center group-hover:underline text-sm">
          View Project <i data-lucide="arrow-right" className="w-4 h-4 ml-2" />
        </span>
      </div>
    </div>
  </GlowCardWrapper>
);

const ProductsPage: React.FC = () => {
  useEffect(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  return (
    <section className="relative z-10 py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">Our <span className="text-[var(--secondary-accent)]">Products</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
