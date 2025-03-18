import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Logo from "../../assets/Logo.svg";
import { ToastAlerta } from "../../utils/ToastAlerta";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Estado para controlar o menu
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function saida() {
    handleLogout();
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info');
    navigate('/');
  }

  return (
    <nav className='w-full bg-[#FFF] text-black flex justify-between items-center shadow-[0_4px_6px_rgba(0,0,0,0.6)]'>
      {usuario.token ? (
        <div className="mr-12 text-[18px] flex flex-wrap ml-12 items-center justify-between mx-auto p-4 w-full">
          <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-15" alt="Iter Logo" />
          </Link>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 ml-auto justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>


          <div className={`${ isMenuOpen ? "block" : "hidden" } w-full  md:block md:w-auto`} id="navbar-default" >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 ml-auto border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/viagens"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:underline md:p-0"
                >
                  Encontrar Viagem
                </Link>
              </li>
              <li>
                <Link
                  to="/nossosmotoristas"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:underline md:p-0 "
                >
                  Nossos Motoristas
                </Link>
              </li>
              <li>
                <Link
                  to="/meuperfil"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  hover:underline md:p-0 "
                >
                  Meu Perfil
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  onClick={saida}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  hover:underline md:p-0 "
                >
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex justify-between text-1xl ml-8 w-full items-center">
          <div className='flex gap-1 items-center w-20'>
            <Link to='/home'>
              <img src={Logo} className="h-10 my-5 ml-7 transform hover:scale-105" alt="Logo" />
            </Link>
          </div>

          <ul className="font-medium flex text-[20px] space-x-8 mr-15 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ml-auto">
            <li>
              <Link to="/logar" className="block py-2 px-3 text-gray-900  rounded-sm md:bg-transparent hover:underline ">
                Login
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="block py-2 px-3 text-gray-900  rounded-sm md:bg-transparent hover:underline ">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
