import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRegSmile } from 'react-icons/fa';
import Button from '../components/Button';
import PageContainer from '../components/PageContainer';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <PageContainer fullHeight={false}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex flex-col justify-end min-h-[600px] p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 border border-gray-200"
      >
        <div className="mb-0 mt-auto flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4"
          >
            <FaRegSmile className="text-4xl text-purple-500" />
          </motion.div>
          <h1 className="text-[28px] font-bold text-gray-900 mb-2 text-center">Welcome to PopX</h1>
          <p className="text-gray-500 text-base mb-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full"
          >
            <Button
              variant="primary"
              fullWidth
              onClick={() => navigate('/signup')}
              className="transition-transform duration-200"
            >
              Create Account
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-3"
          >
            <Button
              variant="secondary"
              fullWidth
              onClick={() => navigate('/login')}
              className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none transition-transform duration-200"
            >
              Already Registered? Login
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </PageContainer>
  );
};

export default Welcome;