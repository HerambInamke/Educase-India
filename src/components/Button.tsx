import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const baseStyles = "relative font-semibold rounded-lg py-3.5 px-4 text-center transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden";
  
  const variantStyles = {
    primary: "bg-button-gradient text-white hover:shadow-lg hover:shadow-popx-purple-200",
    secondary: "bg-white/80 backdrop-blur-sm text-popx-purple-700 hover:bg-white hover:shadow-md",
    outline: "bg-transparent text-popx-gray-700 border border-popx-gray-300 hover:bg-popx-gray-100 active:bg-popx-gray-200"
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  const disabledStyles = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "cursor-pointer";

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;