export default {
  'prog-bolsas-api':
    'Uma API de teste para os participantes do Programa de Bolsas na Compass.uol',
  'Verbos HTTP disponíveis': ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  Rotas: [
    {
      'GET: /': {
        Descrição: 'Retorna a documentação das rotas da prog-bolsas-api',
      },
      'POST: /': {
        Descrição:
          "Recebe um payload com dados do tipo 'application/json', e retorna um indicativo de sucesso da transação.",
        'Exemplo de payload': {
          valor: 'valor',
        },
      },
    },
  ],
}
