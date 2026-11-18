import { useState } from "react";
import { episodes } from "../data/episodes";
import { characters } from "../data/world";
import { clipsFor, composePrompt, fmt } from "../lib/prompt";
import { CopyButton } from "./CopyButton";

const sceneColors = ["#f2cfc6", "#bcd2e0", "#f3e2a9", "#d9cde7", "#c8d5bd", "#e8a9a0"];

function Meter({ label, value, color = "#c8102e" }: { label: string; value: number; color?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 font-mono text-[10px] uppercase tracking-wider text-ink-soft">{label}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className="h-2 w-6 rounded-full"
            style={{ background: n <= value ? color : "rgba(29,27,34,0.12)" }}
          />
        ))}
      </div>
    </div>
  );
}

export function Episodes() {
  const [active, setActive] = useState(0);
  const [sceneIdx, setSceneIdx] = useState<number | null>(null);
  const [openPrompt, setOpenPrompt] = useState<Record<string, boolean>>({});
  const ep = episodes[active];

  let cursor = 0;
  const starts = ep.scenes.map((s) => {
    const st = cursor;
    cursor += s.dur;
    return st;
  });

  return (
    <section id="episodes" className="relative bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-scarf">04 — The Season</p>
        <h2 className="mt-3 font-display text-5xl italic md:text-7xl">Six episodes. Thirty minutes. One thread.</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Each episode runs exactly 5:00 and is built from six scenes. Tap an episode, then tap a scene on the timeline.
          Every scene comes with a ready-to-paste Seedance 2.5 prompt.
        </p>

        {/* episode tabs */}
        <div className="scrollbar-thin mt-10 flex gap-3 overflow-x-auto pb-3">
          {episodes.map((e, i) => (
            <button
              key={e.no}
              onClick={() => {
                setActive(i);
                setSceneIdx(null);
              }}
              className={
                "group shrink-0 rounded-2xl border px-5 py-4 text-left transition " +
                (i === active ? "border-ink bg-ink text-cream shadow-xl" : "border-ink/15 bg-cream hover:border-ink/50")
              }
              style={i === active ? undefined : { borderBottomColor: e.tint, borderBottomWidth: 5 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">Ep {String(e.no).padStart(2, "0")}</span>
              <span className="mt-1 block font-display text-xl italic leading-tight">{e.title}</span>
            </button>
          ))}
        </div>

        {/* episode panel */}
        <article key={ep.no} className="fade-up mt-6 overflow-hidden rounded-[2rem] border border-ink/10 bg-cream shadow-[0_30px_80px_-40px_rgba(29,27,34,0.5)]">
          <header className="relative px-6 py-10 md:px-12 md:py-14" style={{ background: `linear-gradient(135deg, ${ep.tint}, #f7efe3 80%)` }}>
            <span
              className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[14rem] font-semibold italic leading-none"
              style={{ color: ep.no === 4 ? "rgba(247,239,227,0.25)" : "rgba(29,27,34,0.07)" }}
            >
              {ep.no}
            </span>
            <div className={ep.no === 4 ? "relative text-cream" : "relative"}>
              <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-70">
                Episode {ep.no} · 5:00 · {ep.hour}
              </p>
              <h3 className="mt-3 font-display text-5xl italic leading-none md:text-7xl">{ep.title}</h3>
              <p className="mt-1 font-display text-2xl opacity-80">{ep.en}</p>
              <p className="mt-6 max-w-2xl font-display text-2xl italic leading-snug md:text-3xl">“{ep.tagline}”</p>
            </div>
          </header>

          <div className="grid gap-10 px-6 py-10 md:grid-cols-[1.4fr_1fr] md:px-12">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-scarf">Logline</h4>
              <p className="mt-3 text-lg leading-relaxed">{ep.logline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {ep.themes.map((t) => (
                  <span key={t} className="rounded-full border border-ink/20 px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3 rounded-2xl bg-paper p-5">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-scarf">Episode Pulse</h4>
              <Meter label="Romance" value={ep.stats.romance} />
              <Meter label="Career" value={ep.stats.career} color="#5d86a3" />
              <Meter label="Friendship" value={ep.stats.friendship} color="#e0a43a" />
              <Meter label="Mystery" value={ep.stats.mystery} color="#2b2f4f" />
              <Meter label="Sensual tension" value={ep.stats.heat} color="#8f0a20" />
            </div>
          </div>

          {/* timeline */}
          <div className="px-6 md:px-12">
            <div className="flex items-end justify-between">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-scarf">Timeline · 5:00</h4>
              <span className="font-mono text-[11px] text-ink-soft">6 scenes · ≈ {ep.scenes.reduce((a, s) => a + clipsFor(s.dur), 0)} clips</span>
            </div>
            <div className="mt-3 flex h-14 gap-1 overflow-hidden rounded-xl">
              {ep.scenes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSceneIdx(i);
                    document.getElementById(`scene-${ep.no}-${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  style={{ flex: s.dur, background: sceneColors[i] }}
                  className={
                    "relative flex items-center justify-center text-[11px] font-medium transition hover:brightness-95 " +
                    (sceneIdx === i ? "ring-2 ring-inset ring-scarf" : "")
                  }
                  title={`${s.title} (${fmt(starts[i])})`}
                >
                  <span className="hidden sm:inline">{i + 1}</span>
                  <span className="sm:hidden">{i + 1}</span>
                </button>
              ))}
            </div>
            <div className="mt-1 flex justify-between font-mono text-[10px] text-ink-soft">
              <span>0:00</span>
              <span>1:00</span>
              <span>2:00</span>
              <span>3:00</span>
              <span>4:00</span>
              <span>5:00</span>
            </div>
          </div>

          {/* scenes */}
          <div className="space-y-5 px-6 py-10 md:px-12">
            {ep.scenes.map((s, i) => {
              const key = `${ep.no}-${i}`;
              const full = composePrompt(ep, s, i);
              const isOpen = !!openPrompt[key];
              return (
                <div
                  id={`scene-${key}`}
                  key={key}
                  className={
                    "rounded-2xl border bg-paper p-5 transition md:p-7 " +
                    (sceneIdx === i ? "border-scarf shadow-lg" : "border-ink/10")
                  }
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-full font-display text-xl italic"
                      style={{ background: sceneColors[i] }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h5 className="font-display text-2xl italic leading-tight md:text-3xl">{s.title}</h5>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                        {fmt(starts[i])} – {fmt(starts[i] + s.dur)} · {s.dur}s · {s.place}
                      </p>
                    </div>
                    <div className="ml-auto flex -space-x-2">
                      {s.cast.map((id) => {
                        const c = characters.find((x) => x.id === id)!;
                        return (
                          <span
                            key={id}
                            title={c.name}
                            className="grid h-8 w-8 place-items-center rounded-full border-2 border-paper text-[11px] font-semibold text-white"
                            style={{ background: c.tint }}
                          >
                            {c.name[0]}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <p className="mt-4 leading-relaxed">{s.beat}</p>

                  <p className="mt-4 flex gap-3 rounded-xl bg-scarf/10 px-4 py-3 text-sm leading-relaxed">
                    <span className="mt-0.5 shrink-0 font-mono text-[10px] uppercase tracking-wider text-scarf">Scarf</span>
                    <span>{s.scarf}</span>
                  </p>

                  <div className="mt-4 rounded-xl border border-dashed border-ink/25 bg-cream/70 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                        Seedance 2.5 · {clipsFor(s.dur)} clips × ≈12s
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setOpenPrompt((o) => ({ ...o, [key]: !o[key] }))}
                          className="rounded-full border border-ink/30 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider hover:border-scarf hover:text-scarf"
                        >
                          {isOpen ? "Hide full" : "View full"}
                        </button>
                        <CopyButton text={full} label="Copy full prompt" />
                      </div>
                    </div>
                    <p className="mt-3 font-mono text-[13px] leading-relaxed text-ink/85">{s.prompt}</p>
                    {isOpen && (
                      <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-lg bg-ink p-4 font-mono text-[12px] leading-relaxed text-cream/90">
                        {full}
                      </pre>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* footer meta */}
          <div className="grid gap-px bg-ink/10 md:grid-cols-3">
            {[
              { k: "Scarf Lore", v: ep.scarfRule },
              { k: "Music", v: ep.music },
              { k: "Cliffhanger", v: ep.cliffhanger },
            ].map((m) => (
              <div key={m.k} className="bg-paper p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-scarf">{m.k}</p>
                <p className="mt-2 leading-relaxed">{m.v}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between border-t border-ink/10 bg-cream px-6 py-4 md:px-12">
            <button
              disabled={active === 0}
              onClick={() => {
                setActive(active - 1);
                setSceneIdx(null);
              }}
              className="font-display text-xl italic disabled:opacity-30"
            >
              ← Previous
            </button>
            <button
              disabled={active === episodes.length - 1}
              onClick={() => {
                setActive(active + 1);
                setSceneIdx(null);
              }}
              className="font-display text-xl italic disabled:opacity-30"
            >
              Next episode →
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
