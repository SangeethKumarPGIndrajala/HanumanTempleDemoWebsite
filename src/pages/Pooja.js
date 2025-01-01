import React from 'react'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import PoojasSection from '../components/PoojasSection'
import { motion } from 'framer-motion'

function Pooja() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}>
        <ResponsiveNavbar/>
        <PoojasSection />
    </motion.div>
  )
}

export default Pooja