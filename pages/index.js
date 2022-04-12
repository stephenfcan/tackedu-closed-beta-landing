import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-stone-900">
      <Head>
        <title>TackEdu | Closed Beta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <br className="mt-14 hidden lg:block md:block sm:hidden"/>
      <br className="mt-14 hidden lg:block md:block sm:hidden"/>
      <br className="mt-14 hidden lg:block md:block sm:hidden"/>
      <br className="mt-14 hidden lg:block md:block sm:hidden"/>
      <br className="mt-14 hidden lg:block md:block sm:hidden"/>
      <br className="mt-14 hidden lg:block md:block sm:hidden"/>
      <br className="mt-14 hidden lg:block md:block sm:hidden"/>
      <br className="mt-14 hidden lg:block md:block sm:hidden"/>
      <br className="mt-14"/>
      <br className="mt-14"/>
      <br className="mt-14"/>
      <br className="mt-14"/>
      <br className="mt-14"/>
      <br className="mt-14"/>

      <h1 className="z-10 -mt-10 text-white font-bold text-center text-3xl xl:text-8xl lg:text-8xl md:text-6xl sm:text-3xl mb-5">CLASS IS IN SESSION.</h1>
      <h4 className="z-10 text-zinc-400 font-regular text-center text-sm xl:text-2xl lg:text-2xl md:text-md sm:text-sm">TackEdu is the next-generation e-learning app using adaptive learning technologies.</h4>

      <a href="https://airtable.com/shrIO7wlTleA90d80" className="mt-14 mb-10 text-white bg-orange-400 px-4 py-2
        border-transparent rounded-full cursor-pointer
        hover:shadow-lg hover:scale-105 active:scale-95 active:bg-orange-500
        transition transform duration-100 ease-out;">
          Closed Beta Registration Now Available!
      </a>

      <Image className="z-0" src="https://tackedu.netlify.app/mockup.png" alt="" width={370} height={700} objectPosition="" />
      
      {/*
        <h4 className="text-zinc-400 font-medium text-2xl mb-3 mt-12">Worldwide Release October 2022</h4>
        <a href="https://airtable.com/shrIO7wlTleA90d80" className="text-white bg-orange-400 px-4 py-2
        border-transparent rounded-full cursor-pointer
        hover:shadow-lg hover:scale-105 active:scale-95 active:bg-orange-500
        transition transform duration-100 ease-out;">
          Reserve A Seat
        </a>
        <a className="mt-14" href="https://airtable.com/shrIO7wlTleA90d80">
        <p className="text-white py-3 px-5 border border-orange-400 rounded-md hover:border-orange-500">
          Closed Beta Registration Now Available!
        </p>
      </a>
      */}
      

    </div>
  )
}
