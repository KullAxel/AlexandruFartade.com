"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContentBox from "./content-box";
import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import useFaviconAnimation from "@/lib/use-favicon-animation";
import { ExternalLink } from "lucide-react";

interface ScrollContainerProps {}

const WORDS = ["Builds Bridges", "Delivers Efficiency", "Innovates with AI", "Automates with Precision", "Earns Trust", "Leads with Knowledge"];

const ScrollContainer = ({}: ScrollContainerProps) => {
  useFaviconAnimation();
  const [activeContentBoxIndex, setActiveContentBoxIndex] = useState(0);
  const debouncedActiveContentIndex = useDebounce(activeContentBoxIndex, 300);

  return (
    <div className="relative w-full md:mb-[200px] max-w-screen flex flex-col items-center">
      <div className="relative">
        <div className="sticky z-20 top-[33vh] left-0 pl-4 md:pl-0 translate-x-0 lg:translate-x-[100px] md:translate-x-[130px] max-w-[792px] w-full flex justify-center">
          <div className="flex flex-col md:flex-row gap-1.5 md:gap-4 relative md:-translate-x-[100px] w-full text-[22px] md:text-[32px] font-semibold md:items-baseline items-start left-0 ">
            <div className="flex md:gap-4 gap-1.5 items-baseline">
              Alexandru{" "}
              <span className="opacity-50 text-lg md:text-[22px]">...</span>{" "}
            </div>
            <div className="relative leading-normal h-[22px] md:h-[33px] md:mt-0 mt-1">
              <div>
                <div className="absolute h-full flex whitespace-nowrap top-0 left-0 ">
                  <div>
                    <AnimatePresence initial={false}>
                      {WORDS.map((word, i) => {
                        if (i === activeContentBoxIndex)
                          return (
                            <motion.div
                              className="absolute left-0 top-0  rounded-lg"
                              key={word + i}
                              initial={{
                                x: -20,
                                y: -12,
                                rotate: 0,
                                opacity: 0,
                                scale: 0.95,
                              }}
                              animate={{
                                x: [-10, 6, 0],
                                y: [-6, 4, 0],
                                rotate: 0,
                                scale: 1,
                                opacity: [0, 1, 1, 1, 1],
                                transition: {
                                  ease: "easeInOut",
                                  delay: 0.24,
                                  duration: 0.2,
                                },
                              }}
                              exit={{
                                x: 20,
                                y: -20,
                                rotate: -4,
                                opacity: 0,
                                scale: 0.95,
                                transition: {
                                  ease: "easeInOut",
                                  duration: 0.2,
                                },
                              }}
                            >
                              <div className="absolute origin-center h-full z-0 backdrop-blur-[2px] w-[110%] rounded-full"></div>
                              <div className="text-[20px] md:text-[30px] relative z-10">
                                {word}
                              </div>
                            </motion.div>
                          );
                      })}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="flex min-h-screen flex-col justify-between ">
          <section className="max-w-[792px] w-full mt-[35vh] relative">
            <div className="h-full right-0 top-0 absolute w-[12%] bg-gradient-to-l  dark:from-zinc-900 from-whiteout to-transparent z-20" />
            <ul>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={0}
                artboard="AWARE"
                riveSource="/rive/main.riv"
                riveStateMachine="1"
                keywords={["Network Architecture", "IT Consulting", "Cost Reduction"]}
              >
                <p className="text-lg leading-normal md:text-[22px] max-w-[420px] dark:text-zinc-100/50 text-blackout/50 font-medium">I deliver enterprise-level IT expertise to growing businesses, bridging the gap between <span className="dark:text-zinc-100 text-blackout">complex needs</span> and <span className="dark:text-zinc-100 text-blackout">affordable solutions</span>.</p>
              </ContentBox>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={1}
                artboard="CUTTING EDGE"
                riveSource="/rive/main.riv"
                riveStateMachine="2"
                keywords={["Nationwide IT Support", "Vendor Management", "Project Deployment"]}
              >
                <p className="text-lg leading-normal md:text-[22px] max-w-[450px] dark:text-zinc-100/50 text-blackout/50 font-medium">My company, <span className="dark:text-zinc-100 text-blackout"><a href="https://www.it-technicians.com" target="_blank">it-technicians.com</a></span>, cuts out the middleman, deploying expert IT support across the USA and saving businesses <span className="dark:text-zinc-100 text-blackout">40-50%</span>.</p>
              </ContentBox>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={2}
                artboard="PROFICIENT"
                riveSource="/rive/main.riv"
                riveStateMachine="3"
                keywords={["AI Systems Integration", "NVIDIA Certified", "Google Cloud Certified"]}
              >
                <p className="text-lg leading-normal md:text-[22px] max-w-[500px] dark:text-zinc-100/50 text-blackout/50 font-medium">I'm now bringing the <span className="dark:text-zinc-100 text-blackout">power of AI</span> to your local systems. With new certifications in Generative AI and Machine Learning, I build <span className="dark:text-zinc-100 text-blackout">custom</span>, private AI solutions.</p>
              </ContentBox>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={3}
                artboard="DARING"
                riveSource="/rive/main.riv"
                riveStateMachine="4"
                keywords={["Data Privacy Solutions", "Local LLMs", "Legal Tech", "Medical Tech"]}
              >
                <p className="text-lg leading-normal md:text-[22px] max-w-[500px] dark:text-zinc-100/50 text-blackout/50 font-medium">Introducing <span className="dark:text-zinc-100 text-blackout">Local AI Assist</span>: On-premise AI servers designed for lawyers and physicians to streamline paperwork and analyze data while ensuring 100% data privacy and compliance.</p>
              </ContentBox>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={4}
                artboard="AWARE"
                riveSource="/rive/main.riv"
                riveStateMachine="1"
                keywords={["Enterprise Clients", "Proven Expertise", "Emergency IT Support"]}
              >
                <p className="text-lg leading-normal md:text-[22px] max-w-[500px] dark:text-zinc-100/50 text-blackout/50 font-medium">My engineering skills turned major companies like <span className="dark:text-zinc-100 text-blackout">Presidio, Cisco, and Hilton</span> into clients of <span className="dark:text-zinc-100 text-blackout">it-technicians.com</span>, trusting us for critical support and complex deployments.</p>
              </ContentBox>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={5}
                artboard="CUTTING EDGE"
                riveSource="/rive/main.riv"
                riveStateMachine="2"
                keywords={["Certifications", "Continuous Learning", "Technical Expertise"]}
              >
                <p className="text-lg leading-normal md:text-[22px] max-w-[500px] dark:text-zinc-100/50 text-blackout/50 font-medium">Certified and experienced: From <span className="dark:text-zinc-100 text-blackout">CCNP & CCNA</span> in networking to the latest in <span className="dark:text-zinc-100 text-blackout">Google Cloud Machine Learning</span> and <span className="dark:text-zinc-100 text-blackout">NVIDIA Generative AI</span>.</p>
              </ContentBox>
            </ul>
          </section>
        </main>
      </div>
      <div className="">
        <div className="bg-gradient-to-t w-full h-40 from-whiteout dark:from-zinc-900 dark:via-zinc-900 via-whiteout to-transparent absolute left-0 bottom-0 z-30" />
      </div>
    </div>
  );
};

export default ScrollContainer;