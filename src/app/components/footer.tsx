import styles from "./footer.module.css";
import LogoIcon from "./dragonicon";
import {chakraPetch} from "@/app/fonts";
import GithubIcon from "@/app/icons/githubicon";

export default function Footer() {
    return (
        <div className={`${styles.footerBody}`}>
            <div className={`${styles.footerContainer}`}>
                <div className={`${styles.footerDiv} ${chakraPetch.className}`}>
                    <div className={`${styles.footerColumn}`}>
                        <LogoIcon/>

                        <div className={`${styles.footerContent}`}>
                            <p>© Robert Gracia 2025. All rights reserved.</p>
                        </div>
                    </div>

                    <div className={`${styles.footerLinks}`}>
                        <GithubIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
};