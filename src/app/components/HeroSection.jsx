"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className= "text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="bg-clip-text">
                        Hello, I'm Tiago{" "}
                    </span>
                    <br></br>
                    <span className='text-3xl sm:text-4xl lg:text-5xl'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Java Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Spring',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    I am a Java Developer with a passion for solving problems.
                    I am a quick learner, problem solver, teamworker, leader when i get confortable with the team.
                </p>
                <div className='social flex flex-row gap-3'>
                    <Link href="https://github.com/Peyroteo">
                        <Image 
                        src="/images/github-icon.svg"
                        alt='github icon'
                        width={50}
                        height={50}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/tiago-gon%C3%A7alves-4b7799177/">
                        <Image 
                        src="/images/linkedin-icon.svg"
                        alt='linkedin icon'
                        width={50}
                        height={50}
                        />
                    </Link>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[350px] h-[350px] relative">
                    <Image
                        src="/images/pc.png"
                        alt='pc image'
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection