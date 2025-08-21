import styles from "./styles.module.css";

export function Box({titulo, descrição}) {
  return (
    <div className={styles.box}>
      <h1>{titulo}</h1>
      <p>{descrição}</p>
      <div className={styles.buttons}>
        <button className={styles.toDo}>To Do</button>
        <button className={styles.doing}>Doing</button>
        <button className={styles.done}>Done</button>
      </div>
    </div>
  );
}
