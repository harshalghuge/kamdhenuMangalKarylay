export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return <div className="mx-auto mb-10 max-w-2xl text-center">
    {eyebrow && <p className="text-[10px] font-bold tracking-[3px] text-[#a77942] sm:text-xs">{eyebrow}</p>}
    <h2 className={`mt-3 font-display text-3xl leading-tight sm:text-4xl md:text-5xl ${light ? "text-white" : "text-[#30221e]"}`}>{title}</h2>
    {description && <p className={`mt-4 text-sm leading-7 sm:text-base ${light ? "text-white/70" : "text-[#75665c]"}`}>{description}</p>}
  </div>;
}
