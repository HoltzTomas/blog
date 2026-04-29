"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const pathname = usePathname();
  const isPostPage = pathname.startsWith("/blog/") && pathname !== "/blog";

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-left">© 2026 Tomas Holtz. Buenos Aires, AR.</div>

        <div className="site-footer-right">
          {isPostPage ? (
            <Link href="/blog" className="footer-link" data-cursor="hover">
              ← All posts
            </Link>
          ) : (
            <>
              <SocialLinks variant="text" />
              <Link href="/blog" className="footer-link" data-cursor="hover">
                Blog
              </Link>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
