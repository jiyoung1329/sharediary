const saveSessionStorage = ({ username, password }) => {
  window.sessionStorage.setItem('userInfo', { username, password });
  return true;
};
export default saveSessionStorage;
