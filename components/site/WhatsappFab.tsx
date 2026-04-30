import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/data/vehicles";

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-[oklch(0.65_0.18_148)] py-3.5 pr-5 pl-4 text-white shadow-elegant transition-smooth hover:scale-105 hover:bg-[oklch(0.6_0.18_148)]"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
