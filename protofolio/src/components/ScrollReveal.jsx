import { motion } from 'framer-motion';

const ScrollReveal = ({ children, className, style }) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1.05,
        transition: { duration: 1.5 }
      }}
      viewport={{ margin: "-200px",
        amount:"some"
       }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal