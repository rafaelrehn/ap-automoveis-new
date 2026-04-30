"use client";

import { type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/data/vehicles";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappLink("Olá! Vim pelo formulário do site."), "_blank");
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card lg:p-8">
      <h2 className="font-display text-xl font-semibold">Envie uma mensagem</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Responderemos pelo canal informado.
      </p>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="text-sm font-medium">Nome</label>
          <input
            className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3 focus:ring-2 focus:ring-highlight focus:outline-none"
            required
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Telefone</label>
            <input
              type="tel"
              className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3 focus:ring-2 focus:ring-highlight focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">E-mail</label>
            <input
              type="email"
              className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3 focus:ring-2 focus:ring-highlight focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">Mensagem</label>
          <textarea
            rows={4}
            className="mt-1.5 w-full resize-none rounded-lg border border-input bg-background px-3 py-2 focus:ring-2 focus:ring-highlight focus:outline-none"
            required
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-gradient-highlight text-highlight-foreground hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" /> Enviar via WhatsApp
        </Button>
      </form>
    </div>
  );
}
