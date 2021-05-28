import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubSquare,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header>
      <div className="header w-full flex flex-row font-bold text-green-400 bg-gray-800">
        <Link to="home">
          <div className="m-4">home</div>
        </Link>
        <div className="flex flex-row absolute m-2 right-0">
          <div className="m-2">
            <a href="https://twitter.com/CammaranoJay">
              <FontAwesomeIcon
                size="2x"
                className="text-white"
                icon={faTwitter}
              />
            </a>
          </div>
          <div className="m-2">
            <a href="https://github.com/jaycammarano/">
              <FontAwesomeIcon
                size="2x"
                className="text-white"
                icon={faGithubSquare}
              />
            </a>
          </div>
          <div className="m-2">
            <a href="https://www.linkedin.com/in/jay-cammarano/">
              <FontAwesomeIcon
                size="2x"
                className="text-white"
                icon={faLinkedin}
              />
            </a>
          </div>
          <div className="m-2">
            <a href="mailto:jay.cammarano@gmail.com">
              <FontAwesomeIcon
                size="2x"
                className="text-white"
                icon={faEnvelope}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
