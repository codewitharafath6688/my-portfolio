import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <Section id="skills" title="My Tech Stack">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="space-y-4">
                        <h3 className="text-lg font-bold capitalize text-blue-600">{category}</h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {skills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={item}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    className="px-4 py-2 bg-white dark:bg-slate-900 rounded-xl text-sm font-medium shadow-sm border border-slate-200 dark:border-slate-800"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
