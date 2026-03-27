import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ColumnLayout } from "@/components/newspapercn/column-layout";
import { PoneglyphCode } from "@/components/newspapercn/poneglyph-code";
import { DenDenMushi } from "@/components/newspapercn/den-den-mushi";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-10">
      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="section">{post.category}</Badge>
          <span className="text-xs text-muted-foreground font-sans tracking-wide">
            {new Date(post.date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <h1 className="font-serif text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="font-body text-lg italic text-muted-foreground leading-relaxed max-w-2xl">
          {post.excerpt}
        </p>
        <Separator variant="thick" className="w-16" />
        <div className="flex items-center gap-3 text-sm text-muted-foreground font-sans">
          <span className="font-medium text-foreground">Nico Robin</span>
          <span className="text-border">|</span>
          <span>{post.content.length} min read</span>
        </div>
      </header>

      <Separator variant="double" />

      {/* Article Body */}
      <div className="max-w-none">
        <ColumnLayout columns={1} dropCap justified>
          {post.content.map((paragraph, i) => (
            <p key={i} className="mb-5 text-[1.05rem] leading-[1.8]">
              {paragraph}
            </p>
          ))}
        </ColumnLayout>
      </div>

      {/* Code Block */}
      {post.codeBlock && (
        <>
          <Separator variant="dashed" />
          <div className="my-2">
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
              Appendix — {post.codeBlock.language}
            </p>
            <PoneglyphCode
              code={post.codeBlock.code}
              language={post.codeBlock.language}
              showLineNumbers
              copyable
              translatable={post.codeBlock.language === "Ancient Text"}
              translationLabel="Decipher"
            />
          </div>
        </>
      )}

      <Separator variant="ornamental" />

      {/* Author's Note */}
      <aside>
        <DenDenMushi
          variant="single"
          messages={[
            {
              content:
                "The pursuit of knowledge is not a crime. Every civilization deserves to have its story told.",
              sender: "Nico Robin",
              timestamp: "Author's Note",
              direction: "incoming",
            },
          ]}
        />
      </aside>

      <Separator variant="double" />

      {/* Back to blog */}
      <nav className="flex items-center justify-center py-2">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 font-serif text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-accent"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Back to All Articles
        </Link>
      </nav>
    </article>
  );
}
