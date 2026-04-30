"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = query.trim()
      ? `/estoque?q=${encodeURIComponent(query.trim())}`
      : "/estoque";

    router.push(url);
  };

  return (
    <div className="relative z-10 mx-auto max-w-3xl">
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 rounded-full border border-border bg-card p-3 pl-6 shadow-elegant transition-smooth focus-within:border-highlight focus-within:shadow-card-hover"
      >
        <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="Buscar veículo por marca, modelo ou ano..."
          className="min-w-0 flex-1 bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground"
          aria-label="Buscar veículo"
        />
        <Button
          type="submit"
          size="lg"
          className="h-12 shrink-0 rounded-full bg-highlight px-6 text-highlight-foreground hover:bg-highlight/90 lg:px-8"
        >
          <span className="hidden sm:inline">Buscar</span>
          <Search className="h-4 w-4 sm:hidden" />
        </Button>
      </form>
    </div>
  );
}
