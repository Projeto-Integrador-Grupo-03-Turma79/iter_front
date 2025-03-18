import imagem from "../../assets/Logo Minimalista Auto Escola Amarelo e Preto (12).svg";


function Sobre() {

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
        <div className="flex flex-col items-center py-10 px-5 bg-[#efefef]">
            <h1 className="text-4xl font-bold pb-10">Sobre nós</h1>

            <article className="p-10">
                <img className="h-130 w-150 float-left" src="../../../src/assets/Logo Minimalista Auto Escola Amarelo e Preto (12).svg"/>
                <p className="text-2xl/10 mt-7 text-justify">A Iter foi criada para oferecer um transporte acessível, seguro e confortável para quem não possui veículo próprio. Com tarifas econômicas, garantimos que nossos passageiros cheguem aos seus compromissos com tranquilidade e comodidade. Além disso, geramos oportunidades de emprego para quem busca uma renda extra ou deseja trabalhar de forma autônoma, garantindo mais flexibilidade e independência financeira. Além de facilitar a mobilidade urbana, contribuímos para a redução do trânsito e do impacto ambiental ao incentivar o compartilhamento de viagens. Nossa plataforma intuitiva e de fácil acesso permite que os usuários solicitem corridas rapidamente, conectando passageiros a motoristas de maneira eficiente e segura. Na Iter, a confiança e a qualidade do serviço são prioridades. Investimos constantemente em tecnologia e suporte ao cliente para garantir a melhor experiência possível. Seja para um deslocamento diário, uma viagem de última hora ou um compromisso importante, estamos aqui para tornar cada trajeto mais prático e agradável.</p>
            </article>

            <h1 className="text-4xl font-bold pb-10">Colaboradores</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-30">
                {colaboradores.map((colaborador, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-72 transition-transform hover:scale-105"
                    >
                        <img
                            src={colaborador.imagem}
                            alt={`Foto de ${colaborador.nome}`}
                            className="w-32 h-32 rounded-full object-cover border-2 border-[#f1af09]"
                        />
                        <h2 className="text-xl font-semibold mt-4">{colaborador.nome}</h2>
                        <p className="text-gray-600">{colaborador.cargo}</p>
                        <a
                            href={`https://github.com/${colaborador.github}`}
                            target="_blank"
                            className="mt-2 text-[#f1af09] hover:underline"
                        >
                            @{colaborador.github}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sobre;

