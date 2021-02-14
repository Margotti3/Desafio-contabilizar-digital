# Desafio-contabilizar-digital

## Como testar

  Para testar o projeto, além de clonar o diretório, é necessário que seja armazenada na pasta adequada do seu localhost para que tenha o devido acesso ao banco de dados.
A conexão com o banco de dados está sendo feita de forma padrão ao utilizado com o XAMPP, porém pode ser facilmente modificada nos arquivos de diretório server-desafio/rc/atabase/onnection.ts e server-desafio/nexfile.ts.
  O banco de dados utilizado foi MySQL e é preciso para que funcione perfeitamente que você crir um banco de dados com o nome de "desafio". As tabelas e dados necessários serão executados por meio de linha de comando.
  
### Linhas de comando para as devidas instalações
  
#### Instalação de dependências
  De início é necessário que seja instalado todas as dependências do projeto, para isso será necessário executar a seguinte linha de comando nas pastas "server-desafio" e "web-desafio"
```
npm i
```

#### Formando o banco de dados

  Os próximos comandos deveram ser executados dentro da pasta "server-deafio". Esses comandos irão formar o banco de dados com as tabelas necessárias e irá adicionar o dados prévios necessários. 
 ```
npm run knex:migrate
npm run knex:seed
```

#### Executando o projeto
  E por fim, para executar o projeto e ver como ficou é necessário que você inicialize seu servidor de local de banco de dados, no meu caso inicializar o MySQL no XAMPP, e executar os seguintes comandos, não se preocupe em esperar o processar terminar pois ele só vai acabar quando vc pedir:

Na pasta "server-desafio"
```
npm run dev
```

e na pasta "web-desafio"
```
npm start
```
