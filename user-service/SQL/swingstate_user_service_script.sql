drop schema if exists swingstate_user_service cascade;
create schema swingstate_user_service;
set schema 'swingstate_user_service';

create table users(
	"user_id" serial primary key,
	"username" text unique not null,
	"password" text not null,
	"email" text not null,
	"home_state" text,
	"user_image" text,
	"role" text
);

insert into users ("username","password","email","home_state","user_image","role")
     values ('Alia','password','alia@mail@mail.com', 'Texas','http://dummyimage.com/241x101.jpg/dddddd/000000', 'Admin'),
	        ('Emma','password','emma@mail@mail.com', 'New York','http://dummyimage.com/241x101.jpg/dddddd/000000', 'Admin'),
			('Tanique','password','tanique@mail.com', 'Chicago','http://dummyimage.com/154x146.png/5fa2dd/ffffff', 'Admin'),
			('Cecilia','password','cecilia@mail.com', 'Ohio','http://dummyimage.com/154x146.png/5fa2dd/ffffff', 'Admin'),
			('Laura','password','laura@mail.com', 'Florida','http://dummyimage.com/154x146.png/5fa2dd/ffffff', 'Admin'),
			('zkenford5', 'iYkNkvw', 'ttremmel5@google.ca', 'New Jersey', 'http://dummyimage.com/130x176.bmp/dddddd/000000', 'User'),
            ('aparradine6', 'wuc5DB', 'sgermann6@baidu.com', 'California', 'http://dummyimage.com/156x247.png/cc0000/ffffff', 'User'),
            ('bkardos7', 'lQLYKuOqE', 'nsante7@ocn.ne.jp', 'Oregon', 'http://dummyimage.com/246x147.bmp/dddddd/000000', 'User'),
            ('jjesson8', 'zIovBsrOYKJ', 'whaverson8@ameblo.jp', 'Virginia', 'http://dummyimage.com/112x105.png/dddddd/000000', 'User'),
            ('pmolfino9', 'HWkWt4', 'gcolafate9@usgs.gov', 'Vermont', 'http://dummyimage.com/122x236.png/dddddd/000000', 'User');
		
select * from users;

create table user_state_bridge(
	"user_id" int references users ("user_id"),
	"state_id" int references swingstate_state_service.states ("state_id"),
	"update_frequency" int not null,
	"polling_threshold" int not null
);

insert into user_state_bridge ("user_id", "state_id", "update_frequency", "polling_threshold")
	values (1, 1, 7, 50),
			(2, 2, 7, 25),
			(3, 3, 7, 75),
			(4, 4,14,50),
			(5, 5, 14,25),
			(1, 6, 14,75),
			(2, 7, 21, 50),
			(3, 8, 21, 25),
			(4, 9, 21, 75),
			(5, 10, 3, 10);

select * from user_state_bridge;




