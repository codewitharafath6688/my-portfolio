import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Section id="about" title="About Me" className="bg-slate-100/50 dark:bg-slate-900/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-bold mb-6">A Journey of Continuous Learning</h3>
                    <p className="text-lg text-secondary mb-6 leading-relaxed">
                        As a <span className="font-semibold text-blue-600">Fresh Developer</span>, my main focus is on mastering the fundamental principles of software engineering while staying ahead of the curve with modern frameworks like React.
                    </p>
                    <p className="text-lg text-secondary leading-relaxed">
                        I believe that great software is built at the intersection of clean code and thoughtful design. I'm currently focused on improving my skills in animation libraries like GSAP and mastering the intricacies of responsive layout systems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
                >
                    <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center rounded-lg text-sm">01</span>
                        My Goals
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                            <p className="text-secondary">Mastering React Server Components and Next.js</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                            <p className="text-secondary">Developing highly performant and accessible UI kits</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                            <p className="text-secondary">Contributing to impactful open-source projects</p>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
