import React, { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = forwardRef(({ id, children, className = "", title = "" }, ref) => {
    const innerRef = useRef(null);

    useEffect(() => {
        const el = innerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id={id}
            ref={ref}
            className={`min-h-screen py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center ${className}`}
        >
            <div ref={innerRef} className="w-full max-w-7xl mx-auto">
                {title && (
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 text-center tracking-tight">
                        {title}<span className="text-blue-600">.</span>
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
});

Section.displayName = 'Section';

export default Section;
