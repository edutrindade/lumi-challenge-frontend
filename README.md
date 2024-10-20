![img](https://uploads-ssl.webflow.com/62f9249c43126cafce10bc33/62ffcb77b4351b3d229aa6a9_logo-lumi-green.svg)

# Lumi Challenge Frontend

Este projeto é o frontend para o teste prático da **Lumi**, um sistema de processamento de faturas de energia elétrica da CEMIG (Companhia Energética de Minas Gerais). A aplicação web permite visualizar as faturas processadas, fornecendo uma interface intuitiva para interagir com os dados extraídos e armazenados pelo backend.

## Objetivos Gerais

* Fornecer uma interface amigável para visualização das faturas de energia.
* Permitir a interação do usuário com dados extraídos das faturas em formato PDF.
* Facilitar o acesso a documentos mensais relacionados às faturas.

## Funcionalidades

* Exibição das faturas processadas de forma clara e organizada.
* Visualização dos detalhes da fatura, incluindo informações do cliente e da instalação.
* Acesso a documentos mensais para download.
* Interação com a API para buscar e filtrar dados.

## Tecnologias Utilizadas

* **Next.js** : Framework React para construção de aplicações web escaláveis.
* **React** : Biblioteca JavaScript para construção de interfaces de usuário.
* **Tailwind CSS** : Framework CSS para estilização rápida e responsiva.
* **Radix UI** : Conjunto de componentes acessíveis e altamente personalizáveis.
* **Axios** : Biblioteca para fazer requisições HTTP.
* **React Query** : Gerenciamento de estado e cache de dados no React.
* **TypeScript** : Tipagem estática para maior segurança no código.
* **ESLint e Prettier** : Ferramentas para linting e formatação de código.

## Instalação

1. **Clone o repositório** :

```
git clone https://github.com/seu-usuario/lumi-challenge-frontend.git
cd lumi-challenge-frontend
```

2. **Instale as dependências** :
   Certifique-se de ter o Node.js instalado. Em seguida, execute:

```
npm install
```

3. **Configuração das variáveis de ambiente** :
   Organize o arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
NEXT_PUBLIC_API_URL="sua-url-da-api"
```

4. **Executando o projeto** :
   Para iniciar a aplicação em ambiente de desenvolvimento, utilize:

```
npm run dev
```

A aplicação será iniciada em modo de desenvolvimento e estará disponível em `http://localhost:3000`.

## Como Construir

Para compilar o projeto e gerar a versão de produção, utilize:

```
npm run build
```

## Linting

Para verificar problemas de formatação e código com **ESLint** :

```
npm run lint
```

## Estrutura da Aplicação

A aplicação é estruturada em componentes e páginas, permitindo uma navegação fluida e uma experiência de usuário otimizada.

### Estrutura de Páginas

**Dashboard** : Tela inicial da aplicação contendo 04 cards informativos e 03 gráficos. Os cards podem ser filtrados mês a mês.

![Lumi Challenge](https://iili.io/23srHps.png)

**Faturas** : Visualização dos detalhes de uma fatura específica, incluindo informações do cliente e da instalação. Possui versões diferentes para Desktop e Mobile, adaptando-se com responsividade seja em uma tabela ou vários cards. Pode ser filtrado por cliente.

![Lumi Invoices](https://iili.io/23sPcaS.png)

![Lumi Dashboard](https://iili.io/23sbtn9.png)     ![Lumi Mobile](https://iili.io/23sZ0hX.png)

    

## Sobre o Desenvolvedor

Este projeto foi desenvolvido por mim,  **Eduardo Trindade** . Sou desenvolvedor full stack com foco em React Native, ReactJs e Node.js. Estou sempre buscando entregar soluções eficientes e robustas. Caso tenha dúvidas ou sugestões sobre este projeto, fique à vontade para entrar em contato 🙂.

[www.edutrindade.com.br](https://www.edutrindade.com.br)
