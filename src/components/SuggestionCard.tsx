import styled, { keyframes } from "styled-components";
import type { Suggestion } from "../context/SuggestionsContext";

const popIn = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1); }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const NumberGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;

const Ball = styled.span`
  display: inline-flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 700;
  font-size: 18px;

  box-shadow: 0 4px 10px rgba(0,0,0,0.08);

  animation: ${popIn} 0.35s ease forwards;
  transition: transform 0.22s ease;

  &:hover {
    transform: scale(1.12);
  }
`;

const Meta = styled.div`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.muted};
  min-width: 160px;
  text-align: right;
`;

export default function SuggestionCard({ suggestion }: { suggestion: Suggestion }) {
  return (
    <Card>
      <NumberGroup>
        {suggestion.numbers.map((n, i) => (
          <Ball key={`${n}-${i}`}>{String(n).padStart(2, "0")}</Ball>
        ))}
      </NumberGroup>

      <Meta>{new Date(suggestion.createdAt).toLocaleString()}</Meta>
    </Card>
  );
}
