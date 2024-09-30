import logo from "./../assets/images/logo.svg";
const Navbar = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6 lg:py-10">
          <a href="/" className="flex items-center">
            <span href="/" className="mr-2">
              <img src={logo} alt="logo" />
            </span>
            <p className="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
              John Doe
            </p>
          </a>
          <div className="flex items-center lg:hidden">
            <i className="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white"></i>

            <svg
              width="24"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-primary dark:text-white"
            >
              <g fillRule="evenodd">
                <rect width="24" height="3" rx="1.5" />
                <rect x="8" y="6" width="16" height="3" rx="1.5" />
                <rect x="4" y="12" width="20" height="3" rx="1.5" />
              </g>
            </svg>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <a
                  href="/"
                  className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                >
                  Intro
                </a>
              </li>

              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <a
                  href="/blog"
                  className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                >
                  Blog
                </a>
              </li>

              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <a
                  href="/uses"
                  className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                >
                  Uses
                </a>
              </li>

              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <a
                  href="/contact"
                  className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                >
                  Contact
                </a>
              </li>

              <li>
                <i className="bx cursor-pointer text-3xl text-primary dark:text-white"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden">
        <div className="ml-auto w-2/3 bg-green p-4 md:w-1/3">
          <i className="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"></i>
          <ul className="mt-8 flex flex-col">
            <li className="">
              <a
                href="/"
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
              >
                Intro
              </a>
            </li>

            <li className="">
              <a
                href="/blog"
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
              >
                Blog
              </a>
            </li>

            <li className="">
              <a
                href="/uses"
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
              >
                Uses
              </a>
            </li>

            <li className="">
              <a
                href="/contact"
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
