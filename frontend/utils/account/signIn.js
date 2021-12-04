import saveSessionStorage from './sessionStorage';

const signIn = async ({ username, password }, onSuccess, onError) => {
  try {
    const url = '/api/signIn';
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    const result = saveSessionStorage(data.data);
    onSuccess(result);
  } catch (err) {
    onError(err);
  }
};

export default signIn;
