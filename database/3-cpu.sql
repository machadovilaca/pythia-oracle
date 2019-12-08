create or replace view cpu_minutely as
    select
        STAT_NAME,
        avg(VALUE) as avg_value,
        TO_CHAR(query_date, 'YYYY/MM/DD HH24:MI') as query_date
    from cpu_history
    group by STAT_NAME, TO_CHAR(query_date, 'YYYY/MM/DD HH24:MI')
    order by query_date desc;

create or replace view cpu_hourly as
    select
        STAT_NAME,
        avg(VALUE) as avg_value,
        TO_CHAR(query_date, 'YYYY/MM/DD HH24') as query_date
    from cpu_history
    group by STAT_NAME, TO_CHAR(query_date, 'YYYY/MM/DD HH24')
    order by query_date desc;

create or replace view cpu_daily as
    select
        STAT_NAME,
        avg(VALUE) as avg_value,
        TO_CHAR(query_date, 'YYYY/MM/DD') as query_date
    from cpu_history
    group by STAT_NAME, TO_CHAR(query_date, 'YYYY/MM/DD')
    order by query_date desc;

create or replace view cpu_monthly as
    select
        STAT_NAME,
        avg(VALUE) as avg_value,
        TO_CHAR(query_date, 'YYYY/MM') as query_date
    from cpu_history
    group by STAT_NAME, TO_CHAR(query_date, 'YYYY/MM')
    order by query_date desc;

create or replace view cpu_yearly as
    select
        STAT_NAME,
        avg(VALUE) as avg_value,
        TO_CHAR(query_date, 'YYYY') as query_date
    from cpu_history
    group by STAT_NAME, TO_CHAR(query_date, 'YYYY')
    order by query_date desc;
