import React from "react";
import {services} from '../data';
import {GetServerSidePropsContext, GetStaticPropsContext} from "next";
import ServiceCard from "../components/ServiceCard";

export const apiUrl = `http://localhost:3000/api`

const index = () => {
  // console.log('CLIENT', services)
  return (
    <div className={'flex flex-col px-6 pt-1 flex-grow'}>
      <h5 className={'my-3 font-medium'}>
        akjshkjsdhskjdhfkjsdhsdkjhsdkjs
      </h5>
      <div className={'p-4 mt-5 bg-green-100 flex-grow dark:bg-amber-800'} style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className={'my-3 font-bold text-xl tracking-wider'}>What I Offer</h6>
        <div className={'grid lg:grid-cols-2 gap-6'}>
          {
            services.map((service, key) => (
              <div key={key} className={'lg:col-span-1 md:col-span-2 sm:col-span-2 bg-amber-100 rounded-md dark:bg-dark-700'}>
                <ServiceCard  service={service} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default index

/**
 * this function can be triggered as receive the data from server
 * @param context
 */
/*

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  const res = await fetch(`${apiUrl}/services`);
  const data = await res.json();
  return {
    props: {
      services: data.services
    }
  }
}
*/

/**
 * this function will be triggered once during build of this project, but in development mode, it will be triggered
 * every time you refresh the page, just like the getServerSideProps
 * @param context
 */
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(`${apiUrl}/services`);
  const data = await res.json();
  return {
    props: {
      services: data.services
    }
  }
}
