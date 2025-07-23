import React from "react";
import defaultImg from "../assets/images/default.png"

function ProjectCard({ title, image, description, tags }) {
    return (
        <div className="flex h-fit w-[450px] break-inside-avoid flex-col gap-2 rounded-lg bg-[#f3f3f3b4] p-4 shadow-lg max-lg:w-full max-lg:max-w-[400px]">
            <div className="h-[300px] w-full overflow-hidden rounded-lg">
                <img
                    src={image ? image : defaultImg}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="text-gray-600">{description}</p>

                <div className="mt-2 flex flex-wrap gap-2">
                    {tags.topics.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-1 flex flex-wrap gap-2">
                    {tags.tech.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-blue-700 hover:underline"
                >
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
