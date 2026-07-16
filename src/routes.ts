import { Router } from "express";

// CRIA UM SISTEMA DE ROTAS DO EXPRESS
// O Router permite organizar as rotas da aplicação
// separando elas do arquivo principal (app.ts/server.ts).
const router = Router();

// DEFINE UMA ROTA GET DE TESTE
// Quando o cliente acessar:
//
// GET /teste
//
// essa função será executada.
router.get('/teste', (req,res) => {

    // ENVIA UMA RESPOSTA EM FORMATO JSON
    // O Express converte esse objeto JavaScript para JSON
    // e envia para quem fez a requisição.
    res.json({
        mensagem: "Routes funcionando"
    });
});

// EXPORTA O ROUTER PARA SER UTILIZADO NO app.ts
// O app.ts importa esse arquivo e conecta as rotas através:
//
// app.use('/api', router)
//
// Então essa rota ficará:
// GET /api/teste
export default router;