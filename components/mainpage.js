import styles from '../styles/main.module.css'
import Image from 'next/image';
import ContentCard from './ContentCard';
import { InnerContent } from './ContentCard';
import React from 'react';

export default function MainPage() {
    return (

        <div className={styles.main}>
            <aside className={styles.sidecontent}>

            </aside>
            <section className={styles.maincontent}>
                <div className={styles.subheader}>
                    <h2>chris chinolla's profile</h2>
                </div>
                <ContentCard
                    title="About me"
                    body={[
                        <InnerContent key="1" subheading="here" content="way" />,
                        <InnerContent key="2" subheading="here" content="way" />
                      ]}
                />

            </section>
        </div>


    );
}