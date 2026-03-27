import type { Metadata } from "next";
import Link from "next/link";
import { NewsCooBadge } from "@/components/newspapercn/news-coo-badge";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on archaeology, history, Devil Fruits, and life on the Grand Line.",
};

export default function BlogListingPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="section" className="mb-3">
          Archives
        </Badge>
        <h1 className="font-serif text-5xl font-bold leading-tight">
          All Articles
        </h1>
        <p className="mt-2 font-body text-lg italic text-muted-foreground">
          Research notes, reflections, and dispatches from the Grand Line
        </p>
        <Separator variant="thick" className="mt-4 w-20" />
      </div>

      <div className="space-y-0">
        {blogPosts.map((post, i) => (
          <div key={post.slug}>
            {i > 0 && <Separator />}
            <Link
              href={`/blog/${post.slug}`}
              className="group block py-6 transition-colors hover:bg-muted/10 -mx-4 px-4"
            >
              <NewsCooBadge
                variant={post.isNew ? "new" : "dot"}
                position="top-right"
                animate={post.isNew}
                className="w-full"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                  {/* Date column */}
                  <div className="shrink-0 sm:w-32 sm:pt-1">
                    <span className="text-xs text-muted-foreground font-sans tracking-wide">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <Badge variant="section">{post.category}</Badge>
                    <h2 className="font-serif text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <p className="pt-1 font-sans text-xs font-medium uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read article →
                    </p>
                  </div>
                </div>
              </NewsCooBadge>
            </Link>
          </div>
        ))}
      </div>

      <Separator variant="ornamental" />

      {/* Pagination placeholder */}
      <nav className="flex items-center justify-center gap-6 font-serif text-sm">
        <span className="text-muted-foreground/50 cursor-default">
          « Previous
        </span>
        <span className="bg-primary px-3 py-1.5 text-primary-foreground font-bold tracking-wide">
          1
        </span>
        <span className="text-muted-foreground/50 cursor-default">Next »</span>
      </nav>
    </div>
  );
}
