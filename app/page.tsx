'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Github, MapPin, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'] })

export default function Home() {
    const { scrollYProgress, scrollY } = useScroll()
    const firstName = "PHILIPPE"
    const lastName = "CUTILLAS"
    const [showHeader, setShowHeader] = React.useState(false)
    const [backgroundLoaded, setBackgroundLoaded] = React.useState(false)

    // Parallax effect for background
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 300])

    React.useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest: number) => {
            setShowHeader(latest > 600)
        })
        return () => unsubscribe()
    }, [scrollY])

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Fixed header with name */}
            <motion.header
                className="fixed-header left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm"
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: showHeader ? 0 : -100,
                    opacity: showHeader ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-8 py-4">
                    <div className="flex items-center gap-1">
                        {firstName.split('').map((letter, i) => {
                            const t = i / 7;
                            const r = Math.round(59 + (109 - 59) * t);
                            const g = Math.round(130 + (40 - 130) * t);
                            const b = Math.round(246 + (217 - 246) * t);
                            const gradientColor = `rgb(${r}, ${g}, ${b})`;

                            return (
                                <div key={`header-${i}`} className="flex flex-col items-center">
                                    <span className="text-sm font-bold leading-none">{letter}</span>
                                    <span className="text-sm font-bold leading-none" style={{ color: gradientColor }}>
                                        {lastName[i]}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Full-width progress line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-violet-700"
                    style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
                />
            </motion.header>

            {/* Hero Section */}
            <section className="relative min-h-[100dvh] flex items-center justify-center px-6 py-20 overflow-hidden">
                {/* Background Image with Parallax */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: backgroundY }}
                >
                    <Image
                        src="/background.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                        onLoad={() => setBackgroundLoaded(true)}
                    />
                    {/* Dimming overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                    {/* Fade to black at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#0a0a0a]" />
                </motion.div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    {/* Stacked Name Display */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: backgroundLoaded ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Aligned Letters */}
                        <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 whitespace-nowrap px-4 sm:px-6">
                            {firstName.split('').map((letter, i) => {
                                // Lerp from blue-500 (rgb 59, 130, 246) to violet-700 (rgb 109, 40, 217)
                                const t = i / 7; // normalize position 0-1
                                const r = Math.round(59 + (109 - 59) * t);
                                const g = Math.round(130 + (40 - 130) * t);
                                const b = Math.round(246 + (217 - 246) * t);
                                const gradientColor = `rgb(${r}, ${g}, ${b})`;

                                return (
                                    <div key={`pair-${i}`} className="flex flex-col items-center gap-0">
                                        {/* First Name Letter */}
                                        <motion.div
                                            initial={{ opacity: 0, y: -30 }}
                                            animate={{ opacity: backgroundLoaded ? 1 : 0, y: backgroundLoaded ? 0 : -30 }}
                                            transition={{ delay: backgroundLoaded ? i * 0.08 : 0, duration: 0.5 }}
                                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none cursor-default"
                                        >
                                            {letter}
                                        </motion.div>

                                        {/* Last Name Letter with interpolated color */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: backgroundLoaded ? 1 : 0, y: backgroundLoaded ? 0 : 30 }}
                                            transition={{ delay: backgroundLoaded ? 0.8 + i * 0.08 : 0, duration: 0.5 }}
                                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none cursor-default"
                                            style={{ color: gradientColor }}
                                        >
                                            {lastName[i]}
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: backgroundLoaded ? 1 : 0, y: backgroundLoaded ? 0 : 20 }}
                        transition={{ delay: backgroundLoaded ? 2 : 0, duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 leading-relaxed px-4">
                            Software Engineer exploring the intersection of cutting-edge technologies and impactful solutions
                        </p>
                    </motion.div>

                </div>

                {/* Contact Links and Scroll Indicator Group */}
                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-6 z-20">
                    {/* Contact Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: backgroundLoaded ? 1 : 0, y: backgroundLoaded ? 0 : 20 }}
                        transition={{ delay: backgroundLoaded ? 2.4 : 0, duration: 0.8 }}
                        className="flex flex-wrap gap-4 md:gap-6 justify-center text-xs md:text-sm px-4"
                    >
                        <a
                            href="mailto:philippe@cutillas.io"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group selectable"
                        >
                            <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            <span>philippe@cutillas.io</span>
                        </a>

                        <a
                            href="tel:+15203028730"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group selectable"
                        >
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>(520) 302-8730</span>
                        </a>

                        <a
                            href="https://github.com/pcutillas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                        >
                            <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            <span>pcutillas</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/pcutillas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                        >
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <span>pcutillas</span>
                        </a>

                        <div className="flex items-center gap-2 text-neutral-400">
                            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            <span>Tustin, CA</span>
                        </div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: backgroundLoaded ? 1 : 0 }}
                        transition={{ delay: backgroundLoaded ? 2.8 : 0 }}
                    >
                        <motion.div
                            animate={{ y: backgroundLoaded ? [0, 8, 0] : 0 }}
                            transition={{ duration: 2, repeat: backgroundLoaded ? Infinity : 0 }}
                            className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-32 px-6 border-t border-neutral-800">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 mb-16"
                    >
                        Featured Projects
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "SOCIAL",
                                period: "2021 – Present",
                                description: "A decentralized, end-to-end encrypted social platform fixing echo chambers and the mental health epidemic caused by modern social media. Built with Dart, Flutter, and AtPlatform.",
                                image: "/social-banner.png",
                                link: "https://www.patreon.com/cw/socialdev"
                            },
                            {
                                title: "VALINOR",
                                period: "2025 – Present",
                                description: "Building the future of decentralized healthcare insurance. A transparent, trustless health coverage system powered by smart contracts on Ethereum.",
                                image: "/va-banner.png",
                                link: null
                            },
                            {
                                title: "NEW WORLD RESOURCE CODEX",
                                period: "2025 – Present",
                                description: "A lightweight web-based tool for mapping resources to town locations in New World: Aeternum. Supports town storage limits, sorting, and custom organization.",
                                image: "/New_World_Logo.png",
                                link: "https://nwrc.app",
                                isNewWorld: true
                            }
                        ].map((project, index) => {
                            const CardContent = (
                                <>
                                    <div className="relative border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-950 hover:border-neutral-700 active:border-neutral-700 transition-all duration-500 h-full flex flex-col touch-manipulation">
                                        {/* Image */}
                                        <div className="relative h-64 overflow-hidden bg-neutral-900">
                                            {project.title === 'SOCIAL' && (
                                                <>
                                                    <div className="absolute inset-0 z-20">
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            className="group-hover:scale-110 group-active:scale-110 transition-transform duration-700 ease-out object-cover"
                                                            style={{ objectPosition: 'center 60%' }}
                                                        />
                                                    </div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent z-20" />
                                                </>
                                            )}

                                            {/* Fade gradient for non-banner projects */}
                                            {(project.title === 'VALINOR' || project.isNewWorld) && (
                                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900 to-neutral-800" />
                                            )}

                                            {/* Project Name/Logo Overlay */}
                                            <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-30">
                                                {project.title === 'SOCIAL' && (
                                                    <div className="relative w-48 h-20 mb-6">
                                                        <Image
                                                            src="/social-name.png"
                                                            alt="SOCIAL"
                                                            fill
                                                            className="object-contain object-bottom"
                                                        />
                                                    </div>
                                                )}
                                                {project.isNewWorld && (
                                                    <div className="relative w-full h-full flex items-center justify-center">
                                                        <div className="flex flex-col items-center gap-0 group-hover:scale-110 group-active:scale-110 transition-transform duration-700 ease-out">
                                                            <div className="relative w-64 h-28">
                                                                <Image
                                                                    src="/New_World_Logo.png"
                                                                    alt="New World"
                                                                    fill
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                            <div
                                                                className={`${cinzel.className} text-lg tracking-[0.35em] text-amber-200 -mt-1`}
                                                                style={{
                                                                    letterSpacing: '0.35em',
                                                                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                                                }}
                                                            >
                                                                RESOURCE CODEX
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {project.title === 'VALINOR' && (
                                                    <div className="relative w-full h-full flex items-center justify-center px-4">
                                                        {/* Glow effect */}
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="w-96 h-20 bg-cyan-400/15 blur-3xl rounded-full" />
                                                        </div>
                                                        {/* Logo */}
                                                        <div className="relative w-80 h-40 z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-700 ease-out">
                                                            <Image
                                                                src="/va-banner.png"
                                                                alt="VALINOR"
                                                                fill
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
                                                {project.period}
                                            </div>

                                            <p className="text-neutral-400 leading-relaxed flex-1">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Gradient accent on hover */}
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-700 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </>
                            );

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    whileHover={{ y: -8 }}
                                    whileTap={{ y: -8 }}
                                    className="group"
                                >
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full touch-manipulation">
                                            {CardContent}
                                        </a>
                                    ) : (
                                        CardContent
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="group py-32 px-6 border-t border-neutral-800">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm uppercase tracking-widest text-neutral-500 mb-16 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-700 transition-all duration-300 cursor-default"
                    >
                        Experience
                    </motion.h2>

                    <div className="space-y-24">
                        {[
                            {
                                company: "Viasat, Inc.",
                                role: "Software Engineer",
                                period: "Feb. 2023 – Present",
                                location: "Remote, CA",
                                description: [
                                    "Designed, implemented, tested, and deployed satellite data processing services in a globally interconnected network of virtual private clouds using Docker, Kubernetes, and OpenShift.",
                                    "Designed and maintained multiple C++ packet processing libraries, integral to 30+ unique microservices/applications.",
                                    "Designs, implementations, and APIs recognized as exceptional by supervisor and multiple coworkers.",
                                ]
                            },
                            {
                                company: "Blur Studio",
                                role: "Software Engineering Intern",
                                period: "Aug. 2020 – Jun. 2021",
                                location: "Remote, Los Angeles, CA",
                                description: [
                                    "Designed, implemented, and integrated a suite of debug adapters for VFX Applications, in Python.",
                                    "One-month internship extended month-by-month for 10 additional months due to exceptional results.",
                                ]
                            },
                            {
                                company: "Facade Technologies",
                                role: "CTO",
                                period: "Aug. 2019 – Aug. 2020",
                                location: "Tucson, AZ",
                                description: [
                                    "Led the design and development of a complex application for desktop automation using Python and Qt5.",
                                    "Awarded Best System Software Design by Ball Aerospace and Best Systems Engineering by L3Harris & Thales in a competition among 134 other projects.",
                                ]
                            },
                            {
                                company: "College of Nursing, University of Arizona",
                                role: "IT Support Specialist",
                                period: "Aug. 2017 – May 2020",
                                location: "Tucson, AZ",
                                description: [
                                    "Provided comprehensive IT support for faculty and staff at the College of Nursing.",
                                ]
                            }
                        ].map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group"
                            >
                                <div className="grid md:grid-cols-4 gap-8">
                                    <div className="md:col-span-1">
                                        <div className="text-sm text-neutral-500">{job.period}</div>
                                        <div className="text-sm text-neutral-600">{job.location}</div>
                                    </div>
                                    <div className="md:col-span-3">
                                        <h3 className="text-2xl font-semibold mb-2">{job.company}</h3>
                                        <p className="text-lg text-neutral-400 mb-6">{job.role}</p>
                                        <ul className="space-y-3">
                                            {job.description.map((item, i) => (
                                                <li key={i} className="text-neutral-400 leading-relaxed">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="group py-32 px-6 border-t border-neutral-800">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm uppercase tracking-widest text-neutral-500 mb-16 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-700 transition-all duration-300 cursor-default"
                    >
                        Education
                    </motion.h2>

                    <div className="space-y-16">
                        {[
                            {
                                school: "University of Southern California",
                                degree: "Master of Science, Computer Science",
                                gpa: "3.6/4.0 GPA",
                                period: "2020 – 2022",
                                location: "Remote, Los Angeles, CA",
                                details: ["Member of USC Rocket League team, and member of game development club OpenAlpha."]
                            },
                            {
                                school: "University of Arizona",
                                degree: "Bachelor of Science, Electrical & Computer Engineering",
                                degree2: "Bachelor of Science, Mathematics",
                                gpa: "Dual Degrees",
                                period: "2016 – 2020",
                                location: "Tucson, AZ",
                                details: ["Earned two separate bachelor's degrees simultaneously", "2x Dean's List Award Recipient"]
                            }
                        ].map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                            >
                                <div className="grid md:grid-cols-4 gap-8">
                                    <div className="md:col-span-1">
                                        <div className="text-sm text-neutral-500">{edu.period}</div>
                                        <div className="text-sm text-neutral-600">{edu.location}</div>
                                    </div>
                                    <div className="md:col-span-3">
                                        <h3 className="text-2xl font-semibold mb-2">{edu.school}</h3>
                                        <p className="text-lg text-neutral-400 mb-1">{edu.degree}</p>
                                        {edu.degree2 && (
                                            <p className="text-lg text-neutral-400 mb-2">{edu.degree2}</p>
                                        )}
                                        <p className="text-sm text-neutral-500 mb-4">{edu.gpa}</p>
                                        {edu.details && (
                                            <ul className="space-y-2">
                                                {edu.details.map((detail, i) => (
                                                    <li key={i} className="text-neutral-400 text-sm">
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications Section */}
            <section className="group py-32 px-6 border-t border-neutral-800">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm uppercase tracking-widest text-neutral-500 mb-16 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-700 transition-all duration-300 cursor-default"
                    >
                        Research Publications
                    </motion.h2>

                    <div className="space-y-12">
                        {[
                            {
                                title: "Realizing acoustic qubit analogues with nonlinearly tunable phi-bits in externally driven coupled acoustic waveguides",
                                authors: "PA Deymier, K Runge, MA Hasan, TD Lata, JA Levine, P Cutillas",
                                journal: "Scientific Reports",
                                year: "2023",
                                link: "https://www.nature.com/articles/s41598-023-27427-4"
                            },
                            {
                                title: "Scalable exponentially complex representations of logical phi-bit states and experimental demonstration of an operable three phi-bit gate using an acoustic metastructure",
                                authors: "PA Deymier, K Runge, P Cutillas, MA Hasan, TD Lata, JA Levine",
                                journal: "Applied Physics Letters",
                                year: "2023",
                                link: "https://iopscience.iop.org/article/10.1088/1361-651X/ac991e/ampdf"
                            },
                            {
                                title: "Setting the stage for materials simulation using acoustic metamaterials digital quantum analogue computing platforms",
                                authors: "PA Deymier, K Runge, MA Hasan, JA Levine, P Cutillas",
                                journal: "MSMSE",
                                year: "2022",
                                link: "https://par.nsf.gov/servlets/purl/10439186"
                            }
                        ].map((pub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group"
                            >
                                <div className="grid md:grid-cols-4 gap-8">
                                    <div className="md:col-span-1">
                                        <div className="text-sm text-neutral-500">{pub.year}</div>
                                    </div>
                                    <div className="md:col-span-3">
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg leading-relaxed mb-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700 transition-all duration-300 block"
                                        >
                                            {pub.title}
                                        </a>
                                        <p className="text-sm text-neutral-500 mb-2">
                                            {pub.authors.split('P Cutillas').map((part, i, arr) => (
                                                <React.Fragment key={i}>
                                                    {part}
                                                    {i < arr.length - 1 && (
                                                        <span className="text-blue-500 font-semibold">
                                                            P Cutillas
                                                        </span>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                        <p className="text-sm text-neutral-400">{pub.journal}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="group py-32 px-6 border-t border-neutral-800">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm uppercase tracking-widest text-neutral-500 mb-16 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-700 transition-all duration-300 cursor-default"
                    >
                        Skills & Expertise
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Technical",
                                skills: ['C++', 'Python', 'Git', 'Linux', 'Microservices', 'Docker', 'Kubernetes', 'OpenShift', 'gRPC', 'REST APIs']
                            },
                            {
                                title: "Soft Skills",
                                skills: ['Creative', 'Collaborative', 'Detail-oriented', 'Leadership', 'Time Management']
                            },
                            {
                                title: "Interests",
                                skills: ['Quantum Computing', 'Gaming', 'One Piece', 'Soccer', 'AGI', 'Music Production', 'Lord of the Rings']
                            }
                        ].map((category, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.8 }}
                                    className="group/card"
                                >
                                    <div className="relative h-full border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-950 hover:border-neutral-700 active:border-neutral-700 transition-all duration-500 p-8 touch-manipulation">
                                        {/* Subtle background glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-700/5 opacity-0 group-hover/card:opacity-100 group-active/card:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            <div className="relative mb-6">
                                                <h3 className="text-lg font-semibold text-white transition-opacity duration-200 group-hover/card:duration-700 group-hover/card:opacity-0 group-active/card:duration-700 group-active/card:opacity-0">
                                                    {category.title}
                                                </h3>
                                                <h3 className="absolute inset-0 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover/card:opacity-100 group-active/card:opacity-100 transition-opacity duration-500" aria-hidden="true">
                                                    {category.title}
                                                </h3>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map((skill, i) => (
                                                    <div
                                                        key={i}
                                                        className="px-3 py-1.5 bg-neutral-900/50 border border-neutral-800 rounded-lg text-sm text-neutral-400 hover:text-neutral-300 transition-all duration-300 cursor-default group-hover/card:text-neutral-300 group-hover/card:border-neutral-700 group-active/card:text-neutral-300 group-active/card:border-neutral-700"
                                                    >
                                                        {skill}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom gradient accent */}
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-700 opacity-0 group-hover/card:opacity-100 group-active/card:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 border-t border-neutral-800">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-sm text-neutral-500">
                            © {new Date().getFullYear()} Philippe Cutillas
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="mailto:philippe@cutillas.io" className="text-neutral-500 hover:text-white transition-colors selectable">
                                Email
                            </a>
                            <a href="https://github.com/pcutillas" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/pcutillas/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                LinkedIn
                            </a>
                            <a href="https://scholar.google.com/citations?user=1xzYzVIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                Google Scholar
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}