create or replace view tablespaces_minutely as
    select
        TABLESPACE_NAME,
        avg(BLOCK_SIZE) as avg_block_size,
        avg(INITIAL_EXTENT) as avg_initial_extent,
        avg(NEXT_EXTENT) as avg_next_extent,
        avg(MIN_EXTENTS) as avg_min_extents,
        avg(MAX_EXTENTS) as avg_max_extents,
        avg(MIN_EXTLEN) as avg_min_extlen,
        TO_CHAR(query_date, 'YYYY/MM/DD HH24:MI') as query_date
    from tablespaces_history
    group by TABLESPACE_NAME, TO_CHAR(query_date, 'YYYY/MM/DD HH24:MI')
    order by query_date desc;

create or replace view tablespaces_hourly as
    select
        TABLESPACE_NAME,
        avg(BLOCK_SIZE) as avg_block_size,
        avg(INITIAL_EXTENT) as avg_initial_extent,
        avg(NEXT_EXTENT) as avg_next_extent,
        avg(MIN_EXTENTS) as avg_min_extents,
        avg(MAX_EXTENTS) as avg_max_extents,
        avg(MIN_EXTLEN) as avg_min_extlen,
        TO_CHAR(query_date, 'YYYY/MM/DD HH24') as query_date
    from tablespaces_history
    group by TABLESPACE_NAME, TO_CHAR(query_date, 'YYYY/MM/DD HH24')
    order by query_date desc;

create or replace view tablespaces_daily as
    select
        TABLESPACE_NAME,
        avg(BLOCK_SIZE) as avg_block_size,
        avg(INITIAL_EXTENT) as avg_initial_extent,
        avg(NEXT_EXTENT) as avg_next_extent,
        avg(MIN_EXTENTS) as avg_min_extents,
        avg(MAX_EXTENTS) as avg_max_extents,
        avg(MIN_EXTLEN) as avg_min_extlen,
        TO_CHAR(query_date, 'YYYY/MM/DD') as query_date
    from tablespaces_history
    group by TABLESPACE_NAME, TO_CHAR(query_date, 'YYYY/MM/DD')
    order by query_date desc;

create or replace view tablespaces_monthly as
    select
        TABLESPACE_NAME,
        avg(BLOCK_SIZE) as avg_block_size,
        avg(INITIAL_EXTENT) as avg_initial_extent,
        avg(NEXT_EXTENT) as avg_next_extent,
        avg(MIN_EXTENTS) as avg_min_extents,
        avg(MAX_EXTENTS) as avg_max_extents,
        avg(MIN_EXTLEN) as avg_min_extlen,
        TO_CHAR(query_date, 'YYYY/MM') as query_date
    from tablespaces_history
    group by TABLESPACE_NAME, TO_CHAR(query_date, 'YYYY/MM')
    order by query_date desc;

create or replace view tablespaces_yearly as
    select
        TABLESPACE_NAME,
        avg(BLOCK_SIZE) as avg_block_size,
        avg(INITIAL_EXTENT) as avg_initial_extent,
        avg(NEXT_EXTENT) as avg_next_extent,
        avg(MIN_EXTENTS) as avg_min_extents,
        avg(MAX_EXTENTS) as avg_max_extents,
        avg(MIN_EXTLEN) as avg_min_extlen,
        TO_CHAR(query_date, 'YYYY') as query_date
    from tablespaces_history
    group by TABLESPACE_NAME, TO_CHAR(query_date, 'YYYY')
    order by query_date desc;
