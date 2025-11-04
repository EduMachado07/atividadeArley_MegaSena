import styled, { keyframes } from "styled-components";
import type { Suggestion } from "../context/SuggestionsContext";

const popIn = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1); }
`;

const Card = styled.div`
  width: 100%;
  // background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  border: 1px solid #683d26;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const NumberGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;

const Ball = styled.span`
  display: inline-flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #381f12;
  align-items: center;
  justify-content: center;

  // background: ${({ theme }) => theme.colors.primary};
  color: #381f12;
  font-weight: 700;
  font-size: 20px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);

  animation: ${popIn} 0.35s ease forwards;
  transition: transform 0.22s ease;

  &:hover {
    transform: scale(1.12);
  }
`;

const Meta = styled.div`
  font-size: 1rem;
  color: #381f12;
  width: 100%;
  text-align: right;
`;

export default function SuggestionCard({
  suggestion,
}: {
  suggestion: Suggestion;
}) {
  return (
    <Card>
      <NumberGroup>
        {suggestion.numbers.map((n, i) => (
          <Ball key={`${n}-${i}`}>{String(n).padStart(2, "0")}</Ball>
        ))}
      </NumberGroup>

      <Meta>
        {new Date(suggestion.createdAt).toLocaleString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Meta>
    </Card>
  );
}
