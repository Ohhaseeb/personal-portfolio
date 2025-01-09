"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import haseeb from '@/public/images/haseeb.jpg'
import Link from 'next/link';


export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#93A5CF] to-background/50">
      <div className="container px-4 py-32 md:py-0 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Hi there! I am{" "}
            <span className="bg-gradient-to-r from-[#614385] to-[#516395] text-transparent bg-clip-text ">
              Haseeb
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A passionate full-stack developer crafting elegant solutions to complex problems
          </p>
          <div className="flex gap-4">
          <Link href="#projects" passHref>
            <Button size="lg" className=" bg-gradient-to-r from-[#614385] to-[#516395] text-white rounded-xl font-medium hover:from-[#7a5e9a] hover:to-[#6d789c]">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/0 animate-pulse" />
          <Image className='rounded-3xl object-cover w-full h-full border-4 border-background shadow-xl '
            src={haseeb} 
            alt="Haseeb"              
            width={400}               
            height={400}             
          />
        </motion.div>
      </div>
    </section>
  )
}

