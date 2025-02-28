export default function Sobre() {
   
    const colaboradores = [
        {
            nome: "Adelina Santos",
            cargo: "Master",
            github: "Adelina2801",
            imagem: "https://github.com/Adelina2801.png",
        },
        {
            nome: "Beatriz Borges",
            cargo: "Desenvolvedora",
            github: "beasb",
            imagem: "https://github.com/beasb.png",
        },
        {
            nome: "Denner dos Anjos",
            cargo: "Tester",
            github: "DennerASilva",
            imagem: "https://github.com/DennerASilva.png",
        },
        {
            nome: "Lucas Pimentel",
            cargo: "Desenvolvedor",
            github: "Pimentelucas",
            imagem: "https://github.com/Pimentelucas.png",
        },
        {
            nome: "Maria Eduarda",
            cargo: "PO",
            github: "mariacosta2203",
            imagem: "https://github.com/mariacosta2203.png",
        },
        {
            nome: "Otavio Ferreira",
            cargo: "Desenvolvedor",
            github: "CURINGU",
            imagem: "https://github.com/CURINGU.png",
        }
    ];

    return (
        <div className="flex flex-col items-center py-10 px-5">
            <h1 className="text-4xl font-bold pb-10">Sobre Nós</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {colaboradores.map((colaborador, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-72 transition-transform hover:scale-105"
                    >
                        <img 
                            src={colaborador.imagem} 
                            alt={`Foto de ${colaborador.nome}`} 
                            className="w-32 h-32 rounded-full object-cover border-2 border-[#700200]"
                        />
                        <h2 className="text-xl font-semibold mt-4">{colaborador.nome}</h2>
                        <p className="text-gray-600">{colaborador.cargo}</p>
                        <a 
                            href={`https://github.com/${colaborador.github}`} 
                            target="_blank" 
                            className="mt-2 text-[#c07512] hover:underline"
                        >
                            @{colaborador.github}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}