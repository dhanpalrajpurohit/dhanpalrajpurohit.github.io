import styles from "./styles.module.css";

const index = () => {

    const scrollToSection = (): void => {
        const isMobile = window.innerWidth <= 768; // Define mobile screen size
        const id = isMobile ? "aboutMe" : "experience";

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
        <div className={styles.scrollContainer} onClick={() => scrollToSection()}>
            <div className={styles.field}>
                <div className={styles.scroll}></div>
            </div>
        </div>
    )
}

export default index
