import React from "react";
import aboutMe from "../assets/me_noBG.png";

const About = () => {
    const info = [
        { text: 'Years of Experience', count: '00' },
        { text: 'Completed Projects', count: '04' },
        { text: 'Companies Worked for', count: '00' },
    ]
    return (
        <section id="about" className="py-1- text-white mb-12">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About<span className="text-cyan-600"> Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">
                    My introduction
                </p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                Hello! I'm Jared Sunday, a dedicated Full Stack Developer with a passion for creating efficient, scalable, and user-friendly solutions. With a strong foundation in computer science and extensive experience in various technologies, I bring a unique blend of analytical thinking and creative problem-solving to every project.
                            </p>

                            {/* ----------------------------------- */}
                            {/* future code when I have more experience and projects completed. */}
                            {/* <div className="flex mt-10 items-center gap-7">
                            {info.map((content) => (
                                <div key={content.text}>
                                    <h3 className="md:text-4xl text-2xl font-semibold text-white">{content.count}
                                        <span className="text-cyan-600">+</span>{' '}
                                    </h3>
                                    <span className="md:text-base text-sm">{content.text}</span>
                                </div>
                            ))}
                            </div> */}
                            {/* ----------------------------------- */}
                        </div>
                        <br />
                        <br />
                        <a className="" href="./src/assets/Resume.pdf" download>
                            <button className="btn-primary">
                                Download CV
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutMe ">
                            <img src={aboutMe} alt="" className="w-full object-cover bg-cyan-600 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;