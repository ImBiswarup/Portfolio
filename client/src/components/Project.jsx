import React from 'react'
import google from "../images/google.jpeg";
import yt from "../images/yt.jpeg";
import ecom from "../images/ecom.jpeg";

const projectItems = [
  {
    image: yt, tStack: "React JS, Tailwind CSS, RapidAPI", title: "Youtube clone", liveDemoLink: "https://realfreetube.netlify.app/", codeLink: "https://github.com/ImBiswarup/Youtube_Clone"
  },
  {
    image: google, tStack: "React JS, Tailwind CSS, RapidAPI", title: "Google home page clone", liveDemoLink: "https://fake-google-search.netlify.app/", codeLink: "https://github.com/ImBiswarup/Google_clone"
  },
  {
    image: ecom, tStack: "React JS, Tailwind CSS", title: "eCommerce website", liveDemoLink: "https://real-ekart.netlify.app/", codeLink: "https://github.com/ImBiswarup/eCommerce"
  },

]

const Project = () => {
  return (
    <div>
      <h1 className='text-white bg-gray-900 text-2xl font-bold text-center'>
        My Projects
      </h1>
      {projectItems.map((item, index) => (
        <section key={index} className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 ">
              <img className="object-cover object-center rounded-lg" alt="hero" src={item.image} />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10">
              <div className="flex flex-col items-center justify-center text-left mb-16 md:mb-0">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{item.title}</h1>
                <p className="mb-8 leading-relaxed text-center">{item.tStack}</p>
                <div className="flex w-full justify-center items-end gap-5">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg hover:text-white cursor-pointer hover:scale-125 transition-all">
                    <a href={item.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </button>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg hover:text-white cursor-pointer hover:scale-125 transition-all">
                    <a href={item.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div >
  )
}

export default Project