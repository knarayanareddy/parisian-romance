import { HeroArt, ScarfDivider } from "./components/ScarfArt";
import { Arc, Cast, Concept, ScarfRules, StyleBible, World } from "./components/Sections";
import { Episodes } from "./components/Episodes";
import { Production, PromptLab } from "./components/Production";

const links = [
  ["Premise", "#concept"],
  ["Scarf", "#scarf"],
  ["Cast", "#cast"],
  ["World", "#world"],
  ["Episodes", "#episodes"],
  ["Arc", "#arc"],
  ["Prompts", "#prompts"],
  ["Production", "#production"],
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* nav */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-2xl font-semibold italic tracking-tight">
            Le Fil <span className="text-scarf">Rouge</span>
          </a>
          <div className="hidden items-center gap-6 text-sm lg:flex">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="text-ink-soft transition hover:text-scarf">
                {l}
              </a>
            ))}
          </div>
          <a
            href="#episodes"
            className="rounded-full bg-scarf px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-white transition hover:bg-scarf-deep"
          >
            Watch the plan
          </a>
        </div>
      </nav>

      {/* hero */}
      <header id="top" className="relative flex min-h-[100svh] items-start justify-center overflow-hidden pt-28 md:pt-32">
        <HeroArt />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <p className="fade-up font-mono text-[11px] uppercase tracking-[0.4em] text-ink/70">
            An original anime series · 6 episodes × 5 minutes
          </p>
          <h1 className="fade-up mt-4 font-display text-[4.2rem] font-medium italic leading-[0.9] tracking-tight text-ink sm:text-8xl md:text-[10rem]" style={{ animationDelay: "0.15s" }}>
            Le Fil <span className="text-scarf">Rouge</span>
          </h1>
          <p className="fade-up mx-auto mt-5 max-w-xl font-display text-xl italic leading-snug text-ink/80 md:text-3xl" style={{ animationDelay: "0.3s" }}>
            A girl. A scarf with no end. A city full of people waiting to be tied together.
          </p>
          <div className="fade-up mt-8 flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.45s" }}>
            <a href="#episodes" className="rounded-full bg-ink px-6 py-3 text-sm text-cream transition hover:bg-scarf">
              Explore the 6 episodes
            </a>
            <a href="#prompts" className="rounded-full border border-ink/40 bg-cream/50 px-6 py-3 text-sm transition hover:border-scarf hover:text-scarf">
              Get the Seedance prompts
            </a>
          </div>
        </div>
      </header>

      <ScarfDivider />
      <Concept />
      <ScarfRules />
      <Cast />
      <World />
      <ScarfDivider flip />
      <StyleBible />
      <Episodes />
      <Arc />
      <PromptLab />
      <Production />

      <footer className="bg-ink px-5 py-14 text-center text-cream">
        <p className="font-display text-4xl italic">
          Le Fil <span className="text-scarf">Rouge</span>
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm text-cream/60">
          “The thread doesn't tie you down. It tells you where you're from — and lets you go.”
          <br />— Mitsuko Marchand
        </p>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
          Series bible · Built for Seedance 2.5 · Paris, always
        </p>
      </footer>
    </div>
  );
}
