import styles from './styles.module.css'


const index = () => {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with id ${id} not found.`);
      return;
    }

    const offset = window.innerHeight / 2 - element.offsetHeight / 2;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth",
    });
  };
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a onClick={() => scrollToSection("about-me")}>About Me</a></li>
          <li className={styles.navItem}><a onClick={() => scrollToSection("experience")}>Experience</a></li>
          <li className={styles.navItem}><a onClick={() => scrollToSection("blog")}>Blog</a></li>
          <li className={styles.navItem}><a onClick={() => scrollToSection("project")}>Project</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default index
