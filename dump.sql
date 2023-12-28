--
-- PostgreSQL database dump
--

-- Dumped from database version 16rc1
-- Dumped by pg_dump version 16rc1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    "lastName" character varying(255),
    gender character varying(255),
    photo character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, name, "lastName", gender, photo, "createdAt", "updatedAt") FROM stdin;
1	email3@gmail.com	$2b$04$Q9qqWTGhl2e9EFVx6oJLe.HwXD7r.6mzRdWqhj7PieE5vUTDGHuIe	password	password	password	password	2023-12-28 17:07:19.302+03	2023-12-28 20:10:20.646+03
2	email1@gmail.com	$2b$04$MggPdJG99J4eqNqRPfbNw.RF0KQEqWSDUyvcqGGbWzNAVD2J1kBd.	login	\N	\N	\N	2023-12-28 20:22:40.964+03	2023-12-28 20:22:40.964+03
3	email2@gmail.com	$2b$04$O9T5Ho3mHS4Fcz4.FFROcu1RAzBtR2uody0hgk.yco2QmjbIvqtkK	login	\N	\N	\N	2023-12-28 20:22:51.462+03	2023-12-28 20:22:51.462+03
4	email4@gmail.com	$2b$04$Bcgel9XwzjVMD2Nj5zsWdeNldsiYKgl0JpnE6LqxoZotEhAbk2Q5y	login	\N	\N	\N	2023-12-28 20:22:55.867+03	2023-12-28 20:22:55.867+03
5	email5@gmail.com	$2b$04$5/Q4/0by/Nd5kVCVjpSexei5mPBsSHJvA9uCXqwm1oEBXMW/0ddZG	login	\N	\N	\N	2023-12-28 20:22:59.414+03	2023-12-28 20:22:59.414+03
6	email6@gmail.com	$2b$04$F3rcXbTYaPFEj67Nbo7Eu.RGg4MseBYo47yOMNphjCvWTVbNpx3Qq	login	\N	\N	\N	2023-12-28 20:23:03.49+03	2023-12-28 20:23:03.49+03
7	email7@gmail.com	$2b$04$fmLKNWKG.1ChzNlTMMqbYeDVV4b013z/m/i45NS01LfVkvn2w6hB6	login	\N	\N	\N	2023-12-28 20:23:07.614+03	2023-12-28 20:23:07.614+03
8	email8@gmail.com	$2b$04$lnlV2dVQep/8E1gvCK1OtOK1tjtG1ErzlyqNzBge2xO0Y9kiyD6JG	login	\N	\N	\N	2023-12-28 20:23:11.761+03	2023-12-28 20:23:11.761+03
9	email9@gmail.com	$2b$04$vC04jiw/AjibG0dRIyIdQONTbgEjnKBHN35NT78LVDCs/n7yP22kO	login	\N	\N	\N	2023-12-28 20:23:15.499+03	2023-12-28 20:23:15.499+03
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 9, true);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

