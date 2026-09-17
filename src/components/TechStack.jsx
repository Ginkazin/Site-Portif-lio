import {
  SiPython,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiMysql,
} from 'react-icons/si'

import {FaHtml5, FaCss3Alt,} from 'react-icons/fa'

function TechStack() {
  const stacks = [
    { name: 'Python', icon: <SiPython /> },
    { name: 'FastAPI', icon: <SiFastapi /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'Django', icon: <SiDjango /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Stacks
      </h2>

        <div className="grid grid-cols-4 gap-x-6 gap-y-7 sm:grid-cols-7">
            {stacks.map((stack) => (
                <div
                    key={stack.name}
                    title={stack.name}
                    className="
                        flex h-12 w-12
                        items-center justify-center
                        text-3xl text-zinc-500
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:text-violet-400
                    "
                  >
                    {stack.icon}
                </div>
            ))}
        </div>  
    </div>
  )
}

export default TechStack