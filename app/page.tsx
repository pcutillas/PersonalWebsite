'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Github, MapPin, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
    const { scrollYProgress, scrollY } = useScroll()
    const firstName = "PHILIPPE"
    const lastName = "CUTILLAS"
    const [showHeader, setShowHeader] = React.useState(false)

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
                className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm"
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
            <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Stacked Name Display */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Aligned Letters */}
                        <div className="flex justify-center gap-2 md:gap-3 lg:gap-4 whitespace-nowrap">
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
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.08, duration: 0.5 }}
                                            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none cursor-default"
                                        >
                                            {letter}
                                        </motion.div>

                                        {/* Last Name Letter with interpolated color */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                                            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none cursor-default"
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
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        className="text-center space-y-8 max-w-3xl mx-auto"
                    >
                        <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed">
                            Software Engineer building distributed systems<br />and satellite data infrastructure at Viasat
                        </p>

                        {/* Contact Links */}
                        <div className="flex flex-wrap gap-6 justify-center text-sm md:text-base">
                            <a
                                href="mailto:philippe@cutillas.io"
                                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group selectable"
                            >
                                <Mail className="w-4 h-4" />
                                <span>philippe@cutillas.io</span>
                            </a>

                            <a
                                href="https://github.com/pcutillas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                            >
                                <Github className="w-4 h-4" />
                                <span>pcutillas</span>
                            </a>

                            <div className="flex items-center gap-2 text-neutral-400">
                                <MapPin className="w-4 h-4" />
                                <span>Orange County, CA</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"
                    />
                </motion.div>
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

                    <div className="grid md:grid-cols-2 gap-8">
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
                            }
                        ].map((project, index) => {
                            const CardContent = (
                                <>
                                    <div className="relative border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-950 hover:border-neutral-700 transition-all duration-500 h-full flex flex-col">
                                        {/* Image */}
                                        <div className="relative h-64 overflow-hidden bg-neutral-900">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className={`group-hover:scale-110 transition-transform duration-700 ease-out ${project.title === 'VALINOR' ? 'object-contain' : 'object-cover'}`}
                                                style={project.title === 'SOCIAL' ? { objectPosition: 'center 60%' } : undefined}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex items-start justify-between mb-4">
                                                <h3 className="text-3xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-700 transition-all duration-300">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
                                                {project.period}
                                            </div>

                                            <p className="text-neutral-400 leading-relaxed flex-1">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Gradient accent on hover */}
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                    className="group"
                                >
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
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
                                    "Led the design and development of a complex application for desktop automation using Python and Qt.",
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

                    <div className="grid md:grid-cols-3 gap-16">
                        {[
                            {
                                title: "Technical",
                                skills: ['C++', 'Python', 'Git', 'Linux', 'Docker', 'gRPC', 'Kubernetes', 'OpenShift', 'REST APIs', 'Microservices', 'Cloud']
                            },
                            {
                                title: "Soft Skills",
                                skills: ['Collaborative', 'Team-spirited', 'Creative', 'Detail-oriented', 'Time Management', 'Leadership']
                            },
                            {
                                title: "Interests",
                                skills: ['Soccer', 'One Piece', 'Gaming', 'Music Production', 'Quantum Computing', 'AGI', 'Lord of the Rings']
                            }
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                            >
                                <h3 className="text-lg font-semibold mb-6">{category.title}</h3>
                                <div className="space-y-3">
                                    {category.skills.map((skill, i) => (
                                        <div key={i} className="text-neutral-400">
                                            {skill}
                                        </div>
                                    ))}
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
                                year: "2023"
                            },
                            {
                                title: "Scalable exponentially complex representations of logical phi-bit states and experimental demonstration of an operable three phi-bit gate using an acoustic metastructure",
                                authors: "PA Deymier, K Runge, P Cutillas, MA Hasan, TD Lata, JA Levine",
                                journal: "Applied Physics Letters",
                                year: "2023"
                            },
                            {
                                title: "Setting the stage for materials simulation using acoustic metamaterials digital quantum analogue computing platforms",
                                authors: "PA Deymier, K Runge, MA Hasan, JA Levine, P Cutillas",
                                journal: "MSMSE",
                                year: "2022"
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
                                        <h3 className="text-lg leading-relaxed mb-3">{pub.title}</h3>
                                        <p className="text-sm text-neutral-500 mb-2">{pub.authors}</p>
                                        <p className="text-sm text-neutral-400">{pub.journal}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 border-t border-neutral-800">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-sm text-neutral-500">
                            © 2025 Philippe Cutillas
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="mailto:philippe@cutillas.io" className="text-neutral-500 hover:text-white transition-colors selectable">
                                Email
                            </a>
                            <a href="https://github.com/pcutillas" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}