import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 pb-10 pt-4">
      <Separator variant="ornamental" className="my-8" />
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="font-serif text-base font-black uppercase tracking-[0.2em] text-foreground/70">
          The Ohara Chronicle
        </p>
        <p className="font-body text-xs italic text-muted-foreground max-w-md">
          &ldquo;The world still doesn&apos;t know what happened during that
          blank century. I want to learn the true history.&rdquo;
        </p>
        <Separator className="w-12 mx-auto" />
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">
            Built with{" "}
            <a
              href="https://newspapercn-ui.vercel.app"
              className="font-medium text-foreground underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              newspapercn-ui
            </a>{" "}
            — A One Piece newspaper-themed shadcn/ui variant
          </p>
          <p className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground/60">
            Next.js &middot; Tailwind CSS &middot; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
