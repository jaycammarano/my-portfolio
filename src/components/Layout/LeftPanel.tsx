import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubSquare,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const LeftPanel: React.FC = () => {
  return (
    <div className="flex flex-col leftPanel">
      <div className="">
        <a href="https://twitter.com/CammaranoJay">
          <FontAwesomeIcon
            className="text-white w-full ml-16 mb-2 m-4"
            icon={faTwitter}
            size="3x"
          />
        </a>
      </div>
      <div className="">
        <a href="https://github.com/jaycammarano/">
          <FontAwesomeIcon
            className="text-white w-full ml-16 mb-2 m-4"
            icon={faGithubSquare}
            size="3x"
          />
        </a>
      </div>
      <div className="">
        <a href="https://www.linkedin.com/in/jay-cammarano/">
          <FontAwesomeIcon
            className="text-white ml-16 m-4"
            icon={faLinkedin}
            size="3x"
          />
        </a>
      </div>{' '}
      <div className="">
        <a href="mailto:jay.cammarano@gmail.com">
          <FontAwesomeIcon
            className="text-white ml-16 m-4"
            icon={faEnvelope}
            size="3x"
          />
        </a>
      </div>
    </div>
  );
};

export default LeftPanel;
