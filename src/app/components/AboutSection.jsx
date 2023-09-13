"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Spring Data</li>
                <li>Spring Security</li>
                <li>MySQL</li>
            </ul>
        )
    },
    {
        title: "Tools",
        id: "tools",
        content: (
            <ul className='list-disc pl-2'>
                <li>IntelliJ IDEA</li>
                <li>Git</li>
                <li>MySQL Server</li>
                <li>Docker</li>
                <li>HeidiSQL</li>
                <li>Gerrit</li>
            </ul>
        )
    },
    {
        title: "Companies",
        id: "companies",
        content: (
            <ul className='list-disc pl-2'>
                <li>Altran (Software Engineer / Developer)</li>
                <li>Capgemini (Software Engineer / Developer)</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white' id="about">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about.png" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a Backend Java Developer
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active ={tab === "skills"}>
                                {" "}
                                Skills
                                {" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("tools")} 
                            active ={tab === "tools"}>
                                {" "}
                                Tools
                                {" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("companies")} 
                            active ={tab === "companies"}>
                                {" "}
                                Companies
                                {" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection