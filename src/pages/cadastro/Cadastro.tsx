import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { cadastrarUsuario } from '../../service/Service'
import './Cadastro.css'
import { RotatingLines } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    celular: ''


  })

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  function retornar() {
    navigate('/logar')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      setIsLoading(true)

      try {
        await cadastrarUsuario(`/usuario/cadastrar`, usuario, setUsuario)
        ToastAlerta("Usuário foi cadastrado com sucesso!", "sucesso")
      } catch (error) {
        ToastAlerta("Erro ao cadastrar o usuário!", "erro")
      }
    } else {
      ToastAlerta("Os dados do Usuário estão inconsistentes! Verifique as informações do cadastro.", "erro")
      setUsuario({ ...usuario, senha: '' })
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 h-[80vh] place-items-center font-bold">
        <form className='flex justify-center items-center flex-col w-1/4 gap-3'
          onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-slate-900 text-5xl mb-1'>Cadastrar</h2>
          <div className="flex flex-col w-full relative z-0 mb-5">
            <input className="block py-3.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-800 appearance-none text-black dark:border-gray-800 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-800 peer"

            type="text" 
            name="nome" 
            id="nome"  
            placeholder=" "
            value={usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            <label htmlFor="nome" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome do usuário</label>
          </div>

          <div className="flex flex-col w-full relative z-0 mb-5">
            <input className="block py-3.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-800 appearance-none text-black dark:border-gray-800 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-800 peer"

            type="text" 
            name="usuario" 
            id="usuario"  
            placeholder=" "
            value={usuario.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            <label htmlFor="usuario" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email do usuário</label>
          </div>

          <div className="flex flex-col w-full relative z-0 mb-5">
            <input className="block py-3.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-800 appearance-none text-black dark:border-gray-800 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-800 peer"

            type="text" 
            name="foto" 
            id="foto"  
            placeholder=" "
            value={usuario.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            <label htmlFor="foto" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Foto</label>
          </div>

          <div className="flex flex-col w-full relative z-0 mb-5">
            <input className="block py-3.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-800 appearance-none text-black dark:border-gray-800 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-800 peer"

            type="text" 
            name="celular" 
            id="celular"  
            placeholder=" "
            value={usuario.celular}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            <label htmlFor="celular" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular</label>
          </div>
          <div className="flex flex-col w-full relative z-0 mb-5">
            <input className="block py-3.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-800 appearance-none text-black dark:border-gray-800 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-800 peer"

            type="password" 
            name="senha" 
            id="senha"  
            placeholder=" "
            value={usuario.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            <label htmlFor="senha" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Senha</label>
          </div>

          <div className="flex flex-col w-full relative z-0 mb-5">
            <input className="block py-3.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-800 appearance-none text-black dark:border-gray-800 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-800 peer"

            type="password" 
            name="confirmarSenha" 
            id="confirmarSenha"  
            placeholder=" "
            value={confirmaSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
            <label htmlFor="senha" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmar senha</label>
          </div>
          
          <div className="flex justify-around w-full gap-8">

            <button
              type='submit'
              className='mt-3 text-white bg-[#f1af09] hover:bg-slate-900 w-[15vw] py-2 flex justify-center rounded-4xl' >
              {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> :
                <span>Cadastrar</span>
              }

            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro
