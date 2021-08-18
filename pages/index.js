import Head from "next/head";
import Link from "next/link";
export default function Home() {
  const toggleNav = () => {
    const nav = document.querySelector("#nav");
    console.log(nav);
    const hidden = nav.classList.contains("hidden");
    if (hidden) {
      nav.classList.remove("hidden");
      nav.classList.add("flex");
    } else {
      nav.classList.remove("flex");
      nav.classList.add("hidden");
    }
  };

  return (
    <>
      <Head>
        <title>Make your Mark</title>
        {/* <link rel="icon" href="" /> */}
      </Head>
    <div className="relative">
        <nav className="flex flex-col sm:flex-row px-10 md:px-20 py-6  justify-end absolute right-0">
          <svg
            onClick={toggleNav}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:hidden self-end "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            id="nav"
            className="hidden flex-col-reverse sm:flex sm:flex-row sm:space-x-4 md:space-x-12 rounded-3xl transition duration-300 ease-in-out "
          >
            <form className=" flex border h-8 pl-2 mt-4 sm:mt-0  rounded-3xl justify-center">
              <input
                type="search"
                className="w-full sm:w-30 md:w-60 outline-none"
                placeholder="search for markers"
              />
              <button className="bg-red-500 h-full px-2 text-white font-normal rounded-r-3xl">
                search
              </button>
            </form>
            <div className="flex justify-center  pt-4 sm:py-0 space-x-10">
              <Link href="/signup" passHref>
                <button className="btn-to-red w-20 sm:w-24 h-8 ">Sign Up</button>
              </Link>

              <Link href="/signup" passHref>
                <button className="btn-to-red w-20 sm:w-24 h-8   ">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <header className="flex flex-col items-center my-24 ">
          <h1 className=" text-4xl sm:text-7xl  self-center pb-4 font-semibold  ">
            Make your mark
          </h1>
          <h4 className="font-semibold text-gray-400">
            Tell your story, your way, Be a marker.{" "}
          </h4>
        </header>
        <Link href="#featured-marks" passHref scroll>
          <button className="btn-red w-28 sm:w-32 h-10 text-sm  justify-self-end">
            View featured
          </button>
        </Link>
      </div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <div className="w-full">
          <h1 className="font-medium text-3xl sm:text-2xl pb-4">
            Featured Marks
          </h1>

          <section
            id="featured-marks"
            className="flex flex-col md:flex-row md:space-x-12 justify-evenly pt-14 pb-10 w-full border-t border-b "
          >
            {/* cards */}

            <div className="  rounded-lg  border md:w-70 mx-8 mb-8 md:my-0 p-4 relative shadow-lg">
              <div className="rounded-full h-10 sm:h-14 w-10 sm:w-14  shadow-lg object-right-top  absolute -top-5 -right-2">
                <img src="/Mag_Mel-log.png" alt="Image" />
              </div>
              <h1 className="text-left text-red-500 font-semibold text-sm sm:text-2xl pb-4">
                Melchizedek
              </h1>
              <p className="text-xs sm:text-sm text-left break-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur laboriosam obcaecati ipsum sint ipsam maxime velit,
                eligendi amet debitis minus praesentium error ea quia temporibus
                odio quae unde perferendis cumque!
              </p>
            </div>

            <div className="  rounded-lg border md:w-70 mx-8 mb-8 md:my-0 p-4 relative shadow-lg">
              <div className="rounded-full h-10 sm:h-14 w-10 sm:w-14  shadow-lg object-right-top  absolute -top-5 -right-2">
                <img src="/Mag_Mel-log.png" alt="Image" />
              </div>
              <h1 className="text-left text-red-500 font-semibold text-sm sm:text-2xl pb-4">
                Melchizedek
              </h1>
              <p className="text-xs sm:text-sm text-left break-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur laboriosam obcaecati ipsum sint ipsam maxime velit,
                eligendi amet debitis minus praesentium error ea quia temporibus
                odio quae unde perferendis cumque!
              </p>
            </div>

            <div className="  rounded-lg border md:w-70 mx-8 mb-8 md:my-0 p-4 relative shadow-lg">
              <div className="rounded-full h-10 sm:h-14 w-10 sm:w-14  shadow-lg object-right-top  absolute -top-5 -right-2">
                <img src="/Mag_Mel-log.png" alt="Image" />
              </div>
              <h1 className="text-left text-red-500 font-semibold text-sm sm:text-2xl pb-4">
                Melchizedek
              </h1>
              <p className="text-xs sm:text-sm text-left break-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur laboriosam obcaecati ipsum sint ipsam maxime velit,
                eligendi amet debitis minus praesentium error ea quia temporibus
                odio quae unde perferendis cumque!
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 ">
        Powered by{" "}
        <img src="/Mag_Mel-log.png" alt="Vercel Logo" className="h-7 ml-4" />
      </footer>
    </>
  );
}
