const signUp = async ({ username, password }, onSuccess, onError) => {
  try {
    const url = '/api/signUp';
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    onSuccess(data.data);
  } catch (err) {
    onError(err);
  }
};

export default signUp;
