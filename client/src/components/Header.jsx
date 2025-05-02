import { useState } from "react";
import Navbar from "./Navbar.jsx";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 lef t-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-background-light dark:from-background-dark to-transparent">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,auto_auto] gap-4">
                <h1>
                    <a href="/" className="logo">
                        <img src="/images/logo.svg" alt="Ahmad Saghir" width={40} height={40} />
                    </a>
                </h1>
                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                        <span className="material-symbols-rounded">{navOpen ? 'close' : 'menu'}</span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                <ThemeToggle />
                <a href="#contact" className="btn btn-secondary max-md:hidden">
                    Contact me
                </a>
            </div>
        </header>
    );
}

export default Header;