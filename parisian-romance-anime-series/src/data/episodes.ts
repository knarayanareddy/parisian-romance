import { episodes1 } from "./episodes1";
import { episodes2 } from "./episodes2";
import type { Episode } from "./types";

export const episodes: Episode[] = [...episodes1, ...episodes2];
export type { Episode, Scene } from "./types";
