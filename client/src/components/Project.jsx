import React from 'react'
import project1 from '../assets/ninja_network_display.png'
import project2 from '../assets/big_calendar_display.png'
import project3 from '../assets/profile_display.png'

const Project = () => {
  const projects = [
    {
      imgSrc: project1,
      title: "Ninja Network",
      github_link: "https://github.com/xmrxsundayx/ninja_network",
      live_link: "#"
    },
    // Add more projects here
    {
      imgSrc: project2,
      title: "Big Calendar",
      github_link: "https://github.com/xmrxsundayx/Big_Calendar",
      live_link: "#"
    },
    {
      imgSrc: project3,
      title: "My Portfolio",
      github_link: "https://github.com/xmrxsundayx/My_Portfolio",
      live_link: "#"
    },
  ];

  return (
    <section id='projects' className='py-10 text-white '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='text-center'>
          <h3 className='text-4xl font-semibold'>
            My <span className='text-cyan-600'>Projects</span>
          </h3>
          <p className='text-gray-400 mt-3 text-lg' >My work</p>
        </div>
        <br />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
          {projects.map((project, index) => (
            <div key={index} style={{ backgroundImage: `url(${project.imgSrc})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  {project.title}
                </span>
                <div className='pt-4 text-center'>
                  <a href={project.github_link}>
                    <button className='text-center rounded-lg p-2 m-4 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                  <a href={project.link}>
                    <button className='text-center rounded-lg p-2 m-4 bg-white text-gray-700 font-bold text-lg'>About</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Project
