
const aboutItems = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of experience',
        number: 5
    }
];

const About = () => {
    return (
        <section id='about' className="section">
            <div className="container">
                <div className="bg-[rgb(var(--zinc800)/0.5)] p-7 rounded-2xl  md:p-12 reveal-up">
                    <p className="text-[rgb(var(--zinc300))] mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Ahmad, a professional web developer passionate about creating visually stunning and highly functional websites. Combining creativity and technical expertise, I bring your vision to life, delivering digital experiences that excel in design and performance.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-[rgb(var(--zinc300))]">{label}</p>
                                </div>
                            ))
                        }
                        <img
                            src="/images/logo.svg"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px] logo-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;