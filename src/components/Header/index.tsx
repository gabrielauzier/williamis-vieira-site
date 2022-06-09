import styles from "./styles.module.scss";

import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>
          williamis<span>vieira</span>
        </h1>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/" prefetch>
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
