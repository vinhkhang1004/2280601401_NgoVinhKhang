// Giả sử sử dụng HttpClient từ bài 9.1
const HttpClient = require('./bai9_1_fetch_wrapper');

const client = new HttpClient('https://jsonplaceholder.typicode.com');

const getAllUsers = () => client.get('/users');
const getUserById = (id) => client.get(`/users/${id}`);
const createUser = (data) => client.post('/users', data);
const updateUser = (id, data) => client.put(`/users/${id}`, data);
const deleteUser = (id) => client.delete(`/users/${id}`);
const getUserPosts = (userId) => client.get(`/users/${userId}/posts`);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserPosts
};