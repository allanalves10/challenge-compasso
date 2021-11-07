# Tecnologias utilizadas
Node, Express, React, React Router Dom, Context Api, Hooks, Axios, Styled Components, Toastify.

## Para Executar o projeto
É necessário executar o script de dev, pois é rodado dois scripts simultaneamente, o 'server' é responsável por executar o serviço de backend na porta 5000 responsável por pegar o token de autenticação do github, isso se fez necessário devido o bloqueio do cors em relação a tentar pegar o token no lado do cliente, o start é responsável por inicializar a aplicação por padrão na porta 3000. A estrutura de pasta tenho utilizado como base inserir todos na pasta src e organizar cada pasta com a sua devida responsabilidade, a fim de entender melhor o código e o que foi proposto a ser feito.

## Variáveis de Ambiente
Essas são as variáveis que usei no decorrer do projeto, caso queira usar as mesmas que utilizei: 
REACT_APP_CLIENT_ID=053dd4d6d217b24d765e
REACT_APP_CLIENT_SECRET=194d5d383dea5b9407ec0aebe3449f36e0c6a529

## O que foi feito?
Configuração do backend para pegar o token e autenticar as rotas de consumo dos endpoints; Menu para o login do usuário através da sua conta do GitHub, após autenticado listagem dos seus dados(imagem, nome e quantidade de repositórios públicos do mesmo), Possibilidade de pesquisar por um novo usuário, visualizar quais são os repositórios do usuário e os repositórios favoritados por ele.

## Pontos a serem melhorados?
Separar em componentes os elementos que compõem a tela principalmente de listagem do usuário.

## Obrigado pelo processo, por participar desta oportunidade e até logo!