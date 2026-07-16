// IMPORTA A FUNÇÃO RESPONSÁVEL POR CONFIGURAR A APLICAÇÃO EXPRESS
// Essa função está no arquivo app.ts.
// Ela cria o Express, adiciona middlewares e conecta as rotas.
import createApp from "./app";


// EXECUTA A FUNÇÃO createApp()
// O retorno dessa função é uma aplicação Express já configurada.
//
// Nesse momento o Express já possui:
// - express.json()
// - rotas da API
// - outras configurações definidas no app.ts
const app = createApp();

// DEFINE A PORTA ONDE O SERVIDOR VAI FUNCIONAR
// O valor vem da variável de ambiente PORT.
//
// Exemplo:
// PORT=3000
//
// Caso esteja usando dotenv, esse valor vem do arquivo .env.
const port = process.env.PORT;


// INICIA O SERVIDOR HTTP
// O método listen faz a aplicação começar a aceitar requisições.
//
// Depois que o servidor iniciar, executa a função de callback
// mostrando no terminal que a API está funcionando.
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});