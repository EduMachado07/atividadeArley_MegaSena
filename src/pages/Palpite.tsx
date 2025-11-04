import { useEffect, useState } from "react";
import { useSuggestions } from "../context/SuggestionsContext";
import SuggestionCard from "../components/SuggestionCard";
import type { Suggestion } from "../context/SuggestionsContext";
import Layout from "../components/Layout";
import { Card } from "../components/UI/Card";
import styled from "styled-components";

const BtnPrimary = styled.button`
  width: fit-content;
  padding: 12px 28px;
  border: 1px solid #683d26;
  border-radius: 10px;
  background: #683d26;
  color: #ffffffff;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

export default function Palpite() {
  const { generateSuggestion, suggestions } = useSuggestions();
  const [current, setCurrent] = useState<Suggestion | null>(null);

  useEffect(() => {
    if (!current && suggestions.length > 0) {
      setCurrent(suggestions[0]);
    }
  }, [suggestions, current]);

  const handleGenerate = () => {
    const newSuggestion = generateSuggestion();
    setCurrent(newSuggestion);
  };

  return (
    <Layout>
      <h2 style={{color: "#381f12"}}>Gerar Palpite</h2>

      <Card>
        {current && <SuggestionCard suggestion={current} />}

        <BtnPrimary onClick={handleGenerate}>
          Gerar meu palpite
        </BtnPrimary>
      </Card>
    </Layout>
  );
}
