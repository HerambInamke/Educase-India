import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import Button from '../components/Button';
import PageContainer from '../components/PageContainer';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle authentication here
    // For now, just navigate to the account page
    navigate('/account');
  };
  
  return (
    <PageContainer>
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Login to your PopX account
          </h1>
          <p className="text-sm text-gray-500">
            Please enter your details
          </p>
        </motion.div>
        
        <motion.form 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <div className="pt-4">
            <Button 
              type="submit" 
              variant="primary" 
              fullWidth 
              disabled={!formData.email || !formData.password}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              Login
            </Button>
          </div>
          
          <div className="text-center">
            <button 
              type="button"
              className="text-sm text-purple-700 hover:text-purple-900 transition-colors"
              onClick={() => navigate('/')}
            >
              Go back to welcome page
            </button>
          </div>
        </motion.form>
      </div>
    </PageContainer>
  );
};

export default Login;