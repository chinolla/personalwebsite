import styles from '../styles/AboutMe.module.css'
import Image from 'next/image';

export default function AboutMe() {
    return (
        <div className={styles.subheader}>
            <div className={styles.main}>
                <aside className={styles.profilephoto}>
                    <Image className={styles.photo}
                        src="/images/profile.jpg"
                        height={350} // Desired size with correct aspect ratio
                        width={350} // Desired size with correct aspect ratio
                        layout='intrinsic'
                        alt="Your Name"
                    />
                    <div className={styles.photosubtext}>
                        <h1>Chris Chinolla </h1>
                        <h5>Software Engineer</h5>
                    </div>
                </aside>
                <section className={styles.profilecontent}>
                    <h1>Chris Chinolla </h1>
                    <div className={styles.quickinfobar}>
                        <div className={styles.infocontent}>
                            <Image className={styles.infocontentimage}
                                src="/images/marker.png"
                                height={20}
                                width={20}
                                layout='intrinsic'
                            />
                            <p>Dallas, Texas</p>
                        </div>
                        <div className={styles.infocontent}>
                            <Image className={styles.infocontentimage}
                                src="/images/briefcase.png"
                                height={20}
                                width={20}
                                layout='intrinsic'
                            />
                            <p>Dell Technologies</p>
                        </div>
                        <div className={styles.infocontent}>
                            <Image className={styles.infocontentimage}
                                src="/images/graduation-cap.png"
                                height={20}
                                width={20}
                                layout='intrinsic'
                            />
                            <p>The University of Texas at El Paso</p>
                        </div>
                    </div>
                    <div className={styles.aboutmeContainer}>
                        <h1>About Me</h1>
                        <p className={styles.aboutmeContent}>I fell in love with programming after watching <b>The Social Network</b> during my sophomore year of university. I changed my major to Computer Science the very next day and never looked back! As a Software Engineer @ Dell Technologies, I contribute to existing code and documentation based on product/program updates/user feedback and tackle product or system issues.</p>
                    </div>

                    <div className={styles.aboutmeContainer}>
                        <h1>Things I've Built</h1>
                    </div>

                    <div className={styles.aboutmeContainer}>
                        <h1>What I'm Learning</h1>
                    </div>

                    



                </section>
            </div>
        </div>

    );
}