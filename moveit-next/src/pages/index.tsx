import styles from '../styles/pages/Home.module.css';

import Head from 'next/head';

import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import ExperienceBar from '../components/ExpirenceBar';
import CompletedChallenges from '../components/CompletedChallenges';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move.it | Begin</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
