create schema flamehazesociety;
set schema 'flamehazesociety';

drop table reimbursements;
drop table reimbursement_status;
drop table reimbursement_type;
drop table users;
drop table roles;

create table roles (
	"role_id" serial primary key,
	"role_name" text not null unique
);

create table users (
	"user_id" serial primary key,
	"username" text not null unique,
	"password" text not null,
	"first_name" text not null,
	"last_name" text not null,
	"email" text not null,
	"role" int references roles ("role_id") not null,
	"image" text
);

create table reimbursement_status (
	"status_id" serial primary key,
	"status_name" text not null unique
);

create table reimbursement_type (
	"type_id" serial primary key,
	"type_name" text not null unique
);

create table reimbursements (
	"reimbursement_id" serial primary key,
	"author" int references users ("user_id") not null,
	"amount" int not null,
  	"dateSubmitted" timestamp DEFAULT current_timestamp not null,
  	"dateResolved" timestamp default '2020-12-31 00:00:00' not null,
  	"description" text not null,
  	"resolver" int references users ("user_id"),
  	"status" int references reimbursement_status ("status_id") not null,
  	"type" int references reimbursement_type ("type_id"),
  	"email" text not null
);

insert into roles ("role_name")
	values	('Admin'),
			('Finance Manager'),
			('Employee');
		
insert into users ("username", "password", "first_name", "last_name", "email", "role")
	values	('FlameHazeShana', 'iloveyuji', 'Shana', 'Sakai', 'sakais@fhs.net', 1),
			('HumanTorchYuji', 'iloveshana', 'Yuji', 'Sakai', 'sakaiy@fhs.net', 2),
			('RibbonMasterMina', 'password', 'Wilhelmina', 'Carmel', 'carmelw@fhs.net', 3),
			('BombshellMargery', 'password', 'Margery', 'Daw', 'dawm@fhs.net', 3);
		
insert into reimbursement_status ("status_name")
	values	('Approved'),
			('Pending'),
			('Denied');
		
insert into reimbursement_type ("type_name")
	values	('Lodging'),
			('Food'),
			('Travel'),
			('Other');
		
insert into reimbursements ("author", "amount", "dateSubmitted", "description", "resolver", "status", "type", "email")
	values	(1, 5000, '2020-06-01 00:00:00', 'FHS Headquarters Renovations', 2, 1, 4, 'user@fhs.net'),
			(1, 1000, '2020-06-30 00:00:00', 'Anniversary Present for Yuji', null, 2, 4, 'user@fhs.net'),
			(2, 2000, '2020-06-15 00:00:00', 'Staff Holiday Party', 2, 1, 2, 'user@fhs.net'),
			(2, 1500, '2020-06-04 00:00:00', 'Anniversary Trip for Shana', null, 2, 3, 'user@fhs.net'),
			(3, 500, '2020-06-05 00:00:00', 'Flight to Client Site', 2, 1, 3, 'user@fhs.net'),
			(3, 200, '2020-06-22 00:00:00', 'Layover in Transit to Client', null, 2, 1, 'user@fhs.net'),
			(3, 50, '2020-06-07 00:00:00', 'Lunch With Client', 2, 1, 2, 'user@fhs.net'),
			(4, 1000, '2020-06-08 00:00:00', 'Lunch With Client', 2, 3, 2, 'user@fhs.net'),
			(4, 100, '2020-06-09 00:00:00', 'Hotel for a Night', 2, 3, 1, 'user@fhs.net'),
			(4, 3000, '2020-06-10 00:00:00', 'Weapon Upgrades', null, 2, 4, 'user@fhs.net');
		
select * from users natural join roles natural join reimbursements natural join reimbursement_status natural join reimbursement_type;
select * from users;
select * from reimbursements;
select * from reimbursement_status;
select * from reimbursement_type;
select * from roles;