import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navbar() {

    const { usuario, handleLogout } = useContext(AuthContext);

    function saida(){
        alert('Obrigado por usar o nosso sistema! Até a próxima viagem!!');
    }

    return (
        <nav className='w-full bg-[#003152] text-white flex justify-center py-4'>
            {usuario.token ? ( 
                <>
                    <div className="flex justify-start text-4xl">
                        <div className='flex gap-10 items-center'>
                            <Link to='/' className='font-medium'>ITER</Link>
                        </div>
                    </div>
                    <div className="container flex justify-end text-2xl font-mono">
                        <div className='flex gap-10 items-center'>
                            <Link to='/viagens' className='hover:underline'>ENCONTRAR VIAGEM</Link>
                            <Link to='/nossosmotoristas' className='hover:underline'>NOSSOS MOTORISTAS</Link>
                            <Link to='/meuperfil' className='hover:underline'>MEU PERFIL</Link>
                            <Link to='/sobre' className='hover:underline'>SOBRE</Link>
                            <a onClick={saida} href="https:/google.com" className='hover:underline'> SAIR </a>
                        </div>
                    </div>
                </> 
            ) : ( 
                <>
                    <div className="flex justify-start text-4xl">
                        <div className='flex gap-10 items-center'>
                            <Link to='/' className='font-medium'>ITER</Link>
                        </div>
                    </div>
                    <div className="container flex justify-end text-2xl font-mono">
                        <div className='flex gap-10 items-center'>
                            <Link to='/logar' className='hover:underline'>LOGIN</Link>
                            <Link to='/cadastrar' className='hover:underline'>CADASTRE-SE</Link>
                            <Link to='/sobre' className='hover:underline'>SOBRE</Link>
                        </div>
                    </div>
                </>
            )}
        </nav>
    )
}
