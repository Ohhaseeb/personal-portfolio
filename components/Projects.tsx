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
//import RegisterWhip from '@/public/images/RegisterWhip.png'
import Carlisting from '@/public/images/Carlisting.png'
import ReserveCar from '@/public/images/ReserveCar.png'
import Admin from '@/public/images/Admin.png'
import Image from 'next/image';


const Projects = () => {
  return (
    <div id="Project" className='pb-20  flex flex-col items-center lg:items-start   mx-auto'>
       <div className='text-center w-full '>
            <h1 className='text-center text-6xl font-bold mb-6'>Projects</h1>     
       </div>
       <div className=' flex justify-between  items-center w-full h-full pt-4'>
            <div className='px-14'>
                <Card className='bg-slate-800 text-white '>
                    <CardHeader>
                        <CardTitle> Energy Consumption Dashboard </CardTitle>
                        <CardDescription className='text-gray-400'>Next.js, Tailwind CSS, Typescript, MySQL</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-row'>
                    <Image className=' shadow-lg mb-4 '
                    src={Overview} 
                    alt="Haseeb"              
                    width={400}               
                    height={400}             
                    />
                    <Image className=' shadow-lg mb-4 mx-2 '
                    src={SignIn} 
                    alt="Haseeb"              
                    width={400}               
                    height={400}             
                    />
                    </CardContent>
                    <CardContent className='flex flex-row'>
                    <Image className='shadow-lg mb-4 '
                    src={Analytics} 
                    alt="Haseeb"              
                    width={400}               
                    height={400}             
                    />   
                    <Image className='shadow-lg mb-4 mx-2 '
                    src={AccountLink} 
                    alt="Haseeb"              
                    width={400}               
                    height={400}             
                    /> 
                    </CardContent>
                    <CardFooter className='flex flex-col'>
                        <p> A responsive Full-Stack Next.js React application that displays over 6 different user friendly
                        graph/chart </p>
                        <p>representations to visualize current energy consumption of buildings for Dena Energy Inc</p>
                    </CardFooter>
                </Card>
            </div>
            <div className='pr-14'>
                <Card className='bg-slate-800 text-white h-[684px]'>
                    <CardHeader>
                        <CardTitle> Whip For Rent </CardTitle>
                        <CardDescription className='text-gray-400'>Next.js, Tailwind CSS, Typescript, MySQL</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-row'>
                    <div className='w-[400px] h-[300px] relative'>
                    {/* <Image className=' shadow-lg mb-4 object-cover'
                    src={RegisterWhip} 
                    alt="Haseeb"              
                    layout='fill'
     
                    /> */}
                    </div>
                    <div className='w-[400px] h-[300px] relative'>
                    <Image className=' shadow-lg mb-4 mx-2 object-cover'
                    src={Carlisting} 
                    alt="Haseeb"              
                    layout='fill' // Makes the image fill the parent div
                    objectFit='cover'                              
                    />
                    </div>
                    </CardContent>
                    <CardContent className='flex flex-row'>
                    <Image className=' shadow-lg mb-4'
                    src={ReserveCar} 
                    alt="Haseeb"              
                    width={400}               
                    height={400}             
                    />

                    <Image className=' shadow-lg mb-4 mx-2'
                    src={Admin} 
                    alt="Haseeb"              
                    width={400}               
                    height={400}             
                    />

                    </CardContent>
                    <CardFooter className='flex flex-col'>
                        <p>A full-stack Next.js React web application to simulate an online car rental system using MySQL database in </p>
                        <p>3NF with entities such as users, cars, reservations, car locations, and payment</p>
                    </CardFooter>
                </Card>
            </div>
       </div>
    </div>
  )
}

export default Projects