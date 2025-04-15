import styles from "./page.module.css";

export default function Home() {
  return (
      <div className={styles.pageContainer}>
        <div className={styles.backgroundContainer}></div>
          <div className={styles.pageBody}>
            <h1>Main Page</h1>
          </div>
      </div>
  );
}
