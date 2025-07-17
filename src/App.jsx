// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import "./App.css";

function App() {
    return (
        <div>
            <div className="flex min-h-screen flex-col bg-white font-mono">
                <header className="absolute top-0 z-20 flex h-[60px] w-full bg-opacity-0 px-[5%] lg:justify-around max-lg:mr-auto max-lg:px-4">
                    <a
                        className="h-[50px] p-[4px] text-2xl font-medium"
                        href=""
                    >
                        Hung Nguyen
                    </a>

                    <div
                        className="collapsible-header animated-collapse max-lg:shadow-md"
                        id="collapsed-header-items"
                    >
                        <div className="flex h-full w-max gap-5 text-base text-black max-lg:mt-[30px] max-lg:flex-col max-lg:items-end max-lg:gap-5 lg:mx-auto lg:items-center">
                            <a className="header-links" href="">
                                About Me
                            </a>
                            <a className="header-links" href="#pricing">
                                Work
                            </a>
                            <a className="header-links" href="">
                                Blog
                            </a>
                            <a className="header-links" href="">
                                Contact me
                            </a>
                        </div>

                        <div className="mx-4 flex items-center gap-[20px] text-base max-md:w-full max-md:flex-col max-md:justify-center">
                            <a
                                href="https://tally.so/r/woO0Kx"
                                aria-label="signup"
                                className="flex h-[40px] items-center gap-2 rounded-full bg-black p-1 pl-4 text-white"
                            >
                                <span>Get in touch</span>
                                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white font-semibold text-black">
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>

                    <button
                        className="bi bi-list absolute right-3 top-3 z-50 text-3xl text-black lg:hidden"
                        aria-label="menu"
                        id="collapse-btn"
                        onClick={() => {
                            // Optional: toggle collapsible nav
                        }}
                    ></button>
                </header>
                {/* HERO component */}
                <Hero />
                <Projects />
                <div className="bg-blue-100 text-center text-2xl p-4 rounded-md shadow">
                    Remember to credit PaulleDemon's <a href="https://github.com/PaulleDemon/awesome-landing-pages/tree/main/src/portfolio/Jamie-portfolio">portfolio template</a>.
                </div>
            </div>
        </div>
    );
}

export default App;
