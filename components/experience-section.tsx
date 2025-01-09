"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Data Engineer & Analytics Intern",
    company: "Eden Housing Inc",
    period: "June 2024 - Sep 2024",
    description: "Automated processes for departments utilizing Python scripts, maintained data base integrity, and engineered data pipelines in Azure Data Factory",
    skills: ["Python", "Azure Cloud", "Microsoft SQL Server"]
  },
  {
    title: "Software Engineer",
    company: "Dena Energy Inc",
    period: "Sep 2023 - May 2024",
    description: "Designed and developed a full-stack web application with modern technologies",
    skills: ["Next.js", "Tailwind CSS", "MySQL", "Typescript"]
  },
  {
    title: "Clinical Data Operator",
    company: "Natera Inc",
    period: "June 2022 - Sep 2022",
    description: "Streamlined patient sample processing by leveraging the (LIMS) to efficiently create, update, and validate orders, ensuring data integrity",
    skills: ["Excel", "Python"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#93A5CF] to-background/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground font-semibold text-gray-600">
            My professional journey in software development
          </p>
        </motion.div>
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-sm bg-white/40 shadow-lg rounded-xl">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <p className="text-sm text-gray-700 font-semibold mt-2">{exp.company}</p>
                    </div>
                    <span className="text-sm  text-gray-700 font-semibold">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <Badge key={skill} variant="default"  className="bg-white/70">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

