import { useState } from "react";
import { copyText } from "../lib/prompt";

export function CopyButton({
  text,
  label = "Copy",
  className = "",
}: {
  text: string | (() => string);
  label?: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        const ok = await copyText(typeof text === "function" ? text() : text);
        if (ok) {
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        }
      }}
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition " +
        (done
          ? "border-scarf bg-scarf text-white"
          : "border-ink/30 bg-paper/70 text-ink hover:border-scarf hover:text-scarf") +
        " " +
        className
      }
    >
      <span aria-hidden>{done ? "✓" : "⧉"}</span>
      {done ? "Copied" : label}
    </button>
  );
}
