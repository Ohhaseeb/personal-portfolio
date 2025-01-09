"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Laptop, Rocket } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Creating responsive and intuitive user interfaces with modern frameworks like Next.js",
  },
  {
    icon: Laptop,
    title: "Backend Development",
    description: "Building robust server-side applications and APIs",
  },
  {
    icon: Rocket,
    title: "DevOps",
    description: "Implementing CI/CD pipelines and cloud infrastructure",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-t from-[#93A5CF] to-background/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >   
          <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>
          <p className=" text-gray-600 font-semibold">
            I specialize in building modern web applications with a focus on user experience,
            performance, and scalability. With expertise in both frontend and backend
            development, I bring ideas to life through clean, efficient code. I also love playing sports such as volleyball!
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-xl bg-white/40 shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4 bg-gradient-to-t from-[#93A5CF] to-background/50">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-600 font-semibold">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

