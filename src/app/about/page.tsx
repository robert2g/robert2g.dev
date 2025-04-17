import styles from "@/app/page.module.css";

export default function About() {
    return (
        <div className={styles.pageBody}>
            <div className={styles.foregroundContainer}></div>
            <div className={styles.backgroundContainer}></div>
            <div className={styles.pageContainer}>
                <div className={styles.contentContainer}>
                    <h1>About Page</h1>
                </div>
            </div>
        </div>
    );
}
