import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"

function Perfil() {
	const navigate = useNavigate()

	const { usuario } = useContext(AuthContext)

	useEffect(() => {
		if (usuario.token === "") {
			alert("Você precisa estar logado")
			navigate("/")
		}
	}, [usuario.token])

	return (
		<div className="flex justify-center mx-4">
			<div className="container mx-auto my-4 rounded-2xl overflow-hidden">
				<img
					className="w-full h-100 object-cover border-b-8 border-white"
					src="src/assets/Black and Red Dynamic Car Dealer Presentation (1).png"
					alt="Capa do Perfil"
				/>

				<img
					className="rounded-full w-56 mx-auto mt-[-2rem] border-8 border-white relative z-10"
					src="https://cdn.pixabay.com/photo/2022/02/06/17/33/man-6997747_1280.jpg"
					alt={`Foto de perfil de ${usuario.nome}`}
				/>

				<div
					className="relative mt-[-3rem] h-100 flex flex-col 
                    bg-sky-800 text-white text-2xl font-mono items-center justify-center"
				>
					<p>Nome: {usuario.nome} </p>
					<p>Email: {usuario.celular}</p>
					<p>Email: {usuario.usuario}</p>
				</div>
			</div>
		</div>
	)
}

export default Perfil
