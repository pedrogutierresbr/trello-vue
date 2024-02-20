# Projeto

Criar uma ferramenta similar ao Trello, que tenha um quadro com colunas e cartões, permitindo que esses cartões tenham estimativa, com isso podendo calcular a estimativa tanto das colunas quanto do quadro todo e também um frontend que permita utilizar drag n drop, mudar a ordem das colunas, dos cartões, inserir, editar e deletar

rodar aplicação no main
// npx nodemon src/main.ts

criar banco (ou restaurar ao estado inicial)
// psql -d trello -f create.sql
// pgAdmin

rodar testes
// npx jest


Para rodar em sequência, em série, não em paralelo --> teste fica lento
// npx jest --runInBand 

