import { Mail, FileText } from 'lucide-react'
import { FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import logo from '../assets/logo.jpeg'



function Header() {
  return (
    <header className="border-b border-violet-500/10 px-4 py-4 sm:px-6 lg:px-5">
      
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-11 w-11 rounded-full border border-violet-500/20"></img>
          <h1 className="text-lg font-semibold tracking-tight sm:text-xl">
            João Raupp
          </h1>
          <p className="text-xs text-zinc-500 sm:text-sm top-1 relative">
            Software Engineer Student
          </p>
        </div>
      <div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3">
        
        <a
          href="https://github.com/Ginkazin"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHubi"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/10 text-violet-400 transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-300"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="mailto:bielraupp.glob09@gmail.com"
          aria-label="E-mail"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/10 text-violet-400 transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-300"
        >
          <Mail size={18} />
        </a>

        <a
          href="https://wa.me/5581991973907"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/10 text-violet-400 transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-300"
        >
          <FaWhatsapp size={18} />
        </a>

        <a
          href="https://www.instagram.com/raupp.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/10 text-violet-400 transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-300"
        >
          <FaInstagram size={18} />
        </a>

        <a
          href="/Raupp_Dev.pdf"
          download="Raupp_Dev.pdf"
          aria-label="Baixar Currículo"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/10 text-violet-400 transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-300"
        >
          <FileText size={18} />
        </a>
      </div>
    </header>
  )
}

export default Header