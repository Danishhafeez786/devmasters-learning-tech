import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Container from "../common/Container";

function ContactInfoCards({ contact }) {

  const whatsappNumber =
    contact.whatsapp.replace(/\D/g, "");

  const cards = [
    {
      icon: Phone,
      title: "Call Us",
      value: contact.phone,
      href: `tel:${contact.phone}`,
      description: "Speak directly with our team.",
    },

    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: contact.whatsapp,
      href: `https://wa.me/${whatsappNumber}`,
      description: "Send us your admission inquiry.",
    },

    {
      icon: MapPin,
      title: "Visit Institute",
      value: "Visit Our Campus",
      href: contact.googleMapsUrl,
      description: contact.address,
    },

    {
      icon: Mail,
      title: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      description: "Send us your questions anytime.",
    },
  ];

  return (
    <section className="relative z-10 -mt-6">
      <Container>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {cards.map((card) => {

            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.href}
                target={
                  card.title === "WhatsApp" ||
                  card.title === "Visit Institute"
                    ? "_blank"
                    : undefined
                }
                rel={
                  card.title === "WhatsApp" ||
                  card.title === "Visit Institute"
                    ? "noreferrer"
                    : undefined
                }
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">

                  <Icon size={20} />

                </div>

                <h3 className="mt-5 text-sm font-black text-slate-950">
                  {card.title}
                </h3>

                <p className="mt-1 break-words text-sm font-bold text-teal-700">
                  {card.value}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {card.description}
                </p>

              </a>
            );
          })}

        </div>

      </Container>
    </section>
  );
}

export default ContactInfoCards;