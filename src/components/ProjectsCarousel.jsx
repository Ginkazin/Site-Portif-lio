import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'

function ProjectsCarousel() {
  const projects = [
    {
      title: 'Scout (Em Desenvolvimento)',
      description:
        'Sistema para monitoramento de servidores e bancos de dados com métricas.',
      stack: ['FastAPI', 'PostgreSQL', 'React'],
      github: 'https://github.com/Ginkazin/Scout',
      demo: '#',
    },
    {
      title: 'Api de Cadastro de Usuários',
      description:
        'API REST desenvolvida em Python com Flask para gerenciamento completo de usuários e endereços',
      stack: ['Python', 'Flask', 'MySQL'],
      github: 'https://github.com/Ginkazin/ApiFlask',
      demo: '#',
    },
    {
      title: 'Automação de Pedidos',
      description:
        'Automação para processamento e retorno de pedidos.',
      stack: ['Python', 'Pandas', 'PyAutoGUI'],
      github: 'https://github.com/Ginkazin/Automa-o-retorno-de-pedidos',
      demo: '#',
    },
    {
      title: 'OddsMatch',
      description:
        'Plataforma full-stack de comparação de odds esportivas com integração de Api externa.',
      stack: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Ginkazin/OddsMatch',
      demo: '#',
    },
  ]

  const duplicatedProjects = [...projects, ...projects]

  return (
    <section className="w-full overflow-hidden py-5">
      
      <div className="mb-7 px-7">
        <h2 className="text-center text-2xl font-semibold text-white">
          Projetos
        </h2>
      </div>

      <div className="carousel-mask overflow-hidden">
        <div className="carousel-track flex w-max gap-3 py-6">
          
          {duplicatedProjects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="
                group
                w-[280px]
                shrink-0
                rounded-xl
                border border-violet-500/10
                bg-zinc-900/50
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/30
                hover:bg-zinc-900
                sm:w-[300px]
              "
            >
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-violet-500/10 px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-violet-400"
                >
                  <FaGithub size={16} />
                  Código
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-violet-400"
                >
                  <ExternalLink size={16} />
                  Projeto
                </a>
              </div>
            </article>
          ))}

        </div>
      </div>

    </section>
  )
}

export default ProjectsCarousel