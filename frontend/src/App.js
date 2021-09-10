import React, { Component } from "react";

class App extends Component {
  state = {
    diarys: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/diary/");
      const diarys = await res.json();
      this.setState({
        diarys,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {"안녕하세요"}
        {/* {this.state.diarys.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.descriptions}</span>
          </div>
        ))} */}
      </div>
    );
  }
}

export default App;