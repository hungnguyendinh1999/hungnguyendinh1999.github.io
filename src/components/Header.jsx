import React, { useState, useRef, useEffect } from "react";

const RESPONSIVE_WIDTH = 1024;

function Header() {
    const [isCollapsed, setIsCollapsed] = useState(
        window.innerWidth < RESPONSIVE_WIDTH
    );
    const collapseRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleHeader = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleClickOutside = (e) => {
        if (
            collapseRef.current &&
            !collapseRef.current.contains(e.target) &&
            !buttonRef.current.contains(e.target)
        ) {
            setIsCollapsed(true);
        }
    };

    const handleResize = () => {
        if (window.innerWidth > RESPONSIVE_WIDTH) {
            collapseRef.current.style.width = "";
        } else {
            setIsCollapsed(true);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        if (!isCollapsed) {
            setTimeout(
                () => window.addEventListener("click", handleClickOutside),
                1
            );
        } else {
            window.removeEventListener("click", handleClickOutside);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("click", handleClickOutside);
        };
    }, [isCollapsed]);

    return (
        <header className="absolute top-0 z-20 flex h-[60px] w-full bg-opacity-0 px-[5%] lg:justify-around max-lg:mr-auto max-lg:px-4">
            <a className="h-[50px] p-[4px] text-2xl font-medium" href="#">
                Hưng Nguyễn
            </a>

            <div
                ref={collapseRef}
                className={`collapsible-header animated-collapse max-lg:shadow-md transition-all duration-300 ease-in-out ${
                    isCollapsed ? "opacity-0 w-0" : "opacity-100 w-[60vw]"
                }`}
            >
                <div className="flex h-full w-max gap-5 text-base text-black max-lg:mt-[30px] max-lg:flex-col max-lg:items-end max-lg:gap-5 lg:mx-auto lg:items-center">
                    <a className="header-links" href="#about">
                        About Me
                    </a>
                    <a className="header-links" href="#projects">
                        Work
                    </a>
                    <a className="header-links" href="#contact">
                        Contact
                    </a>
                </div>
            </div>

            <button
                ref={buttonRef}
                onClick={toggleHeader}
                className={`bi ${
                    isCollapsed ? "bi-list" : "bi-x"
                } absolute right-3 top-3 z-50 text-3xl text-black lg:hidden`}
                aria-label="menu"
            ></button>
        </header>
    );
}

export default Header;
