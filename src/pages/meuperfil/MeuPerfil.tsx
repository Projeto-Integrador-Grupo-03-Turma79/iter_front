import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"
import CardViagem from "../../components/viagens/cardviagens/CardViagens"
import Veiculo from "../../models/Veiculo"


function Perfil() {

	const navigate = useNavigate()

	const [viagens, setViagens] = useState([])
	const [veiculo, setVeiculo] = useState([])


	const { usuario } = useContext(AuthContext)

	useEffect(() => {
		if (usuario.token === "") {
			alert("Você precisa estar logado")
			navigate("/")
		}
	}, [usuario.token])



	return (
		<div className="flex items-center justify-center h-screen xl:h-[80vh]">
			<div className="w-full max-w-[90%] bg-white flex justify-center gap-20 rounded-4xl pt-10 pb-10 my-15">
				<div className="flex flex-col md:flex-row justify-center w-1/2">
					<div className=" text-center mb-10 w-auto mt-8">
						<img src={usuario.foto} alt="Profile Picture" className="rounded-full w-full h-full  xl:w-32 xl:h-32 mx-auto border-4 border-[#F1AF09] transition-transform duration-300 hover:scale-105 ring ring-gray-300" />
					</div>

					<div className="md:w-fit md:pl-8">
						<h1 className="xl: text-2xl font-bold text-[#003152]">{usuario.nome}</h1>

						<h2 className="text-xl font-semibold mt-8 mb-2 text-[#003152]">Informações de Contato</h2>
						<ul className="space-y-2 text-grey-700">
							<li className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#F1AF09]" viewBox="0 0 20 20" fill="currentColor">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
								{usuario.usuario}
							</li>
							<li className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#F1AF09]" viewBox="0 0 20 20" fill="currentColor">
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
								</svg>
								{(() => {
									const celular = usuario.celular.toString()
									const ddd = celular.substring(0, 2)
									const celparte1 = celular.substring(2, 7)
									const celparte2 = celular.substring(7)

									return `(${ddd}) ${celparte1}-${celparte2}`
								})()}
							</li>

						</ul>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Perfil
