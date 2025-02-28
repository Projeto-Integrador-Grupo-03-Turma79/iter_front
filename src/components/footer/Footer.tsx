import {GithubLogo, InstagramLogo, LinkedinLogo} from "@phosphor-icons/react";

export default function Footer(){
    
    return(
        <div className="flex justify-center bg-[#003152] text-white">
        <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>
                Iter - Grupo 03 | Copyright: 2025
            </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>      
                <a href="https://www.linkedin.com/school/generationbrasil" target="_blank">
                    <LinkedinLogo size={48} weight='bold' />
                </a>
                <a href="https://github.com/Projeto-Integrador-Grupo-03-Turma79" target="_blank">
                    <GithubLogo size={48} weight='bold' />
                </a>
                <a href="https://www.instagram.com/generationbrasil" target="_blank">
                    <InstagramLogo size={48} weight='bold' />
                </a>
            </div>
        </div>
    </div>
    )
}