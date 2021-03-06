import React from 'react';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface ITile {
  title: string;
  github: string;
  header: string;
  author: string | JSX.Element;
  logo: string;
  logoAlt: string;
  link: string;
}

const ProjectTile: React.FC<ITile> = ({
  title,
  github,
  header,
  author,
  logo,
  logoAlt = 'Logo Or Splash',
  link,
}) => {
  return (
    <div className="mx-2 mt-8 border-2 border-green-400 rounded md:w-1/3">
      <div className="relative flex flex-row p-4 text-white border-b-4 border-green-400">
        <div className="m-auto sm:m-auto md:m-0 lg:m-auto">
          <a href={link}>
            <strong className="text-xl md:text-base md:text-right">
              {header}
            </strong>
          </a>
        </div>
        <div className="absolute top-0 right-0 flex flex-row m-2">
          <a className="float-right" href={github}>
            <FontAwesomeIcon
              className="w-full text-white Icon"
              icon={faGithubSquare}
              size="3x"
            />
          </a>
        </div>
      </div>
      <div className="p-2 text-center text-white border-b-4 border-green-400">
        <a href={link}>
          <img alt={logoAlt} src={logo} />
        </a>
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
