import { Typography, Button } from '@mui/material';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from './styles.module.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Projects = () => {
    return (
        <section className={styles.projectContainer} id="blog">
            <div className={styles.projectWrapper} >
                <div className={styles.projectDetailContainer}>
                    <div className={styles.pageTitle} >
                        <Typography component='h2' variant='h2' className={styles.pageTitle}>
                            Latest Blog
                        </Typography>
                    </div>
                    <div className={styles.projectDetailWrapper}>

                        <Swiper
                            className="mySwiper"
                            loop={true}
                            // slidesPerView={3}
                            navigation={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 1,
                                    autoplay: true,
                                    navigation: true
                                },
                                768: {
                                    slidesPerView: 2,
                                    autoplay: true,
                                    navigation: true
                                },
                                980: {
                                    slidesPerView: 3,
                                    autoplay: true,
                                    navigation: true
                                },
                            }}
                        >

                            <SwiperSlide>
                                <div className={styles.projects}>
                                    <img className={styles.thumbnail}
                                        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*GCBv5i4KEIQTtBc4" />
                                    <div className={styles.projectDesc}>
                                        <p className={styles.projectTitle}>Router in FastAPI</p>
                                        <p className={styles.description}>FastAPI is known for its speed and simplicity in building APIs. A standout feature is its ability to organize code using routers.</p>

                                        <div className={styles.projectBtnWrap}>
                                            <Button
                                                className={styles.projectBtn}
                                                component="a"
                                                target='_blank'
                                                href="https://medium.com/@rajpurohitdhanpal/router-in-fastapi-9ac1ee2a82ff"
                                                variant="contained">Read More</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className={styles.projects}>
                                    <img className={styles.thumbnail}
                                        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*gKmNc9Tbh9GI9bu9Fbp0Ug.png" />
                                    <div className={styles.projectDesc}>
                                        <p className={styles.projectTitle}>GraphQL with Django</p>
                                        <p className={styles.description}>In this blog, We will learn about GraphQL in Django.</p>

                                        <div className={styles.projectBtnWrap}>
                                            <Button
                                                className={styles.projectBtn}
                                                component="a"
                                                target='_blank'
                                                href="https://medium.com/@rajpurohitdhanpal/graphql-with-django-f3a65268dcc5"
                                                variant="contained">Read More</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className={styles.projects}>
                                    <img className={styles.thumbnail}
                                        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*CBLEFE55p0Td2O22OmZZng.jpeg" />
                                    <div className={styles.projectDesc}>
                                        <div>
                                            <p className={styles.projectTitle}>Encrypt Django Model Field</p>
                                            <p className={styles.description}>This tutorial is about how to encrypt the Django model field. First, we need to create the Django application and run it and also make sure that our database migration has been applied</p>
                                        </div>

                                        <div className={styles.projectBtnWrap}>
                                            <Button
                                                component="a"
                                                target='_blank'
                                                href="https://medium.com/@rajpurohitdhanpal/encrypt-django-model-field-a1e4f384824b"
                                                className={styles.projectBtn}
                                                variant="contained">Read More</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
