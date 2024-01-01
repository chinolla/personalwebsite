import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <Layout>

        <AboutMe/>
   
    </Layout>
  );
}
