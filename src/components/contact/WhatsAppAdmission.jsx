import {
  MessageCircle,
} from "lucide-react";

function WhatsAppAdmission({ phone }) {

  const whatsappNumber =
    phone.replace(/\D/g, "");

  const message = encodeURIComponent(
    "Assalam-o-Alaikum, I am interested in admission at DevMastersLearningTech. Please share the available courses, timings and admission details."
  );

  const url =
    `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-green-700"
    >
      <MessageCircle size={18} />

      Chat on WhatsApp

    </a>
  );
}

export default WhatsAppAdmission;