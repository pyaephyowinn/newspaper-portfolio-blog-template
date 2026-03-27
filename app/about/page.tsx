import type { Metadata } from "next";
import { ColumnLayout } from "@/components/newspapercn/column-layout";
import { BountyTable } from "@/components/newspapercn/bounty-table";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Nico Robin",
  description:
    "The biography of Nico Robin — archaeologist, scholar, and the last survivor of Ohara.",
};

const bountyHistory = [
  {
    rank: 1,
    name: "Post-Wano",
    epithet: "After defeating the Beast Pirates",
    crew: "Straw Hat Pirates",
    bounty: 930000000,
    status: "new" as const,
  },
  {
    rank: 2,
    name: "Post-Dressrosa",
    epithet: "After the fall of Doflamingo",
    crew: "Straw Hat Pirates",
    bounty: 130000000,
    status: "increased" as const,
  },
  {
    rank: 3,
    name: "Post-Enies Lobby",
    epithet: "After declaring war on the World Government",
    crew: "Straw Hat Pirates",
    bounty: 80000000,
    status: "increased" as const,
  },
  {
    rank: 4,
    name: "Age 8 — Ohara",
    epithet: "Sole survivor of the Buster Call",
    crew: "None",
    bounty: 79000000,
    status: "new" as const,
  },
];

const faqItems = [
  {
    question: "What is the Void Century?",
    answer:
      "The Void Century is a 100-year gap in recorded history, approximately 800 to 900 years ago. The World Government has made it illegal to research this period. The Poneglyphs are the only surviving records of what occurred during this time.",
  },
  {
    question: "How many Poneglyphs have you translated?",
    answer:
      "I have personally translated numerous Poneglyphs across the Grand Line and the New World, including three of the four Road Poneglyphs. Each one reveals another piece of the puzzle that is the true history of the world.",
  },
  {
    question: "What is the Hana Hana no Mi?",
    answer:
      "The Hana Hana no Mi (Flower-Flower Fruit) is a Paramecia-type Devil Fruit that allows me to sprout duplicates of any body part on any surface within range. I've developed this ability over two decades, eventually unlocking its ultimate form: Demonio Fleur.",
  },
  {
    question: "What languages do you speak?",
    answer:
      "I am fluent in the ancient Poneglyph script — a skill passed down through Ohara's scholars. I also speak the common tongue of the Grand Line and have working knowledge of several regional dialects acquired during my twenty years of travel.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div>
        <Badge variant="section" className="mb-3">
          Profile
        </Badge>
        <h1 className="font-serif text-5xl font-bold leading-tight">
          Nico Robin
        </h1>
        <p className="mt-2 font-body text-lg italic text-muted-foreground">
          &ldquo;Devil Child&rdquo; — Archaeologist of the Straw Hat Pirates
        </p>
        <Separator variant="thick" className="mt-4 w-20" />
      </div>

      {/* Biography in newspaper columns */}
      <section>
        <h2 className="section-heading mb-6 font-serif text-xl font-bold uppercase tracking-[0.15em]">
          Biography
        </h2>
        <ColumnLayout columns={2} gap="lg" rule="thin" dropCap justified>
          <p>
            Nico Robin was born on the island of Ohara in the West Blue. From a
            young age, she demonstrated extraordinary intellectual ability,
            earning her doctorate in archaeology at the age of eight — the
            youngest scholar in Ohara&apos;s history. Under the tutelage of
            Professor Clover and the scholars of the Tree of Knowledge, she
            learned to read the Poneglyphs, becoming one of the last people
            alive with this ability.
          </p>
          <p>
            The Buster Call ordered by the World Government destroyed Ohara when
            Robin was just eight years old. She survived thanks to the sacrifice
            of Vice Admiral Jaguar D. Saul and escaped with a bounty of
            ฿79,000,000 on her head — not for any crime, but for the knowledge
            she carried.
          </p>
          <p>
            For the next twenty years, Robin survived by allying herself with
            various criminal organizations, including Baroque Works under the
            leadership of Crocodile. She served as his partner under the
            codename &ldquo;Miss All Sunday,&rdquo; using the arrangement as
            cover while secretly pursuing her research into the Poneglyphs.
          </p>
          <p>
            Everything changed when she encountered the Straw Hat Pirates in
            Arabasta. After Crocodile&apos;s defeat, Robin joined Luffy&apos;s
            crew uninvited — and found, for the first time, people who valued
            her not for her utility but for herself. The events of Enies Lobby,
            where the crew declared war on the World Government to rescue her,
            marked the turning point of her life.
          </p>
          <p>
            Today, Robin serves as the archaeologist of the Straw Hat Pirates,
            translating Poneglyphs across the New World as the crew advances
            toward Laugh Tale. Her dream — to uncover the true history recorded
            in the Rio Poneglyph — is closer than ever to being realized.
          </p>
        </ColumnLayout>
      </section>

      <Separator variant="ornamental" />

      {/* Skills */}
      <section>
        <h2 className="section-heading mb-6 font-serif text-xl font-bold uppercase tracking-[0.15em]">
          Skills &amp; Abilities
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Poneglyph Translation",
              desc: "The only living person capable of reading and translating the ancient Poneglyph script. A skill inherited from the scholars of Ohara.",
            },
            {
              title: "Hana Hana no Mi",
              desc: "Paramecia Devil Fruit granting the ability to sprout body parts on any surface. Advanced techniques include Gigantesco Mano and Demonio Fleur.",
            },
            {
              title: "Intelligence & Strategy",
              desc: "Exceptional analytical mind honed through decades of survival. Expert in history, espionage, assassination, and archaeological fieldwork.",
            },
          ].map((skill) => (
            <div
              key={skill.title}
              className="group border-l-2 border-primary pl-5 transition-all duration-300 hover:border-l-accent hover:pl-6"
            >
              <h3 className="font-serif text-lg font-bold group-hover:text-accent transition-colors">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator variant="ornamental" />

      {/* Bounty History */}
      <section>
        <h2 className="section-heading mb-6 font-serif text-xl font-bold uppercase tracking-[0.15em]">
          Bounty History
        </h2>
        <BountyTable
          entries={bountyHistory}
          title="Official World Government Bounty Records"
          showRank
        />
      </section>

      <Separator variant="ornamental" />

      {/* FAQ / Interview */}
      <section>
        <h2 className="section-heading mb-6 font-serif text-xl font-bold uppercase tracking-[0.15em]">
          Interview with the Archaeologist
        </h2>
        <div className="space-y-0">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group border-b border-border py-4 first:border-t"
            >
              <summary className="flex cursor-pointer items-center justify-between font-serif text-base font-bold uppercase tracking-wider transition-colors hover:text-accent">
                {item.question}
                <span className="ml-4 shrink-0 text-lg text-muted-foreground transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="overflow-hidden">
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
