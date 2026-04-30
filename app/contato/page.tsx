import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/pages/ContactForm";
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a AP Automóveis em Santa Rosa/RS. WhatsApp, telefone, e-mail e endereço.",
};

export default function ContatoPage() {
  return (
    <section className="container mx-auto px-4 py-12 lg:px-8 lg:py-20">
      <div className="mb-12 max-w-2xl">
        <span className="text-xs font-semibold tracking-widest uppercase text-highlight">
          Contato
        </span>
        <h1 className="mt-2 font-display text-3xl font-bold lg:text-4xl">
          Vamos conversar?
        </h1>
        <p className="mt-3 text-muted-foreground">
          Estamos prontos para ajudar você a encontrar o carro ideal. Escolha o
          canal que preferir.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {[
            {
              icon: MessageCircle,
              title: "WhatsApp",
              value: WHATSAPP_DISPLAY,
              href: whatsappLink(),
              highlight: true,
            },
            {
              icon: Phone,
              title: "Telefone",
              value: PHONE_DISPLAY,
              href: "tel:+555535126370",
            },
            {
              icon: Mail,
              title: "E-mail",
              value: EMAIL,
              href: `mailto:${EMAIL}`,
            },
            { icon: MapPin, title: "Endereço", value: ADDRESS },
            { icon: Clock, title: "Horário", value: "Seg–Sex 8h–18h30 · Sáb 8h30–12h" },
          ].map((contact) => {
            const content = (
              <div
                className={`flex items-start gap-4 rounded-2xl border p-5 transition-smooth ${
                  contact.highlight
                    ? "border-transparent bg-gradient-brand text-brand-foreground shadow-elegant hover:opacity-95"
                    : "border-border bg-card hover:border-highlight hover:shadow-card-hover"
                }`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    contact.highlight
                      ? "bg-white/15"
                      : "bg-highlight/10 text-highlight"
                  }`}
                >
                  <contact.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div
                    className={`text-xs uppercase tracking-wider ${
                      contact.highlight ? "opacity-75" : "text-muted-foreground"
                    }`}
                  >
                    {contact.title}
                  </div>
                  <div className="mt-0.5 break-words font-semibold">
                    {contact.value}
                  </div>
                </div>
              </div>
            );

            if (contact.href) {
              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return <div key={contact.title}>{content}</div>;
          })}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
