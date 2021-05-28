import React from 'react';

interface ITile {
  title: string;
  header: string;
  author: string | React.ReactNode;
  logo: string;
  logoAlt: string;
}

const ProjectTile: React.FC<ITile> = ({
  title,
  header,
  author,
  logo,
  logoAlt = 'Logo Or Splash',
}) => {
  return (
    <div className="md:w-1/3 sm:w-full mt-8 mx-2 text-center border-2 border-green-400 rounded">
      <div className="p-4 text-center text-white border-b-4 border-green-400">
        <strong className="text-xl">{header}</strong>
      </div>
      <div className="p-2 text-center text-white border-b-4 border-green-400">
        <img alt={logoAlt} src={logo} />
      </div>
      <div className="p-4 font-light text-center text-white border-green-400">
        {title}
        <p className="font-medium">
          by: <strong className="font-medium text-green-400">{author}</strong>
        </p>
      </div>
    </div>
  );
};

export default ProjectTile;
