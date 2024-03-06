import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <div>
        <span>L</span>
        <span>e</span>
      </div>
      &nbsp;
      <div>
        <span>P</span>
        <span>e</span>
        <span>t</span>
        <span>i</span>
        <span>t</span>
      </div>
      &nbsp;
      <div>
        <span>D</span>
        <span>e</span>
        <span>p</span>
      </div>
    </div>
  );
}
