import React from 'react'

const ProjectTag = ({ name, onClick, ísSelected }) => {
    const buttonStyle = ísSelected ? "text-white bg-purple-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button
            className={`${buttonStyle} rounded-full border-2 border-purple-500 px-6 py-6 text-xl cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag