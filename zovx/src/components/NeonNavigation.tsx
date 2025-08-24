import Link from "next/link";
import styles from "./NeonNavigation.module.css";

export default function NeonNavigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          ZOVX
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navItem} style={{ "--clr": "#00ade1" } as React.CSSProperties}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
        <li className={styles.navItem} style={{ "--clr": "#ffdd1c" } as React.CSSProperties}>
          <Link href="/category/ecommerce-brands" className={styles.navLink}>
            E-commerce
          </Link>
        </li>
        <li className={styles.navItem} style={{ "--clr": "#00dc82" } as React.CSSProperties}>
          <Link href="/category/content-creators" className={styles.navLink}>
            Creators
          </Link>
        </li>
        <li className={styles.navItem} style={{ "--clr": "#9b59b6" } as React.CSSProperties}>
          <Link href="/contact" className={styles.navLink}>
            Custom AI
          </Link>
        </li>
        </ul>
      </div>
    </nav>
  );
}
