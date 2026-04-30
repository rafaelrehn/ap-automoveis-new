import Link from "next/link";
import {
  Car,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
} from "lucide-react";

import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/data/vehicles";

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="container mx-auto px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-highlight text-highlight-foreground">
                <Car className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-lg font-bold">AP Automóveis</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">
                  Santa Rosa · RS
                </div>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed opacity-75">
              Veículos selecionados com atendimento transparente e negociação
              facilitada.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-smooth hover:bg-white/20"
                aria-label="Instagram"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-smooth hover:bg-white/20"
                aria-label="Facebook"
              >
                <Heart className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/" className="transition-smooth hover:text-highlight hover:opacity-100">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/estoque"
                  className="transition-smooth hover:text-highlight hover:opacity-100"
                >
                  Estoque
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias"
                  className="transition-smooth hover:text-highlight hover:opacity-100"
                >
                  Categorias
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="transition-smooth hover:text-highlight hover:opacity-100"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="transition-smooth hover:text-highlight hover:opacity-100"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm opacity-85">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-highlight" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-highlight" />
                <a href="tel:+555535126370" className="hover:opacity-100">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-highlight" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-highlight" />
                <a href={`mailto:${EMAIL}`} className="break-all hover:opacity-100">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Horário</h4>
            <ul className="space-y-2 text-sm opacity-85">
              <li>Seg a Sex: 8h às 18h30</li>
              <li>Sábado: 8h30 às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs opacity-70 md:flex-row">
          <p>© {new Date().getFullYear()} AP Automóveis. Todos os direitos reservados.</p>
          <p>CNPJ XX.XXX.XXX/0001-XX · Santa Rosa, RS</p>
        </div>
      </div>
    </footer>
  );
}
