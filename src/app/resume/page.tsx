import styles from "@/app/page.module.css";
import {chakraPetch} from "@/app/fonts";

export default function Resume() {
    return (
        <div className={styles.pageBody}>
            <div className={styles.foregroundContainer}></div>
            <div className={styles.backgroundContainer}></div>
            <div className={styles.pageContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.titleBox}>
                        <h1 className={`${chakraPetch.className} ${styles.pageTitle}`}>My Resume</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
