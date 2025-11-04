import styled from "styled-components";

const PageContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.container};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.gap};
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageContainer>{children}</PageContainer>;
}
