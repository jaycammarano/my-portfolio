import React from 'react';
import Layout from '../Layout/Layout';
import ProjectTile from '../lib/ProjectTile';
import '../../assets/css/homepage.css';
const HomePage = () => {
  return (
    <Layout>
      <div className="m-2 font-bold text-white">
        <div className="m-4 text-7xl">Jay Cammarano</div>
        <div className="flex flex-row">
          <div className="px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2">
            Experience
          </div>
          <div className="px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2">
            Projects
          </div>
          <div className="px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300">
            References
          </div>
        </div>
        <div>
          <div className="m-4 mt-8">
            <strong className="m-2">Filter by </strong>
            <input
              className="px-4 py-1 bg-gray-700 rounded focus:border-2 focus:border-green-400 focus:bg-black"
              value="Search Tags"
            />
          </div>
        </div>
        <div>
          <ProjectTile
            title="React app that suggests music based on the weather"
            header="Bear-O-Metric Radio"
            author="Jay Cammarano, Will Campbell, Maria Shkolnik"
            logo=""
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
