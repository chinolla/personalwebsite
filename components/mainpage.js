import styles from '../styles/main.module.css'
import Image from 'next/image';
import ContentCard from './ContentCard';
import { InnerContent } from './ContentCard';
import TechStack from './TechStack';
import React from 'react';
import ProfilePicture from './ProfilePicture';
import ContactCard from './ContactCard';

export default function MainPage() {
    return (

        <div className={styles.main}>
            <aside className={styles.sidecontent}>
                <ProfilePicture
                />
                <TechStack>
                </TechStack>
                <ContactCard>
                    
                </ContactCard>
            </aside>
            <section className={styles.maincontent}>
                <div className={styles.subheader}>
                    <h2>Chris Chinolla's Profile</h2>
                </div>
                <div className={styles.infomationTab}>
                    <ContentCard
                        title="Information"
                        body={[
                            <InnerContent key="1" subheading="Name:" content="Chris Chinolla" />,
                            <InnerContent key="1" subheading="School:" content="The University of Texas at El Paso" />,
                            <InnerContent key="1" subheading="Degree:" content="B.S Computer Science" />,
                            <InnerContent key="1" subheading="Work:" content="Dell Technologies" />,
                            <InnerContent key="1" subheading="Status:" content="Software Engineer" />,
                            <InnerContent key="1" subheading="Lives In:" content="Dallas, TX" />,
                            <InnerContent key="1" subheading="From:" content="El Paso, TX" />,
                            <InnerContent key="1" subheading="Interests:" content="Programming, AI, Toyota Tacoma, Valorant, Hiking, iOS Development, Investing, Space, Music, Virtual and Augmented Reality " />,
                            <InnerContent key="1" subheading="Last Update:" content="January 3, 2024" />
                        ]}
                    />
                    <ContentCard
                        title="About me"
                        body={[
                            <InnerContent key="1" subheading="About:" content="I fell in love with programming after watching The Social Network (henced why I themed this website after early Facebook.) The idea of being able to create anything from a laptop in my dorm inspired me. I changed my major to Computer Science the very next day and never looked back.  As a professional developer, I work with a team of awesome indivduals to ship out enterprise level code. As a hobbyist, I like learning new things and building whatever comes to mind :)" />,
                            
                        ]}
                    />

                </div>

                <ContentCard
                    title="Things I've Built"
                    body={[
                        <InnerContent subheading="Onboarding Portal for New Soldiers" content="Developed an innovative web-based onboarding platform designed to streamline the integration process for new soldiers into military units, featuring interactive guides, essential resources, and administrative tools to enhance operational readiness and unit cohesion." />,
                        <InnerContent subheading="Building: Vrbatim" content="iOS application that allows users to practice speaking non-native languages. With the use of GPT API, users will be able to converse with a variety of personalities, simulating real-life interactions " />,
                    ]}
                />
                <ContentCard
                    title="What I'm Learning"
                    body={[
                        <InnerContent subheading="100 Day of Swift:" content="I fell in love with programming after watching The Social Network. I changed my major to Computer Science the very next day and never looked back." />,
                        
                    ]}
                />
                <ContentCard
                    title="Goals for the Year"
                    body={[
                        <InnerContent subheading="code code code:" content="The amound of 'fun' code I wrote decreased to zero after graduating. This year, I want to reignite my passion for programming, aiming to commit at least 300/365 days" />,
                        <InnerContent subheading="back to basics:" content="Like coding for fun, I stopped practicing any sort of Data Structures and Algorithms problems as soon as I graduated. This year, I am committed to sharpen my skill and have fun completing LeetCode problems again." />,
                        <InnerContent subheading="marathon???" content="I used to run. have a few marathons under my belt. maybe I'll lace up the shoes again" />,
                        <InnerContent subheading="career moves" content="this year i'll be eclipsing 2 years at my current company/position. I welcome any new opportunites and challenges" />,
                        <InnerContent subheading="gaming like old times:" content="since I'll be learning iOS development. It would be cool to make a farm like game like Zombie Farm" />,
                    ]}
                />


            </section>
        </div>


    );
}