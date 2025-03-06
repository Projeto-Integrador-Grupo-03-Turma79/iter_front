import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"
import Logo from "../../assets/logosIter.svg"
import { ToastAlerta } from "../../utils/ToastAlerta";

export default function Navbar() {

    const { usuario, handleLogout } = useContext(AuthContext);

    function saida(){
        ToastAlerta('Obrigado por usar o nosso sistema! Até a próxima viagem!!', 'info');
    }

    return (
        <nav className='w-full bg-[#003152] text-white flex justify-center py-4'>

            {usuario.token ? ( 
                <>
                    <div className="flex justify-start text-4xl">
                        <div className='flex gap-10 items-center ml-8 w-25'>
                          <Link to='/home'>  <img src={Logo} /> </Link>
                           

                        </div>
                    </div>
                    <div className="container flex justify-end text-2xl font-mono">
                        <div className='flex gap-10 items-center'>
                            <Link to='/viagens' className='hover:underline'>Encontrar Viagem</Link>
                            <Link to='/nossosmotoristas' className='hover:underline'>Nossos Motoristas</Link>
                           
                            <Link to='/sobre' className='hover:underline'>Sobre</Link>
                            <a onClick={saida} href="https:/google.com" className='hover:underline'> Sair </a>
                        </div>
                    </div>
                </> 
            ) : ( 
                <>
                    <div className="flex justify-start text-4xl">
                        <div className='flex gap-10 items-center ml-8 w-25'>
                           <Link to='/home'>  <img src={Logo} /> </Link>
                        </div>
                    </div>
                    <div className="container flex justify-end text-2xl font-mono">
                        <div className='flex gap-10 items-center'>
                            <Link to='/logar' className='hover:underline'>Login</Link>
                            <Link to='/cadastrar' className='hover:underline'>Cadastre-se</Link>
                            <Link to='/sobre' className='hover:underline'>Sobre</Link>
                        </div>
                    </div>
                </>
            )}

        </nav>
    )
}
