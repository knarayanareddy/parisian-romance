import { characters, NEGATIVE, SCARF_LOCK, STYLE_LOCK } from "../data/world";
import type { Episode, Scene } from "../data/types";

export const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export function clipsFor(dur: number, clipLen = 12) {
  return Math.ceil(dur / clipLen);
}

export function composePrompt(ep: Episode, scene: Scene, idx: number) {
  const cast = scene.cast
    .map((id) => characters.find((c) => c.id === id)?.lock)
    .filter(Boolean)
    .join("\n");
  return [
    `LE FIL ROUGE — Episode ${ep.no} "${ep.en}" — Scene ${idx + 1}: ${scene.title}`,
    `Format: 16:9, 4K, 24fps. Target ≈ ${scene.dur}s, generate as ${clipsFor(scene.dur)} chained clips (last frame → first frame).`,
    "",
    "STYLE: " + STYLE_LOCK,
    "",
    "CHARACTERS:\n" + cast,
    "",
    SCARF_LOCK,
    "",
    `LOCATION & ACTION: ${scene.place}. ${scene.prompt}`,
    "",
    `LIGHTING / GRADE: ${ep.hour}.`,
    "",
    "NEGATIVE: " + NEGATIVE,
  ].join("\n");
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }
}
