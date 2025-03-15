const Experience = () => {
    return (
        <section
            id="experience"
            className="w-screen min-h-screen bg-[#e8e3de] flex justify-center items-center p-4 pt-32 scroll-mt-32"
        >
            <div className="w-full max-w-5xl flex flex-col gap-8 relative">
                {/* Left-aligned Title */}
                <h2 className="text-4xl font-bold text-left p-8">WORK EXPERIENCE</h2>

                {/* Experience Content */}
                <div className="text-left text-black flex flex-col justify-start p-8 gap-10">
                    {/* Experience 1 */}
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="w-full md:w-1/3 text-left">
                            <h5 className="text-lg font-semibold">Dec 2021 - Present</h5>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h5 className="text-xl font-semibold">Full Stack Web Developer</h5>
                            <p className="text-lg font-light">LA NET Team Solution Pvt Ltd, Surat</p>
                            <p className="text-sm text-gray-700">Python, TypeScript, ReactJS/NEXT.JS, Django, FASTAPI, Docker, PostgreSQL, GIT/GITHUB, GCP</p>
                        </div>
                    </div>

                    {/* Experience 2 */}
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="w-full md:w-1/3 text-left">
                            <h5 className="text-lg font-semibold">July 2020 - Dec 2020</h5>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h5 className="text-xl font-semibold">Backend Developer</h5>
                            <p className="text-lg font-light">IT Futurz Solution, Surat</p>
                            <p className="text-sm text-gray-700">HTML, CSS, BootStrap, JavaScript, JQuery, NodeJS, ExpressJS, MongoDB, GIT/GITHUB, AWS(EC2), REST API</p>
                        </div>
                    </div>

                    {/* Experience 3 */}
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="w-full md:w-1/3 text-left">
                            <h5 className="text-lg font-semibold">June 2019 - June 2020</h5>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h5 className="text-xl font-semibold">Python Developer</h5>
                            <p className="text-lg font-light">Pixel Beget Pvt Ltd, Delhi</p>
                            <p className="text-sm text-gray-700">Python, Python-GUI, Flask, REST-API, PostgreSQL, Computer Vision, OpenCV, Deep-Learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
