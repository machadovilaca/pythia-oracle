create or replace view datafiles_minutely as
    select
        FILE_NAME,
        avg(BYTES) as avg_bytes,
        avg(MAXBYTES) as avg_maxbytes,
        TO_CHAR(query_date, 'YYYY/MM/DD HH24:MI') as query_date
    from datafiles_history
    group by FILE_NAME, TO_CHAR(query_date, 'YYYY/MM/DD HH24:MI')
    order by query_date desc;

create or replace view datafiles_hourly as
    select
        FILE_NAME,
        avg(BYTES) as avg_bytes,
        avg(MAXBYTES) as avg_maxbytes,
        TO_CHAR(query_date, 'YYYY/MM/DD HH24') as query_date
    from datafiles_history
    group by FILE_NAME, TO_CHAR(query_date, 'YYYY/MM/DD HH24')
    order by query_date desc;

create or replace view datafiles_daily as
    select
        FILE_NAME,
        avg(BYTES) as avg_bytes,
        avg(MAXBYTES) as avg_maxbytes,
        TO_CHAR(query_date, 'YYYY/MM/DD') as query_date
    from datafiles_history
    group by FILE_NAME, TO_CHAR(query_date, 'YYYY/MM/DD')
    order by query_date desc;

create or replace view datafiles_monthly as
    select
        FILE_NAME,
        avg(BYTES) as avg_bytes,
        avg(MAXBYTES) as avg_maxbytes,
        TO_CHAR(query_date, 'YYYY/MM') as query_date
    from datafiles_history
    group by FILE_NAME, TO_CHAR(query_date, 'YYYY/MM')
    order by query_date desc;

create or replace view datafiles_yearly as
    select
        FILE_NAME,
        avg(BYTES) as avg_bytes,
        avg(MAXBYTES) as avg_maxbytes,
        TO_CHAR(query_date, 'YYYY') as query_date
    from datafiles_history
    group by FILE_NAME, TO_CHAR(query_date, 'YYYY')
    order by query_date desc;
