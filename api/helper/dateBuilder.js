module.exports = dates => {
  let s = '(';

  for(const d of dates.rows) {
    s += `'${d.date}',`;
  }

  if(s.includes(',')) {
    s = s.substring(0, s.length - 1);
  }

  s += ')';

  return s;
};
