import { faDiscord, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Instagram, SportsEsports, WebAsset } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';

import React from 'react';

// Sample project data with dates and bullet points
const projects = [
  {
    "title": "In Development",
    "startDate": "Present",
    "endDate": "Present",
    "description": "Please view my github to see my technical projects",
    "bulletPoints": [
    ],
    image: 'MultiSurvival.png',
    images: ['risengrindicon.png','purduedining.png'],
    buttons: [
      {
        text: (<><FontAwesomeIcon icon={faGithub} /> Visit Github</>),
        href: 'https://github.com/Roblemm',
      },
    ],
  },

];

// Turn images names into required images
projects.forEach(project => {
  if (project.images) {
    project.images = project.images.map(image => require(`../assets/images/${image}`));
  }
});
projects.forEach(project => {
  if (project.image) {
    project.image = require(`../assets/images/${project.image}`);
  }
});

function Button({ info }: any) {
  return (
    <div className="flex items-center justify-center transition hover:scale-105 px-5 py-3 mx-5 rounded-md bg-sky-950 text-sky-200 hover:bg-slate-800 hover:text-sky-100 transition-all duration-200">
      <a href={info.href} target="_blank" rel="noopener noreferrer" className="w-full text-center">
        {info.text}
      </a>
    </div>
  );
}

function Development() {
  return (
    <div className="p-8">
      <div className="bg-sky-950 rounded-md">
        <div className="mb-7 p-5 border border-sky-950 border-8 rounded-lg bg-sky-900 shadow-lg">
          <h1 className="text-center text-sky-200 font-bold text-5xl mb-7 hover:animate-pulse">
            Development and Technology
          </h1>
        </div>

        {/* Projects section */}
        <div className="space-y-8 pb-4 border border-8 border-sky-950">
          {projects.map((project, index) => (
            <div className={`p-5 w-11/12 bg-sky-900 ${index % 2 === 0 ? 'rounded-r-lg mr-auto' : 'rounded-l-lg ml-auto'}`}>
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-3 items-center  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
              >
                {/* Project Content */}
                <div className="w-full col-span-2">
                  <h2 className="text-3xl text-sky-100 font-bold mb-2">{project.title}</h2>
                  <p className="text-sky-100">{project.startDate} - {project.endDate}</p>
                  <p className="text-sky-200">{project.description}</p>
                  <ul className="list-disc pl-10 text-sky-100">
                    {project.bulletPoints.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                {/* Project Image */}
                <div className={`w-full p-4 ${index % 2 === 0 ? 'pr-0' : 'pl-0'}`}>
                  <div className="w-full h-80  rounded-md transition hover:scale-105">
                    {
                      project.image ? <img src={project.image} alt={project.title} className="rounded-xl h-full mx-auto aspect-square object-cover" /> : ''
                    }

                  </div>
                </div>

              </div>

              {/* Project Buttons */}
              {project.buttons && project.buttons.length > 0 && (
                <div className={`mt-2 grid gap-4 grid-cols-1 sm:grid-cols-${Math.min(project.buttons.length, 2)} lg:grid-cols-${Math.min(10, project.buttons.length)}`}>
                  {project.buttons.map((button, index) => <Button key={index} info={button} />)}
                </div>
              )}

              {/* Project Images Grid */}
              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="w-full h-80 transition hover:scale-105 overflow-hidden">
                      <img src={image} alt={project.title} className="h-full rounded-xl mx-auto aspect-square object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>


          ))}
        </div>
      </div>
    </div>
  );
}

export default Development;
