import {
  CalendarDays,
  Sparkles,
} from "lucide-react";

import { siteSettings } from "../../data/siteSettings";

function AdmissionCampaign() {
  const { admission } = siteSettings;

  if (!admission.showBanner) {
    return null;
  }

  return (
    <div className="border border-yellow-200 bg-yellow-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-3 text-center sm:flex-row sm:gap-4">

        <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900">

          <Sparkles
            size={16}
            className="text-yellow-600"
          />

          {admission.offerLabel}

        </div>

        <div className="hidden h-4 w-px bg-slate-300 sm:block" />

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">

          <CalendarDays size={15} />

          Session starts {admission.startDate}

        </div>

      </div>
    </div>
  );
}

export default AdmissionCampaign;