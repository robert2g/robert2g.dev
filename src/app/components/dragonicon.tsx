import styles from "@/app/components/wordmark.module.css";
import Link from "next/link";

export default function LogoIcon() {
    return (
        <Link href="/" className={styles.iconFrame}>
            <svg className={styles.iconSvg}
                 id="Layer_1"
                 data-name="Layer 1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 240 220"
                 style={{backgroundColor: 'transparent', fill: 'currentColor'}}>

                <path className={styles.iconPath}
                      d="M220,20v20h-20v20h-20V0h-20v20h-20v40h-40V20h-20V0h-20v60h-20v-20h-20v-20H0v60h20v20h20v40h-20v-20H0v40h20v20h40v20h20v20h80v-20h20v-20h40v-20h20v-40h-20v20h-20v-40h20v-20h20V20h-20ZM160,140h-20v-40h20v40ZM80,100h20v40h-20v-40Z"/>
            </svg>
        </Link>
    )
}
