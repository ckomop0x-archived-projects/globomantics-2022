import styles from './styles.module.scss'

export default function ConferenceLayout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Globomantics maniacally taking tech to the globe</h1>
      </header>
      <section>
        {children}
      </section>
    </>
  );
}

