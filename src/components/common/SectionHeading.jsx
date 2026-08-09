function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div
      className={`mx-auto flex max-w-3xl flex-col ${alignment}`}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;