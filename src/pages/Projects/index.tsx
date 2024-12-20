import styles from './styles.module.css';
import { Typography, Button } from '@mui/material';

const Projects = () => {
    return (
        <div className={styles.projectContainer}>
        <div id="projects">
            <div className={styles.pageTitle}>
                <Typography component='h2' variant='h2' className={styles.pageTitle}>
                    PROJECTS
                </Typography>
            </div>

            <div className={styles.projectDetailContainer}>
                <div className={styles.projectDetailWrapper}>
                    <div className={styles.projects}>
                        <img className={styles.thumbnail} src="https://studentprojectguide.com/wp-content/uploads/2017/11/Thumbnail.jpeg" />

                        <div className={styles.projectDesc}>
                            <p className={styles.projectTitle}>Youtuber</p>
                            <p className={styles.description}>Suddenly, the orange sky rippled with an unusual glow, and the air was filled with the faint hum of an unknown frequency.</p>

                            <div className={styles.projectBtnWrap}>
                            <Button
                                style={{ backgroundColor: "black", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">DEMO LINK</Button>

                            <Button
                                style={{ backgroundColor: "black", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">GITHUB</Button>
                            </div>
                        </div>
                    </div>


                    <div className={styles.projects}>
                        <img className={styles.thumbnail} src="https://studentprojectguide.com/wp-content/uploads/2017/11/Thumbnail.jpeg" />

                        <div className={styles.projectDesc}>
                            <p className={styles.projectTitle}>Youtuber</p>
                            <p className={styles.description}>Suddenly, the orange sky rippled with an unusual glow, and the air was filled with the faint hum of an unknown frequency.</p>

                            <div className={styles.projectBtnWrap}>
                            <Button
                                style={{ backgroundColor: "black", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">DEMO LINK</Button>

                            <Button
                                style={{ backgroundColor: "black", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">GITHUB</Button>
                            </div>
                        </div>
                    </div>


                    <div className={styles.projects}>
                        <img className={styles.thumbnail} src="https://studentprojectguide.com/wp-content/uploads/2017/11/Thumbnail.jpeg" />

                        <div className={styles.projectDesc}>
                            <p className={styles.projectTitle}>Youtuber</p>
                            <p className={styles.description}>Suddenly, the orange sky rippled with an unusual glow, and the air was filled with the faint hum of an unknown frequency.</p>

                            <div className={styles.projectBtnWrap}>
                            <Button
                                style={{ backgroundColor: "black", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">DEMO LINK</Button>

                            <Button
                                style={{ backgroundColor: "black", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">GITHUB</Button>
                            </div>
                        </div>
                    </div>


                    <div className={styles.projects}>
                        <img className={styles.thumbnail} src="https://studentprojectguide.com/wp-content/uploads/2017/11/Thumbnail.jpeg" />

                        <div className={styles.projectDesc}>
                            <p className={styles.projectTitle}>Youtuber</p>
                            <p className={styles.description}>Suddenly, the orange sky rippled with an unusual glow, and the air was filled with the faint hum of an unknown frequency.</p>

                            <div className={styles.projectBtnWrap}>
                            <Button
                                style={{ backgroundColor: "black", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">DEMO LINK</Button>

                            <Button
                                style={{ backgroundColor: "black", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">GITHUB</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Projects
