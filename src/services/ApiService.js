import axios from 'axios';

const apiClient = axios.create({
  baseURL: `http://127.0.0.1:8081/api`,
  withCredentials: false, // Default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getSearch (string) {
    return apiClient.get(`/search?q=${string}`);
  },
  login (email, password) {
    return apiClient.post('/login_check', {
      username: email,
      password: password
    });
  },
  register (fName, lName, birthday, email, password, phone, role) {
    return apiClient.post('/register', {
      fname: fName,
      lname: lName,
      birthday: birthday,
      email: email,
      password: password,
      phone: phone,
      role: role

    });
  }
};
