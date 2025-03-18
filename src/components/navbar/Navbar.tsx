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
        <div className="max-w-screen-xl flex flex-wrap ml-12 items-center justify-between mx-auto p-4 w-full">
          <a href="http://localhost:5173/home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-15" alt="Iter Logo" />
          </a>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 ml-auto justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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


          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 ml-auto border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/viagens"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Encontrar Viagem
                </Link>
              </li>
              <li>
                <Link
                  to="/nossosmotoristas"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Nossos Motoristas
                </Link>
              </li>
              <li>
                <Link
                  to="/meuperfil"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Meu Perfil
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  onClick={saida}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
              <img src={Logo} className="h-10 mt-5 mb-5" alt="Logo" />
            </Link>
          </div>

          <ul className="font-medium flex space-x-8 mr-7 md:space-x-8 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-auto">
            <li>
              <Link
                href="/logar"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
