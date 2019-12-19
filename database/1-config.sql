
CREATE USER monitor IDENTIFIED BY 123456
    default tablespace pythia_oracle_tables
    quota unlimited on pythia_oracle_tables;

GRANT CONNECT TO monitor;

GRANT CREATE SESSION TO monitor;

-- as sysdba
GRANT SELECT ON V_$OSSTAT TO monitor;
GRANT SELECT ON V_$SGA TO monitor;
GRANT SELECT ON V_$SESSION TO monitor;
GRANT SELECT ON V_$PROCESS TO monitor;
GRANT SELECT ON DBA_DATA_FILES TO monitor;
GRANT SELECT ON DBA_TABLESPACES TO monitor;
GRANT SELECT ON DBA_USERS TO monitor;
