import styles from "./App.module.css";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <p>Input</p>
        <p>list</p>
      </div>
    </>
  );
}
