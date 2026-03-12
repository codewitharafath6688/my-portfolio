import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FileDown, ChevronRight } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(textRef.current.children, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            })
                .from(imgRef.current, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1,
                    ease: "back.out(1.7)"
                }, "-=0.5");
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="home" ref={heroRef} className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
            <div ref={textRef} className="flex-1 mb-10 text-center md:text-left z-10">
                <h2 className="text-blue-600 font-semibold mb-4 tracking-wider uppercase">Welcome to my universe</h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Arafath</span>
                </h1>
                <p className="text-xl md:text-2xl text-secondary max-w-2xl mb-10 leading-relaxed">
                    A <span className="text-slate-900 dark:text-slate-100 font-medium">Frontend Developer</span> dedicated to building polished, interactive digital experiences. Currently exploring the magic of React & Animations.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 flex items-center gap-2 hover:bg-blue-700 transition-colors"
                    >
                        View My Projects <ChevronRight size={18} />
                    </motion.a>
                    <motion.a
                        href="/public/My_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-slate-200 dark:bg-slate-800 rounded-full font-bold flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                    >
                        Download Resume <FileDown size={18} />
                    </motion.a>
                </div>
            </div>

            <div className="flex-1 mt-12 md:mt-0 relative flex justify-center">
                <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                    <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div ref={imgRef} className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
                        <img
                            src="/src/assets/images/profile.jpg"
                            alt="Arafat"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://i.ibb.co.com/PzWxQrvG/image.png";
                            }}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
