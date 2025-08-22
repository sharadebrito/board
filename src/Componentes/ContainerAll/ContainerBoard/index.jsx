import { useState } from "react";
import { Box } from "./Box";
import styles from "./styles.module.css";

const listaTask = [
  {
    titulo: "Button de excluir",
    descrição: "Implementar button de excluir em cada card",
    status: "To Do",
  },
  {
    titulo: "Button de editar",
    descrição: "Implementar button de edição em cada card",
    status: "To Do",
  },
  {
    titulo: "Ícone",
    descrição: "Implementar ícone, conforme protótipo, no header",
    status: "To Do",
  },
  {
    titulo: "Footer",
    descrição:
      "Implementar footer contendo dados da empresa (instagram, nome, ano)",
    status: "Doing",
  },
  {
    titulo: "WhatsApp no footer",
    descrição:
      "Implementar no footer ícone do whatsapp que direciona para empresa criadora",
    status: "Doing",
  },
  {
    titulo: "Documentação de cenário de teste",
    descrição: "Realizar documentação dos possíveis cenários de testes",
    status: "Doing",
  },
  {
    titulo: "Documentação de casos de testes",
    descrição: "Realizar documentação dos casos de testes realizados",
    status: "Doing",
  },
  {
    titulo: "Email no footer",
    descrição:
      "Implementar no footer link que direciona para o e-mail da empresa criadora",
    status: "Done",
  },
  {
    titulo: "Cor de fundo",
    descrição: "Alterar cor de fundo do container conforme protótipo do UX",
    status: "Done",
  },
  {
    titulo: "Button sair",
    descrição: "Implementar button de sair do site",
    status: "Done",
  },
];

export function ContainerBoard() {
  const [lista, setLista] = useState(listaTask);

  function excluir(indice) {
    const listAtt = lista.filter((_, i) => i !== indice);
    setLista(listAtt);
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h1>To Do</h1>

        {lista.map((card, index) => {
          if (card.status == "To Do") {
            return (
              <Box
                titulo={card.titulo}
                descrição={card.descrição}
                excluir={excluir}
                index={index}
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
                descrição={card.descrição}
                excluir={excluir}
                index={index}
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
                descrição={card.descrição}
                excluir={excluir}
                index={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
