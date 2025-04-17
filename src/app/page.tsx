import styles from "./page.module.css";

export default function Home() {
  return (
      <div className={styles.pageBody}>
          <div className={styles.foregroundContainer}></div>
          <div className={styles.backgroundContainer}></div>
          <div className={styles.pageContainer}>
              <div className={styles.contentContainer}>
                  <div className={styles.heroBox}>
                      Hi. I am Robert.
                  </div>
                  <div className={styles.contentBox}>
                      <h1>Main Page</h1>
                  </div>
              </div>
          </div>
      </div>
  );
}
