import styles from "./styles.module.css";

export function Box({ titulo, descrição, excluir, index }) {
  return (
    <div className={styles.box}>
      <div className={styles.titulo}>
        <h1>{titulo}</h1>
        <button onClick={() => excluir(index)} title="Excluir card">
          X
        </button>
      </div>

      <p>{descrição}</p>

      <div className={styles.buttons}>
        <button className={styles.toDo}>To Do</button>
        <button className={styles.doing}>Doing</button>
        <button className={styles.done}>Done</button>
      </div>
    </div>
  );
}

