import Header from './components/Header'
import TechStack from './components/TechStack'
import ProjectsCarousel from './components/ProjectsCarousel'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-white">
      <ParticleBackground />
      <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-violet-600/5 blur-[120px]" />

      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/5 blur-[140px]" />
      </div>
      <div className="z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-4 sm:px-6 lg:px-8">
        
        <div className="flex w-full flex-col overflow-hidden border border-violet-500/15 bg-zinc-950/1 backdrop-blur-sm lg:h-[120vh]">
          
          <Header />

          <section className="grid flex-1 grid-cols-1 border-t border-violet-500/10 md:grid-cols-2">
            
            <div className=" border-violet-500/10 p-6 md:border-b-0  md:border-violet-500/10">
              <h2 className="mb-2 py-3 text-2xl font-semibold text-center">Sobre mim</h2>
              <p className="max-w-md text-sm leading-7 text-zinc-400 sm:text-base text-center md:text-center">
                Sou estudante de Engenharia de Software, atuo como Técnico de TI e também desenvolvo projetos como freelancer. Tenho foco em desenvolvimento Full Stack, gosto de criar soluções práticas e futuramente pretendo me aprofundar em Inteligência Artificial.
              </p>
            </div>

            <div className="flex items-center justify-center p-6">
              <TechStack />
            </div>
          </section>

          <section className="border-violet-500/10 py-0">
            <ProjectsCarousel />
          </section>

        </div>
      </div>
    </main>
  )
}

export default App