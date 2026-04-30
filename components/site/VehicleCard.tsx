import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Fuel, Gauge, Settings2 } from "lucide-react";

import { type Vehicle, formatKm, formatPrice, whatsappLink } from "@/data/vehicles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:shadow-card-hover">
      <Link href="/estoque" className="relative block aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={v.image}
          alt={v.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-smooth group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 border border-border bg-background/90 text-foreground backdrop-blur hover:bg-background/90">
          {v.category}
        </Badge>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 font-display text-lg font-semibold leading-tight">
          {v.name}
        </h3>
        <div className="mt-1 font-display text-2xl font-bold text-highlight">
          {formatPrice(v.price)}
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-2.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {v.year}
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5" /> {formatKm(v.km)}
          </div>
          <div className="flex items-center gap-1.5">
            <Settings2 className="h-3.5 w-3.5" /> {v.transmission}
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="h-3.5 w-3.5" /> {v.fuel}
          </div>
        </dl>

        <div className="mt-5 flex gap-2 border-t border-border pt-4">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href="/estoque">
              Detalhes <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="flex-1 bg-gradient-highlight text-highlight-foreground hover:opacity-90"
          >
            <a
              href={whatsappLink(
                `Olá! Tenho interesse no ${v.name} (${v.year}) anunciado por ${formatPrice(v.price)}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tenho interesse
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
