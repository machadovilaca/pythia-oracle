import axios from 'axios';

const host = process.env.REACT_APP_API_HOST;


// resource : type of data to fetch (p.e. 'cpu', 'datafiles', ...)
// unit     : type of data aggregation (p.e. 'daily', 'hourly', ...)
// quantity : amount of data to fetch (p.e. '10', '100', '3123123', ... data points)

export const getData = (resource, unit, quantity) => {
  const key = createKey();
  const value = localStorage.getItem(key);

  if (value === null) {
    updateData(resource, unit, quantity);
    return localStorage.getItem(key);
  }

  return value;
};

export const updateData = (resource, unit, quantity) => {
  const url = createUrl(resource, unit, quantity);

  axios.get(url)
    .then(response => {
      localStorage.setItem(
        createKey(resource, unit, quantity),
        JSON.stringify(response.data.rows)
      );
    })
    .catch(err => console.log(err));
};

function createKey(resource, unit, quantity) {
  let key = `pythia-oracle-${resource}`;

  if (unit !== undefined) {
    key += `-${unit}-${quantity}`;
  }

  return key;
}

function createUrl(resource, unit, quantity) {
  let key = `${host}/${resource}`;

  if (unit !== undefined) {
    key += `?unit=${unit}&quantity=${quantity}`;
  }

  return key;
}
