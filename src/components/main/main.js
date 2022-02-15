import { useContext } from "react";
import MyContext from "../../Context";
import "../main/main.css";

const Main = () => {
  const { deleteCard, block } = useContext(MyContext);

  return (
    <div className="main">
      <div className="container">
        {block.map((item, index) => {
          return (
            <div className="card" key={index}>
              <p>{item.num}</p>
              <button
                className="btn"
                onClick={() => {
                  deleteCard(item.id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Main;
