import React from 'react';
import myPic from '../images/my_img.jpg';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {

  const location = useLocation();

  // Conditionally apply a class to the body element to disable the scrollbar
  React.useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset the scrollbar when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [location.pathname]);

  return (
    <>
      <section className="bg-gray-900 text-white body-font h-screen overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-12 md:py-24 ">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 flex items-center justify-center">
            <img className="object-cover object-center rounded-xl shadow-md w-full md:w-4/5 lg:w-3/4 xl:w-1/2" alt="hero" src={myPic} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 text-white">
              <span className='text-blue-500 font-bold'>I</span>t's
              <br />
              <span className="hidden lg:inline-block">
                <span className='text-blue-500 transition-all font-semibold'>B</span>
                <span className='hover:text-blue-500 transition-all'>i</span>
                <span className='hover:text-blue-500 transition-all'>s</span>
                <span className='hover:text-blue-500 transition-all'>w</span>
                <span className='hover:text-blue-500 transition-all'>a</span>
                <span className='hover:text-blue-500 transition-all'>r</span>
                <span className='hover:text-blue-500 transition-all'>u</span>
                <span className='hover:text-blue-500 transition-all'>p</span>
                <span className='hover:text-blue-500 transition-all'> </span>
                <span className='text-blue-500 transition-all font-semibold'>G</span>
                <span className='hover:text-blue-500 transition-all'>h</span>
                <span className='hover:text-blue-500 transition-all'>o</span>
                <span className='hover:text-blue-500 transition-all'>s</span>
                <span className='hover:text-blue-500 transition-all'>h</span>
              </span>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-300 text-base md:text-lg lg:text-xl xl:text-2xl font-medium first-letter:text-7xl first-letter:font-bold">
             A Passionate and aspiring <span className='text-blue-400 font-semibold'>Fullstack Web Developer</span> <br /> currently pursuing my B.Tech in <span className='text-blue-400 font-semibold'>Computer Science & Engineering</span> <br /> Throughout my academic journey, I have cultivated a strong foundation in <span className='text-blue-400 font-semibold'>Programming</span> and <span className='text-blue-400 font-semibold'>Web Development</span>, and I am eager to apply my skills in real-world projects.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">
                <span className='hover:scale-125 transition-all text-xl'>Hire Me</span>
              </Link>
              <a href="Biswarup_Ghosh_CV.pdf" download="Biswarup_Ghosh_CV.pdf">
                <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg ">
                  <span className='hover:scale-125 transition-all text-xl'>Download CV</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
