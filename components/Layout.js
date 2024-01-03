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
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
                </div>
  
            </nav>
            <main className={styles.main}>{children}</main>
        </div>
    );

}
