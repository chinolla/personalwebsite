import styles from '../styles/main.module.css'
import Image from 'next/image';
import ContentCard from './ContentCard';
import { InnerContent } from './ContentCard';
import TechStack from './TechStack';
import React from 'react';
import ProfilePicture from './ProfilePicture';

export default function MainPage() {
    return (

        <div className={styles.main}>
            <aside className={styles.sidecontent}>
                <ProfilePicture
                />
                <TechStack>
                </TechStack>
            </aside>
            <section className={styles.maincontent}>
                <div className={styles.subheader}>
                    <h2>Chris Chinolla's Profile</h2>
                </div>
                <ContentCard
                    title="About me"
                    body={[
                        <InnerContent key="1" subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />
                    ]}
                />
                <ContentCard
                    title="Things I've Built"
                    body={[
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                    ]}
                />
                <ContentCard
                    title="What I'm Learning"
                    body={[
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                    ]}
                />
                <ContentCard
                    title="Things I've Built"
                    body={[
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                        <InnerContent subheading="How I Got Started" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                    ]}
                />


            </section>
        </div>


    );
}