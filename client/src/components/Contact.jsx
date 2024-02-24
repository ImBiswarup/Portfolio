import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useLocation } from 'react-router';



const Contact = () => {

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/contact') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [location.pathname]);

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadMessage = (e) => {
    setMessage(e.target.value);
  }
  const loadName = (e) => {
    setName(e.target.value);
  }
  const loadEmail = (e) => {
    setEmail(e.target.value);
  }

  const show = () => {
    console.log("The name is " + name)
    console.log("The email is " + email)
    console.log("The message is " + message)
  }


  const socialIcons = [
    {
      svgIcon: <FaFacebookF />,
      color: "text-blue-600",
      link: "https://www.facebook.com/biswa.ghosh.927/",

    },
    {
      svgIcon: <FaInstagram />,
      color: "text-red-400",
    },
    {
      svgIcon: <FaTwitter />,
      color: "text-blue-400",
    },
    {
      svgIcon: <FaLinkedin />,
      color: "text-sky-400",
    },
  ]

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative h-screen">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-white">Get in touch with me 😉</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Ask whatever you wanna know ...</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-xl text-gray-400">Name</label>
                  <input onChange={loadName} type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-xl text-gray-400">Email</label>
                  <input onChange={loadEmail} type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-xl text-gray-400">Message</label>
                  <textarea onChange={loadMessage} id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-xl hover:text-white cursor-pointer hover:scale-125 transition-all"><span onClick={show} className='text-center flex items-center justify-center'><IoIosSend /></span></button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a className="text-indigo-400">biswarupg451@gmail.com</a>
                <p className="leading-normal my-5">Kolkata, West Bengal
                </p>
                <span className="inline-flex gap-5">
                  {
                    socialIcons.map((icon, index) => (
                      <a key={index} href={icon.link} target='_blank' className={`text-gray-500 hover:scale-150 transition-all hover:cursor-pointer hover:text-${icon.color}`}>
                        {icon.svgIcon}
                      </a>
                    ))
                  }


                </span>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Contact