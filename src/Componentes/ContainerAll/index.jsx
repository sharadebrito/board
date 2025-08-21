import { ContainerBoard } from "./ContainerBoard";
import { Header } from "./Header";
import styles from "./styles.module.css";

export function ContainerAll() {
  return (
    <div className={styles.all}>
      <Header />
      <ContainerBoard/>
    </div>
  );
}
