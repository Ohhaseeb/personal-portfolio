/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Fullscreen, Github, Globe } from 'lucide-react'
import Analytics from '@/public/images/Analytics.png'
import employerEval from '@/public/images/employerEval.png'
import Vtrain from '@/public/images/VTrain.png'

import Image from 'next/image';

const projects = [
  {
    title: "Energy Consumption Dashboard",
    description: "A full stack web application to visualize energy data, routing engineered from multiple APIs such as PG&E | EnergyStar | AccuEnergy", 
    image: Analytics,
    tags: ["Next.js", "Typescript", "MySQL", "TailwindCSS", "Digital Ocean"],
    liveUrl: "https://energydian.com/sign-in?redirect_url=http%3A%2F%2Fenergydian.com%2F",
    githubUrl: "https://github.com/TrustfulDev/dena-energy-dashboard"
  },
  {
    title: "EmployerEval",
    description: "A full stack application where employees can rate how it was to work for their employers and view employer overall ratings/reviews",
    image: employerEval,
    tags: ["React", "Firebase", "Javascript", "Tailwind CSS"],
    
    githubUrl: "https://github.com/Ohhaseeb/employer_eval"
  },
  {
    title: "V-Train",
    description: "A personalized training application where coaches can assign weekly training for clients by creating their daily workouts",
    image: Vtrain,
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Supabase", "Prisma"],
  
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-t from-[#93A5CF] to-background/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="font-semibold text-gray-600">
            Showcase of my latest work and side projects
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden backdrop-blur-sm bg-white/50 rounded-xl shadow-lg">
                <CardHeader className="p-0">
                <Image className=' className="object-cover w-full h-full border border-gray-200 rounded-lg"'
            src={project.image} 
            alt={project.title}              
            width={400}               
            height={400}     
            layout="intrinsic"    
          />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <p className="font-semibold text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-white/70 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 border-t p-6">
                  <Button variant="outline" size="sm" asChild >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Website
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

