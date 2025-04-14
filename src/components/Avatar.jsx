import React from 'react';

export function Avatar({ src, alt = 'Avatar', className = '' }) {
  return (
    <div className={`w-10 h-10 rounded-full overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
