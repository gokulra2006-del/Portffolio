import { createContext, useContext } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: '0px 0px -30px' };

export function FadeInStagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: 0.15 }}
        className={className}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);


  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" as any }
    },
  };

  return (
    <motion.div
      variants={variants}
      initial={isInStaggerGroup ? undefined : 'hidden'}
      whileInView={isInStaggerGroup ? undefined : 'visible'}
      viewport={isInStaggerGroup ? undefined : viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
