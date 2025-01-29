show databases;

use mysql;

show tables;

select user, host from user;

create user if not exists UserServiceJan2025 identified by 'UserService@1234';

drop user UserServiceJan2025;

create user if not exists user_service_jan_25@localhost identified by 'UserService@1234';

select user, host from user;

# drop user user_service_jan_25@localhost;

create database if not exists user_service_jan_25;

show databases;

grant all privileges on user_service_jan_25.* to user_service_jan_25@localhost;

flush privileges;

