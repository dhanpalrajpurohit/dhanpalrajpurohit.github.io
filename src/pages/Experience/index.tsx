import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import styles from './styles.module.css';

const Experience = () => {
    return (
        <div className={styles.experienceContainer}>
            <Box className={styles.leftContainer}>
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
                            <p className={styles.expDetail}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>


                    <div className={styles.experienceWrapper}>
                        <div className={styles.experienceDate}>
                            <Typography component="h5" variant='h5'>July 2020 - Dec 2020</Typography>
                        </div>

                        <div className={styles.companyDetail}>
                            <Typography component="h5" variant='h5'>MERN Developer</Typography>
                            <p className={styles.companyName}>IT Futurz Solution, Surat</p>
                            <p className={styles.expDetail}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>


                    <div className={styles.experienceWrapper}>
                        <div className={styles.experienceDate}>
                            <Typography component="h5" variant='h5'>June 2019 - June 2020</Typography>
                        </div>

                        <div className={styles.companyDetail}>
                            <Typography component="h5" variant='h5'>Python Developer</Typography>
                            <p className={styles.companyName}>Pixel Beget Pvt Ltd, Delhi </p>
                            <p className={styles.expDetail}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default Experience
