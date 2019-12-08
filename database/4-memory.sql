create or replace view memory_state as
    select T as "TOTAL (MB)", U as "USED (MB)"
    from dual
    inner join (
        select sum(pga_max_mem)/1024/1024 "U", 'X' "DUMMY"
        from v$process
    ) "A" on dual.DUMMY = "A".DUMMY
    inner join (
        select  sum(value)/1024/1024 "T", 'X' "DUMMY"
        from v$sga
    ) "B" on dual.DUMMY = "B".DUMMY
    ;

create or replace view memory_minutely as
    select
        avg("TOTAL (MB)") as "AVERAGE TOTAL (MB)",
        avg("USED (MB)") as "AVERAGE USED (MB)",
        TO_CHAR(query_date, 'YYYY/MM/DD HH24:MI') as query_date
    from memory_history
    group by TO_CHAR(query_date, 'YYYY/MM/DD HH24:MI')
    order by query_date desc;

create or replace view memory_hourly as
    select
        avg("TOTAL (MB)") as "AVERAGE TOTAL (MB)",
        avg("USED (MB)") as "AVERAGE USED (MB)",
        TO_CHAR(query_date, 'YYYY/MM/DD HH24') as query_date
    from memory_history
    group by TO_CHAR(query_date, 'YYYY/MM/DD HH24')
    order by query_date desc;

create or replace view memory_daily as
    select
        avg("TOTAL (MB)") as "AVERAGE TOTAL (MB)",
        avg("USED (MB)") as "AVERAGE USED (MB)",
        TO_CHAR(query_date, 'YYYY/MM/DD') as query_date
    from memory_history
    group by TO_CHAR(query_date, 'YYYY/MM/DD')
    order by query_date desc;

create or replace view memory_monthly as
    select
        avg("TOTAL (MB)") as "AVERAGE TOTAL (MB)",
        avg("USED (MB)") as "AVERAGE USED (MB)",
        TO_CHAR(query_date, 'YYYY/MM') as query_date
    from memory_history
    group by TO_CHAR(query_date, 'YYYY/MM')
    order by query_date desc;

create or replace view memory_yearly as
    select
        avg("TOTAL (MB)") as "AVERAGE TOTAL (MB)",
        avg("USED (MB)") as "AVERAGE USED (MB)",
        TO_CHAR(query_date, 'YYYY') as query_date
    from memory_history
    group by TO_CHAR(query_date, 'YYYY')
    order by query_date desc;
