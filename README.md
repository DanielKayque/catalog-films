# Catálogo de Filmes – TMDB Explorer 🎬

Aplicação Web (SPA) construída com React e Tailwind CSS para consumir a API do TheMovieDB (TMDB). O projeto exibe filmes em diferentes categorias (populares, em alta) e permite navegação detalhada para cada título. O design imita a interface de streaming da Disney, demonstrando fidelidade visual e aplicação de princípios de UI/UX.

## 🚀 Tecnologias Usadas
-Frameworks: React 19
-Build/Estilização: Vite, Tailwind CSS, PostCSS
-Roteamento: react-router-dom
-Rede: TMDB API (Consumo via fetch / async/await)
-Ferramentas: Variáveis de Ambiente (VITE_TMDB_TOKEN), ESLint

## 🧩 Funcionalidades
-Listagem de filmes por categorias (Populares, Em Cartaz, Em Alta).
-Navegação dinâmica para a página de detalhes de cada filme (/filme/:id).
-Exibição de informações detalhadas: sinopse, pontuação e imagens.
-Interface totalmente responsiva para desktop e mobile.

## 💡 Habilidades Aplicadas
-Integração de APIs REST: Consumo eficiente de múltiplos endpoints do TMDB e tratamento de respostas JSON.
-React Hooks Essenciais: Uso de useState e useEffect para controle do ciclo de vida da requisição e estado dos dados.
-Roteamento Dinâmico: Configuração de rotas e extração de parâmetros de URL (useParams) com react-router-dom.
-Arquitetura: Componentização da interface para alta reutilização (Home, Details, Header, Card de Filme).
-Segurança: Uso de Variáveis de Ambiente (VITE_TMDB_TOKEN) para gerenciar chaves secretas fora do código-fonte.
-UX: Implementação de carregamento condicional e fallback (tratamento de estados de loading e erro).

## 🔗 API utilizada
-O projeto utiliza a API pública do TheMovieDB (TMDB).

## 📸 Demonstração


## 📦 Deploy
https://danielkayque.github.io/catalog-films/

⚠️ Status do projeto
Projeto em desenvolvimento.

Repositório criado por Daniel Kayque.
