import { Typography, Button } from '@mui/material';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import styles from './styles.module.css';
import YoutubeSVG from '../../components/SVG/YoutubeSVG';
import ProjectSVG from '../../components/SVG/ProjectSVG';
import NoteSVG from '../../components/SVG/NoteSVG';

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
                                    <YoutubeSVG />
                                    <div className={styles.projectDesc}>
                                        <p className={styles.projectTitle}>Tuber</p>
                                        <p className={styles.description}>A web-based project designed to streamline YouTuber management, offering tools for analytics, collaborations, scheduling, and growth tracking.</p>

                                        <div className={styles.projectBtnWrap}>
                                            <Button
                                                component="a"
                                                target='_blank'
                                                href="https://youtubers-6o45.vercel.app/"
                                                className={styles.projectBtn}
                                                variant="contained">DEMO LINK</Button>

                                            <Button
                                                component="a"
                                                target='_blank'
                                                href="https://github.com/dhanpalrajpurohit/Youtubers"
                                                className={styles.projectBtn}
                                                variant="contained">GITHUB</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className={styles.projects}>
                                    <NoteSVG />
                                    <div className={styles.projectDesc}>
                                        <div>
                                            <p className={styles.projectTitle}>Note Sharing</p>
                                            <p className={styles.description}>Effortlessly create, organize, and share notes online with a sleek, user-friendly note-sharing web application.</p>
                                        </div>

                                        <div className={styles.projectBtnWrap}>
                                            <Button
                                                className={styles.projectBtn}
                                                component="a"
                                                target='_blank'
                                                href="https://github.com/dhanpalrajpurohit/note_sharing_app"
                                                variant="contained">DEMO LINK</Button>

                                            <Button
                                                className={styles.projectBtn}
                                                component="a"
                                                target='_blank'
                                                href="https://github.com/dhanpalrajpurohit/note_sharing_app"
                                                variant="contained">GITHUB</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className={styles.projects}>
                                    <ProjectSVG />
                                    <div className={styles.projectDesc}>
                                        <div>
                                            <p className={styles.projectTitle}>Attendance System</p>
                                            <p className={styles.description}>A PyQt-based attendance system enabling efficient tracking, management, and reporting of attendance with an intuitive user interface.</p>
                                        </div>
                                        <div className={styles.projectBtnWrap}>
                                            <Button
                                                className={styles.projectBtn}
                                                component="a"
                                                target='_blank'
                                                href="https://youtu.be/YT3v5eYDuQQ"
                                                variant="contained">DEMO LINK</Button>

                                            <Button
                                                className={styles.projectBtn}
                                                component="a"
                                                target='_blank'
                                                href="https://github.com/dhanpalrajpurohit/Attendance-System-Using-Face-Recognition"
                                                variant="contained">GITHUB</Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.projects}>
                                    <YoutubeSVG />
                                    <div className={styles.projectDesc}>
                                        <p className={styles.projectTitle}>Youtuber Clone</p>
                                        <p className={styles.description}>A web-based YouTube clone utilizing the YouTube Data API V3 for video searching, playback, and channel browsing.</p>

                                        <div className={styles.projectBtnWrap}>
                                            <Button
                                                className={styles.projectBtn}
                                                component="a"
                                                target='_blank'
                                                href="https://youtube-clone-i5wlq7q84-dhanpal-singhs-projects.vercel.app/"
                                                variant="contained">DEMO LINK</Button>

                                            <Button
                                                className={styles.projectBtn}
                                                component="a"
                                                target='_blank'
                                                href="https://github.com/dhanpalrajpurohit/youtube-clone"
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
