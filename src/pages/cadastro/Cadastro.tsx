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

  const[confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })
  
  useEffect(() => {
    if (usuario.id !== 0){
      retornar()
    }
  }, [usuario])

  function retornar(){
    navigate('/login')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmaSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){

      setIsLoading(true)

      try{
        await cadastrarUsuario(`/usuario/cadastrar`, usuario, setUsuario)
        ToastAlerta("Usuário foi cadastrado com sucesso!", "sucesso")
      }catch(error){
        ToastAlerta("Erro ao cadastrar o usuário!", "erro")
      }
    }else{
      ToastAlerta("Os dados do Usuário estão inconsistentes! Verifique as informações do cadastro.", "erro")
      setUsuario({...usuario, senha: ''})
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
             value = {usuario.nome}
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
              value = {usuario.usuario}
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
              value = {usuario.foto}
             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded-4xl p-2"
              value = {usuario.senha}
             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
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
                  {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true}/> :
                    <span>Cadastrar</span>
                  }
              
            </button>
          </div>
          <hr className="border-slate-800 w-full mt-1" />
            <p>
                Já tem uma conta?{' '}
                <Link to="/login" className="text-[#024a7a] hover:underline font-extrabold">
                    Faça o login
                </Link>
            </p>
        </form>
      </div>
    </>
  )
}

export default Cadastro
