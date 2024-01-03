import styles from '../styles/TechStack.module.css'
import Image from 'next/image'

export default function TechStack() {
    return (
        <div className={styles.outer}>
            <div className={styles.header}>
                <h2>Tech Stack</h2>
            </div>
            <div className={styles.techspec}>
                <div className={styles.tech}>
                <Image
                    src="/images/html.png"
                    width={30}
                    height={30}
                    layout='intrinsic'
                />
                <div>HTML</div>
                </div>
                <div className={styles.tech}>
                <Image
                    src="/images/css.png"
                    width={30}
                    height={30}
                    layout='intrinsic'
                />
                <div>CSS</div>
                </div>
                <div className={styles.tech}>
                <Image
                    src="/images/js.png"
                    width={30}
                    height={30}
                    layout='intrinsic'
                />
                <div>JavaScript</div>
                </div>
                <div className={styles.tech}>
                <Image
                    src="/images/nextjs.png"
                    width={30}
                    height={30}
                    layout='intrinsic'
                />
                <div>NextJS</div>
                </div>
                <div className={styles.tech}>
                <Image
                    src="/images/react.png"
                    width={30}
                    height={30}
                    layout='intrinsic'
                />
                <div>React</div>
                </div>
                <div className={styles.tech}>
                <Image
                    src="/images/swift.png"
                    width={30}
                    height={30}
                    layout='intrinsic'
                />
                <div>Swift</div>
                </div>
                <div className={styles.tech}>
                <Image
                    src="/images/python.png"
                    width={30}
                    height={30}
                    layout='intrinsic'
                />
                <div>Python</div>
                </div>
                <div className={styles.tech}>
                <Image
                    src="/images/favicon.ico"
                    width={30}
                    height={30}
                    layout='intrinsic'
                />
                <div>Vercel</div>
                </div>
            </div>
        </div>
    )
}