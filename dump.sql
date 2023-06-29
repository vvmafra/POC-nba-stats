--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: stats; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.stats (
    id integer NOT NULL,
    player text NOT NULL,
    points integer NOT NULL,
    rebounds integer NOT NULL,
    assists integer NOT NULL
);


--
-- Name: stats_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.stats_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: stats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.stats_id_seq OWNED BY public.stats.id;


--
-- Name: stats id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stats ALTER COLUMN id SET DEFAULT nextval('public.stats_id_seq'::regclass);


--
-- Data for Name: stats; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.stats VALUES (1, 'Damian Lillard', 32, 11, 4);
INSERT INTO public.stats VALUES (2, 'Nikola Jokic', 41, 21, 14);
INSERT INTO public.stats VALUES (3, 'James Harden', 52, 4, 9);
INSERT INTO public.stats VALUES (4, 'Lebron James', 24, 12, 11);
INSERT INTO public.stats VALUES (5, 'Luka Doncic', 47, 9, 17);


--
-- Name: stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.stats_id_seq', 5, true);


--
-- PostgreSQL database dump complete
--

