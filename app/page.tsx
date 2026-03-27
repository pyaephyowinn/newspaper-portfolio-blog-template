import Link from "next/link";
import { HeadlineBanner } from "@/components/newspapercn/headline-banner";
import { WantedPoster } from "@/components/newspapercn/wanted-poster";
import { NewsCooBadge } from "@/components/newspapercn/news-coo-badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/lib/blog-data";

function RobinSilhouette() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full text-[oklch(0.35_0.03_55)]"
    >
      <rect width="200" height="200" fill="oklch(0.82 0.03 65)" />
      <circle cx="100" cy="60" r="35" fill="currentColor" opacity="0.6" />
      <ellipse cx="100" cy="140" rx="50" ry="60" fill="currentColor" opacity="0.5" />
      <text
        x="100"
        y="195"
        textAnchor="middle"
        fontSize="10"
        fill="currentColor"
        opacity="0.4"
        fontFamily="serif"
      >
        [Photo Placeholder]
      </text>
    </svg>
  );
}

export default function HomePage() {
  const latestPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="space-y-12">
      {/* Breaking News Banner */}
      <HeadlineBanner
        headline="Nico Robin — Archaeologist & Scholar of the Straw Hat Pirates"
        prefix="EXCLUSIVE!"
        severity="breaking"
        variant="banner"
      />

      {/* Hero: Wanted Poster + Intro */}
      <section className="flex flex-col items-center gap-10 md:flex-row md:items-start">
        <div className="shrink-0">
          <WantedPoster
            name="Nico Robin"
            epithet="Devil Child"
            image={<RobinSilhouette />}
            bounty={930000000}
            status="dead-or-alive"
            variant="standard"
            size="lg"
          />
        </div>
        <div className="flex-1 space-y-5">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
              Profile — Straw Hat Pirates
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              The Light of
              <br />
              the Revolution
            </h2>
          </div>
          <Separator variant="thick" className="w-16" />
          <p className="font-body text-base leading-relaxed text-foreground/80">
            Nico Robin is the sole survivor of the island of Ohara and the only
            person in the world who can read the ancient Poneglyphs. After twenty
            years of being hunted by the World Government, she found her place as
            the archaeologist of the Straw Hat Pirates — a crew that declared war
            on the world to protect her right to exist.
          </p>
          <p className="font-body text-sm leading-relaxed text-muted-foreground italic">
            This chronicle documents her research, reflections, and the pursuit
            of the Rio Poneglyph — the true history of the world.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Badge variant="section">Archaeologist</Badge>
            <Badge variant="section">Scholar</Badge>
            <Badge variant="section">Straw Hat Pirates</Badge>
          </div>
        </div>
      </section>

      <Separator variant="ornamental" />

      {/* Featured Post */}
      <section>
        <h2 className="section-heading mb-6 font-serif text-xl font-bold uppercase tracking-[0.15em]">
          Latest Article
        </h2>
        <Link href={`/blog/${latestPost.slug}`} className="group block">
          <NewsCooBadge
            variant="new"
            position="top-right"
            animate
            className="w-full"
          >
            <Card
              variant="featured"
              className="w-full transition-all duration-300 group-hover:border-t-primary group-hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge variant="breaking">{latestPost.category}</Badge>
                  <span className="text-xs text-muted-foreground font-sans tracking-wide">
                    {new Date(latestPost.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <CardTitle className="text-2xl md:text-3xl leading-tight group-hover:text-primary transition-colors">
                  {latestPost.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {latestPost.excerpt}
                </CardDescription>
                <p className="pt-2 font-sans text-xs font-medium uppercase tracking-wider text-primary">
                  Read article →
                </p>
              </CardHeader>
            </Card>
          </NewsCooBadge>
        </Link>
      </section>

      <Separator variant="double" />

      {/* Recent Posts */}
      <section>
        <h2 className="section-heading mb-6 font-serif text-xl font-bold uppercase tracking-[0.15em]">
          Recent Articles
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <NewsCooBadge
                variant={post.isNew ? "new" : "dot"}
                position="top-right"
                animate={post.isNew}
                className="w-full h-full"
              >
                <Card
                  variant="article"
                  className="h-full w-full transition-all duration-300 group-hover:border-l-accent group-hover:bg-muted/20"
                >
                  <CardHeader>
                    <Badge variant="section">{post.category}</Badge>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-sans">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="font-sans text-[10px] font-medium uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Read →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </NewsCooBadge>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
