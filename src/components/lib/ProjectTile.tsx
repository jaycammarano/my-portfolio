import React from 'react';
import { Link } from 'react-scroll';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface ITile {
  title: string;
  github: string;
  header: string;
  author: string | React.ReactNode;
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
    <div className="md:w-1/3 sm:w-full mt-8 mx-2 text-center border-2 border-green-400 rounded">
      <div className="relative p-4 flex flex-row text-center text-white border-b-4 border-green-400">
        <div className="m-auto">
          <a href={link}>
            <strong className="text-xl">{header}</strong>
          </a>
        </div>
        <div className="flex flex-row absolute m-2 right-0 top-0">
          <a className="float-right" href={github}>
            <FontAwesomeIcon
              className="text-white w-full"
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
