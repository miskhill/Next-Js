import styles from '../components/layout.module.css'

const name = '[Gary Smith]'

function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}

export default Layout