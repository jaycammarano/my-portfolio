import React from 'react';

const Bio = () => {
  return (
    <div id="experience" className="m-4 mb-24 border-2 border-green-400">
      <div className="border-b-2 border-green-400 ">
        <h2 className="my-4 text-5xl text-center">Experience:</h2>
      </div>
      <div className="border-t-2 border-green-400 ">
        <div className="w-full px-4 m-4 my-8 sm:w-full md:w-2/3">
          <h3 className="my-2 text-3xl text-bold">Present:</h3>
          <h4 className="text-xl ">
            <strong className="text-green-400">
              Information Systems Assistant I (Web Developer Intern)
            </strong>
          </h4>
          <p className="pb-3 text-xl font-light">
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
        <div className="w-full m-4 my-8 border-green-400 sm:w-full md:w-2/3">
          <h2 className="my-2 text-3xl">Past:</h2>
          <h4 className="pb-2 text-xl ">
            <strong className="text-green-400">Web Developer</strong>
          </h4>
          <p className="pb-3 text-xl font-light">
            <u>Take C4re | May 2021</u>
          </p>
          <p className="font-light">
            In a one week sprint, I created a Squarespace website that
            incorporated custom code for image mapping and light boxes.
          </p>
          <p className="font-light">
            - Created image mapping that scales with window resizing
          </p>
          <p className="font-light">
            - Created lightbox that allowed all html elements
          </p>
          <h4 className="pb-2 mt-6 text-xl ">
            <strong className="text-green-400">
              Apprentice Full-Stack Developer
            </strong>
          </h4>
          <p className="pb-3 text-xl font-light">
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
