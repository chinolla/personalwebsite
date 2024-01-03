import Link from "next/link";
import styles from "../styles/Layout.module.css"

export default function Layout({children}) {

    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.leftnavbar}>
                    <h1>[thefacebook]</h1>
                </div>
                <div className={styles.rightnavbar}>
                <Link href="/">Home</Link>
                <Link href="/yap">Yap Sessions</Link>
                <Link href="https://github.com/chinolla">Projects</Link>
                <Link href="https://www.linkedin.com/in/cristobalchinolla/">Contact</Link>
                </div>
  
            </nav>
            <main className={styles.main}>{children}</main>
        </div>
    );

}
