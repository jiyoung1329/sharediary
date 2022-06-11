import apiConfigs from 'configs/api';

const signIn = async ({ username, password }) => {
  try {
    if (!username || !password) return;

    const url = apiConfigs.signIn;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    };

    const res = await fetch(url, options);

    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default signIn;
