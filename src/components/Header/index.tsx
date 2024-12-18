import styles from './styles.module.css'


const index = () => {
    return (
        <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#about-me">About Me</a></li>
          <li className={styles.navItem}><a href="#experience">Experience</a></li>
          <li className={styles.navItem}><a href="#blog">Blog</a></li>
          <li className={styles.navItem}><a href="#project">Project</a></li>
        </ul>
      </nav>
    </header>
    )
}

export default index
