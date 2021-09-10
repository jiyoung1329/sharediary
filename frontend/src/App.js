import React, { useEffect, useState } from "react";

const App = () => {
  const [diary, setDiary] = useState();

  useEffect(async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/diary/");
      const diary = await res.json();
      console.log(diary);
      setDiary(diary);
    } catch (error) {
      return console.error(error);
    }
  }, []);

  return (
    <div>
      {"안녕하세요"}
      {diary}
      {/* {diary.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <span>{item.descriptions}</span>
        </div>
      ))} */}
    </div>
  );
};

export default App;
