import React from 'react';

// Mapping function
const mapColorTagsToTailwind = (colorTag: string): string => {
  switch (colorTag) {
    case 'FUCHSIA':
      return 'bg-fuchsia-300';
    case 'LIME':
      return 'bg-lime-300';
    case 'SKY':
      return 'bg-sky-300';
    case 'ROSE':
      return 'bg-rose-300';
    case 'BLUE':
      return 'bg-blue-300';
    case 'LIGHTBLUE':
      return 'bg-blue-200';
    case 'ORANGE':
      return 'bg-orange-300';
    case 'PURPLE':
      return 'bg-purple-300';
    case 'GREEN':
      return 'bg-green-300';
    case 'GRAY':
      return 'bg-gray-300';
    case 'EMERALD':
      return 'bg-emerald-300';
    case 'YELLOW':
      return 'bg-yellow-300';
    case 'PINK':
      return 'bg-pink-300';
    default:
      return 'bg-gray-300';
  }
};

type CustomTagProps = {
  color: string;
  url: string;
  children: React.ReactNode;
};

const CustomTag: React.FC<CustomTagProps> = ({ color, url, children }) => {
  const tailwindColor = mapColorTagsToTailwind(color);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded px-1 py-0.5 text-sm text-gray-900 ${tailwindColor} transition-colors duration-300 ease-in-out hover:bg-blue-200`}
    >
      {children}
    </a>
  );
};

export default CustomTag;
