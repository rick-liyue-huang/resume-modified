import '../styles/globals.css'
import {AnimatePresence} from "framer-motion";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {ThemeProvider} from 'next-themes';


function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute={'class'}>
      <div className={'grid grid-cols-12 gap-6 my-14 lg:px-48 px-5 sm:px-20 md:px-32 h-screen'}>
        <div
          className={'lg:col-span-3 bg-white rounded-2xl col-span-12 p-4 text-center dark:bg-gray-900 dark:bg-dark-700 shadow-custom-light dark:shadow-custom-dark'}>
          <Sidebar />
        </div>
        <div className={'lg:col-span-9 text-gray-500 dark:text-gray-200 bg-white rounded-2xl col-span-12 flex flex-col rounded-2xl dark:bg-dark-700 shadow-custom-light dark:shadow-custom-dark'}>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>

        </div>
      </div>
    </ThemeProvider>

  );
}

export default MyApp
