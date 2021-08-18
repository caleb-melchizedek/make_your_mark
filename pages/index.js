import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>Make your Mark</title>
        {/* <link rel="icon" href="" /> */}
      </Head>

      <nav>
      </nav>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <header className="text-7xl self-center my-24 font-semibold ">
        Make your mark
      </header>
      <button className="w-32 h-10 text-sm text-white font-semibold justify-self-end bg-red-400 rounded-3xl" >View featured</button>
    </div>

    <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
      

      <div className="divide-y divide-gray-400 w-full"> 
          <h1 className="font-medium text-3xl " >Featured Marks</h1>

        <section id="feature-marks" className="flex flex-col md:flex-row md:space-x-12 justify-evenly w-full pt-14">
          {/* card */}
          <div className="rounded-lg  md:w-64 my-12 md:my-0 p-4 relative shadow-xl  ">
            <div className="rounded-full h-10 sm:h-16 w-10 sm:w-16 border-2 md:border-4 border-gray-700 shadow-xl object-right-top  absolute -top-5 -right-2">
              <img src="/Mag_Mel-log.png" alt="Image" />
            </div>
            <h1 className="text-left font-semibold text-sm sm:text-2xl pb-4">Melchizedek</h1>
            <p className="text-xs sm:text-sm text-left break-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur laboriosam obcaecati ipsum sint ipsam maxime velit, eligendi amet debitis minus praesentium error ea quia temporibus odio quae unde perferendis cumque!
            </p>
          </div>

        </section>
      </div>

    </main>

    <footer className="flex items-center justify-center w-full h-24 border-t">
      Powered by{" "}
      <img src="/Mag_Mel-log.png" alt="Vercel Logo" className="h-7 ml-4" />
    </footer>
    </>
  );
}
