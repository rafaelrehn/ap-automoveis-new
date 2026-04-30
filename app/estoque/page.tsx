import type { Metadata } from "next";

import { StockPageClient } from "@/components/pages/StockPageClient";

export const metadata: Metadata = {
  title: "Estoque",
  description:
    "Veja todos os veículos seminovos e usados disponíveis na AP Automóveis em Santa Rosa/RS.",
};

export default async function EstoquePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;

  return <StockPageClient initialQuery={params.q ?? ""} />;
}
