import Image from "next/image";
import styles from "./page.module.css";
import HeaderSection from "./sections/headerSection/headerSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderSection/>
    </main>
  );
}
