import styled from "styled-components";
import { useSuggestions } from "../context/SuggestionsContext";
import SuggestionCard from "../components/SuggestionCard";

const Top = styled.div` display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; gap:12px; flex-wrap:wrap; `;
const Btn = styled.button` padding:10px 12px; border-radius:12px; cursor:pointer; font-weight:700; background:transparent; border:1px solid ${({ theme }) => theme.colors.cardBorder}; color: ${({ theme }) => theme.colors.text};`;

const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 14px;
`;

export default function Historico() {
  const { suggestions, clearHistory } = useSuggestions();

  return (
    <div>
      <Top>
        <h2 style={{ margin: 0, fontFamily: "Orbitron, sans-serif" }}>Histórico de sugestões</h2>
        <div>
          <Btn onClick={clearHistory}>Limpar histórico</Btn>
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
