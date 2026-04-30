"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";

import { whatsappLink } from "@/data/vehicles";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Início" },
  { href: "/estoque", label: "Estoque" },
  { href: "/categorias", label: "Categorias" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/contato", label: "Contato" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-brand text-highlight shadow-sm transition-smooth",
        scrolled && "shadow-elegant",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative h-11 w-11 overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="AP Automóveis"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold tracking-tight text-highlight">
                AP Automóveis
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-4 py-2 text-sm font-medium transition-smooth",
                    active
                      ? "bg-white/12 text-white"
                      : "text-white/80 hover:bg-white/8 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/15 bg-white/5 text-highlight hover:bg-white/10 hover:text-highlight"
            >
              <Link href="/estoque">Ver estoque</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-gradient-highlight text-highlight-foreground hover:opacity-90"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="-mr-2 p-2 text-highlight lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 pb-4 pt-2 lg:hidden">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium",
                    pathname === item.href
                      ? "bg-white/12 text-white"
                      : "text-white/80",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3 flex flex-col gap-2">
              <Button
                asChild
                variant="outline"
                className="border-white/15 bg-white/5 text-highlight hover:bg-white/10 hover:text-highlight"
              >
                <Link href="/estoque" onClick={() => setOpen(false)}>
                  Ver estoque
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-highlight text-highlight-foreground"
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
