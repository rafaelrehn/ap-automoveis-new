"use client";

import { useMemo, useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";

import { categories, vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/site/VehicleCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const brands = Array.from(new Set(vehicles.map((v) => v.brand))).sort();

function Filters({
  brand,
  category,
  onBrandChange,
  onCategoryChange,
}: {
  brand: string;
  category: string;
  onBrandChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Marca
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onBrandChange("")}
            className={`rounded-full border px-3 py-1.5 text-xs transition-smooth ${
              brand === ""
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card hover:border-foreground"
            }`}
          >
            Todas
          </button>
          {brands.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onBrandChange(item)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-smooth ${
                brand === item
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:border-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Categoria
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onCategoryChange("")}
            className={`rounded-full border px-3 py-1.5 text-xs transition-smooth ${
              category === ""
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card hover:border-foreground"
            }`}
          >
            Todas
          </button>
          {categories.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => onCategoryChange(item.name)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-smooth ${
                category === item.name
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:border-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StockPageClient({ initialQuery = "" }: { initialQuery?: string }) {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("recentes");

  const normalizedQuery = initialQuery.trim().toLowerCase();

  const filtered = useMemo(() => {
    let list = vehicles.filter((vehicle) => {
      const matchesFilters =
        (!brand || vehicle.brand === brand) &&
        (!category || vehicle.category === category);

      const matchesQuery =
        !normalizedQuery ||
        vehicle.name.toLowerCase().includes(normalizedQuery) ||
        vehicle.brand.toLowerCase().includes(normalizedQuery) ||
        vehicle.model.toLowerCase().includes(normalizedQuery) ||
        vehicle.year.toLowerCase().includes(normalizedQuery);

      return matchesFilters && matchesQuery;
    });

    if (sort === "menor") {
      list = [...list].sort((a, b) => a.price - b.price);
    }
    if (sort === "maior") {
      list = [...list].sort((a, b) => b.price - a.price);
    }
    if (sort === "ano") {
      list = [...list].sort((a, b) => b.year.localeCompare(a.year));
    }

    return list;
  }, [brand, category, normalizedQuery, sort]);

  return (
    <section className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-8">
        <span className="text-xs font-semibold tracking-widest uppercase text-highlight">
          Estoque completo
        </span>
        <h1 className="mt-2 font-display text-3xl font-bold lg:text-4xl">
          Todos os veículos disponíveis
        </h1>
        <p className="mt-2 text-muted-foreground">
          {filtered.length} veículos encontrados
          {normalizedQuery ? ` para "${initialQuery}"` : ""}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="mb-5 flex items-center gap-2 border-b border-border pb-4">
              <Filter className="h-4 w-4 text-highlight" />
              <h2 className="font-display font-semibold">Filtros</h2>
            </div>
            <Filters
              brand={brand}
              category={category}
              onBrandChange={setBrand}
              onCategoryChange={setCategory}
            />
          </div>
        </aside>

        <div>
          <div className="mb-5 flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex-1 lg:hidden">
                  <SlidersHorizontal className="h-4 w-4" /> Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <Filters
                    brand={brand}
                    category={category}
                    onBrandChange={setBrand}
                    onCategoryChange={setCategory}
                  />
                </div>
              </SheetContent>
            </Sheet>

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="ml-auto lg:w-56">
                <SelectValue placeholder="Ordenar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recentes">Mais recentes</SelectItem>
                <SelectItem value="menor">Menor preço</SelectItem>
                <SelectItem value="maior">Maior preço</SelectItem>
                <SelectItem value="ano">Ano mais novo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-16 text-center">
              <p className="text-muted-foreground">
                Nenhum veículo encontrado com esses filtros.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setBrand("");
                  setCategory("");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {filtered.map((vehicle) => (
                <VehicleCard key={vehicle.id} v={vehicle} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
