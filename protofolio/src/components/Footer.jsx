import Links from "./Links";

const Footer = () => {
  return (
    <section id="contact" className="app__bg relative min-h-screen overflow-hidden">
      <div className="flex flex-col bg-black/70 min-h-screen">
        <div className="container px-4 sm:px-6 py-10 sm:py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            {/* Left Column */}
            <div className="text-white flex flex-col justify-center items-center gap-4 lg:w-1/2 lg:mx-6">
              <h1 className="font-lobster text-4xl sm:text-7xl text-[#FF4D00] font-bold capitalize">
                Contact Me
              </h1>
              <p className="max-w-sm md:text-xl text-lg leading-7 font-poppins font-light text-center mt-6">
                Have a project in mind or just want to connect? I'm always open to new opportunities and collaborations. Let's build something great together.
              </p>
              <a href="mailto:Alooh99@hotmail.com">
                <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF4D00] rounded-md hover:bg-[#FF4D00]/10 focus:outline-none focus:ring focus:ring-[#FF4D00] focus:ring-opacity-50">
                  get in touch
                </button>
              </a>

              {/* Social Links */}
              <div className="mt-6 md:mt-8">
                <h3 className="text-white text-center  font-lobster text-2xl">Follow us</h3>
                <div className="mt-7">
                  <Links />
                </div>
              </div>

              <h2 className="text-center sm:text-xl text-lg mt-6 sm:mt-10 text-blue-500 font-lobster">
                Alooh99@hotmail.com
              </h2>
            </div>

            {/* Right Column */}
            <div className="mt-10 lg:w-1/2 lg:mx-6">
              <div className="w-full font-poppins p-8 mx-auto  bg-white/5 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-200 dark:border-gray-700 rounded-2xl lg:max-w-xl">
                <h2 className="text-2xl  font-semibold text-gray-800 dark:text-white">
                  Let's Connect
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  We'd love to hear from you. Fill out the form and we'll get back soon.
                </p>

                <form className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-[#FF4D00] focus:outline-none"
                        required
                      />
                      <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-[#FF4D00] focus:outline-none"
                        required
                      />
                      <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Write your message here..."
                      rows={5}
                      className="w-full px-4 py-3 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-[#FF4D00] focus:outline-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 font-semibold text-white bg-[#FF4D00] hover:bg-[#FF4D00]/40 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
