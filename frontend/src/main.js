import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import Nav from "components/nav/index.js";
import Loading from "components/loading/page.js";

const Main = () => {
  return (
    <div className="container m-10">
      {/* Add the routes */}
      <Switch>
        <Route exact path={["/", "/diary"]} component={MenuList} />
        <Route exact path="/add/" component={AddMenu} />
        <Route path="/menu/:id/update/" component={UpdateMenu} />
      </Switch>
    </div>
  );
};

// const App = () => {
//   const [diary, setDiary] = useState();

//   useEffect(async () => {
//     try {
//       const res = await fetch("http://127.0.0.1:8000/diary/");
//       const diary = await res.json();
//       console.log(diary);
//       setDiary(diary);
//     } catch (error) {
//       return console.error(error);
//     }
//   }, []);

//   return (
//     <div>
//       {"안녕하세요"}
//       {diary}
//       {/* {diary.map((item) => (
//         <div key={item.id}>
//           <h1>{item.title}</h1>
//           <span>{item.descriptions}</span>
//         </div>
//       ))} */}
//     </div>
//   );
// };

export default Main;