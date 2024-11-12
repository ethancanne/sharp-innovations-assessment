import Image from "next/image";
import styles from "./page.module.scss";
import MainView from "./views/main/main.view";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainView/>
    </div>
  );
}
