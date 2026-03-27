import type { Metadata } from "next";
import { HeadlineBanner } from "@/components/newspapercn/headline-banner";
import { DenDenMushi } from "@/components/newspapercn/den-den-mushi";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out via Den Den Mushi — transmissions welcome.",
};

const contactMessages = [
  {
    content: "Purupurupuru... Gacha! You've reached the Thousand Sunny.",
    sender: "Den Den Mushi",
    timestamp: "Automated",
    direction: "incoming" as const,
  },
  {
    content:
      "I'd like to discuss a collaboration on archaeological research.",
    sender: "Visitor",
    timestamp: "Just now",
    direction: "outgoing" as const,
  },
  {
    content:
      "How wonderful. I'm always happy to discuss history and archaeology. Please leave your message and I'll respond between islands.",
    sender: "Nico Robin",
    timestamp: "Just now",
    direction: "incoming" as const,
  },
  {
    content:
      "For urgent matters related to Poneglyph translations, please contact the Thousand Sunny directly. We monitor all frequencies.",
    sender: "Nico Robin",
    timestamp: "Just now",
    direction: "incoming" as const,
  },
];

const channels = [
  {
    title: "Thousand Sunny",
    description:
      "The Straw Hat Pirates' ship. Currently sailing the New World. Messages delivered by News Coo.",
  },
  {
    title: "Revolutionary Army",
    description:
      "For matters related to the pursuit of truth and historical research, contact through Dragon's network.",
  },
  {
    title: "Poneglyph Research Network",
    description:
      "An informal network of scholars and historians working to preserve the knowledge of the ancient world.",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <HeadlineBanner
        headline="All transmissions are welcome — reach out anytime"
        prefix="ATTENTION!"
        severity="bulletin"
        variant="banner"
      />

      <div>
        <Badge variant="section" className="mb-3">
          Communications
        </Badge>
        <h1 className="font-serif text-5xl font-bold leading-tight">
          Contact
        </h1>
        <p className="mt-2 font-body text-lg italic text-muted-foreground">
          Reach the archaeologist via Den Den Mushi
        </p>
        <Separator variant="thick" className="mt-4 w-20" />
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Den Den Mushi Chat */}
        <div className="space-y-4">
          <h2 className="section-heading mb-4 font-serif text-lg font-bold uppercase tracking-[0.15em]">
            Den Den Mushi
          </h2>
          <DenDenMushi variant="chat" messages={contactMessages} />
        </div>

        {/* Contact Methods */}
        <div className="space-y-4">
          <h2 className="section-heading mb-4 font-serif text-lg font-bold uppercase tracking-[0.15em]">
            Other Channels
          </h2>
          <div className="space-y-4">
            {channels.map((channel) => (
              <Card
                key={channel.title}
                variant="article"
                className="transition-all duration-300 hover:border-l-accent hover:bg-muted/10"
              >
                <CardHeader>
                  <CardTitle>{channel.title}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Separator variant="ornamental" />

      {/* Incoming Call */}
      <div className="mx-auto max-w-sm">
        <DenDenMushi
          variant="calling"
          callerName="Monkey D. Luffy"
          messages={[]}
        />
      </div>
    </div>
  );
}
