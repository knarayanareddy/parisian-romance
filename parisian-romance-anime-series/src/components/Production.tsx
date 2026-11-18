import { episodes } from "../data/episodes";
import { MASTER_PROMPT, NEGATIVE, SCARF_LOCK, STYLE_LOCK } from "../data/world";
import { clipsFor } from "../lib/prompt";
import { CopyButton } from "./CopyButton";

const pipeline = [
  {
    t: "Bible & model sheets",
    d: "Generate turnarounds (front / ¾ / profile / back) and expression sheets for all 8 characters, plus a 'scarf anatomy' sheet. These become your reference images.",
  },
  {
    t: "Animatic",
    d: "Storyboard every scene as 6–12 panels with timing. Lock the 5:00 runtime before spending a single generation.",
  },
  {
    t: "Seedance 2.5 generation",
    d: "Paste the full scene prompt, attach the character + location references, and generate ≈12-second clips. Always make 3 takes per clip.",
  },
  {
    t: "Chain & continuity",
    d: "Feed each clip's last frame as the next clip's first frame so the scarf's path flows unbroken across cuts.",
  },
  {
    t: "Scarf pass",
    d: "Where the model drifts, re-generate the scarf alone on a plate (grey background, same camera) and composite it back for perfect red.",
  },
  {
    t: "Edit, grade, sound",
    d: "Scarf-wipe transitions, hour-of-day grade, Foley (wool, silk, pages), French/Japanese VO, music. Deliver 4K 16:9.",
  },
];

export function PromptLab() {
  const series = [`STYLE LOCK\n${STYLE_LOCK}`, `SCARF LOCK\n${SCARF_LOCK}`, `NEGATIVE\n${NEGATIVE}`].join("\n\n");
  return (
    <section id="prompts" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-scarf">06 — Prompt Lab</p>
        <h2 className="mt-3 font-display text-5xl italic md:text-7xl">From one prompt to a whole series.</h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Your original Seedance prompt is the DNA of the show. We keep it verbatim as the master, then split it into three
          locks that are pasted into every scene so the character, the scarf and the style never drift.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-ink p-7 text-cream">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-blush">Master prompt (original)</p>
              <CopyButton text={MASTER_PROMPT} className="!border-cream/30 !bg-transparent !text-cream hover:!text-blush" />
            </div>
            <pre className="mt-4 whitespace-pre-wrap font-mono text-[12.5px] leading-relaxed text-cream/85">{MASTER_PROMPT}</pre>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-ink/10 bg-paper p-7">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-scarf">Series locks</p>
                <CopyButton text={series} />
              </div>
              <div className="mt-4 space-y-4 font-mono text-[12px] leading-relaxed">
                <p>
                  <b className="text-scarf">STYLE ·</b> {STYLE_LOCK}
                </p>
                <p>
                  <b className="text-scarf">SCARF ·</b> {SCARF_LOCK}
                </p>
                <p>
                  <b className="text-scarf">NEGATIVE ·</b> {NEGATIVE}
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-butter/50 p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-scarf">Consistency checklist</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                <li>✦ Paste the character lock word-for-word — never paraphrase hair, coat or scarf.</li>
                <li>✦ Attach the same 3 reference images (face, full-body, scarf) to every generation.</li>
                <li>✦ One red in frame. If extra saturated colours appear, add them to the negative prompt.</li>
                <li>✦ Chain clips last-frame → first-frame inside a scene.</li>
                <li>✦ Keep camera verbs simple: push-in, dolly, orbit, crane, track.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Production() {
  const totalScenes = episodes.reduce((a, e) => a + e.scenes.length, 0);
  const totalClips = episodes.reduce((a, e) => a + e.scenes.reduce((b, s) => b + clipsFor(s.dur), 0), 0);
  const totalSeconds = episodes.reduce((a, e) => a + e.scenes.reduce((b, s) => b + s.dur, 0), 0);

  return (
    <section id="production" className="relative overflow-hidden bg-indigo py-24 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blush">07 — Production Plan</p>
        <h2 className="mt-3 font-display text-5xl italic md:text-7xl">How we make it.</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            [String(episodes.length), "episodes"],
            [String(totalScenes), "scenes"],
            [`${totalSeconds / 60} min`, "total runtime"],
            [`${totalClips} × 3`, "clips × takes ≈ " + totalClips * 3 + " gens"],
          ].map(([a, b]) => (
            <div key={b} className="rounded-3xl border border-cream/15 bg-cream/5 p-6">
              <p className="font-display text-5xl italic text-blush">{a}</p>
              <p className="mt-1 text-sm text-cream/70">{b}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pipeline.map((p, i) => (
            <div key={p.t} className="rounded-3xl border border-cream/15 p-6">
              <span className="font-mono text-xs text-scarf">
                <span className="rounded-full bg-scarf px-2.5 py-1 text-white">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <h3 className="mt-4 font-display text-2xl italic">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto rounded-3xl border border-cream/15">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-cream/10 font-mono text-[11px] uppercase tracking-wider text-cream/60">
              <tr>
                <th className="p-4">Episode</th>
                <th className="p-4">Scenes</th>
                <th className="p-4">Clips (≈12s)</th>
                <th className="p-4">Takes ×3</th>
                <th className="p-4">Hour / grade</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((e) => {
                const clips = e.scenes.reduce((b, s) => b + clipsFor(s.dur), 0);
                return (
                  <tr key={e.no} className="border-t border-cream/10">
                    <td className="p-4 font-display text-lg italic">
                      {e.no}. {e.title}
                    </td>
                    <td className="p-4">{e.scenes.length}</td>
                    <td className="p-4">{clips}</td>
                    <td className="p-4">{clips * 3}</td>
                    <td className="p-4 text-cream/70">{e.hour}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-3xl bg-cream/5 p-6 text-sm leading-relaxed text-cream/75">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-blush">Content note</p>
          <p className="mt-2">
            Rated 16+. The series borrows the <em>tension</em> of its inspirations — power, secrecy, contracts, longing — and
            expresses it through silk, hands, glances and negotiation. Sensuality is implied through fades, silhouettes and
            shadow. Nothing explicit is depicted, and consent is the heart of every romantic scene.
          </p>
        </div>
      </div>
    </section>
  );
}
