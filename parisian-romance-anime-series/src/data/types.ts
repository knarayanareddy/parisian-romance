export type Scene = {
  title: string;
  dur: number;
  place: string;
  cast: string[];
  beat: string;
  scarf: string;
  prompt: string;
};

export type Episode = {
  no: number;
  title: string;
  en: string;
  tagline: string;
  hour: string;
  tint: string;
  logline: string;
  themes: string[];
  scarfRule: string;
  music: string;
  cliffhanger: string;
  stats: { romance: number; career: number; friendship: number; mystery: number; heat: number };
  scenes: Scene[];
};
