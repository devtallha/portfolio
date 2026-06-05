import { cn } from '@/lib/utils';

interface Props {
    title: string;
    className?: string;
    index?: string;
}

const SectionTitle = ({ title, className, index }: Props) => {
    return (
        <div className={cn('mb-12 md:mb-16', className)}>
            <div className="flex items-center gap-4 mb-4">
                {index && (
                    <span className="section-label tabular-nums">{index}</span>
                )}
                <div className="flex-1 rule" />
            </div>
            <h2 className="font-anton text-display-md uppercase">{title}</h2>
        </div>
    );
};

export default SectionTitle;
