import React from 'react';

const Bio = () => {
  return (
    <div id="experience" className="m-4 mb-24 border-2 border-green-400">
      <div className=" border-green-400 border-b-2">
        <h2 className="text-5xl text-center my-4">Experience:</h2>
      </div>
      <div className=" w-full sm:w-full md:w-2/3 px-4 m-4 my-8 ">
        <h2 className="text-3xl my-2">Future:</h2>
        <h4 className=" text-xl">
          <strong className="text-green-400 leading-loose">Open To Work</strong>
        </h4>
        <p className="text-xl font-light pb-3">
          <u>Looking For Fullstack / Frontend / Backend Positions</u>
        </p>
        <p className="font-light">
          I’m looking for a position where I can grow my technical skills while
          building interpersonal relationships. I value diverse teams and
          supportive environments where we can learn and grow from each other.
        </p>
      </div>
      <div className=" border-green-400 border-t-2">
        <div className="w-full sm:w-full md:w-2/3  px-4 m-4 my-8">
          <h3 className="text-3xl my-2 text-bold">Present:</h3>
          <h4 className=" text-xl">
            <strong className="text-green-400 leading-loose">
              Information Systems Assistant I (Web Developer Intern)
            </strong>
          </h4>
          <p className="text-xl font-light pb-3">
            <u>Woods Hole Oceanographic Institution | March 2021 - Present</u>
          </p>
          <p className="font-light">
            Currently, I am interning at Woods Hole Oceanographic Institute
            creating a systems status page for their Oceanographic Observatory
            Initiative. Designed and developed using WordPress and Django. This
            page dynamically updates with data pulled from external and internal
            APIs.
          </p>
          <p className="font-light">
            - Advanced an established design pattern through the use of custom
            CSS and JavaScript
          </p>
          <p className="font-light">
            - Trained other members of the team on how to use and update the
            page
          </p>
        </div>
      </div>
      <div className="px-4 border-t-2 border-green-400">
        <div className="w-full sm:w-full md:w-2/3  m-4 my-8 border-green-400">
          <h2 className="text-3xl my-2">Past:</h2>
          <h4 className=" text-xl">
            <strong className="text-green-400 leading-loose">
              Apprentice Full-Stack Developer
            </strong>
          </h4>
          <p className="text-xl font-light pb-3">
            <u>Launch Academy | April 2020 - August 2020</u>
          </p>
          <p className="font-light">
            Completed an intensive boot camp with a focus on pair programming,
            collaborative development, test-driven development, and programming
            concepts to allow creative development within an MVC framework. This
            program required fast, on-the-job learning and transitioned between
            Ruby and JavaScript from week to week.
            <p className="font-light">
              - Achieved organization across team members by using agile
              techniques such as kanban and version control with git and GitHub.
            </p>
            <p className="font-light">
              - Met deadlines for completion of a group project and a capstone
              project
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
