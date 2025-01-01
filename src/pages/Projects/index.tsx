import styles from './styles.module.css';
import { Typography, Button } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";


import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Projects = () => {
    return (
        <section className={styles.projectContainer} id="projects">
            <div className={styles.projectWrapper} >
                <div className={styles.projectDetailContainer}>
                    <div className={styles.pageTitle} >
                        <Typography component='h2' variant='h2' className={styles.pageTitle}>
                            PROJECTS
                        </Typography>
                    </div>
                    <div className={styles.projectDetailWrapper}>

                    <Swiper
                        pagination={true} modules={[Pagination]} className="mySwiper"
                        loop={true}
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
                        </SwiperSlide>


                        <SwiperSlide>
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
                        </SwiperSlide>


                        <SwiperSlide>
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
                        </SwiperSlide>

                        <SwiperSlide>
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
                        </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
