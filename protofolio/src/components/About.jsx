import { motion } from 'framer-motion';
import { blacklogo } from '../assets';

const About = () => (
  <section
    id='about'
    className='w-full flex flex-col sm:flex-row items-stretch sm:mt-10 mt-14'
  >
    <div className='flex flex-col sm:flex-row w-full'>

      {/* Left Section */}
      <motion.div
        className='bg-[#FF4D00]/30 sm:w-1/2 w-full sm:rounded-r-xl rounded-none'
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className='w-full my-12 flex flex-col items-end pr-6'>
          <motion.h1
            className='font-lobster font-bold text-black text-4xl sm:text-7xl'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About
          </motion.h1>

          <div className='flex flex-col items-center'>
            {[0.6, 0.5, 0.4].map((opacity, i) => (
              <motion.img
                key={i}
                src={blacklogo}
                alt='my website logo'
                className='mt-10 w-32 h-32 m-0 p-0'
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, opacity }}
                transition={{ delay: 0.3 * i, duration: 0.6 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className='bg-black w-full'
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className='w-full my-12 flex flex-col justify-start pl-6'>
          <motion.h1
            className='font-lobster font-bold text-[#FF4D00] text-4xl sm:text-7xl'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Me.
          </motion.h1>

          <div className='max-w-3xl text-sm sm:text-base md:text-lg leading-5 sm:leading-7 font-bold font-poppins mt-14 mx-4 capitalize'>
            {[
              "My web development journey began during the COVID-19 lockdown, when I first discovered the world of programming through HTML, CSS, and JavaScript. What started as a curiosity quickly turned into a passion — I was fascinated by the power of code to bring ideas to life on the web.",
              "As I deepened my skills, I moved on to modern technologies like React.js and Next.js, which allowed me to build more dynamic and professional websites. I’ve been continuously learning and improving my skills with a strong focus on creating clean, user-friendly interfaces.",
              "I'm currently holding a Bachelor's degree in Computer Science from the University of the People, and I’m passionate about building a successful career in tech — not just for myself, but to create meaningful impact through design and code.",
              "I believe that being a developer is not just a job, it’s a way of thinking and solving problems creatively. I'm excited about what lies ahead and always open to new opportunities that push me to grow."
            ].map((text, i) => (
              <motion.p
                key={i}
                className='text-[#FF4D00] mt-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

export default About;
