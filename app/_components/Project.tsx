import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface Props {
    index: number;
    project: IProject;
    selectedProject: string | null;
    onMouseEnter: (_slug: string) => void;
}

gsap.registerPlugin(useGSAP);

const Project = ({ index, project, onMouseEnter }: Props) => {
    const externalLinkSVGRef = useRef<SVGSVGElement>(null);

    const { context, contextSafe } = useGSAP(() => { }, {
        scope: externalLinkSVGRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe?.(() => {
        onMouseEnter(project.slug);

        const arrowLine = externalLinkSVGRef.current?.querySelector('#arrow-line') as SVGPathElement;
        const arrowCurb = externalLinkSVGRef.current?.querySelector('#arrow-curb') as SVGPathElement;
        const box = externalLinkSVGRef.current?.querySelector('#box') as SVGPathElement;

        gsap.set(box, { opacity: 0, strokeDasharray: box?.getTotalLength(), strokeDashoffset: box?.getTotalLength() });
        gsap.set(arrowLine, { opacity: 0, strokeDasharray: arrowLine?.getTotalLength(), strokeDashoffset: arrowLine?.getTotalLength() });
        gsap.set(arrowCurb, { opacity: 0, strokeDasharray: arrowCurb?.getTotalLength(), strokeDashoffset: arrowCurb?.getTotalLength() });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to(externalLinkSVGRef.current, { autoAlpha: 1 })
            .to(box, { opacity: 1, strokeDashoffset: 0 })
            .to(arrowLine, { opacity: 1, strokeDashoffset: 0 }, '<0.2')
            .to(arrowCurb, { opacity: 1, strokeDashoffset: 0 })
            .to(externalLinkSVGRef.current, { autoAlpha: 0 }, '+=1');
    });

    const handleMouseLeave = contextSafe?.(() => {
        context.kill();
    });

    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className="project-item group leading-none py-7 border-t border-border last:border-b md:group-hover/projects:opacity-25 md:hover:!opacity-100 transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center gap-4 md:gap-8">
                {/* Index */}
                <span className="section-label tabular-nums shrink-0">
                    {String(index + 1).padStart(2, '0')}
                </span>

                {/* Title + stack */}
                <div className="flex-1 min-w-0">
                    <h3 className="font-anton text-3xl xs:text-4xl md:text-5xl transition-all duration-500 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left flex items-center gap-3">
                        {project.title}
                        <span className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                ref={externalLinkSVGRef}
                            >
                                <path id="box" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <path id="arrow-line" d="M10 14 21 3" />
                                <path id="arrow-curb" d="M15 3h6v6" />
                            </svg>
                        </span>
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4">
                        {project.techStack.slice(0, 3).map((tech, idx, arr) => (
                            <span key={tech} className="text-xs text-muted-foreground font-roboto-flex flex items-center gap-4">
                                {tech}
                                {idx < arr.length - 1 && <span className="inline-block w-1 h-1 rounded-full bg-foreground/20" />}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Year */}
                <span className="section-label shrink-0 hidden md:block">{project.year}</span>
            </div>
        </TransitionLink>
    );
};

export default Project;
