"use client";

import Checkbox from "@shared/components/Checkbox";
import { useLanguageFilter } from "@hooks/useLanguageFilter";

const LANGS = [
  { code: "en", label: "Английский" },
  { code: "fr", label: "Французский" },
  { code: "de", label: "Немецкий" },
];

export default function CheckboxList() {
  const { activeLangs, toggleLanguage } = useLanguageFilter();

  return (
    <div className="space-y-4">
      {LANGS.map(({ code, label }) => (
        <Checkbox
          key={code}
          label={label}
          checked={activeLangs.has(code)}
          onChange={(checked) => toggleLanguage(code, checked)}
        />
      ))}
    </div>
  );
}