import React, { useState } from 'react';

interface ToggleProps {
  label: string;
  onChange?: (isChecked: boolean) => void;
  initialValue?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ 
  label, 
  onChange,
  initialValue = false 
}) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-popx-gray-700 text-sm font-medium">{label}</span>
      <button
        type="button"
        onClick={handleToggle}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-popx-purple-500 ${
          isChecked ? 'bg-popx-purple-600' : 'bg-popx-gray-300'
        }`}
        role="switch"
        aria-checked={isChecked}
      >
        <span
          className={`${
            isChecked ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
        />
      </button>
    </div>
  );
};

export default Toggle;