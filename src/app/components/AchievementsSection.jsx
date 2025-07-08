'use client'
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedTextNumbers = dynamic(() => { return import("react-animated-numbers") }, { ssr: false })

const achievementsList = [
    {
        metric: "Projects",
        value: "100",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100,000",
    },
    {
        metric: "Awards",
        value: "7",
    },
    {
        metric: "Years",
        value: "5",
    },
];

const AchievementsSection = () => {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between'>
                {
                    achievementsList.map((achievementsList, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center justify-center mx-4'>
                                <h2 className='text-white text-4xl font-bold'>

                                    <AnimatedTextNumbers
                                        includeComma
                                        animateToNumber={parseInt(achievementsList.value)}
                                        locale="en-US"
                                        className='text-white text-4xl front-bold'
                                        config={((_, index) => {
                                            return {
                                                mass: 1,
                                                friction: 100,
                                                tensions: 140 * (index + 1)

                                            }
                                        })}
                                    ></AnimatedTextNumbers>

                                </h2>
                                <p className='text-[#ADB7BE] text-base'>
                                    {achievementsList.metric}
                                </p>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AchievementsSection