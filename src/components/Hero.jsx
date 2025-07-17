import React from "react";

function Hero() {
  return (
    <section className="relative flex min-h-[100vh] w-full max-w-[100vw] flex-col overflow-hidden max-lg:p-4 max-md:mt-[50px]">
      <div className="flex h-full min-h-[100vh] w-full justify-center gap-6 p-[5%] max-xl:items-center max-lg:flex-col">
        {/* Left: Text */}
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap text-7xl font-semibold uppercase leading-[85px] max-lg:text-4xl max-md:leading-snug">
            <span className="bg-green-200 p-1 px-6">Hung</span>
            <br />
            <span>Data & Software Engineer</span>
          </div>

          <div className="mt-2 max-w-[450px] p-2 text-justify max-lg:max-w-full">
            Aspire to be an AI expert
          </div>

          <div className="mt-4 flex items-center gap-4 overflow-hidden p-2">
            <a
              href="https://tally.so/r/woO0Kx"
              aria-label="signup"
              className="flex h-[40px] items-center gap-2 rounded-full border border-black bg-white p-1 pl-4 text-black transition-colors duration-500 hover:bg-black hover:text-white"
            >
              <span>Get in touch</span>
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black font-semibold text-white">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex w-full max-w-[50%] items-center justify-center overflow-hidden max-lg:max-w-none">
          <div className="relative flex max-h-[580px] min-h-[450px] min-w-[350px] max-w-[650px] overflow-hidden max-lg:h-fit max-lg:max-h-[320px] max-lg:min-h-[180px] max-lg:w-[320px] max-lg:min-w-[320px]">
            <img
              src="/assets/images/home/man.jpg"
              alt="app"
              className="z-[1] h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
