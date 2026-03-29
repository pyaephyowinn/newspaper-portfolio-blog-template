@AGENTS.md

# newspaper-portfolio-template

A portfolio blog template themed as **"The Ohara Chronicle"** using newspapercn-ui components.

## Commands

```bash
pnpm dev    # Start dev server
pnpm build  # Production build
pnpm lint   # ESLint
```

## Structure

```
app/
  page.tsx                    # Home page
  about/page.tsx              # About page
  blog/page.tsx               # Blog listing
  blog/[slug]/page.tsx        # Dynamic blog post (matches against blog-data.ts)
  contact/page.tsx            # Contact page
  globals.css                 # Theme CSS variables (light + dark)
components/
  newspapercn/                # 10 themed components (masthead, wanted-poster, etc.)
  ui/                         # 9 shadcn base components
  site-header.tsx             # Sticky header with navigation
  site-footer.tsx             # Footer
  theme-provider.tsx          # next-themes wrapper
lib/
  blog-data.ts                # Blog posts as TypeScript array (BlogPost interface)
  utils.ts                    # cn() helper
styles/
  newspaper-theme.css         # Theme tokens — keep in sync with app/globals.css
```

## Key Patterns

- Blog posts are defined in `lib/blog-data.ts` as a TypeScript array (no CMS). Each post has a `slug`, `title`, `excerpt`, `category`, `date`, `content` (string array of paragraphs), and optional `codeBlock`.
- Dynamic blog routes in `app/blog/[slug]/page.tsx` look up posts by slug from blog-data.ts.
- Theme uses shadcn style `base-nova`. Components installed via `npx shadcn@latest add`.
- Two CSS files define theme tokens: `app/globals.css` (active) and `styles/newspaper-theme.css` (reference). Keep them in sync.

## Deployment

- **Live:** https://newspaper-portfolio-blog-template.vercel.app
- Auto-deploys on push to `main` via Vercel + GitHub integration
