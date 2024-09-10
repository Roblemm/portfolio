import { faDiscord, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Instagram, SportsEsports, WebAsset } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';

import React from 'react';

// Sample project data with dates and bullet points
const projects = [
    {
        title: 'ForestlyGames - Founder & Project Manager',
        startDate: 'January 2020',
        endDate: 'Present',
        description: 'I Oversee Projects and Budgets, Negotiate Investor and Developer Contracts, Hire and Onboard Developers, Reach Out to and Collaborate with Content Creators, Run Advertisement Campaigns, Execute Promotional Campaigns such as Giveaways to Reach New Customers, Plan and Run Evenets, Managed Pricing Strategies, and Manage Social Media Accounts',
        bulletPoints: [
            'Delivered 6 successful game projects by implementing Agile Scrum project management methodology',
            'Achieved 78,000,000+ plays and YouTube views by planning and executing marketing strategies',
            'Enhanced project visibility and reach by networking and collaborating with 30+ Content Creators resulting in a project reaching #1 trending on Youtube Gaming',
            'Maintained a 90% customer satisfaction rating by prioritizing customer service and clear communication',
            'Grew a community of 4,000 members by organizing and leading engaging events',
            'Cultivated strong investor relationships by delivering data- driven reports, resulting in increased investor interest in future projects',
            'Ran targeted advertisment campaigns that resulted in a 100%+ ROI',
        ],
        images: ['evilpets.png', 'icon.png', 'uv2.png', 'Trub.png', 'BossBattlesThumbnail.png'], // Example images
        image: 'ForestlyGames.png',
        buttons: [
            {
                text: (<><WebAsset/> Visit Website</>),
                href: 'https://www.forestlygames.com',
            },
            {
                text: (<>View <XIcon fontSize="small" /> Account</>),
                href: 'https://x.com/roempires',
            },
            {
                text: (<><Instagram /> Visit Instagram</>),
                href: 'https://instagram.com/ForestlyGames',
            },
            {
                text: (<><FontAwesomeIcon icon={faTiktok}/> Visit TikTok</>),
                href: 'https://instagram.com/ForestlyGames',
            },
            {
                text: (<><FontAwesomeIcon icon={faDiscord} /> Visit Discord</>),
                href: 'https://discord.gg/ForestlyGames',
            },
        ]
    },
    {
        title: 'ForestlyDevs - Founder and Manager',
        startDate: 'July 2020',
        endDate: 'Present',
        description: 'Consulting and Community Management',
        bulletPoints: [
            'Expanded developer network for clients by onboarding and coaching 100 new developers to the platform, resulting in 40 new projects within a month',
            'Expanded user base to 1,200 clients and developers by providing effective and prompt customer service',
            'Connected users with over 8,500 investment opportunities, portfolios, and job postings by building and maintaining a user-friendly platform to directly connect with businesses and individuals',
            'Developed and implemented user onboarding process, resulting in over a 500% increase in client engagement over the following week',
        ],
        image: 'ForestlyDevs.png',
        buttons: [
            {
                text: (<><FontAwesomeIcon icon={faDiscord} /> Visit Discord</>),
                href: 'https://discord.gg/3vBBTmVnxY',
            },
        ],
    },
    {
        "title": "Purdue Dining Revamp",
        "startDate": "August 2024",
        "endDate": "Present",
        "description": "Revamping Purdue Dining services by analyzing consumer feedback, designing targeted marketing campaigns, and leading collaborative efforts with administration to enhance the dining app experience.",
        "bulletPoints": [
            "Designed and distributed promotional materials across social media, generating 80+ form submissions and engagement within 24 hours.",
            "Conducted consumer surveys to identify issues with the Purdue dining app, analyzing data to inform improvements.",
            "Coordinated and led meetings with Purdue administration to present data analytics, providing actionable insights.",
            "Led a team to develop and implement marketing strategies, enhancing communication and outreach efforts."
        ],
        image: 'purduedining.png',
    },
    {
        title: 'Project Ignite - Cofounder',
        startDate: 'August 2024',
        endDate: 'Present',
        description: "Project Ignite is an intercollegiate club that connects college students across various universities for collaboration on tech and creative projects. Through events, workshops, and networking opportunities, Project Ignite provides a platform for students to exchange ideas, form partnerships, and build meaningful projects together. The club's mission is to ignite creativity, collaboration, and growth.",
        bulletPoints: [
            'Connected college students for collaboration on tech and creative projects',
            'Fostered partnerships with campus organizations to expand the club’s network and resources',
            'Contributed to the marketing strategy, helping decide the brand name, color scheme, and overall identity',

        ],
        image: 'Ignite.png',
    },
    
    {
        title: 'PointProfits',
        startDate: 'December 2020',
        endDate: 'July 2021',
        description: 'Created Content and Managed Social Media Accounts',
        bulletPoints: [
            'Produced daily social media content across multiple platforms',
            'Analyzed audience engagement metrics to optimize post timing',
            'Designed the color scheme and branding for PointProfits, ensuring visual consistency across all platforms',
            'Developed custom graphics and branding assets for social media posts',
            'Enhanced brand identity by selecting cohesive fonts, color palettes, and logo designs',
        ],
        images: ['PP-Go.png', 'PP-Rich.png', 'PP-Intention.jpg', 'PP-Love.png', 'PP-Progress.png', 'PP-Achievement.png'], // No images, grid won't render
        image: 'Point Profits Logo New.png',
        buttons: [
            {
                text: (<>View <XIcon fontSize="small" /> Account</>),
                href: 'https://x.com/PointProfits',
            },
            {
                text: (<><Instagram /> Visit Instagram</>),
                href: 'https://instagram.com/PointProfits',
            },
        ]
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

function Business() {
    return (
        <div className="p-8">
            <div className="bg-sky-950 rounded-md">
                <div className="mb-7 p-5 border border-sky-950 border-8 rounded-lg bg-sky-900 shadow-lg">
                    <h1 className="text-center text-sky-200 font-bold text-5xl mb-7 hover:animate-pulse">
                        Business and Marketing
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

export default Business;
