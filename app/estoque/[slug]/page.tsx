import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CarFront,
  Fuel,
  Gauge,
  MapPin,
  MessageCircle,
  Palette,
  Settings2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { VehicleCard } from "@/components/site/VehicleCard";
import { VehicleGallery } from "@/components/site/VehicleGallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ADDRESS,
  formatKm,
  formatPrice,
  getVehicleBySlug,
  vehicles,
  whatsappLink,
} from "@/data/vehicles";

type VehicleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({
  params,
}: VehicleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Veículo não encontrado",
    };
  }

  const description = `${vehicle.name} ${vehicle.year}, ${formatKm(vehicle.km)}, ${vehicle.transmission}. AP Automóveis em Santa Rosa/RS por ${formatPrice(vehicle.price)}.`;

  return {
    title: vehicle.name,
    description,
    openGraph: {
      title: `${vehicle.name} | AP Automóveis`,
      description,
    },
  };
}

export default async function VehicleDetailPage({
  params,
}: VehicleDetailPageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const related = vehicles
    .filter((item) => item.slug !== vehicle.slug && item.category === vehicle.category)
    .slice(0, 3);
  const quickSummary = [
    vehicle.category,
    vehicle.year,
    formatKm(vehicle.km),
    vehicle.transmission,
  ].join(" • ");

  const specs = [
    { icon: Calendar, label: "Ano / Modelo", value: vehicle.year },
    { icon: Gauge, label: "Quilometragem", value: formatKm(vehicle.km) },
    { icon: Settings2, label: "Câmbio", value: vehicle.transmission },
    { icon: Fuel, label: "Combustível", value: vehicle.fuel },
    { icon: Palette, label: "Cor", value: vehicle.color },
    { icon: CarFront, label: "Motorização", value: vehicle.engine },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero text-brand-foreground">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-highlight/25 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-highlight/10 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 py-10 lg:px-8 lg:py-16">
          <Link
            href="/estoque"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-brand-foreground transition-smooth hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao estoque
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,420px)] lg:items-start">
            <VehicleGallery images={vehicle.gallery} alt={vehicle.name} />

            <div className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-elegant backdrop-blur lg:p-7">
              <Badge className="border-white/15 bg-white/10 text-brand-foreground hover:bg-white/10">
                {vehicle.category}
              </Badge>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight lg:text-4xl">
                {vehicle.name}
              </h1>
              <p className="mt-3 text-sm leading-relaxed opacity-80 lg:text-base">
                {quickSummary}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-semibold tracking-widest uppercase text-highlight">
                  Preço anunciado
                </div>
                <div className="mt-2 font-display text-4xl font-bold">
                  {formatPrice(vehicle.price)}
                </div>
                <div className="mt-2 text-sm opacity-75">
                  Consulte condições, financiamento e avaliação do seu usado na troca.
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {specs.slice(0, 4).map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3"
                  >
                    <div className="flex items-center gap-2 text-highlight">
                      <item.icon className="h-4 w-4" />
                      <span className="text-xs font-semibold tracking-wide uppercase">
                        {item.label}
                      </span>
                    </div>
                    <div className="mt-2 font-medium text-brand-foreground">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 bg-gradient-highlight text-highlight-foreground hover:opacity-90"
                >
                  <a
                    href={whatsappLink(
                      `Olá! Tenho interesse no ${vehicle.name} (${vehicle.year}) anunciado por ${formatPrice(vehicle.price)}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Falar sobre este veículo
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-white/20 bg-white/5 text-brand-foreground hover:bg-white/10 hover:text-brand-foreground"
                >
                  <Link href="/contato">
                    Agendar atendimento <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card lg:p-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-highlight">
                Destaques
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold lg:text-3xl">
                O que chama atenção neste modelo
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {vehicle.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-secondary/40 p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-highlight/10 text-highlight">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-card lg:p-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-highlight">
                Ficha técnica
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold lg:text-3xl">
                Especificações do veículo
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {specs.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-background p-4"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <item.icon className="h-4 w-4 text-highlight" />
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-highlight/10 text-highlight">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold">
                Atendimento transparente
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tire dúvidas, consulte condições e fale com a equipe da AP
                Automóveis.
              </p>
              <Button
                asChild
                className="mt-5 w-full bg-gradient-brand text-brand-foreground hover:opacity-90"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <MapPin className="h-4 w-4 text-highlight" />
                Localização
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {ADDRESS}
              </p>
              <Button asChild variant="outline" className="mt-5 w-full">
                <Link href="/contato">Falar com a loja</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/40 py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-highlight">
                  Mais opções
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold lg:text-3xl">
                  Outros veículos da categoria {vehicle.category}
                </h2>
              </div>
              <Button asChild variant="ghost" className="self-start sm:self-auto">
                <Link href="/estoque">
                  Ver estoque completo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <VehicleCard key={item.id} v={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
