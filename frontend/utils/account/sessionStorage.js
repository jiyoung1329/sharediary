const saveSessionStorage = ({ username, password }) => {
  console.log(username, password);
  window.sessionStorage.setItem('userInfo', { username, password });
  return true;
};
export default saveSessionStorage;
