import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import MainPage from '../components/mainpage';

export default function Home() {
  return (
    <Layout>
        <MainPage/>
    </Layout>
  );
}
