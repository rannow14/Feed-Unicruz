import Header from "./components/Header";
import styles from './App.module.css'

export default function App() {
  return(
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>Sidebar</aside>
        <main>Feed</main>
      </div>
    </div>
  )
}