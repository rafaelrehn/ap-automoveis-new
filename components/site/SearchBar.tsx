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
    <div className="relative z-10 mx-auto w-full max-w-3xl min-w-0">
      <form
        onSubmit={onSubmit}
        className="flex w-full max-w-full min-w-0 items-center gap-2 rounded-full border border-border bg-card p-2 pr-2 pl-4 shadow-elegant transition-smooth focus-within:border-highlight focus-within:shadow-card-hover sm:p-3 sm:pl-6"
      >
        <Search className="h-4 w-4 shrink-0 text-muted-foreground sm:h-5 sm:w-5" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="Buscar veículo"
          className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground sm:py-3 sm:text-base"
          aria-label="Buscar veículo"
        />
        <Button
          type="submit"
          size="lg"
          className="h-10 w-10 shrink-0 rounded-full bg-highlight px-0 text-highlight-foreground hover:bg-highlight/90 sm:h-12 sm:w-auto sm:px-6 lg:px-8"
        >
          <span className="hidden sm:inline">Buscar</span>
          <Search className="h-4 w-4 sm:hidden" />
        </Button>
      </form>
    </div>
  );
}
