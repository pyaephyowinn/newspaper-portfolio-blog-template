"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Masthead } from "@/components/newspapercn/masthead";
import { LogPoseNav } from "@/components/newspapercn/log-pose-nav";
import { ThemeToggle } from "@/components/newspapercn/theme-toggle";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const items = navItems.map((item) => ({
    ...item,
    active:
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href)),
  }));

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="mx-auto max-w-5xl px-4">
        {/* Full masthead — collapses on scroll */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: scrolled ? "0px" : "200px",
            opacity: scrolled ? 0 : 1,
          }}
        >
          <Masthead
            title="The Ohara Chronicle"
            tagline="Archaeology, History & the Pursuit of Truth"
            date={new Date()}
            volume={1}
            issueNumber={28}
            variant="broadsheet"
          />
        </div>

        {/* Compact nav bar — always visible */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            {scrolled && (
              <Link
                href="/"
                className="font-serif text-sm font-black uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                The Ohara Chronicle
              </Link>
            )}
            {/* Desktop nav */}
            <LogPoseNav items={items} variant="linear" className="hidden md:flex" />
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle size="sm" />
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-border/50 py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 font-serif text-sm rounded-sm transition-colors ${
                  item.active
                    ? "bg-primary text-primary-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
      {!scrolled && <Separator variant="thick" />}
    </header>
  );
}
