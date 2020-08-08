drop schema if exists swingstate_state_service cascade;

create schema swingstate_state_service;
set schema 'swingstate_state_service';

create table states (
	"state_id" serial primary key,
	"state_name" text not null unique,
	"democratic_candidate" text not null,
	"republican_candidate" text not null,
	"registration_link" text not null,
	"voting_location" text,
	"latitude" numeric(10,7) not null,
	"longitude" numeric(10,7) not null,
	"state_image" text
);

insert into states ("state_name", "democratic_candidate", "republican_candidate", "registration_link", "voting_location", "latitude", "longitude", "state_image")
	values ('Alabama', 'Doug Jones', 'Tommy Tuberville', 'https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote', '600 Dexter Avenue, Montgomery, AL 36104', 32.3774, -86.3005, 'https://img2.pngio.com/alabama-outline-png-graphic-free-alabama-outline-png-free-alabama-state-png-820_673.png'),
			('Arizona', 'Mark Kelly', 'Martha McSally', 'https://azsos.gov/elections/voting-election/register-vote-or-update-your-current-voter-information', '1700 W Washington St, Phoenix, AZ 85007', 33.4481, -112.0971, 'http://lsquaredmath.us/classes/sum2020/images/arizona.jpg'),
			('Colorado', 'John Hickenlooper', 'Corey Gardner', 'https://www.vote.org/register-to-vote/colorado/?gclid=Cj0KCQjwyur0BRDcARIsAEt86ICGJciURTJTKsqa-rRzlH-3J9VagjKS48d0ti2Fc_hCShv3sdsQDhwaApTmEALw_wcB', '200 E Colfax Ave, Denver, CO 80203', 39.7393, -104.9848, 'https://i.pinimg.com/originals/e4/5d/fb/e45dfb8084db55834c90dad3b44a24f1.png'),
			('Georgia', 'Jon Ossoff', 'David Perdue', 'https://sos.ga.gov/index.php/Elections/register_to_vote', '206 Washington St SW, Atlanta, GA 30334', 33.7488, -84.3881, 'http://lsquaredmath.us/classes/sum2020/images/georgia400_400.png'),
			('Iowa', 'Theresa Greenfield', 'Joni Ernst', 'https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2fVoterRegistration', '1007 E Grand Ave, Des Moines, IA 50319', 41.5912, -93.6036, 'http://lsquaredmath.us/classes/sum2020/images/iowa400_400.png'),
			('Kansas', 'Barbara Bollier', 'Lance Berland', 'http://www.voteks.org/before-you-vote/how-do-i-register.html.aspx', 'SW 8th & SW Van Buren, Topeka, KS 66612', 39.0482, -95.6781, 'https://i.pinimg.com/originals/8a/64/66/8a6466f7e8755ae9fc7debdc17771e3c.png'),
			('Maine', 'Sarah Gideon', 'Susan Collins', 'https://www.maine.gov/sos/cec/elec/voter-info/votreg.html', 'Maine State House, Augusta, ME 04330', 44.3072, -69.7818, 'http://lsquaredmath.us/classes/sum2020/images/maine400_400.png'),
			('Michigan', 'Gary Peters', 'Jonathan James', 'https://mvic.sos.state.mi.us/RegisterVoter', '100 N Capitol Ave, Lansing, MI 48933', 42.7336, -84.5554, 'https://media.discordapp.net/attachments/438959227302576131/735002326380576849/6902204.png'),
			('Montana', 'Steve Bullock', 'Steve Daines', 'https://sosmt.gov/elections/vote/', '1301 East Sixth Avenue, Helena, MT 59601', 46.5856, -112.0178, 'http://lsquaredmath.us/classes/sum2020/images/montana.jpg'),
			('North Carolina', 'Cal Cunningham', 'Thom Tillis', 'https://www.ncsbe.gov/Voters/Registering-to-Vote', '1 E Edenton St, Raleigh, NC 27601', 35.7804, -78.6391, 'https://media.discordapp.net/attachments/438959227302576131/735001470612668486/snapshot-nc.png');

select * from states;

create table polls(
	poll_id serial primary key,
	poll_name text not null,
	poll_date timestamp default now(),
	democratic_percent int not null,
	republican_percent int not null,
	state_id int references states ("state_id"),
	margin int not null
);

insert into polls(poll_name, poll_date, democratic_percent, republican_percent, state_id, margin)
	values ('YouGov', now(), 51, 40, 1, 51-40),
			('Public Policy Polling', now(), 47, 39, 2, 47-39),
			('YouGov', now(), 46, 42, 3, 46-42),
			('Public Policy Polling', now(), 46, 42, 4, 46-42),
			('East Carolina University', now(), 41, 41, 5, 0),
			('GQR Research', now(), 49, 47, 6, 2),
			('Public Policy Polling', now(), 46, 44, 7, 2),
			('Public Policy Polling', now(), 20, 21, 8, -1),
			('Fox News', now(), 42, 45, 9, -3),
			('Auburn University', now(), 36, 44, 10, -8);
		
select * from polls;
