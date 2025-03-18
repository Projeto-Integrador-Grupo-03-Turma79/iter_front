import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Logo3 from "../../assets/Logo3.svg";

export default function Footer() {
  return (
    <div className="bg-[#FFF] py-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo */}
          <div className="mb-6 md:mb-0 flex justify-center md:justify-start">
            <Link to='/home' className="flex items-center">
              <img src={Logo3} className="h-18" alt="Iter Logo" />
            </Link>
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <ul className="flex flex-col items-center md:items-start">
                <h2 className="text-xl font-bold mb-2">Empresa</h2>
                <li>
                  <Link to="/sobre" className="text-xl hover:underline">Sobre Nós</Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col items-center md:items-start">
                <h2 className="text-xl font-bold mb-2">Produtos</h2>
                <li>
                  <Link to="/viagens" className="text-xl hover:underline">Viajar</Link>
                </li>
                <li>
                  <Link to="/nossosmotoristas" className="text-xl hover:underline">Dirigir</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center mt-4 sm:mt-0">
              <h2 className="text-sm font-bold text-center mb-2">Iter - Grupo 03 | Copyright: 2025</h2>
              <p className="text-xl text-center mb-4">Acesse nossas redes sociais</p>
              <div className="flex gap-6 justify-center">
                <a href="https://www.linkedin.com/school/generationbrasil" target="_blank" rel="noopener noreferrer">
                  <LinkedinLogo size={30} weight="bold" />
                </a>
                <a href="https://github.com/Projeto-Integrador-Grupo-03-Turma79" target="_blank" rel="noopener noreferrer">
                  <GithubLogo size={30} weight="bold" />
                </a>
                <a href="https://www.instagram.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                  <InstagramLogo size={30} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
