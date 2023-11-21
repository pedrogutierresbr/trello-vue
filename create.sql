drop table pedro.card;
drop table pedro.column;
drop table pedro.board;

create table pedro.board (
    id_board serial primary key,
    name text
);

create table pedro.column (
    id_column serial primary key,
    id_board integer references pedro.board (id_board),
    name text,
    has_estimative boolean
);

create table pedro.card (
    id_card serial primary key,
    id_column integer references pedro.column (id_column),
    title text,
    estimative integer
);



