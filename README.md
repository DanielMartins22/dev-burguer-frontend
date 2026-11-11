# Dev Burguer — Front-end

Projeto de front-end de uma hamburgueria, desenvolvido com React. Atualmente inclui uma página inicial, um cardápio com filtro por categoria e telas de cadastro e login conectadas a uma API.

> **Status: em desenvolvimento.** O projeto ainda não está completo; a interface e as funcionalidades podem mudar. O cardápio e a autenticação dependem da API do Dev Burguer, mantida no repositório separado de back-end.

## Funcionalidades presentes até agora

- Página inicial com carrosséis de categorias e ofertas.
- Cardápio com listagem de produtos e filtro por categoria.
- Cadastro de usuário e login.
- Validação de formulários e notificações de sucesso e erro.
- Interface construída com componentes estilizados.

## Tecnologias

- React
- Vite
- JavaScript
- Styled Components
- React Router
- Axios
- React Hook Form e Yup

## Pré-requisitos

- Node.js 20.19 ou superior (ou 22.12 ou superior).
- pnpm.
- O repositório back-end do Dev Burguer em execução na URL configurada em `VITE_API_URL`.

> Este repositório contém somente o front-end. Inicie o back-end separadamente e configure o endereço da API no arquivo `.env` local.

## Como executar

Copie o arquivo de exemplo para criar sua configuração local:

```powershell
Copy-Item .env.example .env
```

Depois instale as dependências e inicie a aplicação:

```bash
pnpm install
pnpm dev
```

O Vite informará no terminal o endereço local da aplicação, normalmente `http://localhost:5173`.

O arquivo `.env` é ignorado pelo Git e não será enviado ao GitHub. O `.env.example` pode ser versionado para documentar a configuração necessária. Variáveis com prefixo `VITE_` ficam acessíveis no código do navegador; não coloque senhas ou outros segredos nelas.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento. |
| `pnpm build` | Gera a versão de produção em `dist/`. |
| `pnpm preview` | Executa uma prévia local da versão de produção. |
| `pnpm lint` | Analisa o código com ESLint. |

## Estrutura do projeto

```text
src/
├── assets/       # Imagens, ícones e logotipo
├── components/   # Componentes reutilizáveis
├── containers/   # Páginas da aplicação
├── routes/       # Rotas
├── services/     # Comunicação com a API
├── styles/       # Estilos globais
└── utils/        # Funções utilitárias
```

## Integração com o back-end

Este front-end se conecta à API do Dev Burguer, que está no repositório separado de back-end. A URL base é definida pela variável `VITE_API_URL`; a integração utiliza rotas para categorias, produtos, cadastro de usuários e sessões de login.
