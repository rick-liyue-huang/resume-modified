import React from "react";
import {motion} from "framer-motion";
import {services} from '../data';
import {GetServerSidePropsContext, GetStaticPropsContext} from "next";
import ServiceCard from "../components/ServiceCard";
import {fadeIn, routeAnimation, stagger} from "../animates";
import Head from 'next/head';


// export const apiUrl = `http://localhost:3000/api`

const index = ({endpoint}) => {
  // console.log('CLIENT', services)
  console.log(endpoint)
  return (
    <motion.div
      variants={routeAnimation} initial={'initial'} animate={'animate'} exit={'exit'}
      className={'flex flex-col px-6 pt-1 flex-grow'}>
      <Head>
        <title>
          Fullstack Developer
        </title>
      </Head>
      <h5 className={'my-3 font-medium'}>
        Being a full-stack developer, I offer professional experience providing high-impact web solutions for diverse industry organizations. When facing the multiple tasks with time-critical need, I prefer for agile development with my team mates through effective communication. Completing weekly progress report and pretty coding style have required me to communicate efficiently and solve the problems quickly. Preferring for touching new relative techniques help me to widen my sight and deepen my professional knowledge.
      </h5>
      <div className={'p-4 mt-5 bg-green-100 flex-grow dark:bg-amber-800'} style={{marginLeft: '-1.5rem', marginRight: '-1.5rem', backgroundImage: 'url(/images/Melbourne.jpg)', backgroundSize: 'cover'}}>
        <h6 className={'my-3 font-bold text-xl tracking-wider text-amber-500'}>What I Offer</h6>
        <motion.div
          variants={stagger} initial={'initial'} animate={'animate'}
          className={'grid lg:grid-cols-2 gap-6'}>
          {
            services.map((service, key) => (
              <motion.div
                variants={fadeIn}
                key={key}
                className={'lg:col-span-1 md:col-span-2 sm:col-span-2 bg-amber-100 rounded-md dark:bg-dark-700'}>
                <ServiceCard  service={service} />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

/**
 * this function can be triggered as receive the data from server
 * @param context
 */

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  console.log(process.env.VERCEL_URL)

  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();
  return {
    props: {
      endpoint: process.env.VERCEL_URL
    }
  }
}

/**
 * this function will be triggered once during build of this project, but in development mode, it will be triggered
 * every time you refresh the page, just like the getServerSideProps
 * @param context
 */
/*

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(`${apiUrl}/services`);
  const data = await res.json();
  return {
    props: {
      services: data.services
    }
  }
}
*/
