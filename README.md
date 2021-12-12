# prog-bolsas-api

Uma API de teste para os participantes do Programa de Bolsas na Compass.uol.
Criada com o intuito de possibilitar a prática com verbos HTTP emitidos de aplicações de Front-end.

## Links importantes:

-   [Aplicação no Heroku](https://prog-bolsas-api.herokuapp.com);
-   [Repositório do Github](https://github.com/leostacowski/prog-bolsas-api).

## Verbos Disponíveis:

-   `GET`;
-   `POST`;
-   `PATCH`;
-   `PUT`;
-   `DELETE`.

## Usando o verbo **GET**:

`GET https://prog-bolsas-api.herokuapp.com/`

> Retorna a documentação das rotas da prog-bolsas-api.

## Usando o verbo **POST**

`POST https://prog-bolsas-api.herokuapp.com/`

> Deve receber um _payload_ com dados do tipo _application/json_, retornando um response indicando o sucesso da transação.

#### Exemplo de payload no request:

    {
      "valor": "valor"
    }

#### Exemplo de payload no response:

    {
      "httpVerb": "POST",
      "success": true,
      "performedAt": "Fri Dec 10 2021 19:27:10 GMT-0300 (GMT-03:00)",
      "data": {
        "valor": "valor"
      }
    }

## Usando o verbo **PATCH**

`PATCH https://prog-bolsas-api.herokuapp.com/`

> Deve receber um _payload_ com dados do tipo _application/json_, retornando um response indicando o sucesso da transação.

#### Exemplo de payload no request:

    {
      "valor": "valor"
    }

#### Exemplo de payload no response:

    {
      "httpVerb": "PATCH",
      "success": true,
      "performedAt": "Fri Dec 10 2021 19:27:10 GMT-0300 (GMT-03:00)",
      "data": {
        "valor": "valor"
      }
    }

## Usando o verbo **PUT**

`PUT https://prog-bolsas-api.herokuapp.com/`

> Deve receber um _payload_ com dados do tipo _application/json_, retornando um response indicando o sucesso da transação.

#### Exemplo de payload no request:

    {
      "valor": "valor"
    }

#### Exemplo de payload no response:

    {
      "httpVerb": "PUT",
      "success": true,
      "performedAt": "Fri Dec 10 2021 19:27:10 GMT-0300 (GMT-03:00)",
      "data": {
        "valor": "valor"
      }
    }

## Usando o verbo **DELETE**

`DELETE https://prog-bolsas-api.herokuapp.com/`

> Deve receber um _payload_ com dados do tipo _application/json_, retornando um response indicando o sucesso da transação.

#### Exemplo de payload no request:

    {
      "valor": "valor"
    }

#### Exemplo de payload no response:

    {
      "httpVerb": "DELETE",
      "success": true,
      "performedAt": "Fri Dec 10 2021 19:27:10 GMT-0300 (GMT-03:00)",
      "data": {
        "valor": "valor"
      }
    }
