import ProjectCard from "./ProjectCard.jsx";

const works = [
    {
        imgSrc: '/images/project-1.jpg',
        title: 'Hospital Automation',
        tags: ['CRUD', 'Development'],
        projectLink: 'https://github.com/ahmadsaghir/hospital-automation'
    },
    {
        imgSrc: '/images/project-2.jpg',
        title: 'Weather Forecast',
        tags: ['Development', 'API', '7Timer'],
        projectLink: 'https://ahmadsaghir.github.io/weather-forecast/'
    },
    {
        imgSrc: '/images/project-3.jpg',
        title: 'Blog',
        tags: ['CMS', 'Authentication'],
        projectLink: 'https://github.com/ahmadsaghir/Blog'
    },
    {
        imgSrc: '/images/project-4.jpg',
        title: 'Tasks Management',
        tags: ['Web-app', 'CRUD', 'MERN'],
        projectLink: 'https://github.com/ahmadsaghir/task-management-app'
    },
    {
        imgSrc: '/images/project-5.jpg',
        title: 'Portfolio',
        tags: ['MERN', 'Development'],
        projectLink: 'https://github.com/ahmadsaghir/portfolio-mern'
    },
];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Work;