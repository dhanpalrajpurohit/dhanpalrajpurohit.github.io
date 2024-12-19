import styles from './styles.module.css'


const index = () => {
  const scrollToSection = (id) => {

    const element = document.getElementById(id);
    const offset = window.innerHeight / 2 - element.offsetHeight / 2;

    element.scrollIntoView({
      behavior: "smooth",
      top: element.offsetTop - offset,
      inline: "nearest",
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
