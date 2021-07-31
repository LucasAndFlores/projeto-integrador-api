# projeto-integrador-aplication

## Para executar o banco e as tabelas corretamentes, faça: 
1 - Inicie o projeto com npm run dev. <br>
2 - Execute o comando npx sequelize-cli db:create <br>
3 - Execute o comando npx sequelize-cli db:migrate <br>

Dessa forma, ele vai automaticamente gerar as tabelas com todas as configs e campos necessário. <br>
## Caso precise criar uma tabela e configurar-lá (eu estou falando o que aconteceu comigo, então pode ser diferente pra você), faça: <br>
1 - Execute o comando npx sequelize-cli model:generate (ele vai gerar tanto a migration quanto a model). Ele precisa do nome (--name) e dos campos (--attributes), recomendo passar todos que você já vai trabalhar, para dar menos trabalho ainda. <br>
2 - Mexa somente no arquivo da migration, passe todas as especificações (not null, fk, tipo de dados e etc). <br>
3 - Rode o comando npx sequelize-cli db:migrate <br> 

## Caso precise alterar uma tabela: 
1 - Execute o comando npx sequelize-cli migration:generate --nomemigration <br>
2 - Faça as modificações que precisar (adicione colunas, mude tipos de dados e etc). <br>
3 - Rode o comando npx sequelize-cli db:migrate <br>
