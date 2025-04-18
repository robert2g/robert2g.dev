import styles from "@/app/components/wordmark.module.css";
import Link from "next/link";

export default function Wordmark() {
    return (
        <Link href="/" className={styles.iconFrame}>
            <svg className={styles.iconSvg}
                 id="Layer_1"
                 data-name="Layer 1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 706 226"
                 style={{backgroundColor: 'transparent', fill: 'currentColor'}}>

                <path className={styles.iconPath}
                      d="M86,20V0H0v106h26v-40h54v40h26v-46h-20v-14h20v-26h-20ZM80,26v14H26v-14h54ZM206,20V0h-66v20h-20v66h20v20h66v-20h20V20h-20ZM200,63v17h-54V26h54v37ZM326,20V0h-86v106h86v-20h20v-26h-20v-14h20v-26h-20ZM266,66h54v14h-54v-14ZM266,40v-14h54v14h-54ZM466,0v26h-80v14h40v26h-40v14h80v26h-106V0h106ZM566,20V0h-86v106h26v-40h54v40h26v-46h-20v-14h20v-26h-20ZM560,26v14h-54v-14h54ZM706,0v26h-40v80h-26V26h-40V0h106ZM106,120v26H26v54h54v-14h-40v-26h66v66H20v-20H0v-66h20v-20h86ZM206,140v-20h-86v106h26v-40h54v40h26v-46h-20v-14h20v-26h-20ZM200,146v14h-54v-14h54ZM326,140v-20h-66v20h-20v86h26v-20h54v20h26v-86h-20ZM266,163v-17h54v34h-54v-17ZM466,140v26h-26v-20h-54v54h54v-20h26v26h-20v20h-66v-20h-20v-66h20v-20h66v20h20ZM546,120v26h-20v54h20v26h-66v-26h20v-54h-20v-26h66ZM646,140v-20h-66v20h-20v86h26v-20h54v20h26v-86h-20ZM586,163v-17h54v34h-54v-17ZM706,226h-26v-26h26v26Z"/>
            </svg>
        </Link>
    )
}
