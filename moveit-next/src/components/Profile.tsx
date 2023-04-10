import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';
import { ChallengesContext } from '@/contexts/ChallengesContext';

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/netrometro.png" alt="Ewerton Mendonça" />
      <div>
        <strong>Ewerton Mendonça</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}