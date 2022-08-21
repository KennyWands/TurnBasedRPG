import styles from './styles.module.css';

export const BattleMenu = ({ onStartClick }) => {
  return (
    <div className={styles.main}>
      <button className={styles.BattleMenu} onClick={onStartClick}>
        Battle Menu Component
      </button>
    </div>
  );
};
