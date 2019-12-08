-- CPU
create table cpu_history (
  stat_name varchar2(50),
  value number,
  query_date TIMESTAMP
);

-- Memory
create table memory_history (
  "TOTAL (MB)" number,
  "USED (MB)" number,
  query_date TIMESTAMP
);

-- Datafiles
create table datafiles_history (
  file_name varchar2(150),
  tablespace_name varchar2(150),
  bytes number,
  maxbytes number,
  status varchar2(50),
  autoextensible varchar2(3),
  query_date TIMESTAMP
);

-- Tablespaces
create table tablespaces_history (
  tablespace_name varchar2(50),
  block_size number,
  initial_extent number,
  next_extent number,
  min_extents number,
  max_extents number,
  min_extlen number,
  status varchar2(50),
  contents varchar2(50),
  query_date TIMESTAMP
);
