"use client";

import { useState } from "react";

type Item = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-2xl border border-amber-900/10 bg-amber-50 p-4">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left text-amber-950"
              aria-expanded={isOpen}
            >
              <span className="font-medium">{item.question}</span>
              <span className="text-xl">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? <p className="mt-3 text-sm text-amber-900/80">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

