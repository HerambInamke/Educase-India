import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  editable?: boolean;
  onImageChange?: (file: File) => void;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'User avatar',
  size = 'md',
  editable = false,
  onImageChange
}) => {
  const [previewSrc, setPreviewSrc] = useState<string | undefined>(src);
  
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewSrc(reader.result as string);
        if (onImageChange) {
          onImageChange(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden bg-popx-gray-200`}>
      {previewSrc ? (
        <img 
          src={previewSrc} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-popx-gray-200 text-popx-gray-400">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
      
      {editable && (
        <>
          <label 
            htmlFor="avatar-upload" 
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer"
          >
            <Camera className="text-white" size={24} />
          </label>
          <input 
            id="avatar-upload" 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  );
};

export default Avatar;