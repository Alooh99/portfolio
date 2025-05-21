import React from 'react';
import styles from '../style';
import { developer } from '../assets';
import Links from './Links';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section
      id='home'
      className='flex lg:flex-row flex-col flex-1 sm:justify-between justify-center items-center sm:mt-12 mt-8 sm:mb-56 mb-36'
    >
      <div className='w-full sm:flex flex-col flex-1 lg:justify-start justify-center lg:items-start items-center'>
        <p className={`${styles.paragraph} sm:text-start text-center`}>
          Hi There👋 I am
        </p>
        <h1
          className={`${styles.heading2} font-lobster sm:text-start text-center`}
        >
          <span
            className={`${styles.orange} animate-flip-3s inline-block`}
          >
            A
          </span>
          li <br className='sm:block hidden' />
          <span
            className={`${styles.orange} z-0 animate-flip-3s inline-block`}
          >
            A
          </span>
          hmed
        </h1>
        <p
          className={`${styles.orange} font-lobster font-bold sm:text-start text-center`}
        >
          Front-End Web Developer 🧑🏾‍💻
        </p>
        <p
          className={`${styles.paragraph} py-4 text-wrap mt-10 sm:max-w-md max-w-[full] sm:text-start text-center`}
        >
          I am a junior front-end developer who spends many hours coding and
          creating dynamic responsive websites, and I hope to help people's
          business grow.
        </p>
        <div className='mt-10 w-full flex lg:justify-start justify-center'>
          <Links />
        </div>
      </div>

      <ScrollReveal className='relative sm:w-[80] w-[72] sm:h-[80] h-[72] mt-9 gradienttt'>
        <img
          src={developer}
          alt='developer'
          className='relative z-10 sm:w-80 w-72 sm:h-80 h-72'
        />
      </ScrollReveal>
    </section>
  );
};

export default Hero;
