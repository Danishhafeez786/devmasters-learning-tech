import { ChevronDown } from "lucide-react";

function FAQItem({
  faq,
  isOpen,
  onToggle,
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-teal-200 bg-teal-50/40"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* Question */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
      >
        <span
          className={`text-sm font-extrabold leading-6 sm:text-base ${
            isOpen
              ? "text-teal-800"
              : "text-slate-900"
          }`}
        >
          {faq.question}
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "rotate-180 bg-teal-700 text-white"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          <ChevronDown size={18} />
        </span>
      </button>

      {/* Answer */}

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <div className="border-t border-slate-200/70 pt-4">
              <p className="text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;