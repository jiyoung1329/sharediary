import apiConfigs from 'configs/api';

export default async function signUpAPI(req, res) {
  try {
    const { username, password } = req.body;

    const url = apiConfigs.signUp;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    res.status(200).json({ data, success: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      data: err,
      success: false,
    });
  }
}
