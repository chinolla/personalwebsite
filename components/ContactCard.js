import styles from '../styles/ContactCard.module.css'
import Image from 'next/image'

export default function ContactCard () {
    return (
        <div className={styles.outer}>
            <div className={styles.header}>
                <h2>Contact Me</h2>
            </div>
            <div className={styles.content}>
                <a href='https://github.com/chinolla'>
                    <Image
                        src="/images/github.png"
                        width={30}
                        height={30}
                        layout='intrinsic'
                    />
                    github
                </a>
                <a href='https://www.linkedin.com/in/cristobalchinolla/'>
                    <Image
                        src="/images/linkedin.png"
                        width={30}
                        height={30}
                        layout='intrinsic'
                    />
                    LinkedIn
                </a>
                <a href='https://twitter.com/interwebsdotcom'>
                    <Image
                        src="/images/twitter.png"
                        width={30}
                        height={30}
                        layout='intrinsic'
                    />
                    Twitter
                </a>
            </div>
        </div>
    )
}