import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
      <div className={styles.pageBody}>
          <div className={styles.foregroundContainer}></div>
          <div className={styles.backgroundContainer}></div>
          <div className={styles.pageContainer}>
              <div className={styles.contentContainer}>
                  <div className={styles.headerBox}>
                      <Image
                          className={styles.svgText}
                          src="/graphics/hiim.svg"
                          width={250}
                          height={50}
                          alt="Robert"
                      />
                      <Image
                          className={styles.svgName}
                          src="/graphics/roberttitle.svg"
                          width={1000}
                          height={220}
                          alt="Robert"
                      />
                      <Image
                          className={styles.svgText}
                          src="/graphics/anaspiring.svg"
                          width={250}
                          height={30}
                          alt="Robert"
                      />
                      <Image
                          className={styles.svgName}
                          src="/graphics/fse.svg"
                          width={1000}
                          height={100}
                          alt="Robert"
                      />
                  </div>
                  {/*<div className={styles.contentBox}>*/}
                  {/*    <h2>Main Page</h2>*/}
                  {/*</div>*/}
              </div>
          </div>
      </div>
  );
}
