import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Palpite from "./pages/Palpite";
import Historico from "./pages/Historico";
import styled from "styled-components";
import LogoImg from "./assets/logo.png";


const Page = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.pagePadding};
`;

const Shell = styled.div`
  width: min(${({ theme }) => theme.sizes.maxWidth}, 96%);
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 40px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  backdrop-filter: blur(6px) saturate(120%);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
`;

const Brand = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const Logo = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );
  box-shadow: 0 6px 24px rgba(76, 60, 255, 0.12),
    0 0 18px rgba(0, 163, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-family: "Orbitron", sans-serif;
  font-size: 18px;
`;

const Title = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-size: 1.4rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  padding: 8px 14px;
  border-radius: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${(p) => (p.$active ? 1 : 0.7)};
  background: ${(p) =>
    p.$active
      ? `linear-gradient(90deg, ${p.theme.colors.primary}, ${p.theme.colors.accent})`
      : "transparent"};
  transition: ${(p) => p.theme.transitions.default};
`;

export default function App() {
  const loc = useLocation();

  return (
    <Page>
      <Shell className="fade-in">
        <Header>  
          <Brand>
            <img
              src={LogoImg}
              alt="Logo MegaSena"
              style={{ width: 100, height: 100 }}
            />
            <div>
              <Title>Gerador de Palpites</Title>
              <div style={{ color: "#381f12", fontSize: 14, marginTop: 2 }}>
                Mega-Sena 2025
              </div>
            </div>
          </Brand>

          <Nav>
            <NavLink to="/" $active={loc.pathname === "/"}>
              Início
            </NavLink>
            <NavLink to="/palpite" $active={loc.pathname === "/palpite"}>
              Palpite
            </NavLink>
            <NavLink to="/historico" $active={loc.pathname === "/historico"}>
              Histórico
            </NavLink>
          </Nav>
        </Header>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palpite" element={<Palpite />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </div>
      </Shell>
    </Page>
  );
}
