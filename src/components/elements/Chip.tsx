import React from 'react';

interface ChipProps {
  variant?: 'green' | 'purple' | 'gray' | 'pink';
  content?: string | React.ReactNode
}

const Chip: React.FC<ChipProps> = ({ variant, content }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'green':
        return 'text-green-500 bg-stem-green-light';
      case 'purple':
        return 'text-purple-600 bg-purple-100';
      case 'gray':
        return 'text-gray-300 bg-noble-black-light';
      case 'pink':
        return 'text-pink-600 bg-pink-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-lg text-[12px] font-medium ${getVariantStyles()}`}
    >
      {content}
    </span>
  );
};

export default Chip;
