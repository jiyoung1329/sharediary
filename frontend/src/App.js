import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";


function App(){
  return(
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a href="/" className="navbar-brand">
          List
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link exact to={"/add/"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container m-10">
        {/* Add the routes */}
        <Switch>
          <Route exact path={["/", "/diary/"]} component={MenuList} />
          <Route exact path="/add/" component={AddMenu} />
          <Route path="/menu/:id/update/" component={UpdateMenu} />
        </Switch>


      </div>
    </div>
  )
}








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

export default App;
