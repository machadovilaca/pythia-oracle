create or replace procedure update_values
is
begin
  insert into cpu_history
  select STAT_NAME, VALUE, CURRENT_TIMESTAMP
  from V$OSSTAT;

  insert into memory_history
  select "TOTAL (MB)", "USED (MB)", CURRENT_TIMESTAMP
  from memory_state;

  insert into datafiles_history
  select FILE_NAME, TABLESPACE_NAME, BYTES, MAXBYTES, STATUS, AUTOEXTENSIBLE, CURRENT_TIMESTAMP
  from DBA_DATA_FILES;

  insert into tablespaces_history
  select TABLESPACE_NAME, BLOCK_SIZE, INITIAL_EXTENT, NEXT_EXTENT, MIN_EXTENTS, MAX_EXTENTS, MIN_EXTLEN, STATUS, CONTENTS, CURRENT_TIMESTAMP
  from DBA_TABLESPACES;
end;

BEGIN
    DBMS_SCHEDULER.CREATE_JOB (
        job_name        => 'update_values_job',
        job_type        => 'STORED_PROCEDURE',
        job_action      => 'update_values',
        start_date      => CURRENT_TIMESTAMP,
        repeat_interval => 'FREQ=MINUTELY;',
        enabled         => true
    );
END;

-- exec DBMS_SCHEDULER.DROP_JOB('update_values_job');
