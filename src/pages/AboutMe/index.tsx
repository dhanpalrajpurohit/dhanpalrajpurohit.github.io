import { Button, IconButton, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styles from "./styles.module.css";

import profilePic from "../../assets/profileImage.jpg";
import Scroll from '../../components/Scroll';

const index = () => {
    return (
        <div className={styles.container} id="about-me">
            <div className={styles.containerWrapper}>
                <section className={styles.leftSection} id="home">
                    <div className={styles.infoSection}>
                        <img
                            className={styles.profileImage}
                            src={profilePic}
                            alt="Profile"
                        />
                        <Typography variant="h4" component="h4">Dhanpal Singh</Typography>
                        <Typography variant="h6" component="h6">(He/Him)</Typography>
                        <Typography variant="h6" component="h6">Web Developer</Typography>

                        <div className={styles.emailBtn}>
                            <Button style={{ backgroundColor: "black", width: '100%', textTransform: 'none', borderRadius: 0 }}
                                onClick={() => { window.location.href = "mailto:rajpurohitdhanpal@gmail.com" }}
                                variant="contained">Email me</Button>
                        </div>

                        <div className={styles.socialIcons}>
                            <IconButton aria-label="github" onClick={() => window.open(
                                "https://github.com/dhanpalrajpurohit", "_blank"
                            )}><GitHubIcon /></IconButton>
                            <IconButton aria-label="x-icon" onClick={() => window.open(
                                "https://x.com/DhanpalRaj1998", "_blank"
                            )}><XIcon /></IconButton>
                            <IconButton aria-label="linked-icon" onClick={() => window.open(
                                "https://www.linkedin.com/in/dhanpal-rajpurohit/", "_blank"
                            )}><LinkedInIcon /></IconButton>

                        </div>
                    </div>
                </section>

                <section className={styles.rightSection} id="aboutMe">

                    <div className={styles.aboutMeText}>
                        <Typography variant="h2" component="h2" className={styles.aboutMe}>ABOUT ME</Typography>
                        <Typography className={styles.aboutMeText}>
                            I am a highly skilled and tech-savvy professional with a Master's degree in Software Development,
                            actively seeking a position as a Full-Stack Web Developer. With a strong passion for continuous
                            learning and skill development, I have successfully contributed to a variety of projects, both
                            independently and as part of a team.
                        </Typography>
                    </div>

                    <div className={styles.btnResumeContainer}>
                        <Button className={styles.btnResume} style={{ backgroundColor: "black", textTransform: 'none', borderRadius: 0 }} variant="contained"
                            onClick={() => window.open(
                                "https://drive.google.com/file/d/1iPT5YJ-IBhPV7E6DNUOAsFHrEX-i7XAe/view", "_blank"
                            )}
                        >Resume</Button>
                    </div>

                </section>
            </div>
            <Scroll />
        </div>
    )
}

export default index
