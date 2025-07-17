import React from "react";

function Projects() {
  return (
    <section className="relative flex min-h-[100vh] w-full max-w-[100vw] flex-col items-center overflow-hidden p-6 py-5">
      <h3 className="text-6xl font-medium max-lg:text-3xl">Projects</h3>
      <div className="my-4 h-[1px] w-[80%] bg-black"></div>

      <div className="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3">
        {/* Project Cards */}
        {[
          {
            title: "Lorem",
            image: "/assets/images/home/design.jpg",
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero.",
          },
          {
            title: "Fortune 500",
            image: "/assets/images/home/editing.jpg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum unde voluptatibus fuga soluta consequuntur!",
          },
          {
            title: "Apple",
            image: "/assets/images/home/photography.jpg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem, optio totam perspiciatis...",
          },
          {
            title: "Amazon",
            image: "/assets/images/home/forest.jpg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, tempora.",
          },
          {
            title: "Ipsum",
            image: "/assets/images/home/mountain.jpg",
            description:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, voluptates.",
          },
          {
            title: "Google",
            image: "/assets/images/home/mountain.jpg",
            description:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, voluptates.",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="flex h-fit w-[450px] break-inside-avoid flex-col gap-2 rounded-lg bg-[#f3f3f3b4] p-4 shadow-lg max-lg:w-full max-lg:max-w-[400px]"
          >
            <div className="flex items-center gap-3">
              <div className="h-[300px] w-full overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-blue-700 hover:underline">
                <span>Learn more</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
