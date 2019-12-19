create tablespace pythia_oracle_tables datafile
'\u01\app\oracle\oradata\orcl12\orcl\pythia_oracle_01.dbf'
size 100M;

alter database default tablespace pythia_oracle_tables;

select PROPERTY_VALUE
from DATABASE_PROPERTIES
where PROPERTY_NAME = 'DEFAULT_PERMANENT_TABLESPACE';
