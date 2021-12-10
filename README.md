# prog-bolsas-api

Uma API de teste para os participantes do Programa de Bolsas na Compass.uol.

## Verbos Disponíveis:

-   GET;
-   POST;
-   PATCH;
-   PUT;
-   DELETE.

## Rotas:

    GET /

> Retorna a documentação das rotas da prog-bolsas-api.

<br>

    POST /

> Recebe um _payload_ com dados do tipo _application/json_ e retorna um indicativo de sucesso da transação.

-   Exemplo de payload:

        {
        	"valor": "valor"
        }

-   Exemplo de resposta:

        {
        	"httpVerb": "POST",
        	"success": true,
        	"performedAt": "Fri Dec 10 2021 19:27:10 GMT-0300 (GMT-03:00)",
        	"data": {
        		"valor": "valor"
        	}
        }

<br>

    PATCH /

> Recebe um _payload_ com dados do tipo _application/json_ e retorna um indicativo de sucesso da transação.

-   Exemplo de payload:

        {
        	"valor": "valor"
        }

-   Exemplo de resposta:

        	{
        		"httpVerb": "PATCH",
        		"success": true,
        		"performedAt": "Fri Dec 10 2021 19:27:10 GMT-0300 (GMT-03:00)",
        		"data": {
        			"valor": "valor"
        		}
        	}

<br>

    PUT /

> Recebe um _payload_ com dados do tipo _application/json_ e retorna um indicativo de sucesso da transação.

-   Exemplo de payload:

        {
        	"valor": "valor"
        }

-   Exemplo de resposta:

        	{
        		"httpVerb": "PUT",
        		"success": true,
        		"performedAt": "Fri Dec 10 2021 19:27:10 GMT-0300 (GMT-03:00)",
        		"data": {
        			"valor": "valor"
        		}
        	}

<br>

    DELETE /

> Recebe um _payload_ com dados do tipo _application/json_ e retorna um indicativo de sucesso da transação.

-   Exemplo de payload:

        {
        	"valor": "valor"
        }

-   Exemplo de resposta:

        {
        	"httpVerb": "DELETE",
        	"success": true,
        	"performedAt": "Fri Dec 10 2021 19:27:10 GMT-0300 (GMT-03:00)",
        	"data": {
        		"valor": "valor"
        	}
        }
