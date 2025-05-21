import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Services } from './Services';
import { moreSkills } from '../constants';
import { skillsImages } from '../constants';
import { orangeLogo } from '../assets';

const Skills = () => {
  const containerRef = useRef(null);
  const [dismissedCards, setDismissedCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight * 1.5) {
        setDismissedCards([]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (index) => {
    setDismissedCards((prev) => [...prev, index]);
  };

  const doubledImages = [...skillsImages, ...skillsImages];

  return (
    <section className="w-full md:h-screen h-[130vh]" id="skills">
      <div
        ref={containerRef}
        className="w-full h-full top-0 flex flex-col md:flex-row"
      >
        {/* LEFT: Cards */}
        <div className="basis-1/2 bg-black  md:py-20 py-0 flex flex-col justify-between items-center relative overflow-hidden">
          <h1 className='font-lobster font-bold text-[#FF4D00] text-4xl sm:text-7xl'>Skills</h1>
          {moreSkills.map((skill, index) => {
            const isDismissed = dismissedCards.includes(index);
            return (
              <motion.div
                key={skill.id}
                className="absolute hover:cursor-pointer"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: 'bottom left',
                  zIndex: moreSkills.length - index,
                }}
                animate={
                  isDismissed
                    ? {
                        x: '-50%',
                        y: `calc(-50% - ${index * 140}px)`,
                        rotate: -45,
                        rotateX: 90,
                        opacity: 0,
                        scale: 0.8,
                      }
                    : {
                        x: '-50%',
                        y: '-50%',
                        rotate: index * 2,
                        rotateX: 0,
                        opacity: 1,
                        scale: 1,
                      }
                }
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                onClick={() => handleCardClick(index)}
              >
                <Services {...skill} index={index} />
              </motion.div>
            );
          })}
          {dismissedCards.length === moreSkills.length ? (
            <h1 className="text-center text-2xl sm:text-4xl font-bebas text-white">Now Scroll</h1>
          ) : (
            <h1 className="text-center text-2xl sm:text-4xl font-bebas text-white">Click Cards</h1>
          )}
        </div>

        {/* RIGHT: Logos Slider */}
        <div className="basis-1/2 sm:rounded-l-2xl rounded-none flex items-center overflow-hidden relative">
          <div
            style={{ backgroundImage: `url(${orangeLogo})` }}
            className="
              absolute 
              w-full 
              h-full 
              bg-center 
              bg-no-repeat 
              bg-cover 
              opacity-10 
              sm:h-96
              md:h-[32rem] 
              lg:h-[36rem]
            "
          ></div>
          <div className="flex slideAnimation shadow-left-right bg-black p-2">
            {doubledImages.map((image, index) => (
              <div key={index} className="px-8">
                <img className="sm:w-24 w-16 mr-24" src={image.img} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
