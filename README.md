# Projeto de Automção com WebdriverIO

Este projeto realiza testes automatizados usando **WebdriverIO** com integração ao **Allure Reports**. Ele também está configurado para rodar testes no modo **headless** e utiliza **GitHub Actions** para integração contínua (CI). O foco deste projeto é validar funcionalidades da aplicação **Automation Exercise** com organização e clareza.

## Requisitos

Certifique-se de que você possui os seguintes pré-requisitos instalados:

- [Node.js](https://nodejs.org/) (v20.x)
- [npm](https://www.npmjs.com/)
- **Git** para clonar o repositório
- [Allure CLI](https://docs.qameta.io/allure/) para gerar e visualizar os relatórios
- Navegador **Google Chrome** (opcional, para executar testes no modo GUI)

## Instalação

Siga os passos abaixo para configurar o projeto:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/qa.automationexercise-web.webdriverio.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd qa.automationexercise-web.webdriverio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

### Modo Headless
O modo **headless** já está configurado por padrão no `wdio.config.ts`. Para executar testes com interface gráfica, basta rodar os testes no modo GUI usando o script correspondente.

### GitHub Actions
O projeto está configurado para integração contínua com **GitHub Actions**, usando o arquivo `.github/workflows/ci.yml`. Ele executa os testes automaticamente a cada **push** ou **pull request** na branch `main`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
.
├── .github/
│   └── workflows/
│       └── ci.yml               # Configuração do GitHub Actions
├── allure-report/               # Relatórios gerados pelo Allure (gerado automaticamente)
├── allure-results/              # Resultados dos testes para o Allure (gerado automaticamente)
├── node_modules/                # Dependências do projeto
├── src/
│   ├── pageObj/                 # Page Objects organizados
│   │   ├── cartPage.ts          # Métodos relacionados ao carrinho
│   │   ├── deleteUserPage.ts    # Métodos para deletar usuários
│   │   ├── productsPage.ts      # Métodos para ações de produtos
│   │   └── registerUserPage.ts  # Métodos para cadastro de usuários
│   ├── specs/                   # Testes automatizados organizados
│   │   ├── addProductToCart.spec.ts
│   │   ├── cart.spec.ts
│   │   ├── createUser.spec.ts
│   │   ├── removeProductFromCart.spec.ts
│   │   └── searchProduct.spec.ts
│   └── support/
│       └── utilities.ts         # Utilitários e helpers
├── .gitignore                   # Ignora arquivos desnecessários no Git
├── package.json                 # Configurações de dependências e scripts
├── tsconfig.json                # Configurações do TypeScript
├── wdio.config.ts               # Configurações do WebdriverIO
└── README.md                    # Documentação do projeto
```

## Executando os Testes

### Modo Headless
Para executar os testes no modo headless:
```bash
npm run test:headless
```

### Modo GUI
Para executar os testes com interface gráfica do navegador:
```bash
npm run test:gui
```

### Gerar e Visualizar Relatórios Allure
1. Gere o relatório:
   ```bash
   npm run allure:generate
   ```
2. Abra o relatório no navegador:
   ```bash
   npm run allure:open
   ```

### Script Completo
Execute os testes no modo headless e gere o relatório Allure em um único comando:
```bash
npm run test:allure
```

## Pipeline com GitHub Actions

Os testes são executados automaticamente via **GitHub Actions** para cada **push** ou **pull request** na branch `main`. Após a execução, os relatórios Allure são disponibilizados como artefatos para download.

1. Acesse a aba **Actions** no repositório do GitHub.
2. Clique no job mais recente.
3. Baixe o relatório Allure gerado como artefato.

## Casos de Teste Automatizados

Os seguintes casos de teste foram automatizados e organizados como suites:
- **Cadastro de Usuário (Register User)**
- **Busca de Produtos (Search Product)**
- **Validação de Quantidade no Carrinho (Verify Product Quantity in Cart)**
- **Adição de Produtos ao Carrinho (Add Products to Cart)**
- **Remoção de Produtos do Carrinho (Remove Products from Cart)**

## Scripts Disponíveis

No arquivo `package.json`, estão configurados os seguintes scripts:
- **`npm run test:gui`**: Executa os testes com interface gráfica.
- **`npm run test:headless`**: Executa os testes no modo headless.
- **`npm run allure:generate`**: Gera o relatório Allure.
- **`npm run allure:open`**: Abre o relatório Allure.
- **`npm run test:allure`**: Executa os testes no modo headless, gera e abre o relatório Allure.