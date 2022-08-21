import styles from './styles.module.css';
import { useState } from 'react';
import { StartMenu, BattleMenu } from 'Components';

export const App = () => {
  const [mode, setMode] = useState('start');
  // 3 game states (modes) initial mode start
  return (
    <div className={styles.main}>
      {mode === 'start' && (
        <StartMenu onStartClick={() => setMode('battle')} />
      )}

      {mode === 'battle' && <BattleMenu />}

      {mode === 'gameOver' && <>Game Over</>}
    </div>
  );
};
