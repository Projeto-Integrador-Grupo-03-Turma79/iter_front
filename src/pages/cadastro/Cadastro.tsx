import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { cadastrarUsuario } from '../../service/Service'
import './Cadastro.css'
import { RotatingLines } from 'react-loader-spinner'
import { Form, Link, useNavigate } from 'react-router-dom'
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

  const [senha, setSenha] = useState(usuario.senha || "");
  const [popoverVisible, setPopoverVisible] = useState(false);

  const temMinusculaMaiuscula = /[a-z]/.test(senha) && /[A-Z]/.test(senha);
  const temSimbolo = /[#@$!%*?&]/.test(senha);
  const temDozeCaracteres = senha.length >= 8;

  const forcaSenha = [
    temMinusculaMaiuscula,
    temSimbolo,
    temDozeCaracteres,
  ].filter(Boolean).length;

  const coresForca = ["bg-gray-300", "bg-orange-300", "bg-yellow-400", "bg-green-500"];

  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const novaSenha = e.target.value;
    setSenha(novaSenha);
    atualizarEstado(e);
  };

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
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded-4xl p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded-4xl p-2"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded-4xl p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="celular">Celular</label>
            <input
              type="text"
              id="celular"
              name="celular"
              placeholder="celular"
              className="border-2 border-slate-700 rounded-4xl p-2"
              value={usuario.celular}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full relative">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded-4xl p-2"
              value={senha}
              onChange={handleSenhaChange}
              onFocus={() => setPopoverVisible(true)}
              onBlur={() => setPopoverVisible(false)}
            />

            {popoverVisible && (
              <div className=" z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-72 mt-2 text-sm dark:bg-gray-800 dark:border-gray-600">
                <h3 className="font-semibold text-gray-900 dark:text-white">A senha deve ter:</h3>
                <li className="flex items-center">
                    <svg className={`w-3 h-3 me-2.5 ${temDozeCaracteres ? "text-green-500" : "text-gray-400"}`} fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    Pelo menos 8 caracteres
                  </li>

                <div className="grid grid-cols-4 gap-2 my-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`h-1 ${i < forcaSenha ? coresForca[forcaSenha] : "bg-gray-200"} dark:bg-gray-600`}></div>
                  ))}
                </div>

                <p className="text-gray-600">É recomendável incluir:</p>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="flex items-center mb-1">
                    <svg className={`w-3.5 h-3.5 me-2 ${temMinusculaMaiuscula ? "text-green-500" : "text-gray-400"}`} fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    Letras maiúsculas e minúsculas
                  </li>
                  <li className="flex items-center mb-1">
                    <svg className={`w-3 h-3 me-2.5 ${temSimbolo ? "text-green-500" : "text-gray-400" }`} fill="none" viewBox="0 0 14 14" >
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    Pelo menos um símbolo (#@$!%*?&)
                  </li>
                  
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded-4xl p-2"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">

            <button
              type='submit'
              className='mt-3 text-white bg-black hover:bg-slate-900 w-1/2 py-2 flex justify-center rounded-4xl' >
              {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> :
                <span>Cadastrar</span>
              }

            </button>
          </div>
          <hr className="border-slate-800 w-full mt-1" />
          <p>
            Já tem uma conta?{' '}
            <Link to="/logar" className="text-[#024a7a] hover:underline font-extrabold">
              Faça o login
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Cadastro
