import Link from "next/link";
import styles from "./NeonNavigation.module.css";

export default function NeonNavigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem} style={{ "--clr": "#00ade1" } as React.CSSProperties}>
          <Link href="/" className={styles.navLink} data-text="&nbsp;Home">
            &nbsp;Home&nbsp;
          </Link>
        </li>
        <li className={styles.navItem} style={{ "--clr": "#ffdd1c" } as React.CSSProperties}>
          <Link href="/category/ecommerce-brands" className={styles.navLink} data-text="&nbsp;E-commerce">
            &nbsp;E-commerce&nbsp;
          </Link>
        </li>
        <li className={styles.navItem} style={{ "--clr": "#00dc82" } as React.CSSProperties}>
          <Link href="/category/content-creators" className={styles.navLink} data-text="&nbsp;Content Creators">
            &nbsp; Content Creators&nbsp;
          </Link>
        </li>
        <li className={styles.navItem} style={{ "--clr": "#9b59b6" } as React.CSSProperties}>
          <Link href="/contact" className={styles.navLink} data-text="&nbsp;Custom AI">
            &nbsp;Custom AI&nbsp;
          </Link>
        </li>
      </ul>
    </nav>
  );
}
