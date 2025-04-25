"use client"

import type React from "react"
import { CodeIcon, UsersIcon, LaptopIcon } from "lucide-react"

export function AboutSection() {
  return (
    <section className="bg-white ">
      <div className="w-full h-px bg-gray-200 mb-20"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3 text-gray-900 pb-10">I&apos;d say im pretty good at these things</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard
            icon={<LaptopIcon className="w-8 h-8 text-blue-700" />}
            title="Software Engineer"
            description="I build robust and efficient applications with a focus on clean code, scalable architecture, and solving problems."
            enjoyment="Languages I work with:"
            enjoymentItems="JavaScript, TypeScript, Python, Java, C++"
            tools="Dev Tools:"
            toolItems={["VS Code", "Git", "Docker", "Azure", "Agile"]}
          />
          <SkillCard
            icon={<CodeIcon className="w-8 h-8 text-blue-700" />}
            title="Full Stack Developer"
            description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
            enjoyment="Languages I use:"
            enjoymentItems="HTML, CSS, JavaScript, TypeScript, React, SQL"
            tools="Dev Tools:"
            toolItems={["VS Code", "Next.js", "Tailwind CSS", "GitHub", "Terminal"]}
          />
          <SkillCard
            icon={<UsersIcon className="w-8 h-8 text-blue-700" />}
            title="Leadership"
            description="I genuinely care about people, and love helping fellow athletes become the best version of themselves."
            enjoyment="Experiences I draw from:"
            enjoymentItems="Head Volleyball Coach"
            tools="Mentorship:"
            toolItems={["1-on-1 coaching", "VDP", "Team Building"]}
          />
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  description: string
  enjoyment: string
  enjoymentItems: string
  tools: string
  toolItems: string[]
}

function SkillCard({ icon, title, description, enjoyment, enjoymentItems, tools, toolItems }: SkillCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <h4 className="text-blue-700 font-bold mb-2">{enjoyment}</h4>
      <p className="text-gray-600 mb-4">{enjoymentItems}</p>
      <h4 className="text-blue-700 font-bold mb-2">{tools}</h4>
      <ul className="text-gray-600">
        {toolItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

