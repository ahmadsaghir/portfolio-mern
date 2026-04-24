import {ButtonPrimary, ButtonOutline} from "./Button.jsx";

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36 relative">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-11 h-11 rounded-xl ring-1 ring-[rgb(var(--zinc50))]/10">
                            <img src="./images/avatar-1.jpg"
                                 width={44}
                                 height={44}
                                 alt="Ahmad Saghir portrait"
                                 className="img-cover"/>
                        </figure>
                        <div className="flex items-center gap-2 text-[rgb(var(--zinc300))] text-sm tracking-wide px-3 py-1.5 bg-[rgb(var(--zinc800))] rounded-full ring-1 ring-[rgb(var(--zinc50))]/5">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    <div>
                        <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch]">
                            Building Scalable Modern Websites for the Future
                        </h2>
                        <p className="text-[rgb(var(--zinc300))] text-lg mt-4 max-w-[50ch]">
                            Crafting elegant solutions with cutting-edge technologies to bring your digital vision to life.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            href="/Ahmad-Saghir-CV.pdf"
                            label="Download CV"
                            icon="download"
                            target="_blank"
                        />
                        <ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className="hidden lg:block relative mt-10 lg:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 to-transparent rounded-[60px] blur-3xl"></div>
                    <figure className="relative w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden ring-1 ring-[rgb(var(--zinc50))]/10 shadow-2xl">
                        <img src="./images/hero-banner.png"
                             width={656}
                             height={800}
                             alt="Ahmad Saghir"
                             className="w-full"/>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Hero;