create table users(
"user_ID" int primary key,
"Username" text unique not null,
"Password"  text not null,
"Email" text not null,
"homeState" text not null,
"picturePath" text
);
