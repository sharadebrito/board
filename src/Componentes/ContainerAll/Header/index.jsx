import styles from './styles.module.css'


export function Header({setModalOpen}) {
  return (
    <header className={styles.header}>
      <h1>TaskFlow</h1>
      <button onClick={() => setModalOpen(true)}>Nova Task</button>
    </header>
  );
}
