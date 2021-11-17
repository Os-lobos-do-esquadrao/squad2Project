import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

const getData = async () => {
  return api.get('users').then(function (res) {
    let data = res.data;
    return data;
  });
};

const addData = async (data) => {
  return api.post('users', data).then(function (res) {
    let data = res.data;
    return data;
  });
};

export default {
  getData,
  addData,
};
