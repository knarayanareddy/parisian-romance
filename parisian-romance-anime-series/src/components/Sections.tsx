import { useState } from "react";
import { episodes } from "../data/episodes";
import {
  characters,
  inspirations,
  locations,
  music,
  palette,
  scarfRules,
  styleRules,
} from "../data/world";
import { CopyButton } from "./CopyButton";
import { ScarfDivider } from "./ScarfArt";

function Eyebrow({ n, children, light = false }: { n: string; children: string; light?: boolean }) {
  return (
    <p className={"font-mono text-xs uppercase tracking-[0.3em] " + (light ? "text-blush" : "text-scarf")}>
      {n} — {children}
    </p>
  );
}

export function Concept() {
  return (
    <section id="concept" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow n="01">The Premise</Eyebrow>
        <div className="mt-4 grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-display text-5xl italic leading-[1.02] md:text-7xl">
              A girl, a scarf with no end, and a city full of people who need to be tied together.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              <strong className="font-semibold text-ink">Aiko Marchand</strong> is 26, half-Japanese, half-French and
              wholly lost. When her grandmother Mitsuko — the legendary knitter-couturière of Passage des Panoramas — dies,
              she leaves Aiko an atelier on the brink of foreclosure and a hand-knitted crimson scarf that never stops
              unspooling.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              The scarf drifts toward people with untold truths. It wraps around lovers, liars, bartenders and billionaires —
              and every knot it ties shortens the thread. Across six episodes, Aiko writes her way into the glossiest
              magazine in Paris, falls for a man whose power is a locked room, nearly falls for a man whose warmth is a
              harbour, and slowly realises the most important knot she'll ever tie is the one around her own wrist.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              It is a series about glamour with a conscience: brunch, ambition, desire, friendship, and the stubborn magic of
              telling the truth in a city built on beautiful lies.
            </p>
          </div>
          <aside className="space-y-4 self-start rounded-3xl bg-ink p-8 text-cream">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-blush">At a glance</p>
            {[
              ["Format", "6 episodes × 5:00 (30 min total)"],
              ["Genre", "Romance · Workplace · Magical realism"],
              ["Rating", "16+ — sensual tension, adult themes; nothing explicit"],
              ["Look", "Hand-drawn French minimalism meets anime acting"],
              ["Engine", "Seedance 2.5 · 4K · 24fps · 16:9"],
              ["Tone", "Dreamy · nostalgic · romantic · whimsical · heartwarming"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-cream/15 pt-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-cream/50">{k}</p>
                <p className="mt-1 font-display text-xl leading-snug">{v}</p>
              </div>
            ))}
          </aside>
        </div>

        {/* inspirations */}
        <div className="mt-24">
          <h3 className="font-display text-4xl italic md:text-5xl">Four muses, remixed.</h3>
          <p className="mt-3 max-w-2xl text-ink-soft">
            What we borrowed from the shows that shaped the genre — and what we changed.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {inspirations.map((s, i) => (
              <div key={s.show} className="rounded-3xl border border-ink/10 bg-paper p-7">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-9 w-9 place-items-center rounded-full font-display text-lg italic text-white"
                    style={{ background: ["#e8a9a0", "#bcd2e0", "#c8d5bd", "#2b2f4f"][i] }}
                  >
                    {i + 1}
                  </span>
                  <h4 className="font-display text-3xl italic">{s.show}</h4>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink">We take · </span>
                  {s.takes}
                </p>
                <p className="mt-3 text-sm leading-relaxed">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-scarf">Our twist · </span>
                  {s.twist}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScarfRules() {
  return (
    <section id="scarf" className="relative overflow-hidden bg-indigo py-24 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow n="02" light>
          The Mythology
        </Eyebrow>
        <h2 className="mt-3 font-display text-5xl italic md:text-7xl">The Four Rules of the Scarf</h2>
        <p className="mt-5 max-w-2xl text-lg text-cream/70">
          Mitsuko knit exactly 1,000 metres. Each episode reveals a rule — and each rule gives the animators a repeatable
          visual language.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {scarfRules.map((r) => (
            <div key={r.n} className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 p-8 transition hover:bg-cream/10">
              <span className="absolute -right-3 -top-6 font-display text-9xl italic text-scarf/30 transition group-hover:text-scarf/60">
                {r.n}
              </span>
              <h3 className="relative font-display text-3xl italic">{r.title}</h3>
              <p className="relative mt-3 leading-relaxed text-cream/75">{r.body}</p>
            </div>
          ))}
        </div>

        {/* scarf meter */}
        <div className="mt-14 rounded-3xl border border-cream/15 p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-blush">Thread remaining across the season</p>
          <div className="mt-5 h-5 overflow-hidden rounded-full bg-cream/10">
            <div className="h-full rounded-full bg-scarf" style={{ width: "100%" }} />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] text-cream/70 md:grid-cols-6">
            {[
              ["Ep 1", "1,000 m"],
              ["Ep 2", "820 m"],
              ["Ep 3", "610 m"],
              ["Ep 4", "290 m"],
              ["Ep 5", "40 m"],
              ["Ep 6", "1 m → hers"],
            ].map(([a, b]) => (
              <div key={a} className="rounded-xl bg-cream/5 p-3">
                <p className="text-cream/50">{a}</p>
                <p className="mt-1 text-sm text-cream">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Cast() {
  const [id, setId] = useState("aiko");
  const c = characters.find((x) => x.id === id)!;
  return (
    <section id="cast" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow n="03">The Cast</Eyebrow>
        <h2 className="mt-3 font-display text-5xl italic md:text-7xl">Eight people. One thread.</h2>

        <div className="scrollbar-thin mt-10 flex gap-4 overflow-x-auto pb-3">
          {characters.map((x) => (
            <button
              key={x.id}
              onClick={() => setId(x.id)}
              className="group flex shrink-0 flex-col items-center gap-2"
            >
              <span
                className={
                  "grid h-20 w-20 place-items-center rounded-full font-display text-3xl italic text-white transition " +
                  (x.id === id ? "scale-110 ring-4 ring-scarf ring-offset-4 ring-offset-cream" : "opacity-80 group-hover:opacity-100")
                }
                style={{ background: x.tint }}
              >
                {x.name[0]}
              </span>
              <span className={"text-xs " + (x.id === id ? "font-semibold" : "text-ink-soft")}>{x.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        <div key={c.id} className="fade-up mt-8 grid overflow-hidden rounded-[2rem] border border-ink/10 bg-paper md:grid-cols-[1fr_1.5fr]">
          <div className="relative flex min-h-72 flex-col justify-end p-8 text-white" style={{ background: c.tint }}>
            <span className="absolute left-6 top-2 font-display text-[12rem] italic leading-none text-white/25">{c.name[0]}</span>
            <p className="relative font-mono text-[11px] uppercase tracking-[0.25em] opacity-90">
              {c.role} · age {c.age}
            </p>
            <h3 className="relative mt-1 font-display text-5xl italic leading-none">{c.name}</h3>
            <p className="relative mt-2 font-display text-xl opacity-90">{c.archetype}</p>
          </div>
          <div className="space-y-5 p-8">
            <p className="font-display text-2xl italic leading-snug">“{c.quote}”</p>
            {[
              ["Look", c.look],
              ["Wants", c.want],
              ["Wound", c.wound],
              ["Arc", c.arc],
              ["Inspired by", c.inspiredBy],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 border-t border-ink/10 pt-3 sm:grid-cols-[100px_1fr]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-scarf">{k}</span>
                <span className="text-sm leading-relaxed">{v}</span>
              </div>
            ))}
            <div className="rounded-xl border border-dashed border-ink/25 bg-cream/70 p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">Seedance character lock</span>
                <CopyButton text={c.lock} />
              </div>
              <p className="mt-2 font-mono text-[12px] leading-relaxed">{c.lock}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function World() {
  return (
    <section id="world" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow n="03b">The World</Eyebrow>
        <h2 className="mt-3 font-display text-5xl italic md:text-7xl">Ten places Paris will remember.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l, i) => (
            <div key={l.name} className="relative overflow-hidden rounded-3xl p-6" style={{ background: l.tint }}>
              <span className="absolute -right-2 -top-4 font-display text-8xl italic text-white/50">{String(i + 1).padStart(2, "0")}</span>
              <p className="relative font-mono text-[10px] uppercase tracking-widest text-ink/60">{l.where}</p>
              <h3 className="relative mt-1 font-display text-2xl italic leading-tight">{l.name}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-ink/80">{l.mood}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StyleBible() {
  return (
    <section id="style" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow n="03c">Visual & Sound Bible</Eyebrow>
        <h2 className="mt-3 font-display text-5xl italic md:text-7xl">Pastel Paris. One red line.</h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {palette.map((p) => (
            <button
              key={p.hex}
              onClick={() => navigator.clipboard?.writeText(p.hex)}
              title="Click to copy hex"
              className="overflow-hidden rounded-2xl border border-ink/10 bg-paper text-left transition hover:-translate-y-1"
            >
              <div className="h-24" style={{ background: p.hex }} />
              <div className="p-3">
                <p className="font-display text-lg italic leading-tight">{p.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">{p.hex}</p>
                <p className="mt-1 text-xs text-ink-soft">{p.use}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {styleRules.map((r) => (
            <div key={r.title} className="rounded-3xl border border-ink/10 bg-paper p-6">
              <h3 className="font-display text-2xl italic text-scarf">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display text-3xl italic">Sound & Music</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {music.map((m) => (
              <div key={m.title} className="flex gap-4 rounded-2xl bg-ink p-5 text-cream">
                <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-scarf">♪</span>
                <div>
                  <p className="font-display text-xl italic">{m.title}</p>
                  <p className="mt-1 text-sm text-cream/70">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const arcSeries = [
  { key: "romance", label: "Romance", color: "#c8102e" },
  { key: "career", label: "Career", color: "#5d86a3" },
  { key: "friendship", label: "Friendship", color: "#e0a43a" },
  { key: "mystery", label: "Mystery", color: "#2b2f4f" },
  { key: "heat", label: "Sensual tension", color: "#8f0a20" },
] as const;

export function Arc() {
  return (
    <section id="arc" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow n="05">Season Arc</Eyebrow>
        <h2 className="mt-3 font-display text-5xl italic md:text-7xl">The shape of the thread.</h2>
        <div className="mt-10 overflow-x-auto">
          <div className="grid min-w-[640px] grid-cols-6 gap-3">
            {episodes.map((e) => (
              <div key={e.no} className="rounded-2xl border border-ink/10 bg-cream p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">Ep {e.no}</p>
                <p className="mt-1 min-h-12 font-display text-lg italic leading-tight">{e.title}</p>
                <div className="mt-4 flex h-32 items-end gap-1.5">
                  {arcSeries.map((s) => (
                    <div key={s.key} className="flex flex-1 flex-col items-center justify-end gap-1" title={`${s.label}: ${e.stats[s.key]}/5`}>
                      <div
                        className="w-full rounded-t-md"
                        style={{ height: `${e.stats[s.key] * 20}%`, background: s.color }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-4">
          {arcSeries.map((s) => (
            <span key={s.key} className="flex items-center gap-2 text-xs text-ink-soft">
              <span className="h-3 w-3 rounded-sm" style={{ background: s.color }} />
              {s.label}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Act I · The Thread Finds Her",
              e: "Episodes 1–2",
              d: "Arrival, atelier, ÉCARLATE, the four friends, the first column. The world opens; the scarf announces itself.",
            },
            {
              t: "Act II · The Knot Tightens",
              e: "Episodes 3–5",
              d: "The contract, the ball, the betrayal, the rain. Desire, power and truth collide — and the scarf runs short.",
            },
            {
              t: "Act III · She Ties Her Own",
              e: "Episode 6",
              d: "Confession, reunion, the Tuileries show. The last metre becomes hers.",
            },
          ].map((a) => (
            <div key={a.t} className="rounded-3xl bg-ink p-7 text-cream">
              <p className="font-mono text-[10px] uppercase tracking-widest text-blush">{a.e}</p>
              <h3 className="mt-2 font-display text-2xl italic">{a.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Divider() {
  return (
    <div className="px-0 py-2">
      <ScarfDivider />
    </div>
  );
}
