# SvelteKit Test App

Bem vindo! Esta é uma entediante aplicação de teste.

O que deverá ser feito: uma aplicação web que consulta a API gratuita em [agify.io](https://api.agify.io) e retorna o resultado. Esta API toma um nome próprio e devolve uma estimativa altamente precisa da idade de uma pessoa com o dado nome. Veja a [documentação da API](https://agify.io/documentation) para maiores detalhes. Você deverá construir basicamente um _front end_ diferente para esta simples API.

## Requisitos

- Deve haver um input de texto onde o usuário digita um nome.
- Ao digitar o nome, a consulta à API deve ser feita e o resultado exibido na tela:
	- O usuário não precisa apertar Enter ou pressionar nenhum botão: basta esperar depois que digitou para receber o resultado. (Dica: _debounce_ de 500-1000ms.)
- Você **deve** usar SvelteKit e Svelte 4 ou 5.
- Você **deve** usar a função `load()` do SvelteKit para requisitar a API. Pode ser um `load()` no servidor ou universal, tanto faz, contanto que a requisição aconteça num `load()`.
- Você **deve** garantir que a URL seja modificada com o nome digitado: por exemplo, usando uma _querystring_. Essa URL deve poder ser copiada e colada e refletir o mesmo resultado da chamada à API. Um exemplo de URL poderia ser `http://localhost:5173/?name=Jebediah`.
- Não consulte a API se o nome estiver vazio.
- Produza HTML 5 válido.
- Use sua criatividade no CSS (é só um input de texto e uma ou mais linhas de texto com o resultado, difícil estilizar muita coisa aqui, mas tente se distanciar da aparência padrão do navegador). Use **apenas CSS puro** feito por você: nada de LESS/SASS/Stylus/Tailwind/Bootstrap/Normalize.css e afins.
- Use Git.
- Não adicione nenhuma biblioteca como dependência, pois não é necessário; ou seja, mantenha o package.json como está, a não ser que deseje utilizar Typescript ou JS Doc e isso requeira alguma biblioteca adicional – nesse caso, tudo bem alterar o package.json.

## _Rate limit_

A API que sua aplicação deverá consultar possui um limite de 100 requisições por dia. Cuidado para não esgotar esse limite enquanto testa (ou terá que aguardar virar o dia)!

## Como enviar

A única forma aceita de envio do seu teste é hospedando seu código numa hospedagem Git e nos mandando o link para o seu repositório. Há várias alternativas: GitHub, GitLab, Bitbucket, Codeberg, Sourcehut etc.

## FAQ

- posso usar Typescript? pode (faça as modificações necessárias; nesse caso, é permitido alterar o package.json).
- posso usar JS Doc: pode (faça as modificações necessárias; nesse caso, é permitido alterar o package.json).
- posso usar fontes (typefaces) do Google Fonts? pode.
- devo colocar o CSS num arquivo separado ou junto dos componentes? tanto faz, a escolha é a seu critério, inclusive pode colocar parte num arquivo separado e parte nos componentes se quiser.
- tab ou espaços? os arquivos default do SvelteKit são indentandos com tab, mas nos arquivos feitos por você tanto faz.
- precisa se preocupar com tratamento de erros (404 e afins)? não; inclusive sua aplicação pode ignorar eventuais erros de _rate limit_ (_429 Too many requests_), como se nunca acontecessem.
- precisa lintar os arquivos ou aderir a algum padrão de código-fonte? não.
- precisa ter algum teste automatizado? não.
- precisa se preocupar com desempenho de carregamento da página? não.
- precisa se preocupar com localização ([https://agify.io/documentation#localization](https://agify.io/documentation#localization))? não.
