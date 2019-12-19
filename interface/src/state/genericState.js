import axios from 'axios';

const host = process.env.REACT_APP_API_HOST;


// resource : type of data to fetch (p.e. 'cpu', 'datafiles', ...)
// unit     : type of data aggregation (p.e. 'daily', 'hourly', ...)
// quantity : amount of data to fetch (p.e. '10', '100', '3123123', ... data points)

export const getData = async (resource, unit, quantity) => {
  const url = createUrl(resource, unit, quantity);

  return await axios.get(url);
};

function createUrl(resource, unit, quantity) {
  let key = `${host}/${resource}`;

  if (unit !== undefined) {
    key += `?unit=${unit}&quantity=${quantity}`;
  }

  return key;
}
