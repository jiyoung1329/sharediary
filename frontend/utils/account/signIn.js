import apiConfigs from 'configs/api';

const signIn = async ({ username, password }, onSuccess) => {
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
    onSuccess(data);
  } catch (err) {
    console.error(err);
  }
};

export default signIn;
