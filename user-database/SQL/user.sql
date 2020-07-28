
create table users(
"user_ID" int primary key,
"Username" text unique not null,
"Password"  text not null,
"Email" text not null,
"homeState" text not null,
"picturePath" text
);

select * from users;

insert into users("user_ID","Username","Password","Email","homeState","picturePath")
     values ('1','Alia','password','alia@mail@mail.com', 'Texas',''),
	        ('2','Emma','password','Emma@mail@mail.com', 'Newyork',''),
			('3','Tanique','password','tanique@mail.com', 'Chicago',''),
			('4','Cecilia','password','cecilia@mail.com', 'Ohio',''),
			('5','Laura','password','laura@mail.com', 'Florida','');
			 
