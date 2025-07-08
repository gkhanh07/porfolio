import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div className="group cursor-pointer">

            <div className="relative overflow-hidden rounded-xl bg-[#181818] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">

                <div
                    className="h-52 md:h-72 rounded-t-xl relative overflow-hidden"
                    style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


                    <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm flex transition-all duration-500 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100">
                        {/* Git Link */}
                        <Link
                            href={gitUrl}
                            className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-purple-400 group/link transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-purple-400/50"
                        >
                            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-purple-400 transition-colors duration-300" />
                        </Link>


                        <Link
                            href={previewUrl}
                            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-pink-400 group/link transition-all duration-300 transform hover:scale-110 hover:-rotate-12 hover:shadow-lg hover:shadow-pink-400/50"
                        >
                            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-pink-400 transition-colors duration-300" />
                        </Link>
                    </div>


                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-purple-400/0 group-hover:border-purple-400/60 transition-all duration-500"></div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-pink-400/0 group-hover:border-pink-400/60 transition-all duration-700"></div>
                </div>


                <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>


                    <div className="relative z-10">
                        <h5 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                            {title}
                        </h5>
                        <p className="text-[#ADB7BE] group-hover:text-gray-300 transition-colors duration-500 transform group-hover:translate-x-1">
                            {description}
                        </p>
                    </div>


                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>

                <div className="absolute inset-0 -top-4 -bottom-4 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out pointer-events-none"></div>
            </div>
        </div>
    );
};

export default ProjectCard;