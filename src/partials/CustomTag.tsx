import React from 'react';

type CustomTagProps = {
  color: string;
  url: string;
  children: React.ReactNode;
};

const CustomTag: React.FC<CustomTagProps> = ({
  color: _color,
  url,
  children,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block border border-neutral-700 px-2 py-1 text-xs font-light uppercase tracking-wider text-neutral-500 transition-all duration-200 hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
};

export default CustomTag;
