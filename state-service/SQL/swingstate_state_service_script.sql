drop schema if exists swingstate_state_service cascade;
create schema swingstate_state_service;
set schema 'swingstate_state_service';

create table states (
	"state_id" serial primary key,
	"stateName" text not null unique,
	"democratic_candidate" text not null,
	"republican_candidate" text not null,
	"registration_link" text not null,
	"voting_location" text,
	"stateImage" text
);

insert into states ("stateName", "democratic_candidate", "republican_candidate", "registration_link", "voting_location", "stateImage")
	values ('Alabama', 'Doug Jones', 'Tommy Tuberville', 'https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote', '600 Dexter Avenue, Montgomery, AL 36104', null),
			('Arizona', 'Mark Kelly', 'Martha McSally', 'https://azsos.gov/elections/voting-election/register-vote-or-update-your-current-voter-information', '1700 W Washington St, Phoenix, AZ 85007', null),
			('Colorado', 'John Hickenlooper', 'Corey Gardner', 'https://www.vote.org/register-to-vote/colorado/?gclid=Cj0KCQjwyur0BRDcARIsAEt86ICGJciURTJTKsqa-rRzlH-3J9VagjKS48d0ti2Fc_hCShv3sdsQDhwaApTmEALw_wcB', '200 E Colfax Ave, Denver, CO 80203', null),
			('Georgia', 'Jon Ossoff', 'David Perdue', 'https://sos.ga.gov/index.php/Elections/register_to_vote', '206 Washington St SW, Atlanta, GA 30334', null),
			('Iowa', 'Theresa Greenfield', 'Joni Ernst', 'https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2fVoterRegistration', '1007 E Grand Ave, Des Moines, IA 50319', null),
			('Kansas', 'Barbara Bollier', 'Lance Berland', 'http://www.voteks.org/before-you-vote/how-do-i-register.html.aspx', 'SW 8th & SW Van Buren, Topeka, KS 66612', null),
			('Maine', 'Sarah Gideon', 'Susan Collins', 'https://www.maine.gov/sos/cec/elec/voter-info/votreg.html', 'Maine State House, Augusta, ME 04330', null),
			('Michigan', 'Gary Peters', 'Jonathan James', 'https://mvic.sos.state.mi.us/RegisterVoter', '100 N Capitol Ave, Lansing, MI 48933', null),
			('Montana', 'Steve Bullock', 'Steve Daines', 'https://sosmt.gov/elections/vote/', '1301 East Sixth Avenue, Helena, MT 59601', null),
			('North Carolina', 'Cal Cunningham', 'Thom Tillis', 'https://www.ncsbe.gov/Voters/Registering-to-Vote', '1 E Edenton St, Raleigh, NC 27601', null);

select * from states;

create table polls(
	poll_id serial primary key,
	pollName text not null,
	pollDate timestamp default now(),
	democratic_percent int not null,
	republican_percent int not null,
	state_id int references states ("state_id"),
	margin int not null
);

insert into polls(pollName, pollDate, democratic_percent, republican_percent, state_id, margin)
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
