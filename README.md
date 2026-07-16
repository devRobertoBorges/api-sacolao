# 🥦 API Sacolão

API REST desenvolvida com o objetivo de **estudo e aprimoramento dos fundamentos de desenvolvimento Back-end**.

Este projeto tem como finalidade praticar e solidificar conceitos importantes na construção de uma API utilizando **Node.js, Express e TypeScript**, aplicando uma organização de código baseada em separação de responsabilidades.

---

## 🚀 Objetivo do Projeto

O objetivo desta API é simular o gerenciamento de um sacolão, permitindo futuramente realizar operações como:

- Cadastro de produtos;
- Consulta de produtos;
- Atualização de informações;
- Remoção de produtos;
- Controle de estoque;
- Gerenciamento de dados através de uma API REST.

Além disso, o projeto serve como prática para evoluir conhecimentos em arquitetura de aplicações Back-end e boas práticas de desenvolvimento.

---

## 🛠️ Tecnologias utilizadas

- **Node.js** - Ambiente de execução JavaScript.
- **TypeScript** - Superset do JavaScript com tipagem estática.
- **Express** - Framework utilizado para criação da API REST.
- **tsx** - Ferramenta para execução de arquivos TypeScript durante o desenvolvimento.
- **Git e GitHub** - Controle de versão e gerenciamento do código.

---

## 📁 Estrutura do projeto

```
api-sacolao/
│
├── src/
│   │
│   ├── server.ts
│   ├── app.ts
│   └── routes.ts
│
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## 🏗️ Arquitetura inicial

O projeto utiliza uma separação de responsabilidades para manter o código organizado e facilitar sua evolução.

### 📌 server.ts

Responsável pelo ponto de entrada da aplicação.

Funções:

- Inicializar o servidor HTTP;
- Definir a porta da aplicação;
- Executar a aplicação Express configurada.

---

### 📌 app.ts

Responsável pela configuração da aplicação Express.

Responsabilidades:

- Criar a instância do Express;
- Configurar middlewares;
- Registrar as rotas da API.

---

### 📌 routes.ts

Responsável pelo gerenciamento das rotas da aplicação.

Responsabilidades:

- Definir os endpoints disponíveis;
- Encaminhar as requisições para os respectivos controllers.

---

## ⚙️ Como executar o projeto

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/api-sacolao.git
```

### Acesse a pasta do projeto

```bash
cd api-sacolao
```

### Instale as dependências

```bash
npm install
```

### Execute o projeto em modo desenvolvimento

```bash
npm run dev
```

A API estará disponível em:

```
http://localhost:3000
```

---

## 🔐 Variáveis de ambiente

O projeto utiliza variáveis de ambiente para armazenar configurações sensíveis.

Crie um arquivo:

```
.env
```

Exemplo:

```env
PORT=3000
```

O arquivo `.env` não deve ser enviado para o GitHub.

---

## 📌 Próximas implementações

- [ ] Criar estrutura de Controllers;
- [ ] Criar camada Services;
- [ ] Criar camada Repository;
- [ ] Implementar banco de dados;
- [ ] Criar CRUD de produtos;
- [ ] Implementar validações;
- [ ] Criar tratamento global de erros;
- [ ] Documentar API utilizando Swagger;
- [ ] Criar testes automatizados.

---

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto serão aplicados conceitos como:

- Desenvolvimento de APIs REST;
- Arquitetura Back-end;
- Separação de responsabilidades;
- TypeScript aplicado ao Node.js;
- Organização de projetos;
- Boas práticas de programação;
- Controle de versão com Git.

---

## 👨‍💻 Autor

Desenvolvido por **Roberto Borges** como projeto de estudo e evolução na área de desenvolvimento Back-end.