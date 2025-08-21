'use client';

import { useState, useEffect } from 'react';
import { CERTIFICATIONS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import CertificationDetails from '@/components/data-display/certification-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(CERTIFICATIONS.length / itemsPerPage);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getCurrentItems = () => {
    const start = currentIndex * itemsPerPage;
    return CERTIFICATIONS.slice(start, start + itemsPerPage);
  };

  return (
    <Container id="certifications" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Certifications" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Professional certifications and achievements:
        </Typography>
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800 dark:bg-white shadow-lg p-2 hover:bg-gray-700 dark:hover:bg-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
          disabled={totalPages <= 1}
        >
          <svg className="w-6 h-6 text-white dark:text-black transition-colors duration-300 ease-in-out hover:text-gray-100 dark:hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800 dark:bg-white shadow-lg p-2 hover:bg-gray-700 dark:hover:bg-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
          disabled={totalPages <= 1}
        >
          <svg className="w-6 h-6 text-white dark:text-black transition-colors duration-300 ease-in-out hover:text-gray-100 dark:hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="flex gap-6 justify-center px-12">
          {getCurrentItems().map((certification, index) => (
            <div 
              key={`${currentIndex}-${index}`} 
              className={`flex-1 max-w-sm transition-all duration-300 ease-in-out ${
                isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
              }`}
            >
              <CertificationDetails {...certification} />
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default CertificationsSection;