
//IMPORTA O EXPRESS
import express from "express";


//IMPORTA O ROUTER DO ARQUIVO DO ROUTER
import router from "./routes";

// FUNÇÃO RESPONSÁVEL POR CONFIGURAR E MONTAR A APLICAÇÃO EXPRESS
// Ela cria a instância do Express, adiciona configurações,
// conecta as rotas e devolve a aplicação pronta para o servidor iniciar.
function createApp(){

    // CRIA UMA INSTÂNCIA DO EXPRESS
    // O objeto "app" possui todos os métodos do Express,
    // como rotas, middlewares e configurações da aplicação.
    const app = express();


    // MIDDLEWARE QUE PERMITE O EXPRESS INTERPRETAR JSON
    // Sem isso, quando uma requisição enviar um JSON no body,
    // o Express não conseguiria acessar os dados através de req.body.
    app.use(express.json());


    // REGISTRA AS ROTAS DA APLICAÇÃO
    // Todas as rotas criadas dentro do arquivo "routes.ts"
    // receberão o prefixo "/api".
    //
    // Exemplo:
    // routes.ts: router.get("/nome")
    //
    // URL final:
    // GET /api/nome
    app.use('/api', router);

    
    // ROTA DE TESTE
    // Usada para verificar se a API está funcionando.
    // Quando alguém acessar a raiz "/", essa mensagem será retornada.
    app.get("/", (req,res) => {
        res.send('API FUNCIONANDO');
    });


    // DEVOLVE A APLICAÇÃO CONFIGURADA
    // O server.ts receberá esse app e será responsável
    // apenas por iniciar a porta com app.listen().
    return app;
};

// EXPORTA A FUNÇÃO PARA PODER SER USADA PELO server.ts
export default createApp;

