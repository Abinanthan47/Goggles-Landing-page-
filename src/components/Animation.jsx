import { motion } from "motion/react"
import React from 'react'

function Animation() {
  return (
    <div>
        <MotionConfig.div 
  animate={{ x: 100 }}
  // Type 'spring' makes it feel heavy/bouncy
  transition={{ type: "spring", stiffness: 100, damping: 10 }} 
    className="w-32 h-32 bg-blue-500"
/>
    </div>
  )
}

export default Animation