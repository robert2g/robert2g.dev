import styles from "@/app/page.module.css";
import {chakraPetch, openSans} from "@/app/fonts";

export default function Skills() {
    return (
        <div className={styles.pageBody}>
            <div className={styles.foregroundContainer}></div>
            <div className={styles.backgroundContainer}></div>
            <div className={styles.pageContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.titleBox}>
                        <h1 className={`${chakraPetch.className} ${styles.pageTitle}`}>Skills & Interests</h1>
                    </div>
                    <div className={`${styles.contentBox} ${openSans.className}`}>
                        <p>Text here</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
