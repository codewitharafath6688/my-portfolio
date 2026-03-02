import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { learningData } from '../data/learning';
import { Award, Calendar, BookOpen } from 'lucide-react';

const LearningExperience = () => {
    return (
        <Section id="experience" title="Learning Journey">
            <div className="max-w-4xl mx-auto space-y-12">
                {learningData.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-8 relative"
                    >
                        {/* Timeline element */}
                        <div className="hidden md:flex absolute left-1/2 -ml-[1px] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -z-10"></div>

                        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full text-xs font-bold mb-4">
                                <Calendar size={14} /> {item.date}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-blue-600 font-medium mb-4 flex items-center gap-2 md:justify-end">
                                <BookOpen size={16} /> {item.source}
                            </p>
                        </div>

                        <div className="flex-none w-12 h-12 bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-950 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-500/20">
                            <Award size={20} className="text-blue-600" />
                        </div>

                        <div className={`flex-1 ${index % 2 !== 0 ? 'md:text-right md:order-1' : ''}`}>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <p className="text-secondary text-sm leading-relaxed mb-4">Focused on gaining practical experience and mastering industry standards.</p>
                                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                                    {item.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-secondary text-xs rounded-lg uppercase font-bold tracking-tight">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default LearningExperience;
