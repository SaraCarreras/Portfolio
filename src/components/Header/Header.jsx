import photoSara from "@/assets/photo-cv-optimized.webp";
import styles from "./Header.module.scss";

export function Header() {
    return (
        <header>
            <img className={styles.photo} src={photoSara} alt="Sara Carreras" />
            <h1 className={styles.completeName}>Sara Carreras</h1>
            <p className={styles.shortSentence}>
                Frontend Developer you will need for (almost) any app!
            </p>
        </header>
    );
}
