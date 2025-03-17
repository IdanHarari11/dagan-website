import AboutUs from '@/components/AboutUs';
import WhoWasDagan from '@/components/WhoWasDagan';
import Team from '@/components/Team';
import Donors from '@/components/Donors';
import React from 'react';
import Head from 'next/head';

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>הצוות שלנו | עמותת מאיר דגן</title>
        <meta name="description" content="הכירו את הצוות של עמותת מאיר דגן ואת מורשתו של מאיר דגן" />
      </Head>
      {/* Continuous gradient background with more subtle transition */}
      <div className="pt-16 bg-gradient-to-b from-gray-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* AboutUs section with transparent background */}
        <div className="bg-transparent">
          <AboutUs />
        </div>
        
        {/* Connector element for smooth transition */}
        <div className="h-16 -mt-16 bg-transparent relative">
          <div className="absolute left-0 right-0 w-full max-w-6xl mx-auto h-32 rounded-full bg-blue-500 opacity-10 blur-3xl"
               style={{ filter: 'blur(80px)', bottom: '-50%' }}></div>
        </div>
        
        {/* WhoWasDagan section with transparent background */}
        <div className="relative bg-transparent -mt-4">
          <WhoWasDagan />
        </div>
        
        {/* Team section with transparent background */}
        <div className="bg-transparent -mt-8">
          <Team />
        </div>
        
        {/* Donors section */}
        <div className="bg-transparent mt-8">
          <Donors />
        </div>
      </div>
    </>
  )
}

export default TeamPage;