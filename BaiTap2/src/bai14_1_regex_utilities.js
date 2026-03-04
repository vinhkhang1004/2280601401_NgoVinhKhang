const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^(0|\+84)\d{9}$/.test(phone);
const validatePassword = (pass) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass);
const extractUrls = (text) => text.match(/https?:\/\/[^\s]+/g) || [];

module.exports = { validateEmail, validatePhone, validatePassword, extractUrls };