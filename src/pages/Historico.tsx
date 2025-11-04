import styled from "styled-components";
import { useSuggestions } from "../context/SuggestionsContext";
import SuggestionCard from "../components/SuggestionCard";

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 12px;
  flex-wrap: wrap;
`;
const BtnOutline = styled.button`
  padding: 12px 18px;
  border: 1px solid #683d26;
  border-radius: 10px;
  background: #fcf8f0;
  color: #381f12;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
`;

export default function Historico() {
  const { suggestions, clearHistory } = useSuggestions();

  return (
    <div>
      <Top>
        <h2 style={{ margin: 0, fontFamily: "Orbitron, sans-serif" }}>
          Histórico de sugestões
        </h2>
        <div>
          <BtnOutline onClick={clearHistory}>Limpar histórico</BtnOutline>
        </div>
      </Top>

      {suggestions.length === 0 ? (
        <p style={{ color: "#9FB0D6" }}>Nenhuma sugestão gerada ainda.</p>
      ) : (
        <Grid>
          {suggestions.map((s) => (
            <SuggestionCard key={s.id} suggestion={s} />
          ))}
        </Grid>
      )}
    </div>
  );
}
