
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
     values ('1','Alia','password','alia@mail@mail.com', 'Texas','http://dummyimage.com/241x101.jpg/dddddd/000000'),
	        ('2','Emma','password','Emma@mail@mail.com', 'Newyork','http://dummyimage.com/241x101.jpg/dddddd/000000'),
			('3','Tanique','password','tanique@mail.com', 'Chicago','http://dummyimage.com/154x146.png/5fa2dd/ffffff'),
			('4','Cecilia','password','cecilia@mail.com', 'Ohio','http://dummyimage.com/154x146.png/5fa2dd/ffffff'),
			('5','Laura','password','laura@mail.com', 'Florida','http://dummyimage.com/154x146.png/5fa2dd/ffffff'),
			('6', 'zkenford5', 'iYkNkvw', 'ttremmel5@google.ca', 'New York', 'http://dummyimage.com/130x176.bmp/dddddd/000000'),
            ('7', 'aparradine6', 'wuc5DB', 'sgermann6@baidu.com', 'California', 'http://dummyimage.com/156x247.png/cc0000/ffffff'),
            ('8', 'bkardos7', 'lQLYKuOqE', 'nsante7@ocn.ne.jp', 'California', 'http://dummyimage.com/246x147.bmp/dddddd/000000'),
            ('9', 'jjesson8', 'zIovBsrOYKJ', 'whaverson8@ameblo.jp', 'California', 'http://dummyimage.com/112x105.png/dddddd/000000'),
            ('10', 'pmolfino9', 'HWkWt4', 'gcolafate9@usgs.gov', 'California', 'http://dummyimage.com/122x236.png/dddddd/000000');
            
			 

