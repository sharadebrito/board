import { useState } from "react";
import { Box } from "./Box";
import styles from "./styles.module.css";
import { Modal } from "../Header/Modal";
import { Header } from "../Header";

const listaTask = [
  {
    titulo: "Button de excluir",
    descricao: "Implementar button de excluir em cada card",
    status: "To Do",
  },
  {
    titulo: "Button de editar",
    descricao: "Implementar button de edição em cada card",
    status: "To Do",
  },
  {
    titulo: "Ícone",
    descricao: "Implementar ícone, conforme protótipo, no header",
    status: "To Do",
  },
  {
    titulo: "Footer",
    descricao:
      "Implementar footer contendo dados da empresa (instagram, nome, ano)",
    status: "Doing",
  },
  {
    titulo: "WhatsApp no footer",
    descricao:
      "Implementar no footer ícone do whatsapp que direciona para empresa criadora",
    status: "Doing",
  },
  {
    titulo: "Documentação de cenário de teste",
    descricao: "Realizar documentação dos possíveis cenários de testes",
    status: "Doing",
  },
  {
    titulo: "Documentação de casos de testes",
    descricao: "Realizar documentação dos casos de testes realizados",
    status: "Doing",
  },
  {
    titulo: "Email no footer",
    descricao:
      "Implementar no footer link que direciona para o e-mail da empresa criadora",
    status: "Done",
  },
  {
    titulo: "Cor de fundo",
    descricao: "Alterar cor de fundo do container conforme protótipo do UX",
    status: "Done",
  },
  {
    titulo: "Button sair",
    descricao: "Implementar button de sair do site",
    status: "Done",
  },
];

export function ContainerBoard() {
  const [lista, setLista] = useState(listaTask);
  const [isModalOpen, setModalOpen] = useState(false);

  function excluir(indice) {
    const listAtt = lista.filter((_, i) => i !== indice);
    setLista(listAtt);
  }

  function mudarStatus(index, status) {
    const novaLista = [...lista];
    novaLista[index].status = status;
    setLista(novaLista);
  }

  function adicionarItem(novoItem) {
    setLista([...lista, novoItem]);
  }

  return (
    <div className={styles.container}>
      <div>
        <Header setModalOpen={setModalOpen} />
        {isModalOpen && (
          <Modal setModalOpen={setModalOpen} adicionarItem={adicionarItem} />
        )}

      </div>

      <div className={styles.column}>
        <h1>To Do</h1>

        {lista.map((card, index) => {
          if (card.status == "To Do") {
            return (
              <Box
                titulo={card.titulo}
                descricao={card.descricao}
                excluir={excluir}
                index={index}
                mudarStatus={mudarStatus}
              />
            );
          }
        })}
      </div>

      <div className={styles.column}>
        <h1>Doing</h1>

        {lista.map((card, index) => {
          if (card.status == "Doing") {
            return (
              <Box
                titulo={card.titulo}
                descricao={card.descricao}
                excluir={excluir}
                index={index}
                mudarStatus={mudarStatus}
              />
            );
          }
        })}
      </div>

      <div className={styles.column}>
        <h1>Done</h1>

        {lista.map((card, index) => {
          if (card.status == "Done") {
            return (
              <Box
                titulo={card.titulo}
                descricao={card.descricao}
                excluir={excluir}
                index={index}
                mudarStatus={mudarStatus}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
