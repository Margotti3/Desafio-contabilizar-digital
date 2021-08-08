# Desafio-contabilizar-digital

  O projeto realizado se trata de um plataforma para cadastro de clientes e pessoas relacionadas com a possibilidade de criar, editar e excluir os mesmos. A única função pedida não realizado é a de login com um email e senha.

## Como testar

  Para testar o projeto, além de clonar o diretório, é necessário que seja armazenada na pasta adequada do seu localhost para que tenha o devido acesso ao banco de dados.
A conexão com o banco de dados está sendo feita de forma padrão ao utilizado com o XAMPP, porém pode ser facilmente modificada nos arquivos de diretório server-desafio/src/database/connection.ts e server-desafio/knexfile.ts.
  O banco de dados utilizado foi MySQL e é preciso, para que funcione perfeitamente, que você crie um banco de dados com o nome de "desafio". As tabelas e dados necessários serão executados por meio de linha de comando.
  
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
  E por fim, para executar o projeto e ver como ficou é necessário que você inicialize seu servidor local de banco de dados, no meu caso inicializar o MySQL no XAMPP, e executar os seguintes comandos, não se preocupe em esperar o processar terminar pois ele só vai acabar quando você quiser:

Na pasta "server-desafio"
```
npm run dev
```

e na pasta "web-desafio"
```
npm start
```

para encerrar os processos basta dar um "ctrl + c"

### Telas

![image](https://user-images.githubusercontent.com/51883509/128617450-07be8ccc-3a3e-44a1-b548-c89ac82d5639.png)
![image](https://user-images.githubusercontent.com/51883509/128617463-25340bf7-566a-48bc-8cb3-a8f6a9f7fbdb.png)
![image](https://user-images.githubusercontent.com/51883509/128617470-f8cc5040-46dd-4dbe-baaf-2ace362be587.png)
![image](https://user-images.githubusercontent.com/51883509/128617479-a4f6e2fd-246b-4fc9-bbf9-57daf87bccbf.png)
