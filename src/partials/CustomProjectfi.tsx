import type { ReactNode } from 'react';
import React from 'react';

type CustomProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: ReactNode;
  githubLink?: string;
  category: ReactNode;
};

const CustomProject: React.FC<CustomProjectProps> = ({
  img,
  name,
  description,
  githubLink,
  category,
}) => {
  return (
    <div className="flex flex-col items-start rounded-lg bg-[rgba(30,41,59,var(--tw-bg-opacity))] p-4 md:flex-row">
      <img
        className="mb-4 h-20 w-20 rounded-full object-cover transition-transform duration-300 ease-in-out hover:translate-y-2 md:mb-0"
        src={img.src}
        alt={img.alt}
      />
      <div className="ml-0 flex-1 md:ml-4">
        <div className="flex flex-col items-baseline justify-between md:flex-row">
          <h2 className="mb-2 text-xl font-semibold md:mb-0">{name}</h2>
          <div className="flex flex-wrap gap-2">{category}</div>
        </div>
        <div className="mt-4">{description}</div>
        <div className="mt-4 flex gap-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-blue-600"
            >
              GitHub-repositorio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomProject;
