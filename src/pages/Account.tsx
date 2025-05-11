import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import Avatar from '../components/Avatar';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Account: React.FC = () => {
  const navigate = useNavigate();
  const [userData] = useState({
    name: 'Sophia Martinez',
    email: 'sophia.martinez@gmail.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  });
  
  return (
    <PageContainer>
      <div className="p-6">
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-4 border-b border-purple-200 flex items-center rounded-t-xl">
          <button 
            onClick={() => navigate('/')}
            className="text-purple-700 hover:text-purple-900 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold text-center flex-1 pr-6 text-gray-900">
            Account Settings
          </h1>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="p-6"
        >
          <div className="flex items-start space-x-4 mb-6">
            <Avatar 
              size="lg" 
              alt={userData.name} 
              editable 
            />
            <div>
              <h2 className="font-semibold text-lg text-gray-900">
                {userData.name}
              </h2>
              <p className="text-gray-500 text-sm">
                {userData.email}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-700">
              {userData.description}
            </p>
          </div>
          <div className="pt-4 border-t border-purple-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-purple-800">Account Information</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800">{userData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Type</p>
                <p className="text-gray-800">Personal</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageContainer>
  );
};

export default Account;