import React from 'react';

const OpenToWork = () => {
  return (
    <div id="otw" className="m-4 mb-24 border-2 border-green-400">
      <div className="border-b-2 border-green-400 ">
        <h2 className="my-4 text-5xl text-center">Open To Work:</h2>
      </div>

      <div className="w-full px-4 m-4 my-8 sm:w-full md:w-2/3">
        <h2 className="my-2 text-3xl">Looking For:</h2>
        <h4 className="text-xl ">
          <strong className="leading-loose text-green-400">
            Fullstack / Frontend / Backend Positions
          </strong>
        </h4>
        <p className="pb-3 text-xl font-light">
          <u></u>
        </p>
        <p className="font-light">
          I’m looking for a position where I can grow my technical skills while
          building interpersonal relationships. I value diverse teams and
          supportive environments where we can learn and grow from each other.
        </p>
      </div>
    </div>
  );
};

export default OpenToWork;
