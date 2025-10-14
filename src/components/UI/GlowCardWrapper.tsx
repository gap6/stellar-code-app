import React from 'react';

interface GlowCardWrapperProps {
  children: React.ReactNode;
  isLink?: boolean;
}

/**
 * GlowCardWrapper Component
 * This component applies the structure for the persistent, slow, moving border light effect.
 * The animation itself is defined in src/index.css.
 */
const GlowCardWrapper: React.FC<GlowCardWrapperProps> = ({ children, isLink = false }) => {
  
  const RootElement = isLink ? 'a' : 'div';
  const elementProps = isLink ? { href: "#" } : {};

  return (
    <RootElement 
      {...elementProps}
      className={`glow-card-wrapper rounded-xl relative ${isLink ? 'group cursor-pointer' : ''}`}
    >
      {/* 1. The Rotating Light Layer (This renders the moving border) */}
      {/* The ::before pseudo-element is applied directly to the glow-card-wrapper via CSS */}
      <div 
        className="absolute inset-0 rounded-xl overflow-hidden" 
        style={{ zIndex: 0 }} /* Ensures the light stays behind the content */
      >
        <div 
          className="glow-border" 
          /* The glow-border class will hold the actual animation and gradient */
        ></div>
      </div>
      
      {/* 2. The Content Layer */}
      {children}
    </RootElement>
  );
};

export default GlowCardWrapper;