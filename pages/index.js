// pages/index.js
import Head from 'next/head';
import Chatbot from '../components/Chatbot';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Chatbot UI</title>
            </Head>
            <main className={styles.main}>
                <h1>Unify ChatGPT</h1>
                <Chatbot />
            </main>
        </div>
    );
}