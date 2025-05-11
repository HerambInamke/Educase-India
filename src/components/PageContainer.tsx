import React from 'react';
import { motion } from 'framer-motion';

interface PageContainerProps {
  children: React.ReactNode;
  fullHeight?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  fullHeight = true 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-2 sm:p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`w-full max-w-[375px] bg-white bg-opacity-80 shadow-lg rounded-xl ${fullHeight ? 'min-h-screen' : ''} flex flex-col justify-center`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageContainer;