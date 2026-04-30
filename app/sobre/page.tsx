import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Handshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a AP Automóveis: revenda de veículos seminovos em Santa Rosa/RS com atendimento transparente.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Veículos selecionados",
    desc: "Cada carro passa por avaliação criteriosa antes de entrar no estoque.",
  },
  {
    icon: Handshake,
    title: "Negociação facilitada",
    desc: "Aceitamos seu usado na troca e oferecemos opções de financiamento.",
  },
  {
    icon: Sparkles,
    title: "Atendimento personalizado",
    desc: "Equipe pronta para entender o que você precisa.",
  },
  {
    icon: MapPin,
    title: "Loja física",
    desc: "Showroom no centro de Santa Rosa/RS para você conhecer pessoalmente.",
  },
  {
    icon: Award,
    title: "Procedência garantida",
    desc: "Histórico verificado e documentação em dia.",
  },
  {
    icon: Users,
    title: "Clientes satisfeitos",
    desc: "Mais de 500 famílias confiaram na AP.",
  },
] as const;

export default function SobrePage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-brand-foreground lg:py-28">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-highlight">
            Sobre nós
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold lg:text-5xl">
            A AP Automóveis
          </h1>
          <p className="mt-5 text-lg leading-relaxed opacity-85">
            Na AP Automóveis, você encontra veículos selecionados, atendimento
            transparente e uma experiência de compra simples e segura. Estamos
            localizados em Santa Rosa/RS e prontos para ajudar você a encontrar
            o carro ideal.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-highlight/10 text-highlight">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{value.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-brand p-8 text-center text-brand-foreground lg:p-12">
          <h2 className="font-display text-2xl font-bold lg:text-3xl">
            Pronto para conhecer nosso estoque?
          </h2>
          <p className="mt-3 opacity-80">
            Confira os veículos disponíveis ou venha nos visitar.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-highlight text-highlight-foreground hover:opacity-90"
            >
              <Link href="/estoque">Ver estoque</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-brand-foreground hover:bg-white/10 hover:text-brand-foreground"
            >
              <Link href="/contato">Fale conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
