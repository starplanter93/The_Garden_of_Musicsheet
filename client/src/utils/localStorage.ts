interface User {
  email: string;
  nickName: string;
  avatar: string;
  cash: string;
}

export const getLocalStorage = () => {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};

export const addLocalStorage = (value: User) => {
  localStorage.setItem('user', JSON.stringify(value));
};

export const removeLocalStroage = () => {
  localStorage.removeItem('user');
};
