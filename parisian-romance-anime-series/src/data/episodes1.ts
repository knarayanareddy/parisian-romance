import type { Episode } from "./types";

export const episodes1: Episode[] = [
  {
    no: 1,
    title: "Le Premier Fil",
    en: "The First Thread",
    tagline: "Some inheritances arrive wrapped around your neck.",
    hour: "Dawn blush",
    tint: "#f2cfc6",
    logline:
      "Burnt-out in Tokyo, Aiko receives a letter from Paris: her grandmother Mitsuko is dead, and has left her a failing atelier and a scarf with no end. Within hours of landing, the scarf has hijacked her day, tangled her with a stranger, and caught the eye of the most feared editor in France.",
    themes: ["Inheritance", "Belonging", "Beginnings"],
    scarfRule: "Rule II revealed — the scarf reaches who it must.",
    music: "The Thread Theme (cello) · OP song debut · ED: 'Mamie's Lullaby'",
    cliffhanger:
      "Through a lit window on Avenue Montaigne, Aiko sees a man in charcoal staring at her scarf — and he's holding the other end of a red thread of his own.",
    stats: { romance: 2, career: 3, friendship: 2, mystery: 4, heat: 1 },
    scenes: [
      {
        title: "Tokyo, 6:42 a.m., rain",
        dur: 35,
        place: "Tokyo office tower → neon rooftops",
        cast: ["aiko"],
        beat: "Cold open. Aiko is a grey cubicle in a grey sea of salarymen, writing copy for toothpaste. A letter with a Paris postmark arrives. A single red thread slides out, floats through the window and sails across the neon skyline toward the horizon. She grabs her coat and follows.",
        scarf: "Born as one fine thread, it widens into a ribbon as it crosses the rooftops.",
        prompt:
          "Rainy Tokyo dawn, a lonely office worker at a grey desk opens an envelope; a single glowing crimson thread slips out, drifts through a rain-streaked window and unspools across neon rooftops like a ribbon heading west. Slow push-in on her face, then a swooping aerial follow of the thread.",
      },
      {
        title: "Paris wakes up",
        dur: 50,
        place: "Pont Neuf → Marché d'Aligre",
        cast: ["aiko", "colette"],
        beat: "Taxi across the Seine at sunrise. The scarf — now around her neck — streams from the window, flicks a baker's bike, a sleeping dog, a flock of pigeons. At Marché d'Aligre it snags a fruit stall; oranges cascade. Colette, arguing with a vendor, ends up tangled with Aiko in the scarf. Instant friendship.",
        scarf: "First 'people-wrap': Aiko and Colette bound shoulder to shoulder, laughing.",
        prompt:
          "Golden sunrise over the Seine from a taxi window, the red scarf streaming out behind like a banner, then a lively fruit market with striped awnings; the scarf loops around a stall, oranges tumble in slow motion, and two young women end up laughing, wrapped together in red wool. Joyful, whimsical, pastel colours.",
      },
      {
        title: "Atelier Marchand",
        dur: 55,
        place: "Passage des Panoramas",
        cast: ["aiko"],
        beat: "A dusty glass-roofed arcade. Behind the shuttered door: mannequins, spools, an old Singer that hums on its own. A drawer opens; the scarf unspools endlessly across the room. Mamie's first letter: 'Three rules for Paris — never cut the thread, never lie in red, never be afraid of being looked at.'",
        scarf: "The scarf's origin is shown: hundreds of metres coiled in baskets.",
        prompt:
          "A dusty Parisian arcade atelier at golden hour, mannequins wearing unfinished coats, thick dust floating in sunbeams, an old sewing machine humming by itself; a drawer slides open and an endless crimson scarf pours out across the floor and drifts around a young woman with a black bob who reads a handwritten letter, eyes shining. Nostalgic, tender.",
      },
      {
        title: "Pont des Arts: a collision",
        dur: 60,
        place: "Pont des Arts, late morning",
        cast: ["aiko", "solene"],
        beat: "A gust steals the scarf from her neck. It wraps around the hat of a severe woman in white — Solène Varenne. A chase, a slapstick tango of apologies. Solène sees the stitched 'M', goes pale, hides it behind sunglasses, and hands over a card: 'ÉCARLATE. Monday. Nine sharp. Don't be late and don't wear that.'",
        scarf: "Comic set-piece: the scarf ties Solène's hat, a tourist's selfie stick and a busker's violin bow into one knot.",
        prompt:
          "Windy Pont des Arts in soft morning light, the long red scarf whips away and wraps around a stern elegant silver-haired woman's white hat, a tourist's selfie stick and a busker's violin; slapstick comic timing, then a close-up of the older woman noticing a stitched letter, her composure cracking behind dark sunglasses.",
      },
      {
        title: "Rooftop, first night",
        dur: 55,
        place: "Colette's rooftop, Belleville",
        cast: ["aiko", "colette"],
        beat: "Wine, cheese, Paris glowing in lilac dusk. Colette lays down 'The Rules of Paris' ('never rush a meal, never text first, never dress for a man — undress for him'). Aiko laughs for the first time in months. She starts typing her first line of narration.",
        scarf: "It drapes across both friends' shoulders and rises like a flag into the dusk wind.",
        prompt:
          "Lilac Paris dusk from a rooftop terrace, two women sit with wine and cheese, one tall with curly hair gesturing animatedly, the other with a short black bob laughing; the red scarf drapes over both their shoulders and lifts in the breeze toward the Eiffel Tower's first twinkling lights. Warm, intimate, dreamy.",
      },
      {
        title: "The tug",
        dur: 45,
        place: "Avenue Montaigne, night",
        cast: ["aiko", "lucien"],
        beat: "At midnight, the scarf tugs Aiko out of bed, through empty streets, to a gleaming window of Maison Aubry. Inside, silhouetted in charcoal: Lucien Aubry, a red thread wound around his wrist. He lifts his head — as if he felt the pull. Smash cut to black.",
        scarf: "The first sign: another end exists, and someone is holding it.",
        prompt:
          "Midnight Paris, an empty elegant avenue lit by gold street lamps, the red scarf pulls a young woman in a long black coat through the streets like a leash of fate to a luminous couture-house window; inside, a tall man in a charcoal suit looks up from a worktable, a crimson thread wrapped around his wrist. Slow cinematic push, suspenseful, romantic.",
      },
    ],
  },
  {
    no: 2,
    title: "Café Crème & Confessions",
    en: "Coffee, Cream & Confessions",
    tagline: "Everyone in Paris is lying beautifully.",
    hour: "Noon butter",
    tint: "#f3e2a9",
    logline:
      "Aiko's first day at ÉCARLATE is a baptism of white lacquer and ruthless glances. Solène gives her one week and one assignment: write a column about love that Paris will actually read. With her three new friends, a stack of strangers, and a scarf with its own agenda, she begins to listen — and the city begins to talk.",
    themes: ["Voice", "Friendship", "Honesty"],
    scarfRule: "Rule III revealed — the red deepens with truth.",
    music: "Brunch at Marguerite (jazz manouche) · Thread Theme on accordion for Basile",
    cliffhanger:
      "Her column goes live at midnight. At 12:03 a.m., an email arrives from L. Aubry: 'Tuesday. The Silk Room. Come alone.'",
    stats: { romance: 3, career: 4, friendship: 5, mystery: 2, heat: 2 },
    scenes: [
      {
        title: "Metro of colour",
        dur: 30,
        place: "Line 1, Le Marais",
        cast: ["aiko"],
        beat: "Monday morning. Aiko sprints through the commuter flow; the scarf paints a red line through the grey crowd, tugging a street artist's chalk, a sleeping man's newspaper, and one stranger's smile.",
        scarf: "The scarf tinges whoever it touches with a hint of colour.",
        prompt:
          "Morning rush in a Paris metro station and street, a young woman in a long black coat sprints through a crowd of grey-clad commuters; her red scarf trails behind like a brushstroke, and wherever it touches, pastel colour blooms on faces and clothes. Playful tracking shot, fast rhythm.",
      },
      {
        title: "ÉCARLATE",
        dur: 55,
        place: "ÉCARLATE HQ, Le Marais",
        cast: ["aiko", "solene", "ines"],
        beat: "A white-lacquer hallway of intimidation. Introductions: Inès (sardonic, notebook), the intern army, Solène's glass office. The test: 'Fifteen hundred words on love. Make Paris feel something. You have until Friday.' Aiko's naive first draft is read aloud and shredded.",
        scarf: "It coils around every white pillar, stopping at Solène's door as if refusing to enter.",
        prompt:
          "A sleek white-lacquered magazine office in a Parisian courtyard, long glass corridor, editors in monochrome; a nervous young woman with a short black bob follows a severe silver-bob editor in a white blazer, the red scarf curling around white pillars behind her; cool, intimidating, minimalist composition with one red accent.",
      },
      {
        title: "Brunch at Marguerite",
        dur: 60,
        place: "Café Marguerite, Saint-Germain",
        cast: ["aiko", "colette", "ines", "margaux"],
        beat: "The Sex-and-the-City moment. Four friends, one marble table: croissants, eggs, a bottle of something pink. Colette on desire, Inès on power, Margaux nervously twisting her wedding ring. Aiko realises she's the only one not hiding something. The scarf loops through all four chairs.",
        scarf: "'The Four Chairs' — the signature image. The scarf ties all four women gently to the table. The red deepens around Margaux's hand.",
        prompt:
          "A sunlit Parisian café terrace, four diverse stylish young women laugh and talk over croissants, eggs and pink wine, cane chairs and marble table; a long red scarf winds slowly through all four chairs and around their wrists like a connecting ribbon, one woman nervously twisting a ring. Warm butter-yellow light, intimate framing.",
      },
      {
        title: "Strangers in the garden",
        dur: 55,
        place: "Jardin du Luxembourg",
        cast: ["aiko"],
        beat: "Research by wandering. Aiko interviews an elderly couple (married 61 years; she still slips him notes), a first-date pair, and a heartbroken man feeding pigeons. Wherever the scarf touches, their unspoken feelings bloom as drawn memories floating overhead. She starts to write.",
        scarf: "The scarf visualises feelings: paper boats, letters, wedding rings drift from it.",
        prompt:
          "A peaceful Paris garden with green chairs and a fountain, a young woman with a black bob and red scarf interviews an elderly couple on a bench; the scarf wraps gently around the pair and from it float soft drawn memories — paper notes, a dancing silhouette, wedding rings — dissolving into the sunlit air. Tender, magical-realist.",
      },
      {
        title: "The green box",
        dur: 50,
        place: "Quai de Montebello — Les Bouquinistes",
        cast: ["aiko", "basile"],
        beat: "Basile's bookstall. The scarf winds through his stacks and pulls a book from the shelf: a worn novel with Mitsuko's handwriting in the margins. He's read it a hundred times — she gave it to him. Their first conversation: bashful, funny, easy.",
        scarf: "It slips around both of them like a shawl, quiet and warm — a gentler red.",
        prompt:
          "Green bouquiniste boxes on the Seine at afternoon light, a gentle man with brown curls and a moss cardigan sorts old books; a young woman with a black bob and red scarf approaches, the scarf curling through the book stacks and gently pulling an old novel open to reveal handwritten margin notes. Soft, bookish, tender.",
      },
      {
        title: "Publish",
        dur: 50,
        place: "Atelier Marchand → Maison Aubry",
        cast: ["aiko", "lucien"],
        beat: "Aiko writes all night. Her column 'FIL ROUGE No. 1: The Rules of Being Looked At' is honest, funny, aching. At midnight she hits send. Montage: Paris waking up and reading it — baker, banker, bus driver. In a dark office, Lucien reads it and types four sentences.",
        scarf: "Her words appear in the air as red lettering, flowing out to readers across the city.",
        prompt:
          "Night in a lamp-lit atelier, a young woman types at an old desk, the red scarf spiralling around her as glowing handwritten sentences lift off the screen and stream out of the window across Paris rooftops; cut to windows lighting up across the city as strangers read; finish on a handsome man in a dark office reading, a faint smile. Cinematic montage, dreamy.",
      },
    ],
  },
  {
    no: 3,
    title: "Le Contrat",
    en: "The Contract",
    tagline: "He wrote the terms. She rewrote the room.",
    hour: "Dusk lilac",
    tint: "#d9cde7",
    logline:
      "Behind a door on Avenue Montaigne is the Silk Room — a vaulted chamber of a thousand red ribbons — and a proposition from Lucien Aubry: become the voice of his comeback collection. There's an NDA, exclusivity, and a few clauses that make Aiko's pulse stumble. She picks up a pen, and everything changes.",
    themes: ["Power", "Consent", "Desire"],
    scarfRule: "Rule I tested — the scarf will not be cut, even for a clause.",
    music: "The Silk Room (trip-hop + harp) · Thread Theme on low strings",
    cliffhanger:
      "Hidden in the scarf's lining, Aiko finds a small embroidered name she's never seen: 'S. Varenne'.",
    stats: { romance: 5, career: 3, friendship: 2, mystery: 4, heat: 4 },
    scenes: [
      {
        title: "Dress rehearsal",
        dur: 25,
        place: "Colette's apartment",
        cast: ["aiko", "colette"],
        beat: "Colette dresses Aiko in a fitted black dress under the long coat: 'If you walk into a room afraid, they'll sell you your own fear.' Aiko hesitates over the scarf. Colette: 'Never leave home without your red flag.'",
        scarf: "The scarf tightens a hair when she tries to leave it behind.",
        prompt:
          "A sunlit Parisian apartment, a tall woman with curls fastens a black dress on a young woman with a black bob, both laughing in front of a gilt mirror; the red scarf hangs on a chair then slides into place around the heroine's neck on its own. Warm, playful, close framing.",
      },
      {
        title: "Staircase of silk",
        dur: 50,
        place: "Maison Aubry, Avenue Montaigne",
        cast: ["aiko"],
        beat: "The couture house after hours: marble, mirrors, hushed assistants. A curving staircase. The scarf spirals up the balustrade ahead of her, a guide. At the top, a tall door of dark wood opens by itself.",
        scarf: "It leads her up, then goes still at the door, as if holding its breath.",
        prompt:
          "A grand couture house interior at dusk, white marble spiral staircase and gilt mirrors, a young woman in a black coat climbs slowly while her red scarf spirals up the banister ahead of her like a guide; at the top a tall dark wood door opens by itself, a warm red glow spilling out. Elegant, hushed, slow camera.",
      },
      {
        title: "The Silk Room",
        dur: 60,
        place: "The Silk Room",
        cast: ["aiko", "lucien"],
        beat: "A vaulted chamber hung with thousands of silk ribbons in every shade of red. Lucien, composed, offers a drink she refuses and a document she reads aloud. 'Do you always read terms aloud?' 'Only when someone's trying to make me forget I can.' The scarf reaches for his wrist — then slackens. He's hiding something.",
        scarf: "Ribbons and scarf answer each other, swaying in sync — until it dulls near Lucien.",
        prompt:
          "A vaulted private chamber hung with thousands of silk ribbons in shades of deep red swaying slowly, a tall man in a charcoal suit and a young woman in black stand across a dark wood table with a document between them; slow charged push-in on their eyes, the scarf's tip reaching toward his wrist. Low light, sensual, restrained tension.",
      },
      {
        title: "Strike clause 7",
        dur: 65,
        place: "The Silk Room",
        cast: ["aiko", "lucien"],
        beat: "The Fifty-Shades inversion. 'Clause 7: Availability at all times.' She crosses it out. 'Clause 12: Obedience.' She writes 'Mutual refusal, any time, no reason.' Lucien watches her re-draft his world, amused and undone. The ribbons warm; the room brightens. They sign with red ink. He adjusts her collar — she lets him, deliberately.",
        scarf: "As each clause is rewritten, a ribbon in the room turns from black to red.",
        prompt:
          "In a room of red silk ribbons, a young woman with a black bob leans over a desk and crosses out lines in a contract with a red fountain pen while a tall man in charcoal watches with a slow amused smile; as she writes, black ribbons around them turn crimson one by one. Close-ups on hands, pen, eyes. Sensual but tasteful, cinematic.",
      },
      {
        title: "Quai, crêpes & honesty",
        dur: 55,
        place: "Quai de Montebello, golden hour",
        cast: ["aiko", "basile"],
        beat: "Emerging overheated, Aiko runs into Basile. They walk the quay with crêpes. He reads the contract's first page, gently: 'Don't sign what you can't read twice.' She shows him the strikeouts and he laughs. Warmth, safety, sun on water. But she can't stop thinking about the other room.",
        scarf: "The scarf wraps them both, lazy and sun-warmed in the light — a different feeling of red.",
        prompt:
          "Golden hour on the Seine quay, a gentle curly-haired man and a woman with a short black bob walk and share a crêpe, laughing, the red scarf draped loosely around both their shoulders; sun glitters on the water, bridges behind. Warm, safe, romantic, soft pastels.",
      },
      {
        title: "The name in the lining",
        dur: 45,
        place: "Atelier Marchand, night",
        cast: ["aiko"],
        beat: "Alone, she traces the scarf's lining and finds a stitched name, faded: 'S. Varenne'. The Singer starts humming a lullaby. On the wall, a photograph of two young women, arms linked: Mitsuko and a girl with a silver streak and an uncanny resemblance to Solène.",
        scarf: "It lies still and pale; Rule III in action — someone lied here, long ago.",
        prompt:
          "A candle-lit atelier at night, a young woman with a black bob turns the lining of a crimson scarf inside out beneath a lamp and discovers a small faded embroidered name; the old sewing machine begins to hum, and the camera drifts to an old black-and-white photograph of two women arm in arm. Mysterious, hushed, nostalgic.",
      },
    ],
  },
];
