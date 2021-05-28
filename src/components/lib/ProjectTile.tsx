import React from 'react';

interface ITile {
  title: string;
  header: string;
  author: string;
  logo: string;
}

const ProjectTile: React.FC<ITile> = ({ title, header, author, logo }) => {
  return (
    <div className="w-1/3 mt-8 border-2 border-green-400 rounded">
      <div className="p-4 text-center text-white border-b-4 border-green-400">
        <strong className="text-xl">{header}</strong>
      </div>
      <div className="p-4 text-center text-white border-b-4 border-green-400">
        <img alt="Cover Art" src={logo} />
      </div>
      <div className="p-4 text-justify text-white border-green-400">
        <strong className="text-xl">{title}</strong>
        <p> by {author}</p>
      </div>
    </div>
  );
};

export default ProjectTile;
