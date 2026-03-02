import React, { useState } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <Section id="projects" title="Featured Projects" className="bg-slate-100/50 dark:bg-slate-900/30">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <motion.div
                        key={project.id}
                        layoutId={`project-${project.id}`}
                        whileHover={{ y: -10 }}
                        onClick={() => setSelectedProject(project)}
                        className="group cursor-pointer bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-secondary line-clamp-2 text-sm">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-sm">
                        <motion.div
                            layoutId={`project-${selectedProject.id}`}
                            className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="aspect-video w-full">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="p-8 md:p-12">
                                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-full uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h4 className="font-bold text-lg mb-4 text-blue-600">The Project</h4>
                                        <p className="text-secondary leading-relaxed">{selectedProject.description}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-4 text-blue-600">What I Learned</h4>
                                        <p className="text-secondary leading-relaxed">{selectedProject.learned}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-12">
                                    <a href={selectedProject.demo} target="_blank" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold flex items-center gap-2">
                                        Live Demo <ExternalLink size={16} />
                                    </a>
                                    <a href={selectedProject.github} target="_blank" className="px-8 py-3 bg-slate-200 dark:bg-slate-800 rounded-full font-bold flex items-center gap-2">
                                        GitHub <Github size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Projects;
