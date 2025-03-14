import Select from "react-select";
import { useCidades } from "../../../hooks/useCidades";

interface SelectCidadeProps {
  uf: string;
  onChange: (cidade: string) => void; // Adicionando a prop onChange
}

export const SelectCidade: React.FC<SelectCidadeProps> = ({ uf, onChange }) => {
  const { cidades, loading: loadingCidades } = useCidades({ uf });

  const cidadeOptions = cidades.map((cidade) => ({
    value: cidade.nome, // Alterado para armazenar o nome diretamente
    label: cidade.nome
  }));

  return (
    <Select
      isLoading={loadingCidades}
      loadingMessage={() => "Estamos carregando as cidades, aguarde ..."}
      isDisabled={loadingCidades || cidadeOptions.length === 0}
      options={cidadeOptions}
      placeholder="Selecione uma cidade"
      onChange={(selectedOption) => onChange(selectedOption?.value || "")} // Captura a cidade selecionada
    />
  );
};
