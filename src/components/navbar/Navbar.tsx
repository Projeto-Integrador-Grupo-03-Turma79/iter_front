import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"
import Logo from "../../assets/Logo.svg";
import { ToastAlerta } from "../../utils/ToastAlerta";

export default function Navbar() {

    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function saida(){
        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

    return (
        <nav className='w-full bg-[#FFF] text-black flex justify-center shadow-[0_4px_6px_rgba(0,0,0,0.6)]'>
            {usuario.token ? ( 
                <>
                    <div className="flex justify-end text-1xl ml-8">
                        <div className='flex gap-1/2 pg-1 items-center w-20'>
                           <Link to='/home'>  <img src={Logo}  className="h-10 mt-5 mb-5" /> </Link>
                        </div>
                    </div>
                    <div className="container flex justify-end text-2x1 font-mono">
                        <div className='flex gap-10 items-center'>
                            <Link to='/viagens' className='hover:underline'>Encontrar Viagem</Link>
                            <Link to='/nossosmotoristas' className='hover:underline'>Nossos Motoristas</Link>
                            <Link to='/sobre' className='hover:underline'>Sobre</Link>
                            <Link to='/meuperfil' className='hover:underline'>Meu Perfil</Link>
                            <Link to='/home' onClick={saida} className='hover:underline'>Sair</Link>
                        </div>
                    </div>
                </> 
            ) : ( 
                <>
                    <div className="flex justify-end text-1xl ml-8">
                        <div className='flex gap-1 items-center w-20'>
                        <Link to='/home'>  <img src={Logo}  className="h-10 mt-5 mb-5" /> </Link>
                        </div>
                    </div>
                    <div className="container flex justify-end text-2xl font-mono">
                        <div className='flex gap-10 items-center mr-7'>
                            <Link to='/logar' className='hover:underline'>Login</Link>
                            <Link to='/sobre' className='hover:underline'>Sobre</Link>
                        </div>
                    </div>
                </>
            )}

        </nav>
    )
}
