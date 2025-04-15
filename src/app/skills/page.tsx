import styles from "@/app/page.module.css";

export default function Home() {
    return (
        <div className={styles.pageBody}>
            <div className={styles.backgroundContainer}></div>
            <div className={styles.pageContainer}>
                <h1>Main Page</h1>
            </div>
        </div>
    );
}
