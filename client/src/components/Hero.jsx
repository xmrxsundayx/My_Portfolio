import React from 'react'
import hero from '../assets/profile-pic (14).png'

export const Hero = () => {
  const social_media = [
    {icon: 'logo-instagram', url: 'https://www.instagram.com/mrsunday07/'},
    {icon: 'logo-facebook', url: 'https://www.facebook.com/jaredsunday07'},
    {icon: 'logo-linkedin', url: 'https://www.linkedin.com/in/jared-sunday/'},
    {icon: 'logo-github', url: 'https://github.com/xmrxsundayx'}
  ];
  return (
    <section id='home' className=' flex md:flex-row flex-col items-center'>
      <div className='flex-1 flex items-center justify-center h-full'>
        <img src={hero} alt='' className='md:w-11/12 h-full object-cover' />
      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>
              Hello!
              <br/>
            </span>
            My Name is <span>Jared Sunday</span>
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>
            Fullstack Developer
          </h4>
          <a href='#contact'><button className='btn-primary mt-8'>Contact Me</button></a>
          <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
            {social_media?.map((social => (
              <div>
                <a key={social.icon} href={social.url} target='blank'>
                  <ion-icon name={social.icon}></ion-icon>
                </a>
              </div>
            )))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
