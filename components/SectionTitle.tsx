'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Props {
    title: string;
    className?: string;
    index?: string;
}

const SectionTitle = ({ title, className, index }: Props) => {
    return (
        <motion.div
            className={cn('mb-12 md:mb-16', className)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="flex items-center gap-4 mb-4">
                {index && (
                    <span className="section-label tabular-nums">{index}</span>
                )}
                <div className="flex-1 rule" />
            </div>
            <h2 className="font-anton text-display-md uppercase">{title}</h2>
        </motion.div>
    );
};

export default SectionTitle;
