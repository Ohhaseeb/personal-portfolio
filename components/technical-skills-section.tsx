import {
    Html5Icon,
    CssIcon,
    JavascriptIcon,
    ReactIcon,
    TypescriptIcon,
    NextjsIcon,
    SqlIcon,
    NodejsIcon,
    GitIcon,
    PythonIcon,
  } from "./skill-icons"
  
  export function TechnicalSkillsSection() {
    const skills = [
      { name: "HTML5", icon: <Html5Icon className="w-12 h-12" /> },
      { name: "CSS", icon: <CssIcon className="w-12 h-12" /> },
      { name: "JavaScript", icon: <JavascriptIcon className="w-12 h-12" /> },
      { name: "TypeScript", icon: <TypescriptIcon className="w-12 h-12" /> },
      { name: "React", icon: <ReactIcon className="w-12 h-12" /> },
      { name: "Next.js", icon: <NextjsIcon className="w-12 h-12" /> },
      { name: "SQL", icon: <SqlIcon className="w-12 h-12" /> },
      { name: "Node.js", icon: <NodejsIcon className="w-12 h-12" /> },
      { name: "Git", icon: <GitIcon className="w-12 h-12" /> },
      { name: "Python", icon: <PythonIcon className="w-12 h-12" /> },
    ]
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Here are some of the technologies and tools I work with on a daily basis.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4 text-blue-700">{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  