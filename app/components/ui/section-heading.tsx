
type SectionHeadingProps = {
  title: string;
  subtitle: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/90">{subtitle}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{description}</p> : null}
    </div>
  );
}
