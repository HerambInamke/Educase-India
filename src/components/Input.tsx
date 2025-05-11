import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  label,
  value,
  onChange,
  required = false,
  error,
  name
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-popx-gray-700 text-sm font-medium mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full p-3 border ${error ? 'border-red-500' : 'border-popx-gray-300'} 
          rounded-lg focus:outline-none focus:ring-2 focus:ring-popx-purple-500 
          transition-all duration-200 text-popx-gray-700 placeholder:text-popx-gray-400`}
      />
      {error && <p className="mt-1 text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Input;