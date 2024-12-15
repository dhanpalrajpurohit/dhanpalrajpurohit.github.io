import React from 'react';
import styles from './styles.module.css';
import { Typography, Button } from '@mui/material';

const Blogs = () => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.pageTitle}>
                <Typography component='h2' variant='h2' className={styles.pageTitle}>
                    LATEST BLOGS
                </Typography>
            </div>

            <div className={styles.projectDetailContainer}>
                <div className={styles.projectDetailWrapper}>
                    <div className={styles.projects}>
                        <img className={styles.thumbnail}
                            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*GCBv5i4KEIQTtBc4" />

                        <div className={styles.projectDesc}>
                            <p className={styles.projectTitle}>Router in FastAPI</p>
                            <p className={styles.description}>FastAPI is known for its speed and simplicity in building APIs. A standout feature is its ability to organize code using routers. In this…</p>


                        </div>
                        <div className={styles.projectBtnWrap}>
                            <Button
                                style={{ backgroundColor: "black", width: "100%", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">Read more</Button>
                        </div>
                    </div>


                    <div className={styles.projects}>
                        <img className={styles.thumbnail}
                            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*gKmNc9Tbh9GI9bu9Fbp0Ug.png" />

                        <div className={styles.projectDesc}>
                            <p className={styles.projectTitle}>GraphQL with Django</p>
                            <p className={styles.description}>In this blog, We will learn about GraphQL in Django.</p>
                        </div>
                        <div className={styles.projectBtnWrap}>
                            <Button
                                style={{ backgroundColor: "black", width: "100%", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">Read more</Button>
                        </div>
                    </div>


                    <div className={styles.projects}>
                        <img className={styles.thumbnail} src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*CBLEFE55p0Td2O22OmZZng.jpeg" />

                        <div className={styles.projectDesc}>
                            <p className={styles.projectTitle}>Encrypt Django Model Field</p>
                            <p className={styles.description}>This tutorial is about how to encrypt the Django model field. First, we need to create the Django application and run it and also make sure…</p>
                        </div>
                        <div className={styles.projectBtnWrap}>
                            <Button
                                style={{ backgroundColor: "black", width: "100%", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">Read more</Button>
                        </div>
                    </div>


                    <div className={styles.projects}>
                        <img className={styles.thumbnail} src="https://studentprojectguide.com/wp-content/uploads/2017/11/Thumbnail.jpeg" />

                        <div className={styles.projectDesc}>
                            <p className={styles.projectTitle}>Draw Using OpenCV Python</p>
                            <p className={styles.description}>In this story, We will learn that how we can do drawing on the image using opencv and python.</p>
                        </div>
                        <div className={styles.projectBtnWrap}>
                            <Button
                                style={{ backgroundColor: "black", width: "100%", textTransform: 'none', borderRadius: 0 }}
                                variant="contained">Read more</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
