drop table if exists pedro.card;
drop table if exists pedro.column;
drop table if exists pedro.board;

create table pedro.board (
    id_board serial primary key,
    name text
);

create table pedro.column (
    id_column serial primary key,
    id_board integer references pedro.board (id_board),
    name text,
    has_estimative boolean,
    index integer
);

create table pedro.card (
    id_card serial primary key,
    id_column integer references pedro.column (id_column),
    title text,
    estimative integer,
    index integer
);

insert into pedro.board (name) values ('Projeto 1');
insert into pedro.column (id_board, name, has_estimative) values (1, 'Coluna A', true);
insert into pedro.column (id_board, name, has_estimative) values (1, 'Coluna B', true);
insert into pedro.column (id_board, name, has_estimative) values (1, 'Coluna C', true);
insert into pedro.card (id_column, title, estimative) values (1, 'Atividade 1', 3);
insert into pedro.card (id_column, title, estimative) values (1, 'Atividade 2', 2);
insert into pedro.card (id_column, title, estimative) values (1, 'Atividade 3', 1);
