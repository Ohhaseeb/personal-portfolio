/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Fullscreen, Github, Globe } from 'lucide-react'
import Analytics from '@/public/images/Analytics.png'
import employerEval from '@/public/images/employerEval.png'
import Vtrain from '@/public/images/VTrain.png'
import VDP from '@/public/images/VDP.png'

import Image from 'next/image';

const projects = [
  {
    title: "VDP",
    description: "A SaaS application where coaches can create and assign specific day to day training to their clients",
    image: VDP,
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://vertical-performance-development.vercel.app/",
    githubUrl: "https://github.com/Ohhaseeb/vertical-performance-development",
    why: "Vertical jump training is a crucial aspect of athletic development, however many programs are not tailored to the individual athlete and very overpriced. I was victim to this paying $100 a month for a program so I came up with VDP using my knowledge of software development and physical training to create a platform that is affordable and effective.",
    what: "I developed a SaaS platform that streamlines the training management workflow with features for program creation, assignment, progress tracking, and performance analytics. I can track my clients progress and make adjustments to their program as needed without having to pay for another companies product",
    results: "Serving 20+ active users with personalized week to week training programs, resulting in measurable vertical jump performance improvements for users upwards of 4+ inches. Generating $200+ in monthly recurring revenue through tiered subscription model, with 85% user retention rate. Makes my coaching job easier to keep track of all my clients and their workouts/progress"
  },
  {
    title: "Energy Consumption Dashboard",
    description: "A full stack web application to visualize energy data, routing engineered from multiple APIs such as PG&E, EnergyStar, and AccuEnergy (Disclaimer: this is a project done for work not techincally personal)", 
    image: Analytics,
    tags: ["Next.js", "Typescript", "MySQL", "TailwindCSS", "Digital Ocean"],
    liveUrl: "https://energydian.com/sign-in?redirect_url=http%3A%2F%2Fenergydian.com%2F",
    githubUrl: "https://github.com/TrustfulDev/dena-energy-dashboard",
    why: "Energy consumption insights are crucial for businesses to reduce costs and environmental impact. This project aimed to solve the problem of fragmented energy data across multiple sources. Dena Energy inc is a startup that provides energy consumption insights to businesses and they reached out to me and my team to develop this product for them.",
    what: "Developed a centralized dashboard that aggregates data from various energy providers and sensors, providing a unified view of consumption patterns and actionable insights.",
    results: "The solution enabled businesses to identify wasteful patterns, implement targeted efficiency measures, and achieve an average of 15% reduction in energy costs."
  },
  {
    title: "EmployerEval",
    description: "A full stack application where employees can rate how it was to work for their employers and view employer overall ratings/reviews",
    image: employerEval,
    tags: ["React", "Firebase", "Javascript", "Tailwind CSS"],
    githubUrl: "https://github.com/Ohhaseeb/employer_eval",
    why: "Job seekers often lack reliable information about workplace culture and management practices before accepting positions. This creates an information asymmetry in the job market.",
    what: "Built a platform that allows employees to anonymously share their experiences, rate employers, and provide detailed feedback on various aspects of the workplace environment.",
    results: "The platform has helped job seekers make more informed decisions and has encouraged employers to improve their workplace practices to attract top talent."
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-10 bg-white">
      <div className="w-full h-px bg-gray-200 mb-20"></div>
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
        
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-center p-8 border-b border-gray-200 rounded-b-xl hover:shadow-md transition-shadow bg-white"
              >
                {/* Left side - Image and buttons */}
                <div className="w-full md:w-2/5">
                  <div className="rounded-xl overflow-hidden border border-gray-100 mb-4">
                    <Image 
                      src={project.image} 
                      alt={project.title}              
                      width={600}               
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Live Website
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Right side - Project details */}
                <div className="w-full md:w-3/5">
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">{project.title}</h3>
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700 mb-2">The Why</h4>
                      <p className="text-gray-600">{project.why}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700 mb-2">The What</h4>
                      <p className="text-gray-600">{project.what}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700 mb-2">The Results</h4>
                      <p className="text-gray-600">{project.results}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

