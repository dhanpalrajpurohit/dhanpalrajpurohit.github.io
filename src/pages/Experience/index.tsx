import { Box, Typography } from '@mui/material'
import styles from './styles.module.css';

const Experience = () => {
    return (
        <div className={styles.experienceContainer} id="experience">
            <Box className={styles.wrapperContainer}>
                <Typography component='h2' variant='h2' className={styles.experienceTitle}>
                    WORK EXPERIENCE
                </Typography>

                <div>
                    <div className={styles.experienceWrapper}>
                        <div className={styles.experienceDate}>
                            <Typography component="h5" variant='h5'>Dec 2021 - Present</Typography>
                        </div>

                        <div className={styles.companyDetail}>
                            <Typography component="h5" variant='h5'>Full Stack Web Developer</Typography>
                            <p className={styles.companyName}>LA NET Team Solution Pvt Ltd, Surat </p>
                            <p className={styles.expDetail}>
                                As a Full Stack Developer at La Net Team Software Solution Pvt Ltd, 
                                responsibilities include developing and maintaining web applications 
                                using Django and REST APIs. Utilizing Django REST Framework and GraphQL 
                                to create efficient and scalable back-end services while managing PostgreSQL 
                                databases for data storage and retrieval. Additionally, writing clean and 
                                maintainable Python code and collaborating with cross-functional teams to 
                                implement new features is essential. The role also involves optimizing back-end 
                                performance and ensuring the security of web applications.    
                            </p>
                        </div>
                    </div>


                    <div className={styles.experienceWrapper}>
                        <div className={styles.experienceDate}>
                            <Typography component="h5" variant='h5'>July 2020 - Dec 2020</Typography>
                        </div>

                        <div className={styles.companyDetail}>
                            <Typography component="h5" variant='h5'>Backend Developer</Typography>
                            <p className={styles.companyName}>IT Futurz Solution, Surat</p>
                            <p className={styles.expDetail}>
                                As a Back End Developer at IT Futurz, responsibilities included developing 
                                and maintaining server-side logic using Django and the Django REST Framework. 
                                The role involved designing and implementing REST APIs to support front-end 
                                services, ensuring efficient and scalable back-end operations. Additionally,
                                 managing databases and writing clean, maintainable Python code were crucial 
                                 aspects of the job. Collaboration with front-end developers and optimizing the 
                                 performance and security of web applications were also key responsibilities.
                            </p>
                        </div>
                    </div>


                    <div className={styles.experienceWrapper}>
                        <div className={styles.experienceDate}>
                            <Typography component="h5" variant='h5'>June 2019 - June 2020</Typography>
                        </div>

                        <div className={styles.companyDetail}>
                            <Typography component="h5" variant='h5'>Python Developer</Typography>
                            <p className={styles.companyName}>Pixel Beget Pvt Ltd, Delhi </p>
                            <p className={styles.expDetail}>
                                As a Python Developer at Pixelbeget Lab, you develop and maintain web 
                                applications using Flask and REST APIs. You design and implement efficient 
                                and secure RESTful APIs to support front-end services. Additionally, you 
                                employ OpenCV for image processing tasks and manage PostgreSQL databases to 
                                ensure optimization and reliability. Your role also involves writing clean, 
                                efficient Python code and collaborating with cross-functional teams to implement 
                                new features.
                            </p>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default Experience
