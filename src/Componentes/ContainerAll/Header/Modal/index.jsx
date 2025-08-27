import { useState } from "react";
import styles from "./styles.module.css";

export function Modal({ setModalOpen, adicionarItem }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  function salvarTask() {
    if (!titulo.trim()) return;

    adicionarItem({
      titulo,
      descricao,
      status: "To Do",
    });

    setTitulo("");
    setDescricao("");
    setModalOpen(false);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Criar Nova Task</h2>
        <input
          type="text"
          placeholder="Título da Task"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>

        <div>
          <div className={styles.buttons}>
            <button
              className={styles.cancelar}
              onClick={() => setModalOpen(false)}
            >
              Cancelar
            </button>

            <button className={styles.salvar} onClick={salvarTask}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
