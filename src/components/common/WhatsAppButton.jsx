import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const phoneNumber = "923440359135";

  const message = encodeURIComponent(
    "Hello DevMastersLearningTech, I would like to get information about your courses."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DevMastersLearningTech on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={27} strokeWidth={2.2} />
    </a>
  );
}

export default WhatsAppButton;