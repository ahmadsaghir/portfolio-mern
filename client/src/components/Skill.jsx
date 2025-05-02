// Skill.jsx
import SkillCard from "./SkillCard"

const skillItem = [
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        label: 'HTML',
        desc: 'Markup Language'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        label: 'PHP',
        desc: 'Backend Language'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
        label: 'Laravel',
        desc: 'PHP Framework'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
        label: 'WordPress',
        desc: 'CMS Platform'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg',
        label: 'WooCommerce',
        desc: 'eCommerce Plugin'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        label: 'Python',
        desc: 'Programming Language'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        label: 'SQL',
        desc: 'Database'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        label: 'Bootstrap',
        desc: 'CSS Framework'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        label: 'Git',
        desc: 'Version Control'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        label: 'GitHub',
        desc: 'Code Platform'
    },
    {
        imgSrc: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
        label: 'Shopify',
        desc: 'eCommerce Platform'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg',
        label: 'Postman',
        desc: 'API Testing'
    },
    {
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
        label: 'Notion',
        desc: 'Project Management'
    }
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>
                <p className="text-[rgb(var(--zinc400))] mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc}, key) =>(
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Skill;