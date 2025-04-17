'use client'

import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Wordmark from "@/app/components/wordmark";
import {chakraPetch} from "@/app/fonts";

export default function Header() {
    const pathname = usePathname()

  return (
      <div className={`${styles.headerBody}`}>
          <nav className={`${styles.headerContainer}`}>
              <Wordmark/>

              <div className={`${styles.navButtons} ${chakraPetch.className}`}>
                  <Link href="/about"
                        className={`${styles.headerLink} ${pathname === '/about' ? styles.headerLinkActive : ''}`}>
                      About
                  </Link>

                  <Link href="/skills"
                        className={`${styles.headerLink} ${pathname === '/skills' ? styles.headerLinkActive : ''}`}>
                      Skills
                  </Link>

                  <Link href="/projects"
                        className={`${styles.headerLink} ${pathname === '/projects' ? styles.headerLinkActive : ''}`}>
                      Projects
                  </Link>

                  <Link href="/contact"
                        className={`${styles.headerLink} ${pathname === '/contact' ? styles.headerLinkActive : ''}`}>
                      Contact
                  </Link>

                  <Link href="/resume"
                        className={`${styles.headerLink} ${pathname === '/resume' ? styles.headerLinkActive : ''}`}>
                      Resume
                  </Link>

              </div>

          </nav>
      </div>
  );
};

