import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";


const About = () => {

  const techStackItems = [
    { icon: <FaHtml5 />, title: 'HTML 5', description: 'HyperText Markup Language' },
    { icon: <FaCss3 />, title: 'CSS 3', description: 'Cascading Style Sheets' },
    { icon: <FaJs />, title: 'JavaScript', description: 'Programming Language' },
    { icon: <SiMongodb />, title: 'MongoDB', description: 'NoSQL Database' },
    { icon: <SiExpress />, title: 'Express', description: 'Node Express framework' },
    { icon: <FaReact />, title: 'React JS', description: 'JavaScript Library for UI' },
    { icon: <FaNodeJs />, title: 'Node JS', description: 'JavaScript Runtime' },
    { icon: <SiTailwindcss />, title: 'Tailwind CSS', description: 'css framework' },
    { icon: <FaPython />, title: 'Python', description: 'programming languages' },
  ];

  return (
    <div>
      {/* academic */}
      <section className="text-gray-400 bg-gray-900 body-font flex flex-col items-center">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-white mb-20 text-center">
            Academics
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-xl title-font font-bold mb-2">10th boards</h2>
                <div className="leading-relaxed text-base">
                  <p className='font-semibold text-xl'>
                    🏫 Ichapur Northland High School
                  </p>
                  <p className='font-semibold text-xl'>
                    🗓️ 2013 - 2019
                  </p>
                  <p className='font-semibold text-xl'>
                    📝 77.71%
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-xl title-font font-bold mb-2">12th Boards</h2>
                <div className="leading-relaxed text-base">
                  <p className='font-semibold text-xl'>
                    🏫 Ichapur Northland High School
                  </p>
                  <p className='font-semibold text-xl'>
                    🗓️ 2019 - 2021 (Science with PCM)
                  </p>
                  <p className='font-semibold text-xl'>
                    📝 70.04%
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-xl title-font font-bold mb-2">College</h2>
                <div className="leading-relaxed text-base">
                  <p className='font-semibold text-xl'>
                    🏫 Regent Education & Research Foundation
                  </p>
                  <p className='font-semibold text-xl'>
                    🗓️ 2021 - Present (B.Tech in CSE)
                  </p>
                  <p className='font-semibold text-xl'>
                    📝 ~
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tech stackes */}
      <section className=" bg-gray-900 text-gray-400 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-12">
            Tech Stacks
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-col justify-center">
            {techStackItems.map((item, index) => (
              <div key={index} className="p-6 shadow-md">
                <div className="w-16 h-16 mb-4 mx-auto text-indigo-400 text-6xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h2 className="text-xl font-bold mb-2 text-white">{item.title}</h2>
                <p className="text-gray-400 font-semibold">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About