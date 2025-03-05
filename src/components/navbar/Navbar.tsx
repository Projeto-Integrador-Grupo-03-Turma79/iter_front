import { Link } from "react-router-dom";

export default function Navbar() {

    function saida(){
        alert('Obrigado por usar o nosso sistema! Até a próxima viagem!!');
    }

    return (
        <>
        <nav className='w-full bg-[#003152] text-white flex justify-center py-4'>
            <div className="container flex justify-end text-2xl">
                <div className='flex gap-20 items-center'>
                    <Link to='/sobre' className='hover:underline'>Sobre Nós</Link>
                    <Link to='/login' className='hover:underline'>Login</Link>
                    <Link to='/cadastro' className='hover:underline'>Cadastre-se</Link>
                    <a onClick={saida} href="https:/google.com" className='hover:underline'> Sair </a>
                </div>
            </div>
        </nav>
        </>
    )
}
