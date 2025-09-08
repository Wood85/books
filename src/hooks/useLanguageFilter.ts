"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export function useLanguageFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeLangs = useMemo(
    () =>
      new Set(
        (searchParams.get("languages") ?? "")
          .split(",")
          .filter(Boolean)
      ),
    [searchParams]
  );

  const toggleLanguage = (code: string, checked: boolean) => {
    const newLangs = new Set(activeLangs);

    if (checked) {
      newLangs.add(code);
    } else {
      newLangs.delete(code);
    }

    const params = new URLSearchParams(searchParams.toString());

    if (newLangs.size > 0) {
      params.set("languages", Array.from(newLangs).join(","));
    } else {
      params.delete("languages");
    }

    // сохраняем все остальные query (search, sort и т.д.)
    router.push(`/books?${params.toString()}`);
  };

  return { activeLangs, toggleLanguage };
}