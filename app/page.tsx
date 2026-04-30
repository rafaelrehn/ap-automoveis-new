import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { SearchBar } from "@/components/site/SearchBar";
import { VehicleCard } from "@/components/site/VehicleCard";
import { Button } from "@/components/ui/button";
import { categories, vehicles, whatsappLink } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Seminovos e usados em Santa Rosa/RS",
  description:
    "Encontre seu próximo veículo com segurança. Estoque selecionado de seminovos e usados em Santa Rosa/RS, com atendimento personalizado.",
};

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Veículos selecionados",
    desc: "Cada carro é avaliado antes de entrar no estoque.",
  },
  {
    icon: Handshake,
    title: "Negociação facilitada",
    desc: "Aceitamos seu usado na troca e financiamos.",
  },
  {
    icon: Sparkles,
    title: "Atendimento personalizado",
    desc: "Equipe dedicada para ajudar na escolha certa.",
  },
  {
    icon: MapPin,
    title: "Loja física em Santa Rosa",
    desc: "Venha conhecer nosso showroom no centro da cidade.",
  },
] as const;

export default function Home() {
  const featured = vehicles.filter((vehicle) => vehicle.featured);

  return (
    <>
      <section className="relative min-h-svh overflow-hidden bg-gradient-hero text-brand-foreground lg:min-h-0">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-highlight/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-highlight/10 blur-3xl" />
        </div>

        <div className="container relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-full min-w-0 flex-col justify-center overflow-x-hidden px-4 pt-8 pb-8 lg:min-h-0 lg:px-8 lg:pt-0 lg:pb-0">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:pt-28 lg:pb-0">
            <div className="max-w-xl min-w-0">
              <span className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium tracking-wide backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-highlight" />
                Estoque atualizado · Santa Rosa/RS
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Encontre seu próximo veículo com{" "}
                <span className="bg-gradient-highlight bg-clip-text text-transparent">
                  segurança
                </span>{" "}
                e confiança
              </h1>
              <p className="mt-5 text-base leading-relaxed opacity-80 lg:text-lg">
                Veículos selecionados em Santa Rosa/RS, com atendimento
                personalizado e negociação facilitada para você sair de carro
                novo hoje.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 bg-gradient-highlight px-7 text-highlight-foreground hover:opacity-90"
                >
                  <Link href="/estoque">
                    Ver estoque <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hidden h-12 border-white/20 bg-white/5 px-7 text-brand-foreground hover:bg-white/10 hover:text-brand-foreground sm:inline-flex"
                >
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" /> Falar com a loja
                  </a>
                </Button>
              </div>

              <div className="mt-10 hidden max-w-md grid-cols-3 gap-4 sm:grid">
                {[
                  { n: "+500", l: "Carros vendidos" },
                  { n: "98%", l: "Clientes satisfeitos" },
                  { n: "10+", l: "Anos no mercado" },
                ].map((stat) => (
                  <div key={stat.l}>
                    <div className="font-display text-2xl font-bold lg:text-3xl">
                      {stat.n}
                    </div>
                    <div className="mt-1 text-xs opacity-70">{stat.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 lg:hidden">
                <SearchBar />
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 rounded-full bg-gradient-highlight opacity-20 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elegant">
                <Image
                  src="/images/hero-car.jpg"
                  alt="Veículo em destaque"
                  width={1920}
                  height={1080}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:pt-16 lg:pb-20">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 lg:px-8 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-highlight">
              Destaques da loja
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">
              Veículos em destaque
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Seleção semanal dos melhores seminovos e usados disponíveis em
              estoque.
            </p>
          </div>
          <Button asChild variant="ghost" className="self-start sm:self-end">
            <Link href="/estoque">
              Ver estoque completo <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {featured.map((vehicle) => (
            <VehicleCard key={vehicle.id} v={vehicle} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-highlight">
              Categorias
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">
              Encontre pelo tipo de veículo
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href="/categorias"
                className="group rounded-2xl border border-border bg-card p-5 text-center transition-smooth hover:border-highlight hover:shadow-card-hover"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-brand font-display font-bold text-brand-foreground transition-smooth group-hover:scale-110">
                  {category.name.charAt(0)}
                </div>
                <div className="font-semibold">{category.name}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {category.count} veículos
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-highlight">
              Sobre a AP Automóveis
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">
              Compra segura, atendimento transparente
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Na AP Automóveis, você encontra veículos selecionados, atendimento
              transparente e uma experiência de compra simples e segura. Estamos
              localizados em Santa Rosa/RS e prontos para ajudar você a encontrar
              o carro ideal.
            </p>
            <Button
              asChild
              className="mt-8 bg-gradient-brand text-brand-foreground hover:opacity-90"
            >
              <Link href="/sobre">
                Conheça a loja <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-highlight/10 text-highlight">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 lg:px-8 lg:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-brand-foreground shadow-elegant lg:p-16">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-highlight/30 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight lg:text-4xl">
                Gostou de algum veículo?
              </h2>
              <p className="mt-3 text-lg opacity-80">
                Entre em contato agora e fale com nossa equipe.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 bg-gradient-highlight px-7 text-highlight-foreground hover:opacity-90"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white/20 bg-white/5 px-7 text-brand-foreground hover:bg-white/10 hover:text-brand-foreground"
              >
                <Link href="/estoque">Ver estoque completo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
