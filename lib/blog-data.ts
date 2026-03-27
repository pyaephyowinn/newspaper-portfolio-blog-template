export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isNew: boolean;
  content: string[];
  codeBlock?: {
    code: string;
    language: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-lost-history-of-ohara",
    title: "The Lost History of Ohara",
    excerpt:
      "An account of the island of scholars and the Buster Call that silenced its pursuit of the Void Century.",
    category: "Archaeology",
    date: "2026-03-15",
    isNew: true,
    content: [
      "The island of Ohara was once the center of archaeological research in the entire world. Home to the Tree of Knowledge — a library containing thousands of years of accumulated wisdom — it attracted scholars from every sea. For generations, these researchers dedicated their lives to understanding the past, believing that history held the key to the future.",
      "What made Ohara unique was not merely the depth of its collection, but the ambition of its scholars. Under the guidance of Professor Clover, the research team undertook the forbidden study of the Poneglyphs — ancient stone tablets inscribed in a language lost to time. The World Government had declared this research illegal, claiming it threatened global stability.",
      "The truth was far more complex. The Poneglyphs contained records of the Void Century, a hundred-year gap in recorded history that the Government had systematically erased. The scholars of Ohara were not seeking weapons or power — they sought understanding. They believed that every civilization deserved to have its story told, no matter how inconvenient that story might be for those in power.",
      "On the day of the Buster Call, the scholars made their final stand. Rather than surrender their research, they formed a human chain to carry books from the burning Tree of Knowledge, throwing them into the lake to preserve what they could. Their defiance was not born of rebellion, but of an unshakeable conviction: knowledge must survive.",
      "Only one scholar survived that day — a child who had learned to read the ancient language. She carried the will of Ohara across two decades, through persecution and solitude, until she found companions who would protect her right to pursue the truth. The history of Ohara is not merely a tragedy. It is a testament to the enduring power of curiosity and the courage it takes to seek answers that the world would rather keep hidden.",
    ],
    codeBlock: {
      code: `// Fragment from Poneglyph #7 — West Blue
// Location: Ohara (destroyed)
// Translation: Professor Clover

"In the name of the Great Kingdom,
 we inscribe these words upon stone
 that cannot be burned, upon tablets
 that cannot be silenced.

 Let those who read these glyphs
 know that we existed, that we
 dreamed, and that our dream
 was a world without borders."`,
      language: "Ancient Text",
    },
  },
  {
    slug: "a-guide-to-reading-poneglyphs",
    title: "A Guide to Reading Poneglyphs",
    excerpt:
      "The stone tablets hold the key to the Void Century. Here is what we know about deciphering them.",
    category: "Research",
    date: "2026-03-10",
    isNew: true,
    content: [
      "The Poneglyphs are indestructible stone tablets scattered across the world, each inscribed with text in an ancient language that predates all modern writing systems. They were created during the Void Century by a civilization whose very existence the World Government has attempted to erase.",
      "There are four types of Poneglyphs. The Historical Poneglyphs record events of the Void Century. The Instructional Poneglyphs provide guidance on finding other tablets. The Road Poneglyphs — of which there are exactly four — reveal the location of Laugh Tale when their information is combined. And the Rio Poneglyph, formed by connecting the Historical Poneglyphs, tells the true history of the world.",
      "The script itself is logographic — each symbol represents a concept rather than a sound. The grammar follows a subject-object-verb order, with temporal markers embedded within the verb forms. What makes the language particularly challenging is its contextual layering: a single glyph can carry different meanings depending on the surrounding symbols and the physical location of the Poneglyph itself.",
      "To read a Poneglyph, one must understand not just the symbols but the civilization that created them. The Great Kingdom's writing system was designed for permanence and precision. Every line, every curve serves a purpose. There is no ornamentation — only meaning compressed into stone.",
    ],
    codeBlock: {
      code: `// Poneglyph Classification System
type PoneglyphType =
  | "historical"  // Records of the Void Century
  | "instructional" // Guides to other Poneglyphs
  | "road"        // 4 tablets → location of Laugh Tale
  | "rio";        // Combined truth of the world

interface Poneglyph {
  type: PoneglyphType;
  location: string;
  translated: boolean;
  translator?: "Nico Robin" | "Kozuki Clan";
}

// Known Road Poneglyphs
const roadPoneglyphs: Poneglyph[] = [
  { type: "road", location: "Zou", translated: true, translator: "Nico Robin" },
  { type: "road", location: "Whole Cake Island", translated: true, translator: "Nico Robin" },
  { type: "road", location: "Wano Country", translated: true, translator: "Nico Robin" },
  { type: "road", location: "Unknown", translated: false },
];`,
      language: "typescript",
    },
  },
  {
    slug: "crew-bonds-life-among-the-straw-hats",
    title: "Crew Bonds: Life Among the Straw Hats",
    excerpt:
      "After twenty years of solitude, finding a place to belong changed everything.",
    category: "Personal",
    date: "2026-02-28",
    isNew: false,
    content: [
      "For twenty years, I lived in the shadow of a world that wanted me dead. From the age of eight, I learned to survive by being useful to dangerous people, by making myself indispensable while remaining invisible. Trust was a luxury I could not afford. Every alliance was temporary, every sanctuary borrowed.",
      "When I first joined the Straw Hat crew, I expected it to be another arrangement of convenience. I would use them; they would use me. When the relationship became inconvenient, we would part ways — or worse. That was how the world worked. That was all I had ever known.",
      "I was wrong. At Enies Lobby, when the World Government came for me, when I told my crewmates to leave me behind because I believed my existence was a burden — they burned the flag of the world's most powerful institution and declared war on the entire system. Not for treasure, not for glory, but because I was their friend.",
      "Monkey D. Luffy stood on the rooftop of the courthouse and shouted for me to say that I wanted to live. And I did. For the first time in twenty years, I said it aloud. I want to live. I want to go to sea with you.",
      "That moment did not erase the pain of Ohara or the loneliness of those wandering years. But it gave me something I had never had: a home that moves with me, carried on a ship with people who would rather fight the world than leave a friend behind.",
    ],
  },
  {
    slug: "devil-fruit-classification-paramecia",
    title: "Devil Fruit Classification: Paramecia Analysis",
    excerpt:
      "A systematic examination of Paramecia-type Devil Fruits and their diverse manifestations.",
    category: "Devil Fruits",
    date: "2026-02-15",
    isNew: false,
    content: [
      "The Paramecia type is the most diverse classification of Devil Fruits, encompassing abilities that range from simple body modifications to the manipulation of abstract concepts. Unlike Zoan types, which follow predictable animal transformation patterns, or Logia types, which grant elemental embodiment, Paramecia fruits defy easy categorization.",
      "The Hana Hana no Mi, which I consumed as a child, is classified as a Paramecia that grants the ability to sprout duplicates of any body part on any surface within range. The applications extend far beyond combat — I can create eyes to observe distant rooms, ears to eavesdrop on conversations, and hands to manipulate objects at a distance.",
      "What makes the Hana Hana no Mi particularly interesting from an academic perspective is its scaling behavior. With training, the fruit's power evolved from sprouting individual limbs to creating full-body clones and eventually manifesting a colossal form. This suggests that Paramecia abilities are not fixed at the time of consumption but develop in proportion to the user's understanding and willpower.",
      "The broader implications are significant. If Devil Fruit powers are not merely inherited but cultivated, then the classification system itself may need revision. A fruit's potential is not defined by its initial abilities but by the imagination and determination of its wielder.",
    ],
    codeBlock: {
      code: `// Devil Fruit Power Scaling Model
interface DevilFruit {
  name: string;
  type: "Paramecia" | "Zoan" | "Logia";
  baseAbility: string;
  awakeningPotential: number; // 0-100
}

const hanaHanaNoMi: DevilFruit = {
  name: "Hana Hana no Mi",
  type: "Paramecia",
  baseAbility: "Sprout body parts on any surface",
  awakeningPotential: 85,
};

// Power progression over time
const powerLevels = [
  { stage: "Basic",    ability: "Sprout individual limbs" },
  { stage: "Advanced", ability: "Gigantesco Mano (giant limbs)" },
  { stage: "Expert",   ability: "Full-body clones (Cuerpo Fleur)" },
  { stage: "Demonio",  ability: "Demonio Fleur — colossal dark form" },
];`,
      language: "typescript",
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
