import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import Logo3 from "../../assets/Logo3.svg";

export default function Footer() {
  return (

   
    <div className="flex justify-between bg-[#FFF] text-2x1 py-1">
        <div className="md:flex md:justify-between">
          <div className="mb-2 md:mb-3">
              <Link to='/home' className="flex items-center ml-10">
                  <img src={Logo3} className="h-18 me-8" alt="Iter Logo" />
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-2 sm:grid-cols-3">
              <div>
              <ul className="flex flex-col items-start ml-1 gap-1">
                  <h2 className="text-1xl font-bold">Empresa</h2>
                      <li className="mb-1">
                          
                      </li>
                      <li>
                          <Link to="/sobre" className="text-1xl hover:underline">Sobre Nós</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <ul className="flex flex-col items-start ml-1/2 gap-1"> 
                  <h2 className="text-1xl font-bold">Produtos</h2>
                      <li className="mb-1">
                      </li>
                      <li>
                      <Link to="/viagens" className="text-1xl hover:underline">Viajar</Link>
                      <li className="mb-4"></li>
                      </li>
                      <li>
                      <Link to="/nossosmotoristas" className="text-1xl hover:underline">Dirigir</Link>
                      </li>
                  </ul>
              </div>
              <div className="flex flex-col items-center ml-35 gap-3">
                <h2 className="text-[15px] font-bold">Iter - Grupo 03 | Copyright: 2025</h2>
                 <p className="text-1x1">Acesse nossas redes sociais</p>
                 <div className="flex gap-10 mt-3">
               <a href="https://www.linkedin.com/school/generationbrasil"
                  target="_blank"
                   rel="noopener noreferrer"
                >
            <LinkedinLogo size={30} weight="bold" />
          </a>
          <a
            href="https://github.com/Projeto-Integrador-Grupo-03-Turma79"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={30} weight="bold" />
          </a>
          <a
            href="https://www.instagram.com/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo size={30} weight="bold" />
          </a>

         </div>
        </div>
     </div>
    </div>
    </div> 

    

    
  );
}
