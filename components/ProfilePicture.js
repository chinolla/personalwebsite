import styles from '../styles/ProfilePicture.module.css'
import Image from 'next/image'


export default function ProfilePicture () {
    return (
        <div className={styles.outer}>
            <div className={styles.header}>
                <h2>Profile Picture</h2>
            </div>
            <Image className={styles.profilepic}
                    src="/images/profilepix.png"
                    width={375}
                    height={375}
                    layout='intrinsic'
                    alt="Picture of the author"
                />
            
        </div>
    )
}