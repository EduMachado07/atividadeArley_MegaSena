import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  padding: 22px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Left = styled.div`
  max-width: 80%;
  display: flex;
  gap: 24px;
`;
const Lead = styled.p`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.muted};
`;

const BtnPrimary = styled.button`
  padding: 12px 18px;
  border: 1px solid #381f12;
  border-radius: 10px;
  background: #381f12;
  color: #ffffffff;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;
const BtnOutline = styled.button`
  padding: 12px 18px;
  border: 1px solid;
  border-radius: 10px;
  background: #fcf8f0;
  color: #071428;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

export default function Home() {
  const nav = useNavigate();
  return (
    <Box>
      <h2 style={{ margin: 0, fontFamily: "Orbitron, sans-serif" }}>
        Seja Bem-Vindo !
      </h2>

      <Left>
        <BtnPrimary onClick={() => nav("/palpite")}>Gerar palpite</BtnPrimary>
        <BtnOutline onClick={() => nav("/historico")}>
          Histórico de palpites
        </BtnOutline>
      </Left>
    </Box>
  );
}
