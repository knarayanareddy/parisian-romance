export const STYLE_LOCK =
  "Premium hand-drawn 2D animated short film, minimalist French animation aesthetic blended with expressive Japanese anime acting, visible pencil-and-gouache texture, soft pastel palette (cream, blush, powder blue, sage, butter yellow, lilac) where the crimson scarf is the ONLY fully saturated colour, elegant compositions, smooth fluid character motion, atmospheric lighting, cinematic camera moves and transitions, detailed painted Parisian backgrounds, 4K, consistent character design.";

export const SCARF_LOCK =
  "THE SCARF: an impossibly long, oversized, hand-knitted crimson-red wool scarf (#C8102E) with a tiny white-stitched 'M' on one fringe end. It moves like a living ribbon: it floats, loops, spirals and wraps gently around buildings, benches, bicycles, lamp posts and people, never harming anyone, always flowing with graceful wind-like motion.";

export const NEGATIVE =
  "photorealistic, 3D render, CGI look, live action, text overlays, subtitles, watermark, extra fingers, deformed hands, changing hair length, changing outfit, off-model face, harsh neon colours, horror, violence, explicit content.";

export const MASTER_PROMPT = `Create a beautiful, emotional, cinematic 2D animated short film set in the romantic streets of Paris. A stylish young woman with a short black bob haircut, wearing a long black coat, cream-colored outfit, and a flowing oversized red scarf, walks through the city.

The exceptionally long red scarf moves gracefully through the air, wrapping around buildings, benches, people, and street objects, creating surreal and whimsical visual moments. Show charming Parisian streets, fruit markets, riverside bridges, elegant cafés, historic architecture, and peaceful parks.

Include cinematic scenes of the woman walking, interacting with strangers, enjoying food at a café, and exploring the city. The scarf should flow dynamically through every scene, creating a magical visual connection between people and places.

Visual Style: Premium hand-drawn 2D animation, minimalist French animation aesthetic, artistic storytelling, soft pastel colors, elegant compositions, smooth character movements, atmospheric lighting, and cinematic camera transitions.

Mood: Dreamy, nostalgic, romantic, whimsical, and heartwarming.

Quality: 4K animation, consistent character design, fluid motion, detailed backgrounds, professional animated short-film quality.`;

export type Character = {
  id: string;
  name: string;
  role: string;
  age: number;
  archetype: string;
  tint: string;
  look: string;
  want: string;
  wound: string;
  arc: string;
  quote: string;
  lock: string;
  inspiredBy: string;
};

export const characters: Character[] = [
  {
    id: "aiko",
    name: "Aiko Marchand",
    role: "Heroine · Columnist",
    age: 26,
    archetype: "The Dreamer Who Writes",
    tint: "#c8102e",
    look: "Sharp short black bob with a straight fringe, a beauty mark under her left eye, long black wool coat, cream knit and wide-leg trousers, and the scarf.",
    want: "To become a voice Paris can't ignore — and to finish what her grandmother started.",
    wound: "Raised between Kyoto and Lyon, she has never felt like she belongs to either. She tells other people's stories to avoid living her own.",
    arc: "From someone who lets the thread pull her, to someone who ties her own knot.",
    quote: "They say Paris is a city you fall into. I fell in with a scarf around my neck.",
    inspiredBy: "Emily Cooper's wide-eyed ambition + Carrie Bradshaw's voiceover",
    lock: "AIKO MARCHAND: 26-year-old Franco-Japanese woman, sharp short black bob with a straight fringe, pale warm skin, dark almond eyes, tiny beauty mark under her left eye, long black wool coat, cream knit top and cream wide-leg trousers, black ankle boots.",
  },
  {
    id: "colette",
    name: "Colette Ndiaye",
    role: "Best friend · Sommelier",
    age: 29,
    archetype: "The Fearless One",
    tint: "#e0a43a",
    look: "Tall, Senegalese-French, voluminous natural curls, mustard trench, gold hoops, laughs with her whole body.",
    want: "To open her own wine bar and never apologise for appetite — in food, wine, or love.",
    wound: "Everyone sees the party; nobody asks who she calls when she's lonely.",
    arc: "Learns that being bold is easy — being vulnerable is the real luxury.",
    quote: "In Paris, darling, desire is not a scandal. It is a seasoning.",
    inspiredBy: "Samantha Jones' frankness + Sutton Brady's hustle",
    lock: "COLETTE NDIAYE: 29-year-old tall Senegalese-French woman, voluminous natural curls, deep brown skin, mustard-yellow trench coat, large gold hoop earrings, confident wide smile.",
  },
  {
    id: "ines",
    name: "Inès Rahal",
    role: "Friend · Investigative journalist",
    age: 28,
    archetype: "The Skeptic with a Notebook",
    tint: "#5d86a3",
    look: "Algerian-French, cropped undercut, round tortoiseshell glasses, oversized denim jacket, perpetual ink on her fingers.",
    want: "To expose the truth behind Paris's glossiest institutions — starting with the one she works for.",
    wound: "Out to the world, but still hiding how much she needs her friends to stay.",
    arc: "Chooses loyalty over scoop, then finds the scoop and the loyalty can be the same story.",
    quote: "Every beautiful thing in this city has a ledger somewhere.",
    inspiredBy: "Miranda Hobbes' logic + Kat Edison's fire",
    lock: "INÈS RAHAL: 28-year-old Algerian-French woman, cropped undercut black hair, round tortoiseshell glasses, olive skin, oversized light-blue denim jacket over a white shirt, ink-stained fingers, notebook in hand.",
  },
  {
    id: "margaux",
    name: "Margaux de Villiers",
    role: "Friend · Gallery owner",
    age: 31,
    archetype: "The Romantic in a Gilded Cage",
    tint: "#d9a7c0",
    look: "Pale, honey-blonde chignon, pearl earrings, soft lilac coats, impeccable posture that slowly loosens through the series.",
    want: "The perfect love she was promised, in the perfect marriage she performs.",
    wound: "She married the family's expectations, not a person.",
    arc: "Lets the glass crack — and discovers her own art on the other side.",
    quote: "I was taught to hold everything very, very gently. Even my own unhappiness.",
    inspiredBy: "Charlotte York's romanticism",
    lock: "MARGAUX DE VILLIERS: 31-year-old elegant French woman, honey-blonde low chignon, fair skin, pearl earrings, soft lilac wool coat, graceful upright posture.",
  },
  {
    id: "lucien",
    name: "Lucien Aubry",
    role: "Love interest · Heir of Maison Aubry",
    age: 38,
    archetype: "The Controlled Flame",
    tint: "#2b2f4f",
    look: "Tall, charcoal tailoring, dark swept hair with a touch of silver, always one cufflink undone, watching more than speaking.",
    want: "To keep his family's fashion house — and his own heart — perfectly in order.",
    wound: "His father built the house on a stolen design. Lucien has spent his life polishing a lie.",
    arc: "Learns that real power is the willingness to be negotiated with.",
    quote: "I don't ask for obedience, Mademoiselle Marchand. I ask for honesty. It's much more expensive.",
    inspiredBy: "Christian Grey's magnetism — rewritten with consent as the seduction",
    lock: "LUCIEN AUBRY: 38-year-old tall French man, dark swept-back hair with subtle silver at the temples, sharp jaw, charcoal tailored suit, one cuff slightly undone, calm intense gaze.",
  },
  {
    id: "basile",
    name: "Basile Fontaine",
    role: "The other path · Bouquiniste",
    age: 30,
    archetype: "The Warm Harbour",
    tint: "#7e9a6b",
    look: "Soft brown curls, wool cardigan the colour of moss, ink-smudged cuffs, a stall of green boxes on the Seine.",
    want: "A quiet life of good books, and one person to read them with.",
    wound: "He has loved people who were always leaving for somewhere bigger.",
    arc: "Tells Aiko the truth: he will not be a consolation prize.",
    quote: "Some stories you read once. Some you reread for the rest of your life.",
    inspiredBy: "Aidan Shaw's steadiness + Bold Type's gentle foils",
    lock: "BASILE FONTAINE: 30-year-old French man, soft messy brown curls, warm hazel eyes, moss-green wool cardigan over a cream shirt, ink on his cuffs, gentle half-smile.",
  },
  {
    id: "solene",
    name: "Solène Varenne",
    role: "Editor-in-chief of ÉCARLATE",
    age: 55,
    archetype: "The Ice Queen with a Thread Unfinished",
    tint: "#6c6a78",
    look: "Silver bob, razor-sharp white blazer, sunglasses indoors, a single red thread worn like a bracelet she never explains.",
    want: "To keep ÉCARLATE untouchable — and to bury what she did in 1992.",
    wound: "She once sold out the one person who believed in her.",
    arc: "From antagonist to the series' quiet heartbreak and redemption.",
    quote: "Paris does not reward the sincere. It rewards the unforgettable.",
    inspiredBy: "Miranda Priestly + Jacqueline Carlyle, with a secret heart",
    lock: "SOLÈNE VARENNE: 55-year-old elegant French woman, sleek silver bob, severe white tailored blazer, dark sunglasses, a thin red thread tied as a bracelet on her left wrist, regal posture.",
  },
  {
    id: "mitsuko",
    name: "Mitsuko Marchand",
    role: "Grandmother · The Weaver (in memory)",
    age: 78,
    archetype: "The Ghost in the Yarn",
    tint: "#b8896a",
    look: "Tiny, silver hair in a knot with two knitting needles, indigo apron, laugh lines like stitch marks. Appears in flashbacks and letters.",
    want: "To see her scarf finish its journey — and her granddaughter find home.",
    wound: "She loved Solène in the only way she knew how: by making her something that could never be cut.",
    arc: "Speaks from beyond through three letters, each opened at the right moment.",
    quote: "A thread doesn't tie you down, little crane. It tells you where you're from, and lets you go.",
    inspiredBy: "Studio-Ghibli grandmothers + the red thread of fate legend",
    lock: "MITSUKO MARCHAND: elderly Japanese woman, tiny and graceful, silver hair in a bun pierced with two wooden knitting needles, indigo linen apron, warm creased smile.",
  },
];

export const scarfRules = [
  {
    n: "I",
    title: "It is never cut.",
    body: "No blade, flame or fury can sever it. It can be knotted, unknotted, borrowed, and handed on — never ended by force.",
  },
  {
    n: "II",
    title: "It reaches who it must.",
    body: "The scarf drifts toward people carrying an untold truth. Wherever it wraps, a hidden feeling glows brighter — whether they like it or not.",
  },
  {
    n: "III",
    title: "Its red is honest.",
    body: "Truth deepens it to crimson. Lies bleach it toward pink and ash. Everyone near it learns to tell the difference.",
  },
  {
    n: "IV",
    title: "Every knot costs a metre.",
    body: "Each time it binds two lives together, the scarf grows shorter. Mitsuko left exactly 1,000 metres. Aiko has to decide what is worth tying.",
  },
];

export const locations = [
  { name: "Atelier Marchand", where: "Passage des Panoramas", mood: "Dusty gold, mannequins, a sewing machine that hums by itself", tint: "#f3e2a9" },
  { name: "Marché d'Aligre", where: "12th arrondissement", mood: "Tumbling oranges, striped awnings, morning chaos", tint: "#f2cfc6" },
  { name: "Pont des Arts", where: "Seine", mood: "Lovers' padlocks, wind, first meetings and last words", tint: "#bcd2e0" },
  { name: "Café Marguerite", where: "Saint-Germain", mood: "Cane chairs, marble tables, the girls' brunch headquarters", tint: "#c8d5bd" },
  { name: "Les Bouquinistes", where: "Quai de Montebello", mood: "Green boxes, ink, rain-soaked paperbacks", tint: "#c8d5bd" },
  { name: "ÉCARLATE HQ", where: "Le Marais courtyard", mood: "Glass, white lacquer, and a long corridor of fear", tint: "#d9cde7" },
  { name: "Maison Aubry & The Silk Room", where: "Avenue Montaigne", mood: "A vaulted chamber hung with a thousand red ribbons", tint: "#e8a9a0" },
  { name: "Opéra Garnier", where: "9th arrondissement", mood: "Gold, chandeliers, masks, midnight rooftop", tint: "#f3e2a9" },
  { name: "Pont Alexandre III", where: "Seine, in the rain", mood: "Gilded lamps blurred in grey water", tint: "#bcd2e0" },
  { name: "Jardin des Tuileries", where: "Fashion Week finale", mood: "A runway through gravel, fountains and the whole city watching", tint: "#c8d5bd" },
];

export const palette = [
  { name: "Crème de la Crème", hex: "#F7EFE3", use: "Paper, daylight, Aiko's knitwear" },
  { name: "Blush Pâtisserie", hex: "#F2CFC6", use: "Dawn, markets, romance" },
  { name: "Seine Powder", hex: "#BCD2E0", use: "Rivers, rain, melancholy" },
  { name: "Luxembourg Sage", hex: "#C8D5BD", use: "Parks, Basile, calm" },
  { name: "Beurre Doux", hex: "#F3E2A9", use: "Cafés, lamplight, warmth" },
  { name: "Lilas du Soir", hex: "#D9CDE7", use: "Dusk, fashion world, secrets" },
  { name: "Nuit Indigo", hex: "#2B2F4F", use: "Night, Lucien, the masked ball" },
  { name: "Fil Rouge", hex: "#C8102E", use: "THE SCARF. Only saturated colour in frame." },
];

export const styleRules = [
  {
    title: "The One-Red Rule",
    body: "Every frame is pastel and quiet — except the scarf. The viewer's eye should always be able to follow the thread across the whole screen.",
  },
  {
    title: "Line & Texture",
    body: "Loose graphite contours, gouache washes that don't fill the edges, visible paper grain. Backgrounds painted; characters hand-inked with a slightly warmer outline colour.",
  },
  {
    title: "Motion",
    body: "Characters animated 'on twos' for that handmade snap; the scarf on ones for silky continuity. Camera glides at 24fps with slow dollies and 'scarf-wipe' transitions.",
  },
  {
    title: "The Scarf-Wipe",
    body: "Every scene cut is carried by the scarf: it crosses frame, fills the screen in red, and clears into the next location. A signature, repeatable edit device.",
  },
  {
    title: "Light by Hour",
    body: "Dawn blush · noon butter · dusk lilac · midnight indigo. Each episode is graded to a dominant hour so the season reads as one long Parisian day.",
  },
  {
    title: "Desire, Drawn Tastefully",
    body: "Sensuality lives in hands, fabric, breath and distance — fades, silhouettes, silk and shadow. Heat is implied; never explicit. Rated 16+ for themes.",
  },
];

export const inspirations = [
  {
    show: "Emily in Paris",
    takes: "Fish-out-of-water glamour, a career in fashion & media, candy-coloured Paris, comic culture-clash.",
    twist: "Aiko isn't a tourist selling an American brand — she's a half-local who has to earn a place in a city her grandmother built.",
  },
  {
    show: "Sex and the City",
    takes: "First-person column narration, four friends at brunch, frank talk about desire, the city as fifth lead.",
    twist: "Her column is called FIL ROUGE and her subjects are strangers, not just her own dates — the scarf literally ties them in.",
  },
  {
    show: "The Bold Type",
    takes: "Magazine workplace, female friendship as the real love story, ambition with a social conscience.",
    twist: "Inès's investigation and Margaux's gallery give each friend a plot with stakes that aren't about men.",
  },
  {
    show: "Fifty Shades of Grey",
    takes: "A guarded, powerful man; a charged contract scene; desire shaped by rules and terms.",
    twist: "Reclaimed: Aiko is the one who rewrites every clause. Consent, negotiation and the right to say no are what make the tension thrilling.",
  },
];

export const music = [
  { title: "The Thread Theme", desc: "Solo cello + music-box celesta; the scarf's leitmotif. Returns as accordion in Basile scenes and low strings with Lucien." },
  { title: "Brunch at Marguerite", desc: "Jazz manouche guitar, brushed snare, upright bass — the friends' recurring cue." },
  { title: "The Silk Room", desc: "Slow trip-hop pulse, breathy synth pads, a single plucked harp. Low-lit and dangerous." },
  { title: "Opening / Ending Songs", desc: "OP: dreamy French-pop City-pop hybrid in French + Japanese. ED: a sparse piano lullaby — new verse each episode." },
];
