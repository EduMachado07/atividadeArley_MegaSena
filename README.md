Observações e alinhamento com o enunciado

A aplicação tem três rotas: / (abertura), /palpite (gera sugestão ao montar) e /historico (lista todas). Isso atende diretamente aos requisitos funcionais do enunciado. 

Atividade 2 - Routes

A comunicação entre componentes é feita via React Context (SuggestionsContext).

O useEffect em Palpite.tsx gera automaticamente uma sugestão ao carregar a página (requisito explícito).

Os estilos foram implementados com styled-components (CSS-in-JS).

O histórico é persistido em localStorage (assim o histórico sobrevive ao reload).

Gerei números únicos (6 números entre 1 e 60) e ordenados — comportamento típico de apostas da Mega-Sena.