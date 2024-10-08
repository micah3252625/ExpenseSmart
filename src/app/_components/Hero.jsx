import React from 'react'
import {ContainerScroll} from "@/components/ui/container-scroll-animation";
import Image from "next/image"

const Hero = () => {
    return (
        <section className="bg-gray-50 flex items-center flex-col">
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Manage your Money and Expenses with AI-Driven Personal <br/>
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">Financial Advisor</span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src="/desktop.webp"
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />

                </ContainerScroll>
            </div>
        </section>
    )
}
export default Hero
