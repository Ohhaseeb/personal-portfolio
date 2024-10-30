import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Overview from '@/public/images/EnergyConsumptionOverview.png'
import SignIn from '@/public/images/Signin.png'
import Analytics from '@/public/images/Analytics.png'
import AccountLink from '@/public/images/AccountLink.png'
// import RegisterWhip from '@/public/images/RegisterWhip.png'
import Carlisting from '@/public/images/Carlisting.png'
import ReserveCar from '@/public/images/ReserveCar.png'
import Admin from '@/public/images/Admin.png'
import Image from 'next/image';


const Projects = () => {
    return (
      <div id="Project" className='pb-20 flex flex-col items-center lg:items-start mx-auto'>
        <div className='text-center w-full'>
          <h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>Projects</h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center w-full h-full pt-4 space-y-8 lg:space-y-0 lg:space-x-8'>
          {/* Energy Consumption Dashboard Card */}
          <div className='px-4 md:px-8 lg:px-14 w-full lg:w-auto'>
            <Card className='bg-slate-800 text-white w-full lg:w-[800px]'>
              <CardHeader>
                <CardTitle>Energy Consumption Dashboard</CardTitle>
                <CardDescription className='text-gray-400'>Next.js, Tailwind CSS, Typescript, MySQL</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-wrap justify-center lg:flex-row'>
                <Image className='shadow-lg mb-4 w-60 h-40 lg:w-80 lg:h-60 mx-2' src={Overview} alt="Overview" />
                <Image className='shadow-lg mb-4 w-60 h-40 lg:w-80 lg:h-60 mx-2' src={SignIn} alt="SignIn" />
              </CardContent>
              <CardContent className='flex flex-wrap justify-center lg:flex-row'>
                <Image className='shadow-lg mb-4 w-60 h-40 lg:w-80 lg:h-60 mx-2' src={Analytics} alt="Analytics" />
                <Image className='shadow-lg mb-4 w-60 h-40 lg:w-80 lg:h-60 mx-2' src={AccountLink} alt="AccountLink" />
              </CardContent>
              <CardFooter className='flex flex-col'>
                <p>A responsive Full-Stack Next.js React application that displays over 6 different user-friendly graph/chart</p>
                <p>representations to visualize current energy consumption of buildings for Dena Energy Inc.</p>
              </CardFooter>
            </Card>
          </div>
          
          {/* Whip For Rent Card */}
          <div className='px-4 md:px-8 lg:px-14 w-full lg:w-auto'>
            <Card className='bg-slate-800 text-white w-full lg:w-[800px]'>
              <CardHeader>
                <CardTitle>Whip For Rent</CardTitle>
                <CardDescription className='text-gray-400'>Next.js, Tailwind CSS, Typescript, MySQL</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-wrap justify-center lg:flex-row'>
                <div className='relative w-60 h-40 lg:w-80 lg:h-60 mx-2'>
                  <Image className='shadow-lg object-cover' src={'/images/register.png'} alt="Register" layout='fill' />
                </div>
                <div className='relative w-60 h-40 lg:w-80 lg:h-60 mx-2'>
                  <Image className='shadow-lg object-cover' src={Carlisting} alt="Car Listing" layout='fill' />
                </div>
              </CardContent>
              <CardContent className='flex flex-wrap justify-center lg:flex-row'>
                <Image className='shadow-lg mb-4 w-60 h-40 lg:w-80 lg:h-60 mx-2' src={ReserveCar} alt="ReserveCar" />
                <Image className='shadow-lg mb-4 w-60 h-40 lg:w-80 lg:h-60 mx-2' src={Admin} alt="Admin" />
              </CardContent>
              <CardFooter className='flex flex-col'>
                <p>A full-stack Next.js React web application to simulate an online car rental system using MySQL database in</p>
                <p>3NF with entities such as users, cars, reservations, car locations, and payment.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    )
  }
  
  export default Projects
  