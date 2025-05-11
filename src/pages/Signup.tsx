import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import Button from '../components/Button';
import Toggle from '../components/Toggle';
import PageContainer from '../components/PageContainer';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleToggleChange = (isChecked: boolean) => {
    setFormData(prev => ({ ...prev, isAgency: isChecked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle account creation here
    // For now, just navigate to the account page
    navigate('/account');
  };
  
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <PageContainer>
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Create your PopX account
          </h1>
          <p className="text-sm text-gray-500">
            Please complete all fields below
          </p>
        </motion.div>
        
        <motion.form 
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <motion.div variants={itemVariants}>
            <Input
              type="text"
              name="fullName"
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Input
              type="text"
              name="companyName"
              label="Company Name"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Toggle 
              label="Are you an agency?" 
              onChange={handleToggleChange}
              initialValue={formData.isAgency}
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="pt-4">
            <Button 
              type="submit" 
              variant="primary" 
              fullWidth 
              disabled={!formData.fullName || !formData.email || !formData.password}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              Create Account
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <button 
              type="button"
              className="text-sm text-purple-700 hover:text-purple-900 transition-colors"
              onClick={() => navigate('/')}
            >
              Go back to welcome page
            </button>
          </motion.div>
        </motion.form>
      </div>
    </PageContainer>
  );
};

export default Signup;