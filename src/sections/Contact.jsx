import React, { useState } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Mail, Facebook } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <Section id="contact" title="Get In Touch">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h3 className="text-3xl font-bold mb-6">Let's build something <span className="text-blue-600">amazing</span> together.</h3>
                    <p className="text-lg text-secondary mb-10">
                        I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:arafat@example.com" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-white dark:bg-slate-900 flex items-center justify-center rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <Mail size={20} />
                            </div>
                            <span className="font-medium">arafathsiddique668@gmail.com</span>
                        </a>

                        <div className="flex gap-4 pt-6">
                            {[
                                { icon: <Github size={20} />, href: "https://github.com/codewitharafath6688" },
                                { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=100041821740864" },
                                { icon: <Twitter size={20} />, href: "https://x.com/alpha_se69967" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 bg-white dark:bg-slate-900 flex items-center justify-center rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:text-blue-600"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary uppercase tracking-wider">Name</label>
                                <input required type="text" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-transparent focus:border-blue-600 outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary uppercase tracking-wider">Email</label>
                                <input required type="email" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-transparent focus:border-blue-600 outline-none transition-all" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary uppercase tracking-wider">Message</label>
                            <textarea required rows="5" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-transparent focus:border-blue-600 outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
                        </div>

                        <button
                            disabled={status === 'sending'}
                            type="submit"
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${status === 'success' ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                        >
                            {status === 'sending' ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : status === 'success' ? (
                                "Message Sent!"
                            ) : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
