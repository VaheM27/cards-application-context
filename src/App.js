import React, { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Instructions from "./components/instructions/instructions";
import Footer from "./components/footer/footer";
import MyContext from "./Context";
import "./App.css";

const App = () => {
  const [block, setBlock] = useState([]);

  const createCard = () => {
    const num = Math.ceil(Math.random() * 1000);
    const id = Math.ceil(Math.random() * 10000);
    setBlock((prevState) => {
      return [
        ...prevState,
        {
          id: id,
          num: num,
        },
      ];
    });
  };
  const sortCard = () => {
    setBlock([
      ...block.sort((a, b) => {
        return a.num - b.num;
      }),
    ]);
  };

  const deleteCard = (id) => {
    setBlock([...block.filter((c) => c.id !== id)]);
  };

  return (
    <MyContext.Provider value={{ createCard, sortCard, deleteCard, block }}>
      <div className="App">
        <Header />
        <Main />
        <Instructions />
        <Footer />
      </div>
    </MyContext.Provider>
  );
};

export default App;
