import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
