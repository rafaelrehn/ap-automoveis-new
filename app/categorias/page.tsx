import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { categories, vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/site/VehicleCard";

export const metadata: Metadata = {
  title: "Categorias",
  description:
    "Navegue por categoria: Hatch, Sedan, SUV, Picape, Utilitário e mais. Veículos seminovos em Santa Rosa/RS.",
};

export default function CategoriasPage() {
  return (
    <section className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-highlight">
          Categorias
        </span>
        <h1 className="mt-2 font-display text-3xl font-bold lg:text-4xl">
          Encontre pelo tipo de veículo
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Escolha a categoria que mais combina com seu estilo de vida.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href="/estoque"
            className="group rounded-2xl border border-border bg-card p-6 text-center transition-smooth hover:border-highlight hover:shadow-card-hover"
          >
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand font-display text-2xl font-bold text-brand-foreground transition-smooth group-hover:scale-110">
              {category.name.charAt(0)}
            </div>
            <div className="font-semibold">{category.name}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">
              {category.count} veículos
            </div>
          </Link>
        ))}
      </div>

      {categories
        .filter((category) => category.count > 0)
        .map((category) => (
          <div key={category.name} className="mb-14">
            <div className="mb-5 flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold">{category.name}</h2>
              <Link
                href="/estoque"
                className="inline-flex items-center gap-1 text-sm text-highlight hover:underline"
              >
                Ver todos <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {vehicles
                .filter((vehicle) => vehicle.category === category.name)
                .slice(0, 4)
                .map((vehicle) => (
                  <VehicleCard key={vehicle.id} v={vehicle} />
                ))}
            </div>
          </div>
        ))}
    </section>
  );
}
