"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code } from 'lucide-react';

const WorkshopCarousel = () => {
  const workshops = [
    {
      title: "Artificial Intelligence",
      tagline: "You can do more with AI.",
      motivationalLine: "Transform your future with AI",
      date: "19th September, 2024",
      venue: "MEDC (A-Block 1st Floor)",
      time: "2:30 - 5:00",
      image: "/event.jpg"
    },
    {
      title: "Virtual Reality",
      tagline: "Step into the future.",
      motivationalLine: "Experience reality, virtually",
      date: "20th September, 2024",
      venue: "MEDC (A-Block 1st Floor)",
      time: "2:30 - 5:00",
      image: "/pixels.jpg"
    },
    {
      title: "Machine Learning",
      tagline: "Let machines learn for you.",
      motivationalLine: "Power of intelligent algorithms",
      date: "21st September, 2024",
      venue: "MEDC (A-Block 1st Floor)",
      time: "2:30 - 5:00",
      image: "/event.jpg"
    },
    {
        title: "Machine Learning",
        tagline: "Let machines learn for you.",
        motivationalLine: "Power of intelligent algorithms",
        date: "21st September, 2024",
        venue: "MEDC (A-Block 1st Floor)",
        time: "2:30 - 5:00",
        image: "/event.jpg"
      },
      
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + cardsPerPage;
      return nextIndex >= workshops.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - cardsPerPage;
      return nextIndex < 0 ? Math.max(0, workshops.length - cardsPerPage) : nextIndex;
    });
  };

  const getCardWidth = () => {
    switch (cardsPerPage) {
      case 1: return 'w-full';
      case 2: return 'w-1/2';
      default: return 'w-1/3';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-4 sm:mb-8">
        WORKSHOPS
      </h2>
      
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${(currentIndex / cardsPerPage) * (100 / cardsPerPage)}%)`,
              width: `${(workshops.length / cardsPerPage) * 100}%`
            }}
          >
            {workshops.map((workshop, index) => (
              <div 
                key={index} 
                className={`${getCardWidth()} flex-shrink-0 p-2 sm:p-4`}
              >
                <div className="relative h-[500px] w-full [perspective:1000px] group">
                  <div className="absolute w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front of card */}
                    <div className="absolute w-full h-full [backface-visibility:hidden]">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <img 
                          src={workshop.image} 
                          alt={workshop.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                          <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">{workshop.title}</h3>
                            <p className="text-sm sm:text-base mb-4">{workshop.tagline}</p>
                            <p className="text-sm opacity-80">{workshop.motivationalLine}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="w-full h-full bg-black rounded-xl p-6 border border-gray-800">
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 mb-4 h-full">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <p className="text-blue-400 text-sm mb-1 animate-bounce">{workshop.title}</p>
                              <h3 className="text-blue-300 text-2xl font-bold mb-2 animate-bounce">WORKSHOP</h3>
                              <p className="text-gray-400 text-sm">{workshop.tagline}</p>
                            </div>
                            <Code className="text-blue-400 w-8 h-8 animate-bounce" />
                          </div>
                          
                          <div className="mt-6 text-gray-300">
                            <p className="mb-2">{workshop.date}</p>
                            <p className="mb-2">Venue: {workshop.venue}</p>
                            <p>{workshop.time}</p>
                          </div>
                          
                          <div className="mt-auto pt-6">
                            
                            <input 
                              type="text"
                              placeholder="Workshop Name 2024"
                              className="w-full bg-transparent border-b border-gray-700 p-2 text-white focus:outline-none mb-4"
                            />
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors animate-bounce">
                              REGISTER NOW!
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {workshops.length > cardsPerPage && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-blue-500/50 p-1.5 sm:p-2 rounded-full hover:bg-blue-500/75 z-10"
            >
              <ChevronLeft className="text-white w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-blue-500/50 p-1.5 sm:p-2 rounded-full hover:bg-blue-500/75 z-10"
            >
              <ChevronRight className="text-white w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkshopCarousel;