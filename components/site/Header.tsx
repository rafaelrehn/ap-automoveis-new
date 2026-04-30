"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, Menu, MessageCircle, X } from "lucide-react";

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
        "fixed top-0 right-0 left-0 z-50 transition-smooth",
        scrolled
          ? "border-b border-border bg-background/85 shadow-sm backdrop-blur-lg"
          : "bg-background/0",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-brand-foreground shadow-elegant">
              <Car className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold tracking-tight">
                AP Automóveis
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Santa Rosa · RS
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
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="outline" size="sm">
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
            className="-mr-2 p-2 text-foreground lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border pb-4 pt-2 lg:hidden">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium",
                    pathname === item.href
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3 flex flex-col gap-2">
              <Button asChild variant="outline">
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
