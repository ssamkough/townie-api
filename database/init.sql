

CREATE TABLE IF NOT EXISTS "discussion_comment"
(
 "id"                 serial NOT NULL,
 "discussion_post_id" int NOT NULL,
 "user_id"            int NOT NULL,
 "content"            text NOT NULL,
 "created_at"         timestamp NOT NULL,
 "updated_at"         timestamp NOT NULL,
 CONSTRAINT "PK_discussion_comment" PRIMARY KEY ( "id" )
);


CREATE TABLE IF NOT EXISTS "discussion_post"
(
 "id"         serial NOT NULL,
 "user_id"    int NOT NULL,
 "title"      varchar(50) NOT NULL,
 "content"    text NOT NULL,
 "created_at" timestamp NOT NULL,
 "updated_at" timestamp NOT NULL,
 CONSTRAINT "PK_discussion_post" PRIMARY KEY ( "id" )
);

CREATE TABLE IF NOT EXISTS "newspost"
(
 "id"         serial NOT NULL,
 "author"     int NOT NULL,
 "title"      varchar(50) NOT NULL,
 "content"    text NOT NULL,
 "created_at" timestamp NOT NULL,
 "updated_at" timestamp NOT NULL,
 CONSTRAINT "PK_newspost" PRIMARY KEY ( "id" )
);

CREATE TABLE IF NOT EXISTS "newspost_tag"
(
 "id"         serial NOT NULL,
 "tag_id"     int NOT NULL,
 "post_id"    int NOT NULL,
 "created_at" timestamp NOT NULL,
 "updated_at" timestamp NOT NULL,
 CONSTRAINT "PK_newspost_tag" PRIMARY KEY ( "id" )
);

CREATE TABLE IF NOT EXISTS "states"
(
 "id"         serial NOT NULL,
 "name"       varchar(50) NOT NULL,
 "created_at" timestamp NOT NULL,
 "updated_at" timestamp NOT NULL,
 CONSTRAINT "PK_states" PRIMARY KEY ( "id" )
);

CREATE TABLE IF NOT EXISTS "tags"
(
 "id"         serial NOT NULL,
 "name"       varchar(50) NOT NULL,
 "created_at" timestamp NOT NULL,
 "updated_at" timestamp NOT NULL,
 CONSTRAINT "PK_tags" PRIMARY KEY ( "id" )
);

CREATE TABLE IF NOT EXISTS "towns"
(
 "id"         serial NOT NULL,
 "state_id"   int NOT NULL,
 "name"       varchar(50) NOT NULL,
 "zip_code"   int NOT NULL,
 "created_at" timestamp NOT NULL,
 "updated_at" timestamp NOT NULL,
 CONSTRAINT "PK_towns" PRIMARY KEY ( "id" )
);

CREATE TABLE IF NOT EXISTS "user_role"
(
 "id"         serial NOT NULL,
 "title"      varchar(50) NOT NULL,
 "created_at" timestamp NOT NULL,
 "updated_at" timestamp NOT NULL,
 CONSTRAINT "PK_user_role" PRIMARY KEY ( "id" )
);


CREATE TABLE IF NOT EXISTS "users"
(
 "id"             serial NOT NULL,
 "user_role"      int NOT NULL,
 "town_id"        int NOT NULL,
 "email"          varchar(50) NOT NULL,
 "password"       varchar(255) NOT NULL,
 "license_number" varchar(50) NOT NULL,
 "first_name"     varchar(50) NOT NULL,
 "last_name"      varchar(50) NOT NULL,
 "date_of_birth"  timestamp NOT NULL,
 "address"        varchar(50) NOT NULL,
 "created_at"     timestamp NOT NULL,
 "updated_at"     timestamp NOT NULL,
 CONSTRAINT "PK_users" PRIMARY KEY ( "id" )
);
