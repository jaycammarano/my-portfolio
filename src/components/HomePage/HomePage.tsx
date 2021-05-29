import React from 'react';
import Layout from '../Layout/Layout';
import ProjectTile from '../lib/ProjectTile';
import '../../assets/css/homepage.css';
import bearometric from '../../assets/images/protection.svg';
import encryption from '../../assets/images/encryption.jpg';
import fig from '../../assets/images/fig.jpg';
import Bio from './Bio';
import References from './References';
import { Link } from 'react-scroll';
import OpenToWork from './OpenToWork';

const HomePage = () => {
  return (
    <Layout>
      <div id="home" className="m-8 ml-32 font-bold text-white centerPanel">
        <div className="flex flex-col my-16 ml-4 md:flex-row">
          <div className="text-5xl sm:text-6xl sm:mt-32 lg:mt-4 md:text-7xl">
            Jay Cammarano
          </div>
          <Link to="otw">
            <button className="w-32 h-10 px-2 mt-2 text-base font-bold bg-green-500 border-2 border-green-500 rounded hover:border-green-300 hover:border-2 lg:mt-4 md:w-40 md:ml-4 md:mt-32 sm:text-base md:text-xl">
              Open To Work
            </button>
          </Link>
        </div>
        <div className="mb-24 lg:flex lg:flex-row lg:m-2 lg:mb-24 md:w-full md:m-auto md:mb-24 sm:flex sm:flex-col">
          <Link to="experience">
            <div className="relative flex flex-row py-3 pl-4 pr-32 m-2 overflow-hidden text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2">
              <div>Experience</div>
              <div className="geometric1">
                <svg
                  width="185"
                  height="87"
                  viewBox="0 0 185 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.0291 32.5202L34.8528 24.2605L59.0291 32.5202ZM35.4397 44.1684L59.0726 33.5963L50.2466 49.1771L35.4397  60.2936L119.256 65.6548L111.855 51.8872ZM111.995 50.8778L129.074 40.7293L137.045 59.4775L111.995 50.8778ZM35.699 71.4483L34.439 53.8718L51.889 56.3251L35.699 71.4483ZM27.3106 48.9289L29.9485 65.5761L15.1083 60.5561L27.3106 48.9289ZM17.1267 50.2626L2.31993 45.2539L25.9528 34.6817L17.1267 50.2626ZM19.3072 12.5863L36.7572 15.0397L20.5672 30.1628L19.3072 12.5863ZM2.99147 85.3269L1.73145 67.7504L19.1815 70.2038L2.99147 85.3269ZM66.4412 28.3642L65.1812 10.7876L82.6312 13.241L66.4412 28.3642ZM93.803 23.8067L92.543 6.2302L109.993 8.68358L93.803 23.8067ZM93.4227 71.9996L104.5 58.295L115.577 71.9996H93.4227ZM102.665 49.817L93.2289 63.783L85.8108 49.9843L102.665 49.817ZM86.9109 30.0722L111.398 38.4786L94.3123 43.8398L86.9109 30.0722ZM121.624 17.7954L132.702 31.5H110.547L121.624 17.7954ZM71.1244 46.1104L82.2017 59.815H60.0471L71.1244 46.1104ZM145.298 61.5001L156.376 47.7955L167.453 61.5001H145.298ZM161.423 44L172.5 30.2955L183.577 44H161.423ZM145.094 26.0275L148.63 5.25606L157.247 9.67552L145.094 26.0275ZM178 2.91662V21.1749L165.866 0.690013L178 2.91662Z"
                    fill="rgba(6, 95, 70)"
                    fill-opacity="0.2"
                    stroke="rgba(6, 95, 70)"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link to="projects">
            <div className="relative flex flex-row py-3 pl-4 pr-32 m-2 overflow-hidden text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2">
              <div>Projects</div>
              <div className="geometric1">
                <svg
                  width="185"
                  height="87"
                  viewBox="0 0 185 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.0291  43.3355L40.4064 24.2605L59.0291 32.5202ZM35.4397  33.5963L50.2466 49.1771L35.4397 44.1684ZM111.855 51.8872L136.342 60.2936L119.256 65.6548L111.855 51.8872ZM111.995 50.8778L129.074  50.8778ZM35.699 71.4483L34.439 56.3251L35.699 71.4483ZM27.3106 48.9289L29.9485 65.5761L15.1083 60.5561L27.3106 48.9289ZM17.1267 50.2626L2.31993 45.2539L25.9528 34.6817L17.1267 50.2626ZM19.3072 12.5863L36.7572 15.0397L20.5672 30.1628L19.3072 12.5863ZM2.99147 85.3269L1.73145 67.7504L19.1815 70.2038L2.99147 85.3269ZM66.4412 28.3642L65.1812 10.7876L82.6312 13.241L66.4412 28.3642ZM93.803 23.8067L92.543 6.2302L109.993 8.68358L93.803 23.8067ZM93.4227 71.9996L104.5 58.295L115.577 71.9996H93.4227ZM102.665 49.817L93.2289 63.783L85.8108 49.9843L102.665 49.817ZM86.9109 30.0722L111.398 38.4786L94.3123 43.8398L86.9109 30.0722ZM121.624 17.7954L132.702 31.5H110.547L121.624 17.7954ZM71.1244 46.1104L82.2017 59.815H60.0471L71.1244 46.1104ZM145.298 61.5001L156.376 47.7955L167.453 61.5001H145.298ZM161.423 44L172.5 30.2955L183.577 44H161.423ZM145.094 26.0275L148.63 5.25606L157.247 9.67552L145.094 26.0275ZM178 2.91662V21.1749L165.866 0.690013L178 2.91662Z"
                    fill="rgba(6, 95, 70)"
                    fill-opacity="0.2"
                    stroke="rgba(6, 95, 70)"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link to="references">
            <div className="relative flex flex-row py-3 pl-4 pr-32 m-2 overflow-hidden text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2">
              <div>References</div>
              <div className="geometric1">
                <svg
                  width="185"
                  height="87"
                  viewBox="0 0 185 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.0291 32.5202L34.8528 43.3355L40.4064 32.5202ZM35.4397 44.1684L59.0726 33.5963L50.2466 49.1771L35.4397 44.1684ZM111.855  60.2936L119.256 65.6548L111.855 51.8872ZM111.995 50.8778L129.074 40.7293L137.045 59.4775L111.995 50.8778ZM35.699 71.4483L34.439 53.8718L51.889 56.3251L35.699 71.4483ZM27.3106 48.9289L29.9485 65.5761L15.1083 60.5561L27.3106 48.9289ZM17.1267 50.2626L2.31993 45.2539L25.9528 34.6817L17.1267 50.2626ZM19.3072 12.5863L36.7572 15.0397L20.5672 30.1628L19.3072 12.5863ZM2.99147 85.3269L1.73145 67.7504L19.1815 70.2038L2.99147 85.3269ZM66.4412 28.3642L65.1812 10.7876L82.6312 13.241L66.4412 28.3642ZM93.803 23.8067L92.543 6.2302L109.993 8.68358L93.803 23.8067ZM93.4227 71.9996L104.5 58.295L115.577 71.9996H93.4227ZM102.665 49.817L93.2289 63.783L85.8108 49.9843L102.665 49.817ZM86.9109 30.0722L111.398 38.4786L94.3123 43.8398L86.9109 30.0722ZM121.624 17.7954L132.702 31.5H110.547L121.624 17.7954ZM71.1244 46.1104L82.2017 59.815H60.0471L71.1244 46.1104ZM145.298 61.5001L156.376 47.7955L167.453 61.5001H145.298ZM161.423 44L172.5 30.2955L183.577 44H161.423ZM145.094 26.0275L148.63 5.25606L157.247 9.67552L145.094 26.0275ZM178 2.91662V21.1749L165.866 0.690013L178 2.91662Z"
                    fill="rgba(6, 95, 70)"
                    fill-opacity="0.2"
                    stroke="rgba(6, 95, 70)"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <Bio />
        <div id="projects">
          <h2 className="my-4 text-5xl text-center">Projects:</h2>
        </div>
        <div className="md:flex md:flex-row sm:flex sm:flex-col sm:w-50">
          <ProjectTile
            title="React app that suggests music based on the weather"
            header="Bear-O-Metric Radio"
            github="https://github.com/jaycammarano/BearometricRadio"
            author="Jay Cammarano, Will Campbell, Maria Shkolnik"
            logo={bearometric}
            logoAlt="https://www.freepik.com/vectors/icons Icons vector created by rawpixel.com - www.freepik.com"
            link="https://bear-o-metric-radio.netlify.app/"
          />
          <ProjectTile
            title="Organize events in an encrypted setting"
            header="Encrypt Events"
            github="https://github.com/jaycammarano/encryptjs-backend"
            author="Jay Cammarano"
            logo={encryption}
            link="https://encrypted-events-manager.netlify.app/"
            logoAlt="https://www.freepik.com/vectors/technology Technology vector created by rawpixel.com - www.freepik.com"
          />
          <ProjectTile
            title="Combines music metadata with streaming using Discogs and SoundCloud"
            header="fig."
            github="https://github.com/jaycammarano/fig_v02"
            author="Jay Cammarano"
            logo={fig}
            logoAlt="https://www.freepik.com/vectors/background Background vector created by freepik - www.freepik.com"
            link="https://fig-music.herokuapp.com/"
          />
        </div>
        <References />
        <OpenToWork />
      </div>
    </Layout>
  );
};

export default HomePage;
