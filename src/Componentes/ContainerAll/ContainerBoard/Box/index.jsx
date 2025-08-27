import styles from "./styles.module.css";

export function Box({ titulo, descricao, excluir, index, mudarStatus }) {
  return (
    <div className={styles.box}>
      <div className={styles.titulo}>
        <h1>{titulo}</h1>
        <button onClick={() => excluir(index)} title="Excluir card">
          X
        </button>
      </div>

      <p>{descricao}</p>

      <div className={styles.buttons}>
        <button
          className={styles.toDo}
          onClick={() => mudarStatus(index, "To Do")}
        >
          To Do
        </button>
        <button
          className={styles.doing}
          onClick={() => mudarStatus(index, "Doing")}
        >
          Doing
        </button>
        <button
          className={styles.done}
          onClick={() => mudarStatus(index, "Done")}
        >
          Done
        </button>
      </div>
    </div>
  );
}
