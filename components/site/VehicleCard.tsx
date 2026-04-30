import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Fuel, Gauge, Settings2 } from "lucide-react";

import {
  type Vehicle,
  formatKm,
  formatPrice,
  getVehicleHref,
  whatsappLink,
} from "@/data/vehicles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function VehicleCard({ v }: { v: Vehicle }) {
  const href = getVehicleHref(v);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-smooth hover:shadow-card-hover sm:rounded-2xl">
      <Link href={href} className="relative block aspect-[5/4] overflow-hidden bg-secondary sm:aspect-[4/3]">
        <Image
          src={v.image}
          alt={v.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-smooth group-hover:scale-105"
        />
        <Badge className="absolute top-2 left-2 border border-border bg-background/90 px-2 py-0.5 text-[10px] text-foreground backdrop-blur hover:bg-background/90 sm:top-3 sm:left-3 sm:px-2.5 sm:py-1 sm:text-xs">
          {v.category}
        </Badge>
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <h3 className="line-clamp-2 min-h-[2.5rem] font-display text-sm font-semibold leading-tight sm:line-clamp-1 sm:min-h-0 sm:text-lg">
          {v.name}
        </h3>
        <div className="mt-1 font-display text-lg font-bold text-highlight sm:text-2xl">
          {formatPrice(v.price)}
        </div>

        <dl className="mt-3 grid grid-cols-1 gap-1.5 text-[11px] text-muted-foreground sm:mt-4 sm:grid-cols-2 sm:gap-2.5 sm:text-xs">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {v.year}
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5" /> {formatKm(v.km)}
          </div>
          <div className="hidden items-center gap-1.5 sm:flex">
            <Settings2 className="h-3.5 w-3.5" /> {v.transmission}
          </div>
          <div className="hidden items-center gap-1.5 sm:flex">
            <Fuel className="h-3.5 w-3.5" /> {v.fuel}
          </div>
        </dl>

        <div className="mt-3 flex gap-2 border-t border-border pt-3 sm:mt-5 sm:pt-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 flex-1 px-2 text-[11px] sm:h-9 sm:px-3 sm:text-sm"
          >
            <Link href={href}>
              Detalhes <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="hidden flex-1 bg-gradient-highlight text-highlight-foreground hover:opacity-90 sm:inline-flex"
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
