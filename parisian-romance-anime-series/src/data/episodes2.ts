import type { Episode } from "./types";

export const episodes2: Episode[] = [
  {
    no: 4,
    title: "Bal Masqué",
    en: "The Masked Ball",
    tagline: "Everyone wears a mask. Only one of them is red.",
    hour: "Midnight indigo",
    tint: "#2b2f4f",
    logline:
      "Maison Aubry's masked ball fills the Opéra Garnier with gold, music and the best-dressed lies in Paris. Aiko waltzes with the man she's contractually bound to — and discovers he knew her grandmother. Margaux's marriage comes undone on a terrace, Inès overhears a board plot, and by dawn Aiko's private words are on every newsstand.",
    themes: ["Masks", "Temptation", "Betrayal"],
    scarfRule: "Rule III in public — the scarf bleaches pink around a liar.",
    music: "Waltz of the Thousand Ribbons (orchestral tango) · The Silk Room reprise",
    cliffhanger:
      "Dawn. Every kiosk in Paris carries the headline 'MON PATRON, MON MYSTÈRE — by Aiko Marchand'. She never wrote it for publication.",
    stats: { romance: 5, career: 3, friendship: 3, mystery: 4, heat: 5 },
    scenes: [
      {
        title: "Masks on",
        dur: 30,
        place: "Colette's apartment",
        cast: ["aiko", "colette", "ines", "margaux"],
        beat: "A gloriously chaotic getting-ready montage: Colette in gold, Inès in a tuxedo, Margaux in lilac tulle, Aiko in black silk with a red mask. Margaux admits quietly: 'I haven't been happy in a long time.' The group wraps around her in a hug.",
        scarf: "It ties the four women's wrists in a bow, then loosens, ready for the night.",
        prompt:
          "Four stylish friends get ready for a masked ball in a sunlit Paris apartment, mirrors, silk dresses, feathered masks, laughing and zipping each other up; a long red scarf ties their wrists together in a bow as they hug. Joyful ensemble montage, quick cuts, warm light.",
      },
      {
        title: "A hundred steps",
        dur: 45,
        place: "Opéra Garnier grand staircase",
        cast: ["aiko"],
        beat: "Arrival. Aiko ascends the marble Grand Staircase among masked guests; the scarf unfurls down the entire stairwell, up to the chandelier, across the balconies and gilded ceiling. Whispers: 'Who is she?' Every head turns.",
        scarf: "The scarf becomes a red river through the white and gold hall.",
        prompt:
          "The sweeping white-marble Grand Staircase of Opéra Garnier at night, masked guests in black and gold, a young woman in black silk and a red mask ascends slowly while her red scarf unfurls down the stairs and up through the chandelier and balconies like a river of crimson. Grand sweeping crane shot, magical.",
      },
      {
        title: "The waltz",
        dur: 60,
        place: "Opéra Garnier ballroom",
        cast: ["aiko", "lucien"],
        beat: "Lucien offers a hand. They dance. The scarf binds their wrists loosely, a living ribbon between them. The room blurs away. Words at close range: 'I knew your grandmother.' 'You've known me for three weeks and you only tell me now?' 'I wanted you to want the job for yourself.' Shared breath, no kiss. The orchestra swells.",
        scarf: "The ribbons from the Silk Room appear in the ballroom, dancing with them.",
        prompt:
          "A candlelit gold ballroom, a tall man in a black tuxedo and a woman in black silk with a crimson mask waltz, a red scarf winding around their joined wrists in a spiral and trailing around the dancing couples; the room blurs to gold bokeh as the camera orbits them, charged eye contact, almost-kiss. Sensual, romantic, tasteful.",
      },
      {
        title: "The terrace: lies and thread",
        dur: 60,
        place: "Opéra terrace + balconies",
        cast: ["margaux", "ines", "solene"],
        beat: "Intercut: Margaux confronts her husband on the terrace; as he lies, the scarf — drifting there — bleaches pink. She leaves her ring on the railing. Upstairs, Inès overhears board members whispering about selling Maison Aubry to a luxury conglomerate. Solène watches Aiko and Lucien dance from a shadowed box, hand clutching her red bracelet.",
        scarf: "The scarf's colour acts as a lie-detector: crimson for honesty, ash-pink for deceit.",
        prompt:
          "A moonlit Opéra terrace, an elegant blonde woman in lilac confronts a man in a tuxedo; a drifting red scarf turns pale pink around him as he speaks, she places her ring on the stone railing and walks away calm and free; intercut with a silver-haired woman in white watching from a shadowed box, hand clutching a thin red thread bracelet. Dramatic, silent-film mood.",
      },
      {
        title: "Rooftop at the stroke of twelve",
        dur: 65,
        place: "Opéra Garnier rooftop",
        cast: ["aiko", "lucien"],
        beat: "Up in the copper domes: Paris spread beneath them like a spill of gold. He steps close; she tilts her face; the clock begins to strike. Aiko steps back: 'Not under a contract. Under my own name.' He bows, smiling, wrecked. Down in the square, a figure with a book looks up — Basile, who has just seen everything.",
        scarf: "It spirals above their heads in a double helix, then peels away, leaving them standing apart.",
        prompt:
          "A romantic night rooftop of Opéra Garnier with copper domes and golden statues, a vast glittering Paris behind, a man and woman almost kiss as a clock chimes midnight and the red scarf spirals around them in a double helix; she steps back, eyes steady, he smiles; cut to a lone man with a book watching from the square far below. Cinematic, aching.",
      },
      {
        title: "Mon Patron, Mon Mystère",
        dur: 40,
        place: "Paris at dawn",
        cast: ["aiko", "solene"],
        beat: "Pale dawn. Aiko walks home in her black dress, barefoot, heels in hand — and sees the first kiosk. Her face on the cover of ÉCARLATE. Her private, unfinished draft about Lucien, published without her consent. Solène's signature on the editor's note. The red scarf freezes in mid-air.",
        scarf: "It goes completely still. A drop of colour falls from its end like a tear.",
        prompt:
          "Pale pink dawn in Paris, a young woman in a black evening dress carries her heels and walks barefoot along the Seine past a newsstand; the magazine covers show her own portrait with a bold headline, the red scarf frozen in mid-air behind her, a single drop of crimson falling from its end. Slow, quiet, devastating.",
      },
    ],
  },
  {
    no: 5,
    title: "Nœud Coulant",
    en: "The Slipknot",
    tagline: "The tighter you pull, the more it holds.",
    hour: "Rain, silver-blue",
    tint: "#bcd2e0",
    logline:
      "Her private words are public, Lucien thinks she broke the NDA, and her friends are cracking under their own storms. Aiko learns the scarf is shortening — and in a rain-soaked flashback, the truth about Mitsuko, Solène and the first Maison Aubry design finally surfaces. The only person who offers shelter without asking for anything is Basile.",
    themes: ["Betrayal", "Rupture", "Truth"],
    scarfRule: "Rule IV revealed — every knot costs a metre. 40 metres left.",
    music: "Rain on the Seine (solo piano) · Flashback: music-box + shamisen",
    cliffhanger:
      "Soaked in the doorway of the atelier, Solène says: 'I need to tell you about your grandmother. All of it.'",
    stats: { romance: 4, career: 4, friendship: 3, mystery: 5, heat: 3 },
    scenes: [
      {
        title: "Fallout",
        dur: 30,
        place: "Paris kiosks, Maison Aubry",
        cast: ["aiko", "lucien"],
        beat: "Montage: strangers reading the article; whispers on buses; a barista smirks. Lucien reads it in the Silk Room; the ribbons around him turn black one by one. He crumples the page, then, after a long pause, smooths it flat again.",
        scarf: "The Silk Room ribbons — once red — return to black, mirroring his heart.",
        prompt:
          "Paris morning montage of people reading a magazine at cafés, buses and kiosks with whispers and sidelong glances; cut to a tall man in a charcoal suit in a room of silk ribbons that fade from red to black as he reads, crumples the page and slowly smooths it flat again. Moody, desaturated with a few red accents.",
      },
      {
        title: "Rain on the bridge",
        dur: 50,
        place: "Pont Alexandre III, in the rain",
        cast: ["aiko", "lucien"],
        beat: "The confrontation. Rain on gilded lamps. 'You broke our agreement.' 'You think I wrote this?' Each denial deepens the red in the scarf; he lifts his own ribbon-thread — it's pale. He's hiding something too. When they pull apart, the scarf has tied them together in a slipknot. Neither can untie it. It costs a metre.",
        scarf: "A slipknot tightens between them and the scarf visibly shortens on screen.",
        prompt:
          "Heavy rain on gilded Pont Alexandre III at night, lamps reflecting in puddles, a man in a charcoal suit and a woman in a black coat argue in the downpour, the red scarf looping between them and tightening into a knot as the rain bleeds off it; slow dolly, dramatic and painterly, blue-grey palette with crimson focus.",
      },
      {
        title: "Two chairs empty",
        dur: 55,
        place: "Café Marguerite",
        cast: ["aiko", "colette", "ines", "margaux"],
        beat: "The Four Chairs inverted. Inès: 'You were with the man we're about to expose.' Colette: 'Maybe we should have asked what you wanted.' Margaux, newly single, is broken and bright. The scarf, which tied them together in Ep. 2, now stretches thin between them. Aiko leaves.",
        scarf: "It frays at the edge of the table; the chairs scrape apart.",
        prompt:
          "A rainy Paris café at midday, four friends in an emotional argument at the same marble table, empty coffee cups and uneaten croissants; the red scarf, once looped through all four chairs, now stretches thin and tight between them as they slowly push their chairs apart and one walks out into the rain. Muted, intimate, heartfelt.",
      },
      {
        title: "1992 — The Atelier",
        dur: 60,
        place: "Flashback · Atelier Marchand, 1992",
        cast: ["mitsuko", "solene"],
        beat: "In warm, watercolour sepia: a young Solène — an apprentice, hungry and brilliant — and Mitsuko design the first red scarf together, night after night, an unspoken love in every stitch. A young Aubry (Lucien's father) offers Solène a job, a future, a flat in the 16th. She sells him the design. Mitsuko hears, and says nothing. The thread starts to unravel at one end.",
        scarf: "The scarf is born from two women's hands — and loses its first metre at the moment of the betrayal.",
        prompt:
          "Warm sepia watercolour flashback, 1992 Paris, a graceful middle-aged Japanese seamstress with a dark bun pierced by knitting needles and a young woman with a silver streak sit at a sewing table by lamplight knitting a long crimson scarf between them, hands touching on the wool; then a shadowy man in a suit enters and the young woman looks away, guilty, as the scarf's end begins to unravel. Soft, melancholic.",
      },
      {
        title: "Rain-soaked bookstall",
        dur: 60,
        place: "Basile's bookstall & flat above",
        cast: ["aiko", "basile"],
        beat: "A storm. Basile pulls her into his tiny flat above the bookshop: tea, dry sweater, no questions. Rain on windows. He reads her Mitsuko's margin notes aloud. Her head ends on his shoulder. They nearly kiss. She whispers: 'I don't want to be rescued. I want to be met.' He nods: 'Then I'll wait on the same side of the door.'",
        scarf: "It drapes over his shoulders, gentle and warm: a peaceful 'maybe'.",
        prompt:
          "A cosy rain-streaked bookshop flat at night, stacks of books and a steaming teapot, a gentle curly-haired man in a cardigan reads aloud while a young woman with a short black bob leans her head against his shoulder; the red scarf lazily drapes over them both like a blanket, soft warm lamplight, rain trickling on the window. Intimate, quiet, tender.",
      },
      {
        title: "Forty metres",
        dur: 45,
        place: "Atelier Marchand, dawn",
        cast: ["aiko", "solene", "mitsuko"],
        beat: "Dawn. Aiko measures the scarf with a tailor's tape: forty metres left. Mitsuko's third letter opens itself on the table: 'When the thread runs short, tie the end to the truth.' A knock. Solène stands in the doorway, soaked, sunglasses off for the first time, the red bracelet exposed.",
        scarf: "It reaches toward Solène's bracelet — and the two red threads recognise each other.",
        prompt:
          "Early dawn in a Paris atelier, a young woman measures a long crimson scarf with a tailor's tape across the floor, an old handwritten letter opens by itself on the table; a knock, and a soaked silver-haired woman without sunglasses stands in the doorway, a thin red thread bracelet glowing on her wrist as the scarf reaches toward it. Slow dolly, suspense, emotional.",
      },
    ],
  },
  {
    no: 6,
    title: "Le Dernier Mètre",
    en: "The Last Metre",
    tagline: "Not every thread ends in someone's hands. Some end in your own.",
    hour: "All hours — one long golden day",
    tint: "#c8d5bd",
    logline:
      "Solène confesses. The friends reunite. Lucien lays down his father's ledger. On the eve of Fashion Week, an entire city helps Aiko sew the last metre into the show of her life. In the Tuileries, the scarf unspools across Paris, ties its people together, and tells the truth for all of them. Then Aiko decides where the thread ends.",
    themes: ["Truth", "Forgiveness", "Self-authorship"],
    scarfRule: "All four rules fulfilled — the last metre belongs to Aiko.",
    music: "The Thread Theme, full orchestra + all motifs · ED: 'Last Metre' (OP & ED merge)",
    cliffhanger:
      "Post-credits, Tokyo: a boy opens a letter with a Paris postmark. A fine red thread slides out and drifts toward the window. Season 2 — 'Le Fil Rouge: Tokyo'.",
    stats: { romance: 4, career: 5, friendship: 5, mystery: 3, heat: 3 },
    scenes: [
      {
        title: "The confession",
        dur: 25,
        place: "Atelier Marchand",
        cast: ["aiko", "solene"],
        beat: "Solène tells it plainly: she loved Mitsuko, betrayed her, spent thirty years punishing herself by being unbreakable. She published the article to push Aiko toward the truth — and was wrong. 'I am sorry. Not for the headline. For everything underneath it.' Aiko says nothing, then puts the kettle on.",
        scarf: "The scarf slowly tints from pale rose to crimson as Solène speaks without lying.",
        prompt:
          "A warm atelier at dawn, a silver-haired woman in white speaks quietly and sincerely to a young woman with a black bob, her sunglasses folded on the table, as a pale pink scarf slowly deepens to rich crimson between them; the young woman puts a kettle on the stove, steam rising in golden light. Quiet, forgiving, emotional.",
      },
      {
        title: "Four chairs, again",
        dur: 45,
        place: "Café Marguerite · Street montage",
        cast: ["aiko", "colette", "ines", "margaux"],
        beat: "Apology montage: Colette arrives with croissants and champagne, Inès with a notebook and the Aubry ledger she's secured, Margaux with a sketchbook and a new gallery lease. The scarf ties all four to the chairs once more, then they stand and pick it up together.",
        scarf: "The Four Chairs return — this time the scarf is lifted by four pairs of hands.",
        prompt:
          "Four friends reunite at a Paris café terrace, hugging, laughing, crying; one brings champagne and croissants, one a notebook, one a sketchbook; the red scarf loops through their chairs and then four pairs of hands lift it up together toward a bright sky. Joyful, tender, golden light.",
      },
      {
        title: "The last night of sewing",
        dur: 55,
        place: "Atelier Marchand, night",
        cast: ["aiko", "solene", "basile", "lucien", "colette"],
        beat: "A communal all-nighter. Colette pours wine, Basile brings tea and soup, Inès fact-checks, Solène threads needles beside Aiko. Lucien arrives with his father's ledger proving the stolen design, and tears up his own contract: 'I'm not asking for a muse. I'm asking for a rival.' She smiles: 'Then you'd better keep up.'",
        scarf: "Every person in the room tugs a bit of the scarf; the last metre is stitched with everyone's thread.",
        prompt:
          "A cosy crowded atelier at night, friends and colleagues sew and sip tea together around a table, a silver-haired woman threads a needle beside a young woman with a black bob, a tall man in charcoal enters and tears a contract in half with a small smile; the red scarf weaves through all of their hands, golden lamplight. Warm ensemble scene, heartwarming.",
      },
      {
        title: "The Tuileries show",
        dur: 65,
        place: "Jardin des Tuileries · all of Paris",
        cast: ["aiko", "solene", "lucien", "colette", "margaux", "ines"],
        beat: "THE set-piece. Runway through gravel and fountains; models in red ribbons. The scarf rises from Aiko's shoulders and unspools — around the Ferris wheel, over the Louvre pyramid, around the Obelisk, between the bridges, tying thousands of Parisians together. Solène takes the mic and credits 'Mitsuko Marchand, the designer of the original Fil Rouge.' The whole city glows crimson.",
        scarf: "The scarf has its longest sequence: a three-minute red thread across the entire city, binding it all.",
        prompt:
          "Spectacular outdoor fashion show in the Tuileries garden at golden hour, models in flowing red ribbons walking a gravel runway, as a vast crimson scarf unspools from a young woman's shoulders into the sky, circling the Ferris wheel, the glass Louvre pyramid, the Egyptian obelisk and the Seine bridges, tying together thousands of smiling Parisians; sweeping aerial cinematography, soaring, euphoric.",
      },
      {
        title: "Ask me in spring",
        dur: 60,
        place: "Pont des Arts, dusk",
        cast: ["aiko", "lucien", "basile"],
        beat: "Maison Aubry stays independent, with the Marchand name on the door. Lucien meets her on the bridge. 'Ask me again in spring.' He nods: it's the first time he's been told to wait and grateful for it. At the quay, Basile hands her a book, signed. She kisses his cheek: 'Thank you for being a place I could land.' He smiles: 'And a place you can come back to.' Both doors open. Neither is chosen.",
        scarf: "The scarf loops lightly around all three, then retracts to her.",
        prompt:
          "Dusk on Pont des Arts, lilac and gold sky, a woman with a black bob and a tall man in charcoal stand close but not touching, the red scarf looping lightly between them; she says something gentle, he smiles; cut to a quay, a curly-haired man handing her a book, a soft cheek kiss, the scarf retracting to her shoulders. Bittersweet, romantic, open ending.",
      },
      {
        title: "The last column",
        dur: 50,
        place: "Atelier Marchand → rooftops → Tokyo",
        cast: ["aiko", "mitsuko"],
        beat: "Dawn, Atelier. Aiko holds the scarf's last end — one metre of thread, the stitched 'M' glinting. She ties it not to a man, a friend or a house, but around her own wrist. Over her voice: 'The thread doesn't tie you down. It tells you where you're from — and lets you go.' The shop sign flips to 'ATELIER MARCHAND — Mitsuko & Aiko'. Post-credits: Tokyo; a boy opens a letter.",
        scarf: "Final image: the scarf's end, tied around her own wrist, glowing crimson in the first sunlight.",
        prompt:
          "Pale gold dawn in a Paris atelier, a young woman with a short black bob holds the last end of a long crimson scarf with a stitched white 'M', ties it gently around her own wrist, smiles, and walks out; the shop sign turns to read a new name; the camera rises over rooftops at sunrise as the red thread arcs toward the east; cut to a Tokyo apartment where a boy opens a letter and a red thread drifts out. Emotional, hopeful finale.",
      },
    ],
  },
];
